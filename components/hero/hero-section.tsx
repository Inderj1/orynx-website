"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { HERO_EYEBROW, PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

const stats = [
  { value: "40+", label: "ERP CONNECTORS" },
  { value: "99.5%", label: "AGENT ACCURACY" },
  { value: "4", label: "GRAPH NETWORKS" },
]

const trustLogos = [
  "sap", "oracle", "salesforce", "netsuite", "dynamics-365",
  "databricks", "aws", "azure", "sage", "hubspot",
]

export function HeroSection() {
  return (
    <>
      {/* Hero — single composition: text + stats over a backgrounded image */}
      <section className="relative bg-background overflow-hidden">
        {/* Background image — full-bleed, contained so nothing is clipped, ambient on the right */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/home.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1800px"
            className="object-cover object-right-top"
          />
          {/* Left scrim: dense over the headline column, fully transparent over the illustration */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 via-40% to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 pt-[80px] pb-12 lg:pt-[96px] lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[60ch]"
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              {HERO_EYEBROW}
            </span>

            <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-[-0.025em] mt-5 max-w-[16ch]">
              Where{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                enterprise AI
              </span>{" "}
              gets built.
            </h1>

            <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
              Stratax Labs designs, builds, and deploys AI that creates real
              business value. From strategy through closed-loop write-back,
              with measurable impact across SAP, Salesforce, and Oracle.
            </p>

            <div className="flex flex-wrap items-center gap-2 mt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group"
              >
                {PRIMARY_CTA_LABEL}
                <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Stats — folded into the hero, sitting on the bottom-fade ground */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 lg:mt-20 pt-10 border-t border-rule grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={i > 0 ? "sm:border-l sm:border-rule sm:pl-8" : ""}
              >
                <div className="font-display font-semibold text-ink text-5xl lg:text-[56px] tracking-[-0.025em] leading-none">
                  {stat.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
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
