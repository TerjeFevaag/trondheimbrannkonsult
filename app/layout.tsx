import type { Metadata } from 'next'
import { Lato, Dancing_Script } from 'next/font/google'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trondheimbrannkonsult.no'),
  title: 'Brannprosjektering i Trondheim | Trondheim Brannkonsult',
  description:
    'Trondheim Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Trondheim og Trøndelag. Sentralt godkjent foretak. Få uforpliktende tilbud i dag.',
  alternates: { canonical: 'https://www.trondheimbrannkonsult.no' },
  openGraph: {
    title: 'Brannprosjektering i Trondheim | Trondheim Brannkonsult',
    description: 'Trondheim Brannkonsult tilbyr brannkonsept, brannprosjektering og branninspeksjon i Trondheim og Trøndelag.',
    url: 'https://www.trondheimbrannkonsult.no',
    siteName: 'Trondheim Brannkonsult',
    locale: 'nb_NO',
    type: 'website',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Trondheim Brannkonsult' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService'],
      '@id': 'https://www.trondheimbrannkonsult.no/#business',
      name: 'Trondheim Brannkonsult AS',
      description: 'Sentralt godkjent brannprosjekteringsfirma i Trondheim. Vi tilbyr brannkonsept, brannprosjektering, branninspeksjon og uavhengig kontroll i Trondheim og Trøndelag.',
      telephone: '+4745601942',
      email: 'post@brannkonsult.no',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Haakon VII\'s gate 6',
        addressLocality: 'Oslo',
        addressRegion: 'Oslo',
        postalCode: '0161',
        addressCountry: 'NO',
      },
      geo: { '@type': 'GeoCoordinates', latitude: 63.4305, longitude: 10.3951 },
      url: 'https://www.trondheimbrannkonsult.no',
      logo: 'https://www.trondheimbrannkonsult.no/images/logo-black.png',
      image: 'https://www.trondheimbrannkonsult.no/images/hero.jpg',
      priceRange: 'Fra kr 15 000',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '16:00' },
      ],
      areaServed: [
        { '@type': 'City', name: 'Trondheim' },
        { '@type': 'AdministrativeArea', name: 'Trøndelag' },
      ],
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Sentral godkjenning',
        name: 'Sentralt godkjent for brannprosjektering tiltaksklasse 1 og 2 (DiBK)',
      },
      sameAs: ['https://www.proff.no'],
      foundingDate: '2013',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.trondheimbrannkonsult.no/#website',
      url: 'https://www.trondheimbrannkonsult.no',
      name: 'Trondheim Brannkonsult',
      inLanguage: 'nb-NO',
      publisher: { '@id': 'https://www.trondheimbrannkonsult.no/#business' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className={`${lato.variable} ${dancing.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={lato.className}>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
