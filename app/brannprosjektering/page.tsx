import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'Brannprosjektering Trondheim | Trondheim Brannkonsult',
  description: 'Brannprosjektering i Trondheim og Trøndelag. Sentralt godkjent foretak med fastpris. Vi hjelper deg med alle typer byggesaker.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/brannprosjektering' },
}

const faqItems = [
  {
    question: 'Hva koster brannprosjektering i Trondheim?',
    answer: 'Et brannkonsept i tiltaksklasse 2 starter fra ca. 15 000 kr ekskl. mva., inkludert branntegninger. Vi tilbyr alltid fastpris — ingen overraskelser på fakturaen.',
  },
  {
    question: 'Trenger jeg brannprosjektering for tilbygg eller bruksendring?',
    answer: 'Ja, de fleste søknadspliktige tiltak krever brannprosjektering. Dette gjelder tilbygg, bruksendring, ny boenhet og rehabilitering av eldre bygg.',
  },
  {
    question: 'Er befaring nødvendig?',
    answer: 'For nybygg og enklere tilbygg er det som regel ikke nødvendig med befaring. Digitale tegninger og kartdata er ofte tilstrekkelig grunnlag.',
  },
  {
    question: 'Tilbyr dere håndverkertjenester?',
    answer: 'Nei — vi er en nøytral rådgiver og selger ingen produkter. Dette gjør at vi kan gi deg råd som faktisk er i din interesse.',
  },
  {
    question: 'Hva trenger dere for å gi pristilbud?',
    answer: 'Vi trenger adresse, plantegninger og en kort beskrivelse av prosjektet. Send oss disse via kontaktskjemaet, så svarer vi med fastpris innen 24 timer.',
  },
]

export default function BrannprosjekteringPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="bg-brand-dark py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Tjenester</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-6xl leading-tight mb-6">Brannprosjektering</h1>
          <div className="w-20 h-1.5 bg-brand-orange mb-8" />
          <p className="text-brand-white/70 text-lg lg:text-xl leading-relaxed max-w-2xl">
            Vi sørger for at bygget ditt oppfyller alle krav til brannsikkerhet i Trondheim og Trøndelag. Fastpris alltid. Sentralt godkjent foretak.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-5">Når er det behov for brannprosjektering?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-5">
              Brannprosjektering kreves ved de fleste søknadspliktige tiltak etter plan- og bygningsloven. Det gjelder blant annet:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Tilbygg og påbygg',
                'Ny boenhet i eksisterende bygg',
                'Bruksendring',
                'Rehabilitering av eldre bygg',
                'Nybygg — enebolig til leilighetsbygg',
                'Garasjer og uthus i tiltaksklasse 2',
                'Næringsbygg og offentlige bygg',
                'Sammenbygging av boliger',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-5">Risikoklasser og brannklasser</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Alle bygg i Norge plasseres i en risikoklasse (RKL) og brannklasse (BKL) basert på hvem som befinner seg i bygget og hvor mange etasjer det er. Disse avgjør hvilke branntekniske krav som gjelder.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-brand-lightgray rounded-[20px] p-6">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Risikoklasser (RKL 1–6)</h3>
                  <ul className="space-y-2 text-sm text-brand-darkgray">
                    <li><strong>RKL 1:</strong> Bygninger der folk kjenner rømningsveiene godt</li>
                    <li><strong>RKL 2:</strong> Boliger — eneboliger og tomannsboliger</li>
                    <li><strong>RKL 3:</strong> Leilighetsbygg og kontorbygg</li>
                    <li><strong>RKL 4:</strong> Bygninger med mange ukjente (butikker, hoteller)</li>
                    <li><strong>RKL 5:</strong> Sykehus og institusjoner</li>
                    <li><strong>RKL 6:</strong> Industri og lager</li>
                  </ul>
                </div>
                <div className="bg-brand-lightgray rounded-[20px] p-6">
                  <h3 className="font-bold text-brand-black text-lg mb-3">Brannklasser (BKL 1–4)</h3>
                  <ul className="space-y-2 text-sm text-brand-darkgray">
                    <li><strong>BKL 1:</strong> Inntil 2 etasjer</li>
                    <li><strong>BKL 2:</strong> Inntil 4 etasjer</li>
                    <li><strong>BKL 3:</strong> Inntil 8 etasjer</li>
                    <li><strong>BKL 4:</strong> Over 8 etasjer</li>
                  </ul>
                  <p className="text-xs text-brand-darkgray mt-3">Brannklassen bestemmer krav til bæreevne og brannmotstand i konstruksjonene.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-5">Start tidlig — spar penger</h2>
              <p className="text-brand-darkgray leading-relaxed mb-4">
                Jo tidligere i prosjektet vi kobles inn, desto enklere er det å finne gode og kostnadseffektive løsninger. Brannkrav som oppdages sent i prosessen kan medføre dyre omprosjekteringer.
              </p>
              <p className="text-brand-darkgray leading-relaxed">
                Vi anbefaler å kontakte oss allerede i skissefasen, slik at branntekniske hensyn kan legges inn fra start. Vi samarbeider gjerne med arkitekter og ansvarlig søker gjennom hele prosjektet.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-brand-orange/30 pt-10">
              <h2 className="text-brand-black text-2xl font-black mb-5">Hva vi trenger fra deg</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { step: '01', title: 'Adresse', desc: 'Bygg- og gårdsadressen i Trondheim eller Trøndelag.' },
                  { step: '02', title: 'Tegninger', desc: 'Plan- og snittegninger. Digitalt (PDF) er tilstrekkelig.' },
                  { step: '03', title: 'Prosjektbeskrivelse', desc: 'Hva skal du bygge, endre eller bruke bygget til?' },
                ].map((item) => (
                  <div key={item.step} className="flex flex-col items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-brand-white font-black text-sm shrink-0">{item.step}</div>
                    <div>
                      <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                      <p className="text-brand-darkgray text-sm">{item.desc}</p>
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
            <h2 className="text-brand-white text-3xl font-black mb-4">Be om tilbud på brannprosjektering</h2>
            <p className="text-brand-white/60 text-lg mb-8">Send tegninger og prosjektbeskrivelse — vi svarer med fastpris innen 24 timer.</p>
            <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-10 py-4 rounded-[10px] hover:opacity-90 transition-opacity text-lg">
              Kontakt oss
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
