import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSans = Instrument_Sans({ 
  subsets: ["latin"],
  variable: '--font-instrument'
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: '--font-instrument-serif'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

const SITE_URL = 'https://orynx.ai'
const SITE_DESCRIPTION =
  'Orynx builds applied AI intelligence for service businesses and clinics: it takes work as it arrives, from calls and messages to consultations and books, understands it, acts on it, and brings a person in when judgment matters.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Tab shows just "ORYNX"; pages that export a title get "Name — ORYNX".
  title: {
    default: 'ORYNX',
    template: '%s — ORYNX',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: 'ORYNX',
    type: 'website',
    url: SITE_URL,
    title: 'ORYNX',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORYNX',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ORYNX LTD',
  legalName: 'ORYNX LTD',
  url: SITE_URL,
  logo: `${SITE_URL}/apple-icon.png`,
  description: SITE_DESCRIPTION,
  foundingDate: '2024-05-09',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    addressCountry: 'GB',
  },
  email: 'support@orynx.ai',
  telephone: '+447985309592',
  taxID: 'SC809987',
  sameAs: [
    'https://uk.linkedin.com/company/orynx',
    'https://github.com/orgs/Orynx-uk',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
