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
        { '@type': 'Question', name: 'Hva koster brannprosjektering i Trondheim?', acceptedAnswer: { '@type': 'Answer', text: 'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.' } },
        { '@type': 'Question', name: 'Trenger jeg brannprosjektering for mitt prosjekt?', acceptedAnswer: { '@type': 'Answer', text: 'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.' } },
        { '@type': 'Question', name: 'Er befaring nødvendig?', acceptedAnswer: { '@type': 'Answer', text: 'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.' } },
        { '@type': 'Question', name: 'Er dere sentralt godkjent?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.' } },
        { '@type': 'Question', name: 'Tar dere oppdrag utenfor Trondheim?', acceptedAnswer: { '@type': 'Answer', text: 'Vi hjelper kunder i Trondheim, Trøndelag og hele landet. Kontakt oss uansett hvor i Norge prosjektet ditt er.' } },
      ],
    },
  ],
}

const services = [
  {
    iconImage: '/images/icon-brannkonsept.gif',
    title: 'Brannkonsept',
    description: 'Kommunen krever et brannkonsept ved de fleste byggesaker. Vi utarbeider helhetlige brannkonsept som ivaretar brannsikkerheten i ditt prosjekt.',
    href: '/brannkonsept',
  },
  {
    iconImage: '/images/icon-brannprosjektering.gif',
    title: 'Brannprosjektering',
    description: 'Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet, og finner praktiske løsninger som sparer både tid og kostnader. Fast pris der det er mulig.',
    href: '/brannprosjektering',
  },
  {
    iconImage: '/images/icon-branntilsyn.png',
    title: 'Branninspeksjon',
    description: 'Har du fått pålegg etter branntilsyn, eller ønsker du en grundig gjennomgang av byggets brannsikkerhet? Vi inspiserer og utarbeider tilstandsrapport.',
    href: '/branninspeksjon',
  },
  {
    iconImage: '/images/icon-uavhengig-kontroll.png',
    title: 'Uavhengig kontroll',
    description: 'I mange byggeprosjekter er det krav om uavhengig kontroll av brannsikkerheten. Kontrollen sikrer at brannkonseptet er i tråd med gjeldende forskrifter.',
    href: '/uavhengig-kontroll',
  },
]

const reviews = [
  {
    quote: 'Raskt svar, relevant og grundig rapport, kommunen likte måten det var gjort på. Måtte endre noe i rapporten pga ny planløsning. Ny oppdatert rapport innen kort tid. Alt til bra priser.',
    author: 'Vegard Hals',
  },
  {
    quote: 'Brannkonsult AS er faglig dyktige, ryddige og løsningsorienterte. Det er viktig for oss som arkitekter og for våre kunder.',
    author: 'Jon Cederbrand Arkitektur AS',
  },
  {
    quote: 'Ga rask tilbakemelding ved første kontakt. Leverte til avtalt tid og pris. Høy kvalitet på arbeidet. Veldig behjelpelig med å svare på andre spørsmål i ettertid, vederlagsfritt.',
    author: 'Jonathan Steinsvik',
  },
  {
    quote: 'Trondheim Brannkonsult er lette å samarbeide med, de svarer raskt, finner gode løsninger og leverer arbeid av jevnt høy kvalitet.',
    author: 'Hagelin Byggservice',
    company: 'Daniel Hagelin',
  },
  {
    quote: 'Svært god service. Trygt med folk som kan faget sitt. Fikk svært god hjelp og mange gode tips og innspill under byggeprosessen.',
    author: 'Torger Vistnes',
  },
  {
    quote: 'Rask og god kommunikasjon. Leverte raskt det vi trengte av dokumentasjon til en fornuftig pris. Veldig fornøyd!',
    author: 'Heidi Spinnangr',
  },
]

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Trondheim?',
    answer: 'Prisen varierer etter omfang og kompleksitet. Et brannkonsept i tiltaksklasse 2 starter hos oss fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris.',
  },
  {
    question: 'Trenger jeg brannprosjektering for mitt prosjekt?',
    answer: 'De fleste byggesaker krever brannprosjektering — tilbygg, bruksendring, ny boenhet, påbygg. Ta kontakt for en gratis vurdering av ditt prosjekt.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer: 'For nybygg og enklere saker er det ofte ikke nødvendig. Takket være digitale verktøy og kartdata kan vi i mange tilfeller jobbe uten fysisk befaring.',
  },
  {
    question: 'Er dere sentralt godkjent?',
    answer: 'Ja, vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Dette er en garanti for at vi er seriøse, godt forsikret og har dokumenterte referanseprosjekter.',
  },
  {
    question: 'Tar dere oppdrag utenfor Trondheim?',
    answer: 'Vi hjelper kunder i Trondheim, Trøndelag og hele landet. Kontakt oss uansett hvor i Norge prosjektet ditt er.',
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
