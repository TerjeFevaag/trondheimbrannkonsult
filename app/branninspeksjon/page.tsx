import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Branninspeksjon Trondheim – Tilstandsrapport | Trondheim Brannkonsult',
  description: 'Fått pålegg etter branntilsyn, eller vil sjekke brannsikkerheten? Vi utfører branninspeksjon i Trondheim og Trøndelag og utarbeider tilstandsrapport. Fastpris.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/branninspeksjon' },
  openGraph: {
    title: 'Branninspeksjon Trondheim – Tilstandsrapport | Trondheim Brannkonsult',
    description: 'Fått pålegg etter branntilsyn? Vi inspiserer bygget og utarbeider tilstandsrapport og handlingsplan. Fastpris.',
    url: 'https://www.trondheimbrannkonsult.no/branninspeksjon',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Branninspeksjon Trondheim – Trondheim Brannkonsult' }],
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.trondheimbrannkonsult.no/branninspeksjon/#service',
      name: 'Branninspeksjon Trondheim',
      description: 'Grundig gjennomgang av byggets brannsikkerhet med tilstandsrapport og handlingsplan. For privatpersoner, borettslag og næringseiendom i Trondheim og Trøndelag.',
      provider: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
      areaServed: [{ '@type': 'City', name: 'Trondheim' }, { '@type': 'AdministrativeArea', name: 'Trøndelag' }],
      url: 'https://www.trondheimbrannkonsult.no/branninspeksjon',
      serviceType: 'Branninspeksjon',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.trondheimbrannkonsult.no' },
        { '@type': 'ListItem', position: 2, name: 'Branninspeksjon', item: 'https://www.trondheimbrannkonsult.no/branninspeksjon' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Hva er forskjellen på branntilsyn og branninspeksjon?', acceptedAnswer: { '@type': 'Answer', text: 'Branntilsyn utføres av kommunens brann- og redningsetat og er et lovpålagt tilsyn. Branninspeksjon er en frivillig gjennomgang utført av en privat brannrådgiver — som oss — der vi kartlegger hele byggets brannsikkerhet og gir deg en helhetlig tilstandsrapport.' } },
        { '@type': 'Question', name: 'Hvem er ansvarlig for brannsikkerheten i et sameie?', acceptedAnswer: { '@type': 'Answer', text: 'Eier av bygget — typisk et borettslag eller sameie — er ansvarlig for at brannsikkerheten er i orden. Styret har plikt til å følge opp pålegg fra brannvesenet.' } },
        { '@type': 'Question', name: 'Hva skjer hvis bygget ikke oppfyller kravene?', acceptedAnswer: { '@type': 'Answer', text: 'Brannvesenet kan gi pålegg om utbedring med frist. I alvorlige tilfeller kan bygget stenges. Vi hjelper deg med å prioritere tiltakene og finne kostnadseffektive løsninger.' } },
        { '@type': 'Question', name: 'Hva koster en branninspeksjon?', acceptedAnswer: { '@type': 'Answer', text: 'Prisen avhenger av byggets størrelse og kompleksitet. Vi utfører branninspeksjon i Trondheim, hele Trøndelag og resten av landet. Kontakt oss for et uforpliktende tilbud — vi gir alltid fastpris.' } },
        { '@type': 'Question', name: 'Gjelder oppgraderingskravet for alle eldre bygninger?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, alle eksisterende bygg skal oppgraderes til et brannsikkerhetsnivå tilsvarende det som gjaldt ved BF85 (Byggeforskrift 1985) eller bedre. Eldre bygg som ikke er oppgradert kan motta pålegg.' } },
      ],
    },
  ],
}

const faqItems = [
  {
    question: 'Hva er forskjellen på branntilsyn og branninspeksjon?',
    answer: 'Branntilsyn utføres av kommunens brann- og redningsetat og er et lovpålagt tilsyn. Branninspeksjon er en frivillig gjennomgang utført av en privat brannrådgiver — som oss — der vi kartlegger hele byggets brannsikkerhet og gir deg en helhetlig tilstandsrapport.',
  },
  {
    question: 'Hvem er ansvarlig for brannsikkerheten i et sameie?',
    answer: 'Eier av bygget — typisk et borettslag eller sameie — er ansvarlig for at brannsikkerheten er i orden. Styret har plikt til å følge opp pålegg fra brannvesenet.',
  },
  {
    question: 'Hva skjer hvis bygget ikke oppfyller kravene?',
    answer: 'Brannvesenet kan gi pålegg om utbedring med frist. I alvorlige tilfeller kan bygget stenges. Vi hjelper deg med å prioritere tiltakene og finne kostnadseffektive løsninger.',
  },
  {
    question: 'Hva koster en branninspeksjon?',
    answer: 'Prisen avhenger av byggets størrelse og kompleksitet. Vi utfører branninspeksjon i Trondheim, hele Trøndelag og resten av landet. Kontakt oss for et uforpliktende tilbud — vi gir alltid fastpris.',
  },
  {
    question: 'Gjelder oppgraderingskravet for alle eldre bygninger?',
    answer: 'Ja, alle eksisterende bygg skal oppgraderes til et brannsikkerhetsnivå tilsvarende det som gjaldt ved BF85 (Byggeforskrift 1985) eller bedre. Eldre bygg som ikke er oppgradert kan motta pålegg.',
  },
]

