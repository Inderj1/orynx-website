import React from "react"
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Space_Mono } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-sans'
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono'
})
const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono'
})

export const metadata: Metadata = {
  title: 'StrataxAI | The AI Operating System for Enterprise',
  description: 'StrataxAI is the intelligence layer that makes your data platforms self-learning, conversational, and profitable. Connect to SAP, Salesforce, Oracle — without moving your data. Measurable financial impact across inventory, working capital, forecasting, and profitability.',
  generator: 'v0.app',
  keywords: ['operational intelligence', 'self-learning AI', 'enterprise AI', 'closed-loop write-back', 'CAMP framework', 'StrataxAI', 'AI operating system'],
  openGraph: {
    title: 'StrataxAI | The AI Operating System for Enterprise',
    description: 'Self-learning AI that connects to your enterprise data, reasons across systems, and writes intelligent decisions back autonomously.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StrataxAI | The AI Operating System for Enterprise',
    description: 'Self-learning AI that connects to your enterprise data, reasons across systems, and writes intelligent decisions back autonomously.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${spaceMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
