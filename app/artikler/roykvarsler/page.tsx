import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Riktig røykvarsler redder liv | Brannkonsult AS',
  description: 'Er du godt nok sikret mot brann om natten? Vi forklarer krav til røykvarslere og riktig plassering i norske boliger.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/artikler/roykvarsler' },
  openGraph: {
    title: 'Riktig røykvarsler redder liv | Brannkonsult AS',
    description: 'Er du godt nok sikret mot brann om natten? Vi forklarer krav til røykvarslere og riktig plassering i norske boliger.',
    url: 'https://www.trondheimbrannkonsult.no/artikler/roykvarsler',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'article',
    images: [{ url: '/images/article-roykvarsler.jpg', width: 1200, height: 630, alt: 'Røykvarsler i bolig' }],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Hjem', item: 'https://www.trondheimbrannkonsult.no' },
    { '@type': 'ListItem', position: 2, name: 'Artikler', item: 'https://www.trondheimbrannkonsult.no/artikler' },
    { '@type': 'ListItem', position: 3, name: 'Riktig røykvarsler redder liv', item: 'https://www.trondheimbrannkonsult.no/artikler/roykvarsler' },
  ],
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Riktig røykvarsler redder liv',
  description: 'Er du godt nok sikret mot brann om natten? Vi forklarer krav til røykvarslere og riktig plassering i norske boliger.',
  image: 'https://www.trondheimbrannkonsult.no/images/article-roykvarsler.jpg',
  url: 'https://www.trondheimbrannkonsult.no/artikler/roykvarsler',
  inLanguage: 'nb-NO',
  publisher: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
  author: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
}

export default function RoykVarslerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {/* Dark hero */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Artikkel</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-5xl leading-tight mb-6">Riktig røykvarsler redder liv</h1>
          <div className="w-20 h-1.5 bg-brand-orange" />
        </div>
      </section>

      {/* Article */}
      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[20px] overflow-hidden h-64 lg:h-96 mb-12">
              <Image src="/images/article-roykvarsler.jpg" alt="Røykvarsler" fill className="object-cover" sizes="800px" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              De fleste brannulykker med dødsfall skjer om natten, mens folk sover. En fungerende røykvarsler er det viktigste brannverntiltaket du kan ha i hjemmet — men bare hvis den er riktig type, plassert riktig og godt vedlikeholdt.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Krav til røykvarslere i norske boliger</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Forskrift om brannforebygging § 7 slår fast at alle boliger skal ha røykvarslere som dekker alle rom der brann kan oppstå, og at varslingsutstyret skal gi tidlig nok varsel til at beboerne kan komme seg ut.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              Kravet er minst én røykvarsler per etasje, men det holder ikke for større boliger. Det viktigste er at varslingen høres tydelig fra alle soverom når dørene er lukket.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Ionisasjon vs. optisk røykvarsler</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">Det finnes to hovedtyper røykvarslere:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-3">Ionisasjonsvarsler</h3>
                <p className="text-sm text-brand-darkgray leading-relaxed mb-3">Reagerer raskt på rask, flammende brann med lite synlig røyk. Bruker en svak radioaktiv kilde for å oppdage partikler i luften.</p>
                <p className="text-sm text-brand-darkgray"><strong>Best for:</strong> Kjøkken og lager der det kan oppstå rask brann.</p>
              </div>
              <div className="bg-brand-lightgray rounded-[20px] p-6">
                <h3 className="font-bold text-brand-black text-lg mb-3">Optisk røykvarsler</h3>
                <p className="text-sm text-brand-darkgray leading-relaxed mb-3">Reagerer raskere på sakte, ulmerbranner med mye synlig røyk. Mer egnet for soverom og stue der møbler og tekstiler kan begynne å ulme.</p>
                <p className="text-sm text-brand-darkgray"><strong>Best for:</strong> Soverom, stue og ganger.</p>
              </div>
            </div>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              For de fleste boliger anbefaler vi optiske røykvarslere, eventuelt kombinert med en ionisasjonsvarsler ved kjøkken. Kombinerte varslere (multi-sensor) finnes også og er et godt valg.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Riktig plassering av røykvarslere</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">Plassering har stor betydning for om varslingen faktisk virker i tide:</p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Monter i taket, midt i rommet — røyk stiger opp og sprer seg langs taket',
                'Unngå hjørner og kanter der luftsirkulasjonen er dårlig',
                'Ikke monter nærmere enn 50 cm fra ventilasjon eller vindu',
                'Ha minst én varsler utenfor hvert soverom i gangen',
                'Kjøkken: bruk en varmevarsler i stedet for røykvarsler for å unngå falske alarmer',
                'Kjeller og loft: krav gjelder dersom disse rommene er beboelige',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Vedlikehold — det du ikke må glemme</h2>
            <div className="space-y-4 mb-10">
              {[
                { title: 'Test varslerene månedlig', desc: 'Trykk på testknappen. Høres alarmen? Da fungerer den.' },
                { title: 'Bytt batteri én gang i året', desc: 'Sett av en fast dato — for eksempel nyttår eller sommertid. Moderne varslere varsler når batteriet er svakt.' },
                { title: 'Støvsug varslerene', desc: 'Støv og insekter kan redusere følsomheten. Støvsug forsiktig rundt åpningene en gang i halvåret.' },
                { title: 'Bytt varslerene etter 10 år', desc: 'Produsenten anbefaler utskifting etter 10 år. Sjekk produksjonsdatoen på baksiden av varslerene dine.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-orange pl-6">
                  <h3 className="font-bold text-brand-black mb-1">{item.title}</h3>
                  <p className="text-brand-darkgray">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Spørsmål om brannsikkerhet?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Trondheim Brannkonsult hjelper privatpersoner og utbyggere med brannkonsept og brannsikkerhetsvurderinger i Trondheim og Trøndelag.
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
