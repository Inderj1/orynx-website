import React from "react"
import { Navigation } from "@/components/landing/navigation"
import { FooterSection } from "@/components/landing/footer-section"

/* Site chrome for the marketing pages. /hello cards sit outside this group and render without it. */
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // overflow-x-clip (not hidden) so this wrapper never becomes a scroll container, which would break position: sticky
  return (
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
  )
}
