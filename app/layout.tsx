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
  title: 'Stratax Labs',
  description: 'Stratax Labs designs, builds, and deploys enterprise AI. From strategy through closed-loop write-back, with measurable impact across SAP, Salesforce, and Oracle.',
  keywords: ['Stratax Labs', 'enterprise AI', 'AI agents', 'closed-loop write-back', 'CAMP framework', 'Atvantiq Solutions', 'StrataxAI', 'AI Operating System'],
  openGraph: {
    title: 'Stratax Labs',
    description: 'We design, build, and deploy AI that creates real business value. From strategy through closed-loop write-back, with measurable impact across SAP, Salesforce, and Oracle.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stratax Labs',
    description: 'We design, build, and deploy AI that creates real business value. From strategy through closed-loop write-back.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${urbanist.variable} ${fragmentMono.variable} ${hedvigSerif.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
