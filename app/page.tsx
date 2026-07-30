import React from 'react'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'
import ReviewCard from '@/components/ReviewCard'

export const metadata: Metadata = {
  title: 'Brannprosjektering i Trondheim | Brannkonsult AS',
  description: 'Sentralt godkjent brannprosjekteringsfirma i Trondheim. Vi tilbyr brannkonsept, branninspeksjon og uavhengig kontroll. Fastpris. Svar innen 24 timer.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no' },
  openGraph: {
    title: 'Brannprosjektering i Trondheim | Brannkonsult AS',
    description: 'Sentralt godkjent brannprosjekteringsfirma i Trondheim. Fastpris. Svar innen 24 timer.',
    url: 'https://www.trondheimbrannkonsult.no',
    siteName: 'Brannkonsult AS',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Brannprosjektering i Trondheim – Trondheim Brannkonsult' }],
  },
}

const homepageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.trondheimbrannkonsult.no/#webpage',
      url: 'https://www.trondheimbrannkonsult.no',
      name: 'Brannprosjektering i Trondheim | Brannkonsult AS',
      description: 'Sentralt godkjent brannprosjekteringsfirma i Trondheim.',
      inLanguage: 'nb-NO',
      isPartOf: { '@id': 'https://www.trondheimbrannkonsult.no/#website' },
      about: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Hva koster et brannkonsept i Trondheim?', acceptedAnswer: { '@type': 'Answer', text: 'Et brannkonsept i tiltaksklasse 2 starter fra 15 000 kr ekskl. mva., inkludert branntegninger. Vi gir alltid fastpris i skriftlig tilbud — ingen timepris, ingen overraskelser på fakturaen.' } },
        { '@type': 'Question', name: 'Hva trenger dere for å gi oss et tilbud?', acceptedAnswer: { '@type': 'Answer', text: 'Adresse, plantegninger og en kort beskrivelse av hva som skal gjøres. Send det til oss, så svarer vi med fastpris innen 24 timer.' } },
        { '@type': 'Question', name: 'Dekker dere hele Trøndelag?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Vi tar oppdrag i hele Trøndelag — Stjørdal, Malvik, Melhus, Orkanger, Steinkjer, Levanger, Verdal og alt imellom. Befaring er sjelden nødvendig.' } },
        { '@type': 'Question', name: 'Trenger vi befaring for et tilbygg i Trondheim?', acceptedAnswer: { '@type': 'Answer', text: 'Sjelden. For de fleste tilbygg og bruksendringer holder det med digitale tegninger og kartdata. Vi sier ifra om vi trenger befaring — og det er i så fall inkludert i fastprisen.' } },
        { '@type': 'Question', name: 'Er dere sentralt godkjent?', acceptedAnswer: { '@type': 'Answer', text: 'Ja. Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2. Det er et krav for å signere ansvarsrett i byggesøknaden.' } },
      ],
    },
  ],
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description: 'Brannkonseptet er strategidokumentet kommunen trenger for å behandle byggesøknaden. Vi kjenner kravene i Trondheim og leverer dokumentasjon som holder gjennom saksbehandlingen.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description: 'Vi er uavhengig brannrådgiver uten tilknytning til produktleverandører. Løsningene vi anbefaler er valgt fordi de passer prosjektet — ikke fordi vi tjener på dem.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description: 'Fått pålegg etter branntilsyn, eller vil du vite hva som faktisk kreves av bygget? Vi gjennomgår hele bygningsmassen og leverer en rapport med prioriterte tiltak.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description: 'SAK10 krever at brannkonseptet kontrolleres av en annen enn den som prosjekterte det. Vi gjennomfører kontrollen og utsteder erklæring om ansvarsrett.',
    href: '/uavhengig-kontroll',
  },
]

const reviews = [
  {
    quote: 'På spørsmål om brannkonsept og ansvarsrett for fagområdet fikk vi raskt og profesjonelt svar. Hyggelig, ryddig og konstruktiv oppfølging.',
    author: 'Sivilarkitekt Sverre Krefting',
  },
  {
    quote: 'Leverte helt i henhold til plan, og hadde god kommunikasjon hele veien.',
    author: 'Eskil Wilhelmsen',
  },
  {
    quote: 'Veldig hyggelig og løsningsorientert. Tar seg tid til spørsmål og ønske om endringer.',
    author: 'Pål E. Grepperud',
    company: 'Grepperud Boligutvikling AS',
  },
  {
    quote: 'Meget fornøyd med responsen, kvaliteten og oppfølgingen. Anbefales!',
    author: 'Bjørn Eriksen',
    company: 'Innherred Håndverkstjenester AS',
  },
  {
    quote: 'Veldig fornøyd! Høy kompetanse. Rask og profesjonell effektuering av oppdraget og konkurransedyktige priser.',
    author: 'Lene Solli',
  },
  {
    quote: 'Ryddig og effektiv. Forklarte essensen i det ganske avanserte dokumentet på en enkel og forståelig måte.',
    author: 'Bjørn Erik Dørstad',
    company: 'Eir Eiendom AS',
  },
]

