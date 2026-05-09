import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: "Insights | Stratax Labs",
  description:
    "Notes from the lab. Field-tested perspectives on enterprise AI agents, data integration, and closed-loop write-back from the Stratax Labs team.",
}

const previews = [
  {
    tag: "Architecture",
    title: "Why your AI agents need a four-tier trust model",
    teaser:
      "A note on policy, escalation, and the gap between 'works in eval' and 'works in production' — and the four trust tiers we use to bridge it.",
  },
  {
    tag: "Integration",
    title: "Connecting to SAP without moving your data",
    teaser:
      "The Enterprise Data Bridge pattern: how Stratax Labs grounds agents in your SAP, Salesforce, and Oracle context without an ETL project.",
  },
  {
    tag: "Field Notes",
    title: "What 40 ERP integrations taught us about agent memory",
    teaser:
      "Graph memory, working memory, and the distinction that turned out to matter most when an agent has to operate across a manufacturing month-end.",
  },
]

export default function InsightsPage() {
  return (
    <main className="relative bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Insights
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-6 max-w-[18ch]">
            Notes from the{" "}
            <span className="font-serif italic font-normal text-brand-blue">
              lab.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[62ch] leading-[1.55] mt-8">
            Architecture decisions, integration patterns, and field notes from
            shipping enterprise AI. New posts cadence is monthly.
          </p>
        </div>
      </section>

      {/* Preview grid */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {previews.map((p, i) => (
            <article
              key={p.title}
              className={`py-12 lg:py-16 ${
                i > 0 ? "border-t border-rule" : ""
              } group`}
            >
              <a href="#" className="block">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
                  <div className="lg:col-span-3">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                      {p.tag}
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-orange mt-2">
                      Coming soon
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <h2 className="font-display font-semibold text-ink text-[28px] lg:text-[36px] leading-[1.1] tracking-[-0.02em] max-w-[24ch] group-hover:text-brand-blue transition-colors duration-150">
                      {p.title}
                    </h2>
                    <p className="text-ink-soft text-base lg:text-lg leading-[1.6] mt-4 max-w-[60ch]">
                      {p.teaser}
                    </p>
                  </div>
                  <div className="lg:col-span-1 hidden lg:flex justify-end">
                    <ArrowUpRight className="w-6 h-6 text-ink-muted group-hover:text-brand-blue transition-colors duration-150" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-ink text-background border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="font-display font-semibold text-background text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] max-w-[26ch] mx-auto">
            Want this in your inbox?
          </h2>
          <p className="text-background/70 text-lg lg:text-xl max-w-[58ch] mx-auto mt-6">
            We send one note a month — short, technical, no fluff. Talk to us
            and we'll add you to the list.
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
