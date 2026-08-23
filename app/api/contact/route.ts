import { NextRequest, NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

interface Vedlegg {
  name: string
  url: string
  size: number
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

const BLOB_HOST = /^https:\/\/[a-z0-9]+\.public\.blob\.vercel-storage\.com\//

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export async function POST(req: NextRequest) {
  const { navn, epost, telefon, prosjekttype, melding, vedlegg } = await req.json()

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  if (navn.length > 200 || epost.length > 200 || melding.length > 10000) {
    return NextResponse.json({ error: 'Felt er for langt' }, { status: 400 })
  }

  const attachments: Vedlegg[] = (Array.isArray(vedlegg) ? vedlegg : []).slice(0, 4)
  for (const v of attachments) {
    if (!BLOB_HOST.test(v.url)) {
      return NextResponse.json({ error: 'Ugyldig vedlegg-URL' }, { status: 400 })
    }
  }

  const mailerSend = new MailerSend({ apiKey: process.env.MAILERSEND_API_TOKEN! })

  const prosjekttypeLabel: Record<string, string> = {
    brannkonsept: 'Brannkonsept',
    brannprosjektering: 'Brannprosjektering',
    branninspeksjon: 'Branninspeksjon',
    'uavhengig-kontroll': 'Uavhengig kontroll',
    annet: 'Annet',
  }

  const eNavn = escapeHtml(navn)
  const eEpost = escapeHtml(epost)
  const eMelding = escapeHtml(melding)

  const vedleggHtml = attachments.length > 0
    ? `<hr>
<p><strong>Vedlegg (${attachments.length}):</strong></p>
<ul>
${attachments.map((v) => `  <li><a href="${escapeHtml(v.url)}">${escapeHtml(v.name)}</a> (${formatSize(v.size)})</li>`).join('\n')}
</ul>`
    : ''

  const vedleggText = attachments.length > 0
    ? `\n\nVedlegg (${attachments.length}):\n${attachments.map((v) => `- ${v.name} (${formatSize(v.size)}): ${v.url}`).join('\n')}`
    : ''

  const emailParams = new EmailParams()
    .setFrom(new Sender('noreply@trondheimbrannkonsult.no', 'Trondheim Brannkonsult'))
    .setTo([new Recipient('post@trondheimbrannkonsult.no', 'Trondheim Brannkonsult')])
    .setReplyTo(new Sender(epost, navn))
    .setSubject(`Ny henvendelse fra ${navn.slice(0, 80)}${prosjekttype ? ` – ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : ''}`)
    .setText(
      `Navn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || '–'}\nProsjekttype: ${prosjekttypeLabel[prosjekttype] ?? '–'}\n\nMelding:\n${melding}${vedleggText}`
    )
    .setHtml(
      `<p><strong>Navn:</strong> ${eNavn}</p>
<p><strong>E-post:</strong> <a href="mailto:${eEpost}">${eEpost}</a></p>
<p><strong>Telefon:</strong> ${escapeHtml(telefon || '–')}</p>
<p><strong>Prosjekttype:</strong> ${escapeHtml(prosjekttypeLabel[prosjekttype] ?? '–')}</p>
<hr>
<p><strong>Melding:</strong></p>
<p>${eMelding.replace(/\n/g, '<br>')}</p>${vedleggHtml}`
    )

  try {
    await mailerSend.email.send(emailParams)
  } catch (error) {
    console.error('MailerSend error:', error)
    return NextResponse.json({ error: 'Kunne ikke sende e-post' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
