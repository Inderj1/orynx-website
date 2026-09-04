import React from "react"
import type { Metadata } from 'next'
import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from 'next/font/google'
import { Navigation } from '@/components/landing/navigation'
import { FooterSection } from '@/components/landing/footer-section'
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

export const metadata: Metadata = {
  metadataBase: new URL('https://orynx.ai'),
  title: {
    default: 'ORYNX — Applied AI that runs the work',
    template: '%s — ORYNX',
  },
  description: 'Orynx builds applied AI that handles calls, messages, scheduling and operations for businesses and clinical teams.',
  openGraph: {
    siteName: 'ORYNX',
    type: 'website',
    images: ['/assets/orynx-hero.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {/* overflow-x-clip (not hidden) so this wrapper never becomes a scroll container, which would break position: sticky */}
        <div className="relative min-h-screen overflow-x-clip noise-overlay">
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-5 focus:py-2 focus:rounded-full focus:bg-foreground focus:text-background focus:text-sm"
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main">{children}</main>
          <FooterSection />
        </div>
      </body>
    </html>
  )
}
