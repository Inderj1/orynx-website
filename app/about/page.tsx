import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import {
  ACQUISITION_STORY_LONG,
  PRIMARY_CTA_LABEL,
} from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: "About Stratax Labs | The AI labs of StrataxAI",
  description:
    "Stratax Labs is the AI labs of StrataxAI, formed from the acquisition of Atvantiq Solutions. We design, build, and deploy enterprise AI from strategy through closed-loop write-back.",
}

const values = [
  {
    title: "Ship over speculate",
    body: "We measure ourselves on what reaches production, not what reaches a slide. Every engagement ends with something running.",
  },
  {
    title: "Closed-loop or it didn't happen",
    body: "Recommendations that don't write back are reports. We design AI that takes the action, then proves it worked.",
  },
  {
    title: "Domain before model",
    body: "The right answer for finance is not the right answer for field ops. We learn the domain first; the model is the easy part.",
  },
  {
    title: "Boring infrastructure, sharp results",
    body: "Predictable deployments, observable agents, auditable decisions. The clever lives in the outcomes, not the plumbing.",
  },
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
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-6 max-w-[18ch]">
            The AI labs of{" "}
            <span className="font-serif italic font-normal text-brand-blue">
              StrataxAI.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[62ch] leading-[1.55] mt-8">
            Stratax Labs designs, builds, and deploys enterprise AI for teams
            that need it to actually work — not just demo. Our products and
            services are shaped by the day-to-day reality of running SAP,
            Salesforce, and Oracle at scale.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="py-20 lg:py-32 border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                Origin
              </span>
              <h2 className="font-display font-semibold text-ink text-[36px] lg:text-[52px] leading-[1.02] tracking-[-0.025em] mt-4">
                Formerly Atvantiq Solutions.
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-ink-soft text-lg leading-[1.65]">
              {ACQUISITION_STORY_LONG.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
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
            Ready to ship enterprise AI?
          </h2>
          <p className="text-background/70 text-lg lg:text-xl max-w-[58ch] mx-auto mt-6">
            Tell us about your problem. We'll share the path from strategy to
            deployment in a 30-minute call.
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