const faqItems: { question: string; answer: React.ReactNode }[] = [
  {
    question: 'Hva koster et brannkonsept i Trondheim?',
    answer: 'Et brannkonsept i tiltaksklasse 2 starter fra 15 000 kr ekskl. mva., inkludert branntegninger. Vi gir alltid fastpris i skriftlig tilbud — ingen timepris, ingen overraskelser på fakturaen.',
  },
  {
    question: 'Hva trenger dere for å gi oss et tilbud?',
    answer: 'Adresse, plantegninger og en kort beskrivelse av hva som skal gjøres. Send det til oss, så svarer vi med fastpris innen 24 timer.',
  },
  {
    question: 'Dekker dere hele Trøndelag?',
    answer: 'Ja. Vi tar oppdrag i hele Trøndelag — Stjørdal, Malvik, Melhus, Orkanger, Steinkjer, Levanger, Verdal og alt imellom. Befaring er sjelden nødvendig.',
  },
  {
    question: 'Trenger vi befaring for et tilbygg i Trondheim?',
    answer: 'Sjelden. For de fleste tilbygg og bruksendringer holder det med digitale tegninger og kartdata. Vi sier ifra om vi trenger befaring — og det er i så fall inkludert i fastprisen.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer: 'Ja. Vi har sentral godkjenning fra DiBK for brannprosjektering i tiltaksklasse 1 og 2. Det er et krav for å signere ansvarsrett i byggesøknaden.',
  },
]

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageJsonLd) }} />
      {/* ── Hero — city image background ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden -mt-20 lg:-mt-24">
        <Image
          src="/images/hero.jpg"
          alt="Trondheim by"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-brand-dark/20" />
        <div className="relative z-10 w-full max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-32">
          <p className="hero-1 font-accent text-brand-orange text-xl mb-4">Trondheim Brannkonsult</p>
          <h1 className="hero-2 text-brand-white font-black leading-none mb-6 text-5xl lg:text-7xl xl:text-8xl max-w-4xl">
            Brann&shy;prosjektering i Trondheim
          </h1>
          <div className="hero-3 w-24 h-1.5 bg-brand-orange mb-8" />
          <p className="hero-4 text-brand-white/70 text-lg lg:text-xl max-w-xl leading-relaxed mb-10">
            Vi hjelper deg med brannkonsept, brannprosjektering og branninspeksjon i Trondheim og Trøndelag. Sentralt godkjent foretak. Fastpris alltid.
          </p>
          <div className="hero-5 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt-oss" className="bg-brand-orange text-brand-white font-bold px-8 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-base">
              Få gratis tilbud
            </Link>
            <Link href="/brannprosjektering" className="border-2 border-brand-white/30 text-brand-white font-bold px-8 py-4 rounded-[10px] hover:border-brand-white/60 transition-colors text-base">
              Les mer om tjenestene
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services — zigzag layout ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-14">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Våre tjenester</h2>
          </ScrollReveal>

          <div className="space-y-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 60}>
                <Link
                  href={service.href}
                  className={`group flex flex-col lg:flex-row ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-10 p-8 lg:p-12 rounded-[30px] border border-brand-gray hover:shadow-lg hover:border-brand-orange/30 transition-all duration-300`}
                >
                  <div className="lg:w-1/4 flex justify-center">
                    <img
                      src={service.iconImage}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="object-contain w-24 h-24 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="lg:w-3/4">
                    <h3 className="font-black text-brand-black text-2xl mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h3>
                    <p className="text-brand-darkgray leading-relaxed mb-4">{service.description}</p>
                    <span className="text-brand-orange font-bold">Les mer &rarr;</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── About — 3-column dark stat boxes ── */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[
              { number: '2013', label: 'Etablert', desc: 'Over ti år med erfaring' },
              { number: '1200+', label: 'Prosjekter', desc: 'Fra garasjer til leilighetsbygg' },
              { number: 'TKL 1+2', label: 'Sentralt godkjent', desc: 'DiBK-godkjent kompetanse' },
            ].map((stat, i) => (
              <div key={i} className="bg-brand-white/5 border border-brand-white/10 rounded-[20px] p-8">
                <div className="text-brand-orange font-black text-4xl lg:text-5xl mb-2">{stat.number}</div>
                <div className="text-brand-white font-bold text-lg mb-1">{stat.label}</div>
                <div className="text-brand-white/50 text-sm">{stat.desc}</div>
              </div>
            ))}
          </ScrollReveal>

          <ScrollReveal className="max-w-3xl">
            <h2 className="text-brand-white text-3xl font-black mb-5">Lokal kunnskap om Trondheim og Trøndelag</h2>
            <p className="text-brand-white/70 leading-relaxed mb-5 text-lg">
              Trondheim er en by med stor variasjon i bygningsmassen — fra historisk trehusbebyggelse i Nedre Elvehavn og Midtbyen, til moderne studentboliger og næringsbygg rundt NTNU og Gløshaugen.
            </p>
            <p className="text-brand-white/70 leading-relaxed mb-8">
              Vi har god kunnskap om de kravene som stilles til byggesaker i Trondheim kommune og leverer brannkonsept og brannprosjektering til arkitekter, utbyggere og privatpersoner i hele Trøndelag.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Fastpris — ingen overraskelser',
                'Levering innen 5–10 virkedager',
                'Nøytral rådgiver — ingen produktsalg',
                'Tar oppdrag i hele Trøndelag og landet',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-brand-orange shrink-0" />
                  <span className="text-brand-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Reviews — 3-column grid ── */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black">Hva kundene sier</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <ReviewCard {...review} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ — dark section ── */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-white text-3xl lg:text-4xl font-black mb-4">Ofte stilte spørsmål</h2>
            <p className="text-brand-white/60 text-lg max-w-xl">
              Har du spørsmål om brannprosjektering i Trondheim? Her finner du svar på de vanligste.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={80} variant="fade">
            <FAQAccordion items={faqItems} dark={true} />
          </ScrollReveal>
        </div>
      </section>

      {/* ── Articles — magazine layout ── */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-10">
            <h2 className="text-brand-black text-3xl lg:text-4xl font-black mb-2">Artikler og tips</h2>
            <p className="text-brand-darkgray text-lg">Nyttig lesning om brannsikkerhet.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Large card */}
            <ScrollReveal className="lg:col-span-2">
              <Link href="/artikler/pipebrann" className="group flex flex-col rounded-[30px] overflow-hidden border border-brand-gray hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="relative h-56 lg:h-72">
                  <Image src="/images/article-pipebrann.jpg" alt="Pipebrann" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 66vw" />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-brand-orange font-bold text-sm uppercase tracking-wide mb-3">Fremhevet</span>
                  <h3 className="text-brand-black text-2xl font-black mb-3 group-hover:text-brand-orange transition-colors">Forebygg pipebrann med enkle grep</h3>
                  <p className="text-brand-darkgray leading-relaxed flex-1">Er du i faresonen for å få brann i skorsteinen? Vi forklarer hva en pipebrann er og hva du kan gjøre for å forebygge den.</p>
                  <span className="mt-4 text-brand-orange font-bold">Les artikkelen &rarr;</span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Two stacked small cards */}
            <div className="flex flex-col gap-6">
              {[
                { href: '/artikler/brannslokker', img: '/images/article-brannslukker.jpg', title: 'Har du riktig brannslokkeapparat?', excerpt: 'Vet du hvilken type brannslokker du trenger? Vi forklarer kravene.' },
                { href: '/artikler/roykvarsler', img: '/images/article-roykvarsler.jpg', title: 'Riktig røykvarsler redder liv', excerpt: 'Krav til røykvarslere i norske boliger og anbefalt plassering.' },
              ].map((article, i) => (
                <ScrollReveal key={article.href} delay={i * 100}>
                  <Link href={article.href} className="group flex flex-col rounded-[30px] overflow-hidden border border-brand-gray hover:shadow-lg transition-shadow duration-300 flex-1">
                    <div className="relative h-40">
                      <Image src={article.img} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 1024px) 100vw, 33vw" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-brand-black text-lg font-black mb-2 group-hover:text-brand-orange transition-colors">{article.title}</h3>
                      <p className="text-brand-darkgray text-sm leading-relaxed mb-3">{article.excerpt}</p>
                      <span className="text-brand-orange font-bold text-sm">Les mer &rarr;</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
