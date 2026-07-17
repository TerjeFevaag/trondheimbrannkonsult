import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Brannkonsept Trondheim – Fra 15 000 kr, levering 5–10 dager | Brannkonsult AS',
  description: 'Trenger du brannkonsept i Trondheim? Vi leverer til tilbygg, nybygg, bruksendring og næringsbygg i hele Trøndelag. DiBK-godkjent. Fastpris. Gratis tilbud innen 24 timer.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/brannkonsept' },
  openGraph: {
    title: 'Brannkonsept Trondheim – Fra 15 000 kr, levering 5–10 dager | Brannkonsult AS',
    description: 'Brannkonsept for tilbygg, nybygg og bruksendring i Trondheim og Trøndelag. Sentralt godkjent (DiBK). Fastpris fra 15 000 kr ekskl. mva. Svar innen 24 timer.',
    url: 'https://www.trondheimbrannkonsult.no/brannkonsept',
    siteName: 'Brannkonsult AS',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Brannkonsept Trondheim – Brannkonsult AS' }],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.trondheimbrannkonsult.no/brannkonsept/#service',
      name: 'Brannkonsept Trondheim',
      description: 'Helhetlig brannkonsept for byggesaker i Trondheim og Trøndelag. Inkluderer risikoklasse, branncelleinndeling, rømningsveier og dokumentasjon til byggesøknaden.',
      provider: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
      areaServed: [{ '@type': 'City', name: 'Trondheim' }, { '@type': 'AdministrativeArea', name: 'Trøndelag' }],
      url: 'https://www.trondheimbrannkonsult.no/brannkonsept',
      serviceType: 'Brannkonsept',
      offers: { '@type': 'Offer', priceSpecification: { '@type': 'PriceSpecification', price: '15000', priceCurrency: 'NOK', description: 'Fra kr 15 000 ekskl. mva. for tiltaksklasse 2' } },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.trondheimbrannkonsult.no' },
        { '@type': 'ListItem', position: 2, name: 'Brannkonsept', item: 'https://www.trondheimbrannkonsult.no/brannkonsept' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Hva er et brannkonsept?', acceptedAnswer: { '@type': 'Answer', text: 'Et brannkonsept er en helhetlig plan for brannsikkerheten i et bygg. Det beskriver hvilke branntekniske tiltak som er valgt og dokumenterer at bygget oppfyller sikkerhetskravene i byggteknisk forskrift (TEK17). For utfyllende informasjon om hva et brannkonsept skal inneholde etter TEK17, se brannkonsult.no.' } },
        { '@type': 'Question', name: 'Når trenger jeg brannkonsept — og når holder et brannteknisk notat?', acceptedAnswer: { '@type': 'Answer', text: 'Et brannkonsept kreves ved de fleste søknadspliktige tiltak: nybygg, tilbygg, bruksendring og rehabilitering av eldre bygg. Et brannteknisk notat brukes for mindre, avgrensede tiltak. Vi avklarer hva som passer ditt prosjekt.' } },
        { '@type': 'Question', name: 'Hva koster et brannkonsept?', acceptedAnswer: { '@type': 'Answer', text: 'Et brannkonsept for et tilbygg eller en bruksendring i tiltaksklasse 2 starter fra 15 000 kr ekskl. mva., inkludert branntekniske tegninger. Vi gir alltid fastpris — aldri timepris.' } },
        { '@type': 'Question', name: 'Leverer dere til Trondheim og Trøndelag?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Vi jobber jevnlig med prosjekter i Midtbyen, Heimdal, Lade, Ranheim, Byåsen og Lerkendal, og tar oppdrag i hele Trøndelag — fra Stjørdal i sør til Steinkjer og Namsos i nord.' } },
      ],
    },
  ],
}

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Hva er et brannkonsept?',
    answer: <>Et brannkonsept er en helhetlig plan for brannsikkerheten i et bygg. Det beskriver hvilke branntekniske tiltak som er valgt og dokumenterer at bygget oppfyller sikkerhetskravene i byggteknisk forskrift (TEK17). For en utfyllende faglig gjennomgang av <a href="https://www.brannkonsult.no/brannkonsept/" className="text-brand-orange hover:underline">hva et brannkonsept skal inneholde etter TEK17</a> anbefaler vi brannkonsult.no.</>,
  },
  {
    question: 'Når trenger jeg brannkonsept — og når holder et brannteknisk notat?',
    answer: 'Et brannkonsept kreves ved de fleste søknadspliktige tiltak: nybygg, tilbygg, bruksendring og rehabilitering av eldre bygg. Et brannteknisk notat brukes for mindre, avgrensede tiltak der det ikke er behov for en helhetlig brannsikkerhetsstrategi. Vi avklarer hva som passer ditt prosjekt.',
  },
  {
    question: 'Hva koster et brannkonsept?',
    answer: 'Et brannkonsept for et tilbygg eller en bruksendring i tiltaksklasse 2 starter fra 15 000 kr ekskl. mva., inkludert branntekniske tegninger. Vi gir alltid fastpris — aldri timepris.',
  },
  {
    question: 'Leverer dere til Trondheim og Trøndelag?',
    answer: 'Ja. Vi jobber jevnlig med prosjekter i Midtbyen, Heimdal, Lade, Ranheim, Byåsen og Lerkendal, og tar oppdrag i hele Trøndelag — fra Stjørdal i sør til Steinkjer og Namsos i nord.',
  },
]

export default function BrannkonseptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Brannkonsept</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Kommunen krever et brannkonsept ved de fleste søknadspliktige byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten og oppfyller myndighetskravene.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={56} height={56} className="object-contain" />
            <span className="text-brand-white/50 text-sm">Sentralt godkjent foretak — DiBK tiltaksklasse 1 og 2</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-5">Hva er egentlig et brannkonsept?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Brannkonseptet er det overordnede dokumentet som fastlegger hvilken strategi som er valgt for brannsikkerheten i bygget. Det er ikke en liste over sprinkleranlegg og brannalarmer — det er en begrunnet plan som viser at bygget som helhet er prosjektert i tråd med TEK17.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              For prosjekter i Trondheim kommune er brannkonseptet typisk vedlegg til rammesøknaden. Vi koordinerer med ansvarlig søker slik at dokumentasjonen er klar til innlevering og stemmer overens med de øvrige tegningene.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-6">Innholdet i et brannkonsept</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Risikoklasse (RKL) og brannklasse (BKL)',
                  'Branncelleinndeling og seksjonering',
                  'Rømningsveier og nødutganger',
                  'Krav til bærende konstruksjoner ved brann',
                  'Røykventilasjon og overtrykksventilasjon',
                  'Slokkesystem og automatiske anlegg',
                  'Branntekniske tegninger',
                  'Ansvarsrett for brannprosjektering',
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
              <h2 className="text-brand-black text-2xl font-black mb-5">Fra forespørsel til ferdig dokument</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Send inn tegninger', desc: 'Vi trenger plantegninger, adresse og en beskrivelse av prosjektet. Fastpristilbud innen 24 timer.' },
                  { step: '02', title: 'Vi prosjekterer', desc: 'Basert på tegningene utarbeider vi brannkonseptet med alle nødvendige vurderinger og branntekniske tegninger.' },
                  { step: '03', title: 'Klar til søknad', desc: 'Du mottar ferdig brannkonsept og signert ansvarsrett, vanligvis innen 5–10 virkedager.' },
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
