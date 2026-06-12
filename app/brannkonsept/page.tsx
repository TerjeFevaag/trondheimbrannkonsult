import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Brannkonsept Trondheim | Trondheim Brannkonsult',
  description: 'Vi utarbeider brannkonsept for byggesaker i Trondheim og Trøndelag. Sentralt godkjent foretak. Fast pris.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/brannkonsept' },
}

const faqItems = [
  {
    question: 'Hva er et brannkonsept?',
    answer: 'Et brannkonsept er en helhetlig plan for brannsikkerheten i et bygg. Det beskriver hvilke branntekniske tiltak som er valgt og dokumenterer at bygget oppfyller sikkerhetskravene i byggteknisk forskrift (TEK17).',
  },
  {
    question: 'Når trenger jeg et brannkonsept?',
    answer: 'Det kreves brannkonsept ved de fleste byggesaker som er søknadspliktige — inkludert nybygg, tilbygg, bruksendring og rehabilitering. Ta kontakt for å avklare om ditt prosjekt er søknadspliktig.',
  },
  {
    question: 'Hva koster et brannkonsept i Trondheim?',
    answer: 'Vi tilbyr alltid fastpris. Et brannkonsept for et enebolig-tilbygg i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva. Kontakt oss for et konkret tilbud.',
  },
  {
    question: 'Leverer dere til Trondheim kommune?',
    answer: 'Ja, vi har god erfaring med kravene i Trondheim kommune og leverer dokumentasjon tilpasset kommunens byggesaksavdeling. Vi tar også oppdrag i hele Trøndelag.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Brannkonsept</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Kommunen krever et brannkonsept ved de fleste søknadspliktige byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten og oppfyller myndighetskravene.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-5">Hva inkluderer brannkonseptet?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Et brannkonsept er et strategidokument for brannsikkerhet i byggeprosjektet. Det tar stilling til bærende prinsipper for brannsikkerheten: risikoklasse, brannklasse, bæreevne ved brann, branncelleinndeling, røykventilasjon, rømning og slokkesystem.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Vi utarbeider brannkonseptet i tett samarbeid med ansvarlig søker og prosjekterende, slik at alle valg er dokumentert og godkjent før byggesøknaden leveres.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-6">Dette er inkludert</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Vurdering av risikoklasse og brannklasse',
                  'Branncelleinndeling og seksjonering',
                  'Rømningsveier og nødutganger',
                  'Krav til bærende konstruksjoner',
                  'Røykventilasjon og overtrykksventilasjon',
                  'Slokkesystem og automatiske anlegg',
                  'Dokumentasjon til byggesøknaden',
                  'Støtte mot kommunens saksbehandler',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-brand-orange mt-0.5 shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-5">Slik jobber vi</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Gratis vurdering', desc: 'Vi vurderer prosjektet ditt og gir deg en fastpris uten forpliktelser.' },
                  { step: '02', title: 'Prosjektering', desc: 'Vi utarbeider brannkonseptet basert på tegninger og prosjektbeskrivelse.' },
                  { step: '03', title: 'Leveranse', desc: 'Ferdig brannkonsept klart til byggesøknad, vanligvis innen 5–10 virkedager.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-sm">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-brand-black text-lg mb-1">{item.title}</h3>
                      <p className="text-brand-darkgray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ dark */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <h2 className="text-brand-white text-2xl lg:text-3xl font-black">Vanlige spørsmål</h2>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} dark={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-brand-white text-3xl font-black mb-4">Trenger du brannkonsept?</h2>
            <p className="text-brand-white/60 text-lg mb-8">Send oss en forespørsel — vi svarer innen 24 timer med et uforpliktende tilbud.</p>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-lg">
              Kontakt oss
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
