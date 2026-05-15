import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import {
  ABOUT_STORY_LONG,
  COMPANY_LOCATION,
  COMPANY_NAME,
  PRIMARY_CTA_LABEL,
} from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: `About ${COMPANY_NAME} | Edinburgh-based AI products & engineering`,
  description: `${COMPANY_NAME} builds integration platforms, AI products, and custom software for healthcare, fintech, IoT, and compliance. Based in ${COMPANY_LOCATION}.`,
}

const values = [
  {
    title: "Products and services, together",
    body: "We build and release our own products in parallel with client work. It keeps us honest about what actually has to ship — not what looks good in a slide.",
  },
  {
    title: "Domain before model",
    body: "The right answer for a hospital is not the right answer for a bank. We learn the domain first; the model is the easy part.",
  },
  {
    title: "Privacy by design",
    body: "HIPAA, SOC 2, and ISO 27001 alignment baked in from the first commit. End-to-end encryption is the default, not the upgrade.",
  },
  {
    title: "Dedicated, not pooled",
    body: "Engineers are assigned directly to your project — the same team from discovery through production. No throw-overs, no handoffs.",
  },
]

const capabilities = [
  { label: "Healthcare", body: "EHR integration, ambient documentation, medical AI." },
  { label: "Fintech", body: "Payments infrastructure, compliance automation, risk scoring." },
  { label: "IoT & Real-time", body: "Voice agents, telemetry pipelines, edge intelligence." },
  { label: "Compliance", body: "SOC 2, ISO 27001, HIPAA — automated and audit-ready." },
]

export default function AboutPage() {
  return (
    <main className="relative bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            About
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-6 max-w-[18ch]">
            Technology that solves{" "}
            <span className="font-serif italic font-normal text-brand-blue">
              real problems.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[62ch] leading-[1.55] mt-8">
            {COMPANY_NAME} is an Edinburgh-based product and engineering studio.
            We build integration platforms, AI products, and custom software
            for teams in healthcare, fintech, IoT, and compliance — and we ship
            dedicated engineering teams alongside.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                Story
              </span>
              <h2 className="font-display font-semibold text-ink text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] mt-4">
                Engineers, AI specialists, and product builders.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-ink-soft text-lg leading-[1.65]">
              {ABOUT_STORY_LONG.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-20 lg:py-32 border-t border-rule bg-surface">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Where we work
          </span>
          <h2 className="font-display font-semibold text-ink text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[20ch]">
            Four sectors. One discipline.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-12 mt-14">
            {capabilities.map((c) => (
              <div key={c.label}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-orange mb-3">
                  {c.label}
                </div>
                <p className="text-ink text-base lg:text-lg leading-[1.55]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            How we work
          </span>
          <h2 className="font-display font-semibold text-ink text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[20ch]">
            Four principles, applied every engagement.
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-y-16 mt-16">
            {values.map((v, i) => (
              <div key={v.title}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-display font-semibold text-ink text-[24px] lg:text-[28px] leading-[1.15] tracking-[-0.02em]">
                  {v.title}
                </h3>
                <p className="text-ink-soft text-base lg:text-lg leading-[1.6] mt-4 max-w-[48ch]">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-ink text-background">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="font-display font-semibold text-background text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] max-w-[26ch] mx-auto">
            Have something to build?
          </h2>
          <p className="text-background/70 text-lg lg:text-xl max-w-[58ch] mx-auto mt-6">
            Tell us about your problem. We'll share how we'd approach it in a
            30-minute call.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group mt-10"
          >
            {PRIMARY_CTA_LABEL}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