export default function BranninspeksjonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Branninspeksjon i Trondheim</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Har du fått pålegg etter branntilsyn? Vi inspiserer bygget ditt i Trondheim og Trøndelag og utarbeider tilstandsrapport og handlingsplan.
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
            <h2 className="text-brand-black text-2xl font-black mb-5">Hva gjør brann- og redningsetaten?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Trondheim brann- og redningstjeneste (TBRT) gjennomfører tilsyn med særskilte brannobjekter — typisk næringsbygg, hoteller, sykehus og leilighetsbygg med mer enn 8 enheter. Tilsynet er stikkprøvebasert og gir ingen fullstendig gjennomgang av alle brannsikkerhetstiltak.
            </p>
            <p className="text-brand-darkgray leading-relaxed">
              Dersom tilsynet avdekker avvik, vil du motta et pålegg om utbedring. Det er eier av bygget som er ansvarlig for å følge opp pålegget.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-5">Typisk pålegg fra brannvesenet</h2>
              <blockquote className="border-l-4 border-brand-orange pl-6 italic text-brand-darkgray text-lg leading-relaxed bg-brand-lightgray rounded-r-[20px] py-4 pr-6">
                &ldquo;Eier er ansvarlig for at brannsikkerheten i bygget er tilfredsstillende. Branntekniske avvik som ble avdekket under tilsynet skal utbedres innen [dato]. Dokumentasjon på utbedringstiltak skal sendes brannvesenet.&rdquo;
              </blockquote>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-5">Vår branninspeksjonstjeneste</h2>
              <p className="text-brand-darkgray leading-relaxed mb-6">
                Vi tilbyr en grundig gjennomgang av byggets brannsikkerhet — uavhengig av om du har fått pålegg eller ønsker en frivillig sjekk. Slik gjennomfører vi en branninspeksjon:
              </p>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Inspeksjon', desc: 'Vi gjennomgår bygget fysisk og vurderer alle branntekniske tiltak: rømningsveier, slokkeutstyr, branndører, røykvarslere, vedlikehold.' },
                  { step: '02', title: 'Tilstandsrapport', desc: 'Vi utarbeider en skriftlig rapport som beskriver avvik og mangler, rangert etter alvorlighetsgrad.' },
                  { step: '03', title: 'Handlingsplan', desc: 'Vi foreslår konkrete tiltak med prioritering og estimerte kostnader.' },
                  { step: '04', title: 'Internkontrollrutiner', desc: 'Vi hjelper deg med å etablere gode rutiner for løpende brannsikkerhet.' },
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

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-[20px] p-6 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="font-bold text-brand-black mb-1">Fastpris på branninspeksjon</p>
                  <p className="text-brand-darkgray text-sm">Prisen avhenger av byggets størrelse og kompleksitet. Vi gir alltid fastpris — ingen overraskelser.</p>
                </div>
                <Link href="/kontakt-oss" className="shrink-0 bg-brand-orange text-brand-white font-bold px-6 py-3 rounded-[10px] hover:opacity-90 transition-opacity text-sm text-center">
                  Be om tilbud
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10 bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Oppgraderingskravet for eldre bygg</h2>
              <p className="text-brand-darkgray leading-relaxed">
                Alle eksisterende bygg i Norge skal oppgraderes slik at brannsikkerheten minst tilsvarer kravene i Byggeforskrift 1985 (BF85). Bygg som ble oppført etter eldre forskrifter uten å bli oppgradert, vil typisk motta pålegg ved tilsyn. Vi vurderer byggets nåværende sikkerhetsnivå og hva som må til for å nå kravet.
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
            <h2 className="text-brand-white text-3xl font-black mb-4">Kontakt oss for branninspeksjon i Trondheim</h2>
            <p className="text-brand-white/60 text-lg mb-8">Vi hjelper deg med å følge opp pålegg og utarbeide handlingsplan.</p>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-lg">
              Kontakt oss
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
