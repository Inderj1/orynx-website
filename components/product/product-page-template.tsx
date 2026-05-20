"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { CTASection } from "@/components/cta/cta-section"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

export type Accent = "teal" | "gold" | "coral" | "blue"

export type ProductFeature = {
  icon: ReactNode
  title: string
  description: string
}

export type ProductMetric = {
  value: string
  label: string
  icon?: ReactNode
}

export type ProductIntegration = {
  category: string
  items: string[]
}

export type ProductPageProps = {
  eyebrow: string
  heroImage: string
  heroBackgroundPosition?: string
  name: string
  headline: React.ReactNode
  description: string
  accent: Accent
  features: ProductFeature[]
  metrics?: ProductMetric[]
  integrations?: ProductIntegration[]
  callouts?: { label: string; body: string }[]
  ctaHref?: string
}

const accentMap: Record<Accent, { dot: string; text: string; bg: string; ring: string; pill: string }> = {
  teal: {
    dot: "bg-teal",
    text: "text-teal",
    bg: "bg-teal/10",
    ring: "hover:border-teal/30",
    pill: "bg-teal/10 text-teal border-teal/15",
  },
  gold: {
    dot: "bg-gold",
    text: "text-gold",
    bg: "bg-gold/10",
    ring: "hover:border-gold/30",
    pill: "bg-gold/10 text-gold border-gold/15",
  },
  coral: {
    dot: "bg-coral",
    text: "text-coral",
    bg: "bg-coral/10",
    ring: "hover:border-coral/30",
    pill: "bg-coral/10 text-coral border-coral/15",
  },
  blue: {
    dot: "bg-brand-blue",
    text: "text-brand-blue",
    bg: "bg-brand-blue/10",
    ring: "hover:border-brand-blue/30",
    pill: "bg-brand-blue/10 text-brand-blue border-brand-blue/15",
  },
}

function FeatureGrid({ features, accent }: { features: ProductFeature[]; accent: Accent }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const c = accentMap[accent]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full ${c.bg} ${c.text} text-sm font-medium mb-4`}>
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for the hard parts.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className={`bg-card border border-border rounded-2xl p-6 ${c.ring} transition-colors duration-300`}
              style={{ boxShadow: "var(--bento-shadow)" }}
            >
              <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function IntegrationsSection({
  integrations,
  callouts,
  accent,
}: {
  integrations: ProductIntegration[]
  callouts?: { label: string; body: string }[]
  accent: Accent
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const c = accentMap[accent]

  return (
    <section ref={ref} className="py-24 bg-muted/30 border-t border-rule">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full ${c.bg} ${c.text} text-sm font-medium mb-4`}>
            Integrations & stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Plays nice with what you run.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-7 space-y-8">
            {integrations.map((cat) => (
              <div key={cat.category}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-3">
                  {cat.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {callouts && callouts.length > 0 && (
            <div className="lg:col-span-5 space-y-4">
              {callouts.map((co) => (
                <div
                  key={co.label}
                  className="bg-card border border-border rounded-2xl p-6"
                  style={{ boxShadow: "var(--bento-shadow)" }}
                >
                  <div className={`font-mono text-[11px] uppercase tracking-[0.18em] ${c.text} mb-2`}>
                    {co.label}
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{co.body}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function MetricsSection({ metrics, accent }: { metrics: ProductMetric[]; accent: Accent }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const c = accentMap[accent]

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className={`inline-block px-4 py-1.5 rounded-full ${c.bg} ${c.text} text-sm font-medium mb-4`}>
            Benchmarks
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            What it does, in numbers.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="bg-card border border-border rounded-2xl p-5 text-center"
              style={{ boxShadow: "var(--bento-shadow)" }}
            >
              {m.icon ? (
                <div className={`w-8 h-8 rounded-lg ${c.bg} ${c.text} flex items-center justify-center mx-auto mb-2`}>
                  {m.icon}
                </div>
              ) : null}
              <div className={`text-xl md:text-2xl font-bold ${c.text} leading-[1.1] text-balance break-words hyphens-auto`}>
                {m.value}
              </div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">{m.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ProductPageTemplate(props: ProductPageProps) {
  const {
    eyebrow,
    heroImage,
    heroBackgroundPosition = "object-right-top",
    name,
    headline,
    description,
    accent,
    features,
    metrics,
    integrations,
    callouts,
    ctaHref = "/contact",
  } = props

  const c = accentMap[accent]

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-background overflow-hidden border-b border-rule">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1800px"
            className={`object-cover opacity-80 ${heroBackgroundPosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 via-55% to-background/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 pt-[80px] pb-12 lg:pt-[96px] lg:pb-16">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${c.dot}`} />
            {eyebrow}
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.025em] mt-5 max-w-[18ch]">
            {headline}
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group"
            >
              {PRIMARY_CTA_LABEL}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 h-12 px-5 text-[15px] font-semibold text-ink hover:text-brand-blue transition-colors duration-150 group"
            >
              See all products
              <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <FeatureGrid features={features} accent={accent} />

      {integrations && integrations.length > 0 && (
        <IntegrationsSection integrations={integrations} callouts={callouts} accent={accent} />
      )}

      {metrics && metrics.length > 0 && <MetricsSection metrics={metrics} accent={accent} />}

      {/* Why this product */}
      <section className="py-20 lg:py-24 border-t border-rule">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <span className={`inline-block px-4 py-1.5 rounded-full ${c.bg} ${c.text} text-sm font-medium mb-4`}>
              Why {name}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Production-grade, not a prototype.
            </h2>
            <ul className="space-y-4 mt-8">
              {[
                "Built and run by Orynx engineers — not handed off to a vendor.",
                "Privacy-by-design: end-to-end encryption, HIPAA / SOC 2 / ISO 27001 alignment.",
                "Pairs with our dedicated engineering teams for integration, customisation, and support.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 ${c.text} mt-0.5 flex-shrink-0`} />
                  <span className="text-foreground text-base lg:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
