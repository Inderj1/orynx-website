import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Urbanist, Fragment_Mono, Hedvig_Letters_Serif } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})
const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
})
const fragmentMono = Fragment_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
})
const hedvigSerif = Hedvig_Letters_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://orynx.co.uk'),
  title: 'Orynx — AI Products & Software Engineering',
  description: 'Orynx builds integration platforms, AI products, and custom software serving healthcare, fintech, IoT, and compliance. EHR Bridge, ComplianceOS, Call Center AI, CommBridge, and the Orynx Agents SDK.',
  keywords: ['Orynx', 'AI agents', 'multi-agent SDK', 'EHR integration', 'FHIR R4', 'ComplianceOS', 'CommBridge', 'Call Center AI', 'healthcare AI', 'LLM integration', 'RAG'],
  openGraph: {
    title: 'Orynx — AI Products & Software Engineering',
    description: 'Software that connects, automates, and scales. Integration platforms, AI products, and custom software across healthcare, fintech, IoT, and compliance.',
    type: 'website',
    siteName: 'Orynx',
    url: 'https://orynx.co.uk',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Orynx — AI Products & Software Engineering',
    description: 'Integration platforms, AI products, and custom software engineering. Edinburgh, Scotland.',
    images: ['/og-image.png'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ORYNX LTD',
  legalName: 'ORYNX LTD',
  url: 'https://orynx.co.uk',
  logo: 'https://orynx.co.uk/icon.png',
  description: 'Integration platforms, AI products, and custom software engineering.',
  foundingDate: '2024-05-09',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    addressCountry: 'GB',
  },
  email: 'admin@orynx.ai',
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${urbanist.variable} ${fragmentMono.variable} ${hedvigSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
