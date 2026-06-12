import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Kontakt oss | Trondheim Brannkonsult',
  description: 'Kontakt Trondheim Brannkonsult for brannprosjektering og brannkonsept. Vi svarer innen 24 timer. Gratis og uforpliktende tilbud.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/kontakt-oss' },
}

export default function KontaktOssPage() {
  return (
    <>
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
                      <a href="tel:+4700000000" className="text-brand-white font-bold hover:text-brand-orange transition-colors">
                        +47 000 00 000
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
                      <p className="text-brand-white/50 text-sm mb-1">Adresse</p>
                      <p className="text-brand-white font-bold">Gateadresse</p>
                      <p className="text-brand-white/60">Trondheim</p>
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
