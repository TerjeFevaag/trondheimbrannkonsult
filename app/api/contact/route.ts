import { NextRequest, NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

interface Vedlegg {
  name: string
  url: string
  size: number
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export async function POST(req: NextRequest) {
  const { navn, epost, telefon, prosjekttype, melding, vedlegg } = await req.json()

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  const mailerSend = new MailerSend({ apiKey: process.env.MAILERSEND_API_TOKEN! })

  const prosjekttypeLabel: Record<string, string> = {
    brannkonsept: 'Brannkonsept',
    brannprosjektering: 'Brannprosjektering',
    branninspeksjon: 'Branninspeksjon',
    'uavhengig-kontroll': 'Uavhengig kontroll',
    annet: 'Annet',
  }

  const attachments: Vedlegg[] = Array.isArray(vedlegg) ? vedlegg : []

  const vedleggHtml = attachments.length > 0
    ? `<hr>
<p><strong>Vedlegg (${attachments.length}):</strong></p>
<ul>
${attachments.map((v) => `  <li><a href="${v.url}">${v.name}</a> (${formatSize(v.size)})</li>`).join('\n')}
</ul>`
    : ''

  const vedleggText = attachments.length > 0
    ? `\n\nVedlegg (${attachments.length}):\n${attachments.map((v) => `- ${v.name} (${formatSize(v.size)}): ${v.url}`).join('\n')}`
    : ''

  const emailParams = new EmailParams()
    .setFrom(new Sender('noreply@trondheimbrannkonsult.no', 'Trondheim Brannkonsult'))
    .setTo([new Recipient('post@trondheimbrannkonsult.no', 'Trondheim Brannkonsult')])
    .setReplyTo(new Sender(epost, navn))
    .setSubject(`Ny henvendelse fra ${navn}${prosjekttype ? ` – ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : ''}`)
    .setText(
      `Navn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || '–'}\nProsjekttype: ${prosjekttypeLabel[prosjekttype] ?? '–'}\n\nMelding:\n${melding}${vedleggText}`
    )
    .setHtml(
      `<p><strong>Navn:</strong> ${navn}</p>
<p><strong>E-post:</strong> <a href="mailto:${epost}">${epost}</a></p>
<p><strong>Telefon:</strong> ${telefon || '–'}</p>
<p><strong>Prosjekttype:</strong> ${prosjekttypeLabel[prosjekttype] ?? '–'}</p>
<hr>
<p><strong>Melding:</strong></p>
<p>${melding.replace(/\n/g, '<br>')}</p>${vedleggHtml}`
    )

  await mailerSend.email.send(emailParams)

  return NextResponse.json({ ok: true })
}
