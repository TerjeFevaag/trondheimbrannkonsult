import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Forebygg pipebrann med enkle grep | Trondheim Brannkonsult',
  description: 'Er du i faresonen for pipebrann? Vi forklarer hva en pipebrann er, hva som forårsaker den og hva du kan gjøre for å forebygge den.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no/artikler/pipebrann' },
}

export default function PipebrannPage() {
  return (
    <>
      {/* Dark hero */}
      <section className="bg-brand-dark py-20 lg:py-28">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-brand-orange text-xl mb-4">Artikkel</p>
          <h1 className="text-brand-white font-black text-4xl lg:text-5xl leading-tight mb-6">Forebygg pipebrann med enkle grep</h1>
          <div className="w-20 h-1.5 bg-brand-orange" />
        </div>
      </section>

      {/* Article */}
      <article className="py-16 lg:py-24 bg-brand-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[20px] overflow-hidden h-64 lg:h-96 mb-12">
              <Image src="/images/article-pipebrann.jpg" alt="Pipebrann" fill className="object-cover" sizes="800px" />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p className="text-brand-darkgray text-lg leading-relaxed mb-8">
              En pipebrann er en av de vanligste brannårsakene i norske boliger, og hvert år går det feil for mange huseiere som ikke har tatt nødvendige forholdsregler. Heldigvis er pipebrann i stor grad forebyggbart — med enkle og relativt rimelige tiltak.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva er en pipebrann?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-6">
              En pipebrann oppstår når sotavleiringer inne i skorsteinen antennes. Sot er resultatet av ufullstendig forbrenning — det vil si at veden ikke brenner helt opp i ovnen, og restproduktene legger seg som et lag inne i røykkanalen. Når dette laget blir tykt nok og temperaturen høy nok, kan det ta fyr.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-8">
              En pipebrann brenner gjerne ved svært høye temperaturer — opp mot 1000 grader — og kan vare i alt fra noen minutter til over en time. Den intense varmen kan skade eller sprekke skorsteinsmurverket og spre brannen til taket og resten av bygget.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva forårsaker pipebrann?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">De vanligste årsakene til sotoppbygging og pipebrann er:</p>
            <ul className="list-none space-y-3 mb-8">
              {[
                'Bruk av fuktig eller usesongert ved — fuktig ved gir lavere forbrenningstemperatur og mer sot',
                'For lav temperatur i ovnen — det anbefales å fyre med åpen spjeld og god lufttilgang',
                'Brenning av avfall, papp eller trykt papir — dette gir kraftig sotdannelse',
                'For sjelden feiing — sot som ikke fjernes bygger seg opp over tid',
                'Dårlig trekk i pipa — kan skyldes feil dimensjonering, tetninger eller kald pipe',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                  <span className="text-brand-darkgray">{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Slik forebygger du pipebrann</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">Gode vaner rundt fyring og vedlikehold er de viktigste tiltakene:</p>

            <div className="space-y-6 mb-8">
              {[
                { title: 'Fyr med tørr, sesongert ved', desc: 'Veden bør ha maksimalt 20 % fuktighet. Kjøp ved i god tid og la den tørke under tak. Fuktig ved er den vanligste enkeltårsaken til pipebrann.' },
                { title: 'Sørg for god lufttilgang', desc: 'Start med åpen spjeld og god lufttilgang. En varm forbrenning er en ren forbrenning. Unngå å dempe flammene ved å stenge lufttilgangen — det øker sotdannelsen.' },
                { title: 'Bestill feiing regelmessig', desc: 'Feieren er din viktigste allierte mot pipebrann. Kommunal feiing er lovpålagt, men intervallene varierer. Ta kontakt med kommunen hvis du er usikker på når du sist ble feid.' },
                { title: 'Sjekk pipa og ildstedet', desc: 'Se etter sprekker i mur, løse fuger eller skader i røykkanalen. En skadet pipe kan spre brann til konstruksjoner rundt skorsteinen.' },
                { title: 'Ikke brenn avfall i ovnen', desc: 'Plast, papp og trykt papir gir svært høye temperaturer og kraftig sotdannelse. Brenn kun ren, tørr ved.' },
              ].map((item, i) => (
                <div key={i} className="border-l-4 border-brand-orange pl-6">
                  <h3 className="font-bold text-brand-black text-lg mb-2">{item.title}</h3>
                  <p className="text-brand-darkgray">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-brand-black text-2xl font-black mb-4">Hva gjør du hvis det starter pipebrann?</h2>
            <p className="text-brand-darkgray leading-relaxed mb-4">
              Lukk spjeldet og lufttilgangen på ovnen for å begrense oksygentilgangen. Ring 110 umiddelbart — en pipebrann kan spre seg raskt og brannvesenet bør alltid varsles. Evakuer huset og vent utenfor til brannvesenet ankommer. Forsøk ikke å slukke en pipebrann selv — det er farlig og lite effektivt.
            </p>
            <p className="text-brand-darkgray leading-relaxed mb-10">
              Etter pipebrann bør skorsteinen inspiseres av fagfolk før den tas i bruk igjen. Brannvesenet kan hjelpe med råd om neste steg.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-brand-lightgray rounded-[20px] p-8">
              <h2 className="text-brand-black text-xl font-black mb-3">Trenger du hjelp med brannsikkerhet?</h2>
              <p className="text-brand-darkgray leading-relaxed mb-5">
                Trondheim Brannkonsult hjelper privatpersoner, borettslag og utbyggere med brannprosjektering og brannsikkerhetsvurderinger.
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
