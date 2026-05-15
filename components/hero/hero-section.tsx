"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import { HERO_EYEBROW, PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

const trustLogos = [
  "sap", "oracle", "salesforce", "netsuite", "dynamics-365",
  "databricks", "aws", "azure", "sage", "hubspot",
]

export function HeroSection() {
  return (
    <>
      {/* Hero — text-led composition over a backgrounded image */}
      <section className="relative bg-background overflow-hidden">
        {/* Background image — full-bleed, ambient on the right */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/home.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1800px"
            className="object-cover object-right-top"
          />
          {/* Left scrim: dense over the headline column, transparent over the illustration */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 via-40% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 pt-[120px] pb-24 lg:pt-[160px] lg:pb-32 min-h-[560px] lg:min-h-[640px] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[60ch]"
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              {HERO_EYEBROW}
            </span>

            <h1 className="font-display font-semibold text-ink text-[40px] sm:text-[60px] lg:text-[80px] xl:text-[96px] leading-[1.05] tracking-[-0.025em] mt-6 max-w-[16ch]">
              Software for the{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                hard sectors.
              </span>
            </h1>

            <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-8">
              Production-ready platforms for healthcare, fintech, IoT, and
              compliance — where deep integration, real-time AI, and
              audit-grade rigour all matter at once.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group"
              >
                {PRIMARY_CTA_LABEL}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center gap-2 h-12 px-5 text-[15px] font-semibold text-ink hover:text-brand-blue transition-colors duration-150 group"
              >
                Browse the products
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-background border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-6">
            Trusted by teams shipping on
          </div>
          <div className="relative overflow-hidden">
            <div
              className="flex items-center gap-12 lg:gap-16"
              style={{ animation: "scroll-left 60s linear infinite" }}
            >
              {[...trustLogos, ...trustLogos].map((logo, i) => (
                <div
                  key={`${logo}-${i}`}
                  className="flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-200"
                >
                  <Image
                    src={`/logos/${logo}.svg`}
                    alt={logo}
                    width={120}
                    height={32}
                    className="h-7 lg:h-8 w-auto object-contain grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
