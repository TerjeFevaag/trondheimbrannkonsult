import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Uavhengig kontroll brann Trondheim – SAK10 | Trondheim Brannkonsult',
  description: 'Uavhengig kontroll (UK) av brannkonsept i tiltaksklasse 2 og høyere. Trondheim og Trøndelag. Sentralt godkjent foretak. Vi er genuint nøytrale — ingen produktsalg.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/uavhengig-kontroll' },
  openGraph: {
    title: 'Uavhengig kontroll brann Trondheim – SAK10 | Trondheim Brannkonsult',
    description: 'Uavhengig kontroll av brannkonsept for byggeprosjekter i Trondheim og Trøndelag. Genuint nøytral, ingen produktsalg.',
    url: 'https://www.trondheimbrannkonsult.no/uavhengig-kontroll',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Uavhengig kontroll brann Trondheim – Trondheim Brannkonsult' }],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.trondheimbrannkonsult.no/uavhengig-kontroll/#service',
      name: 'Uavhengig kontroll brann Trondheim',
      description: 'Uavhengig kontroll (UK) av brannkonsept for byggeprosjekter i tiltaksklasse 2 eller høyere, i henhold til SAK10. Trondheim og Trøndelag.',
      provider: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
      areaServed: [{ '@type': 'City', name: 'Trondheim' }, { '@type': 'AdministrativeArea', name: 'Trøndelag' }],
      url: 'https://www.trondheimbrannkonsult.no/uavhengig-kontroll',
      serviceType: 'Uavhengig kontroll brann',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Hva er uavhengig kontroll av brann?', acceptedAnswer: { '@type': 'Answer', text: 'Uavhengig kontroll (UK) av brann er en faglig gjennomgang av brannkonseptet utført av et foretak som ikke selv har prosjektert brannsikkerheten. Kontrollen sikrer at løsningene er i tråd med TEK17 og at dokumentasjonen holder nødvendig kvalitet.' } },
        { '@type': 'Question', name: 'Når er det krav om uavhengig kontroll?', acceptedAnswer: { '@type': 'Answer', text: 'Krav om UK av brann gjelder når brannprosjekteringen er i tiltaksklasse 2 eller høyere, i henhold til SAK10 (byggesaksforskriften). Dette gjelder de fleste leilighetsbygg, næringsbygg og andre bygg over 2 etasjer.' } },
        { '@type': 'Question', name: 'Hva koster uavhengig kontroll av brann?', acceptedAnswer: { '@type': 'Answer', text: 'Prisen avhenger av byggets størrelse og tiltaksklasse. Kontakt oss for et konkret tilbud — vi gir alltid fastpris.' } },
        { '@type': 'Question', name: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, det er nettopp det som er poenget med uavhengig kontroll. Vi tar oppdrag som kontrollerende for brannkonsept vi ikke har utarbeidet selv.' } },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'Hva er uavhengig kontroll av brann?',
    answer: 'Uavhengig kontroll (UK) av brann er en faglig gjennomgang av brannkonseptet utført av et foretak som ikke selv har prosjektert brannsikkerheten. Kontrollen sikrer at løsningene er i tråd med TEK17 og at dokumentasjonen holder nødvendig kvalitet.',
  },
  {
    question: 'Når er det krav om uavhengig kontroll?',
    answer: 'Krav om UK av brann gjelder når brannprosjekteringen er i tiltaksklasse 2 eller høyere, i henhold til SAK10 (byggesaksforskriften). Dette gjelder de fleste leilighetsbygg, næringsbygg og andre bygg over 2 etasjer.',
  },
  {
    question: 'Hva koster uavhengig kontroll av brann?',
    answer: 'Prisen avhenger av byggets størrelse og tiltaksklasse. Kontakt oss for et konkret tilbud — vi gir alltid fastpris.',
  },
  {
    question: 'Kan dere ta UK selv om dere ikke har prosjektert brannkonseptet?',
    answer: 'Ja, det er nettopp det som er poenget med uavhengig kontroll. Vi tar oppdrag som kontrollerende for brannkonsept vi ikke har utarbeidet selv.',
  },
]

export default function UavhengigKontrollPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Uavhengig kontroll</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Vi gjennomfører kontrollen og utsteder erklæring om ansvarsrett i Trondheim og Trøndelag.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-5">Hva er uavhengig kontroll av brann?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Uavhengig kontroll (UK) av brann er et krav i byggesaksforskriften (SAK10) for byggeprosjekter der brannprosjekteringen er i tiltaksklasse 2 eller høyere. Kontrollen skal utføres av et foretak som er uavhengig av det foretaket som har utarbeidet brannkonseptet.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Formålet er å sikre at brannkonseptet er i samsvar med gjeldende forskrifter, og at prosjekteringen holder tilstrekkelig faglig kvalitet. Kontrollen gir økt trygghet for byggherre, ansvarlig søker og kommunen.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-6">Hva kontrolleres?</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Risikoklasse og brannklasse korrekt vurdert',
                  'Branncelleinndeling i henhold til TEK17',
                  'Rømningsveier og nødutganger',
                  'Branntekniske løsninger dokumentert',
                  'Slokkesystem vurdert',
                  'Branntegninger konsistente med brannkonsept',
                  'Avvik fra preaksepterte løsninger begrunnet',
                  'Ansvarsretterklæringer korrekte',
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
              <h2 className="text-brand-black text-2xl font-black mb-5">Nøytral og uavhengig</h2>
              <p className="text-brand-darkgray leading-relaxed mb-4">
                Vi selger ingen produkter og har ingen tilknytning til leverandører av branntekniske anlegg. Dette gjør oss til en genuint nøytral part — du kan stole på at vår kontroll er faglig uavhengig.
              </p>
              <p className="text-brand-darkgray leading-relaxed">
                Kontrollen avsluttes med en skriftlig kontrollrapport og, ved godkjent kontroll, en erklæring om ansvarsrett som skal vedlegges byggesøknaden.
              </p>
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
            <h2 className="text-brand-white text-3xl font-black mb-4">Trenger du uavhengig kontroll i Trondheim?</h2>
            <p className="text-brand-white/60 text-lg mb-8">Kontakt oss for et uforpliktende tilbud. Vi svarer innen 24 timer.</p>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-lg">
              Kontakt oss
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
