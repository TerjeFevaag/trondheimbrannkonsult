import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt oss – Gratis tilbud på brannprosjektering | Trondheim Brannkonsult',
  description: 'Be om gratis og uforpliktende tilbud på brannprosjektering i Trondheim. Vi svarer innen 24 timer med fastpris. Sentralt godkjent foretak.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/kontakt-oss' },
  openGraph: {
    title: 'Kontakt oss – Gratis tilbud på brannprosjektering | Trondheim Brannkonsult',
    description: 'Be om gratis tilbud på brannprosjektering i Trondheim. Fastpris. Svar innen 24 timer.',
    url: 'https://www.trondheimbrannkonsult.no/kontakt-oss',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Kontakt Trondheim Brannkonsult' }],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.trondheimbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Kontakt oss', item: 'https://www.trondheimbrannkonsult.no/kontakt-oss' },
  ],
}

export default function KontaktOssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Kontakt</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Kontakt oss</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Ta kontakt for et gratis og uforpliktende tilbud. Vi svarer innen 24 timer — gjerne samme dag.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — 3/5 */}
            <ScrollReveal className="lg:col-span-3">
              <h2 className="text-brand-black text-2xl font-black mb-8">Send oss en forespørsel</h2>
              <ContactForm />
            </ScrollReveal>

            {/* Contact info — 2/5 */}
            <ScrollReveal delay={100} className="lg:col-span-2">
              <div className="bg-brand-dark rounded-[30px] p-8 text-brand-white h-full">
                <h2 className="text-brand-white text-2xl font-black mb-8">Kontaktinformasjon</h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Telefon</p>
                      <a href="tel:+4745601942" className="text-brand-white font-bold hover:text-brand-orange transition-colors">
                        +47 456 01 942
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">E-post</p>
                      <a href="mailto:post@trondheimbrannkonsult.no" className="text-brand-white font-bold hover:text-brand-orange transition-colors break-all">
                        post@trondheimbrannkonsult.no
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Postadresse</p>
                      <p className="text-brand-white font-bold">Brannkonsult AS</p>
                      <p className="text-brand-white/60">Haakon VII's gate 6</p>
                      <p className="text-brand-white/60">0161 Oslo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-brand-white/50 text-sm mb-1">Åpningstider</p>
                      <p className="text-brand-white font-bold">Man–Fre</p>
                      <p className="text-brand-white/60">08:00–16:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-brand-white/10">
                  <p className="text-brand-white/60 text-sm leading-relaxed">
                    Vi tar oppdrag i Trondheim, Trøndelag og hele landet. Send oss tegninger og prosjektbeskrivelse — vi svarer med fastpris innen 24 timer.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
