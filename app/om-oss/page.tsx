import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Om oss – Sentralt godkjent brannrådgiver siden 2013 | Trondheim Brannkonsult',
  description: 'Trondheim Brannkonsult er et sentralt godkjent (DiBK) brannprosjekteringsfirma med over 1 200 prosjekter siden 2013. Nøytrale rådgivere — ingen produktsalg.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/om-oss' },
  openGraph: {
    title: 'Om oss – Sentralt godkjent brannrådgiver siden 2013 | Trondheim Brannkonsult',
    description: 'Over 1 200 prosjekter siden 2013. Sentralt godkjent (DiBK). Nøytrale brannrådgivere i Trondheim og Trøndelag.',
    url: 'https://www.trondheimbrannkonsult.no/om-oss',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Om Trondheim Brannkonsult' }],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.trondheimbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Om oss', item: 'https://www.trondheimbrannkonsult.no/om-oss' },
  ],
}

export default function OmOssPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Om oss</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Sentralt godkjent brannrådgiver siden 2013</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Vi er et spesialisert brannprosjekteringsfirma med sentral godkjenning og over ti års erfaring. Seriøse, nøytrale og løsningsorienterte.
          </p>
        </div>
      </section>

      {/* Background */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-brand-black text-3xl font-black mb-6">Lokal kunnskap om Trondheim</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Trondheim er en by med stor variasjon i bygningsmassen — fra historisk trehusbebyggelse i Nedre Elvehavn og Midtbyen, til moderne studentboliger og næringsbygg rundt NTNU og Gløshaugen. Vi har god kunnskap om de kravene som stilles til byggesaker i Trondheim kommune og leverer brannkonsept og brannprosjektering til arkitekter, utbyggere og privatpersoner i hele Trøndelag.
              </p>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Siden 2013 har vi vært involvert i over 1 200 brannprosjekter — fra enkle garasjer og tilbygg til store leilighetsbygg og næringseiendommer.
              </p>
              <p className="text-brand-darkgray leading-relaxed">
                Vi er en nøytral rådgiver. Det betyr at vi ikke selger håndverkertjenester, produkter eller brannanlegg. Rådene vi gir er utelukkende i din interesse.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="scale" delay={100}>
              <div className="relative rounded-[30px] overflow-hidden h-80 lg:h-96">
                <Image src="/images/about-team.png" alt="Trondheim Brannkonsult team" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '2013', label: 'Etablert' },
              { number: '1200+', label: 'Prosjekter' },
              { number: 'TKL 1+2', label: 'Sentralt godkjent' },
              { number: '5', label: 'Brannrådgivere' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="text-center p-8 bg-brand-white/5 rounded-[20px] border border-brand-white/10">
                  <div className="text-brand-orange font-black text-4xl mb-2">{stat.number}</div>
                  <div className="text-brand-white text-sm font-bold">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sentralt godkjent */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-brand-black text-3xl font-black mb-6">Sentralt godkjent foretak</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Vi har sentral godkjenning for brannprosjektering i tiltaksklasse 1 og 2. Sentral godkjenning fra DiBK (Direktoratet for byggkvalitet) er en offentlig godkjenning som dokumenterer at foretaket har tilstrekkelig kompetanse, er godt forsikret og har dokumenterte referanseprosjekter.
              </p>
              <ul className="space-y-3">
                {[
                  'Dokumentert faglig kompetanse',
                  'Ansvarsforsikring i orden',
                  'Referanseprosjekter godkjent av DiBK',
                  'Kan påta seg ansvarsrett overfor kommunen',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-brand-orange shrink-0" />
                    <span className="text-brand-darkgray">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal variant="fade" delay={100}>
              <div className="flex justify-center">
                <Image src="/images/sentralt-godkjent.png" alt="Sentralt godkjent" width={280} height={280} className="object-contain" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-brand-lightgray">
        <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mb-12">
            <h2 className="text-brand-black text-3xl font-black">Vår prosess</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Kontakt oss', desc: 'Send oss prosjektbeskrivelse og tegninger.' },
              { step: '2', title: 'Vi sender tilbud', desc: 'Fastpris innen 24 timer.' },
              { step: '3', title: 'Aksepter', desc: 'Enkelt skriftlig oppdragsbekreftelse.' },
              { step: '4', title: 'Vi prosjekterer', desc: 'Levering innen 5–10 virkedager.' },
              { step: '5', title: 'Dokumentasjon', desc: 'Ferdig til byggesøknaden.' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex flex-col items-center text-center p-6 bg-brand-white rounded-[20px] border border-brand-gray">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-lg mb-4">{item.step}</div>
                  <h3 className="font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-brand-darkgray text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-brand-white text-3xl font-black mb-4">Ta kontakt i dag</h2>
            <p className="text-brand-white/60 text-lg mb-8">Vi hjelper kunder i Trondheim, Trøndelag og hele landet. Gratis og uforpliktende tilbud.</p>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-lg">
              Kontakt oss
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
