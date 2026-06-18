import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Har du riktig brannslokkeapparat? | Trondheim Brannkonsult',
  description: 'Vet du hvilken type brannslokker du trenger? Vi gjennomgår krav til brannslokking i boliger og forskjellen mellom pulver- og skumapparater.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/artikler/brannslokker' },
  openGraph: {
    title: 'Har du riktig brannslokkeapparat? | Trondheim Brannkonsult',
    description: 'Vet du hvilken type brannslokker du trenger? Vi gjennomgår krav til brannslokking i boliger og forskjellen mellom pulver- og skumapparater.',
    url: 'https://www.trondheimbrannkonsult.no/artikler/brannslokker',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'article',
    images: [{ url: '/images/article-brannslukker.jpg', width: 1200, height: 630, alt: 'Brannslokkeapparat i bolig' }],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Har du riktig brannslokkeapparat i boligen?',
  description: 'Vet du hvilken type brannslokker du trenger? Vi gjennomgår krav til brannslokking i boliger og forskjellen mellom pulver- og skumapparater.',
  image: 'https://www.trondheimbrannkonsult.no/images/article-brannslukker.jpg',
  url: 'https://www.trondheimbrannkonsult.no/artikler/brannslokker',
  inLanguage: 'nb-NO',
  publisher: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
  author: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
}

export default function BrannslokkePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Artikkel</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-5xl leading-tight mb-6">Har du riktig brannslokkeapparat i boligen?</h1>
          <div className="w-20 h-1.5 bg-brand-orange" />
        </div>
      </section>

      {/* Article */}
      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[20px] overflow-hidden h-64 lg:h-96 mb-12">
              <Image src="/images/article-brannslukker.jpg" alt="Brannslokker" fill className="object-cover" sizes="800px" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              Et brannslokkeapparat kan bety forskjellen mellom en liten branntilløp og en totalbrann. Men mange vet ikke hva de har hengende i gangen — og om det faktisk er riktig type for hjemmet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til brannslokking i boliger</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              Brann- og eksplosjonsvernloven og forskrift om brannforebygging stiller krav til brannvernutstyr i boliger. Alle boliger skal ha:
            </p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Minst én røykvarsler per etasje',
                'Slokkeutstyr i eller i tilknytning til kjøkkenet',
                'Manuelt slokkeutstyr: brannslange tilknyttet vannforsyning, eller et pulver-/skumapparat med kapasitet på minst 6 kg/L',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Pulverapparat vs. skumapparat</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">Det finnes mange typer slokkemidler, men de to vanligste for boliger er pulver og skum:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-3">Pulverapparat (ABC-pulver)</h3>
                <ul className="space-y-2 text-sm text-brand-darkgray">
                  <li><strong>Fordeler:</strong> Effektivt mot de fleste branntyper (klasse A, B og C). Rimelig i pris.</li>
                  <li><strong>Ulemper:</strong> Pulveret ødelegger alt det kommer i kontakt med. Skaper røyk og pulverskyer som gjør det vanskelig å se. Ikke anbefalt der det er elektrisk utstyr eller verdifulle gjenstander.</li>
                </ul>
              </div>
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-3">Skumapparat (AFFF eller F-500)</h3>
                <ul className="space-y-2 text-sm text-brand-darkgray">
                  <li><strong>Fordeler:</strong> Skåner inventar bedre enn pulver. Effektivt mot brann i faste og flytende materialer (klasse A og B). Anbefalt til kjøkkenbrann.</li>
                  <li><strong>Ulemper:</strong> Ikke effektivt mot gassbranner. Noe dyrere enn pulveralternativet.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva anbefaler vi?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              For de fleste boliger anbefaler vi et 6-liters skumapparat. Det gir god slokkekraft mot de brannene som oftest oppstår i hjemmet — kjøkkenbranner og brann i møbler og tekstiler — uten å ødelegge alt det treffer.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Dersom du vil ha ekstra sikkerhet, kan det være lurt å ha én av hver: et skumapparat ved kjøkkenet og et pulverapparat i garasjen eller verkstedet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikehold og kontroll</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Et brannslokkeapparat som ikke virker er like godt som ingen. Husk:
            </p>
            <ul className="list-none space-y-3 mb-10">
              {[
                'Kontroller trykkmåleren månedlig — nålen skal stå i grønt felt',
                'Rist apparatet en gang i måneden for å løsne pulveret (gjelder pulverapparat)',
                'Service anbefales hvert 5. år, eller etter bruk',
                'Sjekk dato — eldre apparater bør byttes ut',
                'Heng apparatet synlig og lett tilgjengelig — ikke gjemt bak en dør',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Trenger du brannprosjektering?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Trondheim Brannkonsult hjelper deg med brannkonsept, brannprosjektering og branntilsyn i Trondheim og Trøndelag.
              </p>
              <Link href="/kontakt-oss" className="inline-block bg-brand-orange text-brand-white font-bold px-8 py-3 rounded-[10px] hover:opacity-90 transition-opacity">
                Kontakt oss
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </article>
    </>
  )
}
