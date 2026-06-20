import { NextRequest, NextResponse } from 'next/server'
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend'

export async function POST(req: NextRequest) {
  const { navn, epost, telefon, prosjekttype, melding } = await req.json()

  if (!navn || !epost || !melding) {
    return NextResponse.json({ error: 'Mangler påkrevde felt' }, { status: 400 })
  }

  const mailerSend = new MailerSend({ apiKey: process.env.MAILERSEND_API_KEY! })

  const prosjekttypeLabel: Record<string, string> = {
    brannkonsept: 'Brannkonsept',
    brannprosjektering: 'Brannprosjektering',
    branninspeksjon: 'Branninspeksjon',
    'uavhengig-kontroll': 'Uavhengig kontroll',
    annet: 'Annet',
  }

  const emailParams = new EmailParams()
    .setFrom(new Sender('noreply@trondheimbrannkonsult.no', 'Trondheim Brannkonsult'))
    .setTo([new Recipient('post@trondheimbrannkonsult.no', 'Trondheim Brannkonsult')])
    .setReplyTo(new Sender(epost, navn))
    .setSubject(`Ny henvendelse fra ${navn}${prosjekttype ? ` – ${prosjekttypeLabel[prosjekttype] ?? prosjekttype}` : ''}`)
    .setText(
      `Navn: ${navn}\nE-post: ${epost}\nTelefon: ${telefon || '–'}\nProsjekttype: ${prosjekttypeLabel[prosjekttype] ?? '–'}\n\nMelding:\n${melding}`
    )
    .setHtml(
      `<p><strong>Navn:</strong> ${navn}</p>
<p><strong>E-post:</strong> <a href="mailto:${epost}">${epost}</a></p>
<p><strong>Telefon:</strong> ${telefon || '–'}</p>
<p><strong>Prosjekttype:</strong> ${prosjekttypeLabel[prosjekttype] ?? '–'}</p>
<hr>
<p><strong>Melding:</strong></p>
<p>${melding.replace(/\n/g, '<br>')}</p>`
    )

  await mailerSend.email.send(emailParams)

  return NextResponse.json({ ok: true })
}
