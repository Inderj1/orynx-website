import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: "Case Studies | Stratax Labs",
  description:
    "Stories from the field. How enterprise teams shipped AI with Stratax Labs — across SAP, Salesforce, Oracle, and beyond.",
}

const teasers = [
  {
    industry: "Manufacturing",
    metric: "$2.4M",
    metricLabel: "Working capital released",
    summary:
      "A global parts manufacturer cut excess inventory across 14 plants by deploying a CAMP-framework supply-chain agent on top of their SAP S/4 stack.",
  },
  {
    industry: "Field Services",
    metric: "37%",
    metricLabel: "First-time-fix improvement",
    summary:
      "LEDGERLY FIELD agents triaged work orders, pre-staged parts, and rerouted technicians in real time — without replacing the existing FSM platform.",
  },
  {
    industry: "Finance & AR",
    metric: "11 days",
    metricLabel: "Reduction in DSO",
    summary:
      "LEDGERLY PRO automated cash application and dunning across NetSuite + Salesforce, freeing the AR team for the cases the model couldn't reach.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="relative bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Case Studies
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-6 max-w-[18ch]">
            Stories from the{" "}
            <span className="font-serif italic font-normal text-brand-blue">
              field.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[62ch] leading-[1.55] mt-8">
            Real deployments, real numbers. The case studies below are summary
            previews — request the full write-up for the architecture,
            integration details, and what we'd do differently next time.
          </p>
        </div>
      </section>

      {/* Teaser grid */}
      <section className="border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          {teasers.map((t, i) => (
            <article
              key={t.industry}
              className={`py-16 lg:py-20 ${
                i > 0 ? "border-t border-rule" : ""
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-baseline">
                <div className="lg:col-span-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {t.industry}
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <div className="font-display font-semibold text-ink text-5xl lg:text-6xl tracking-[-0.025em] leading-none">
                    {t.metric}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted mt-3">
                    {t.metricLabel}
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-ink text-lg lg:text-xl leading-[1.5] max-w-[52ch]">
                    {t.summary}
                  </p>
                  <a
                    href="/pricing"
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-blue hover:text-brand-blue-bright transition-colors duration-150 mt-6 group"
                  >
                    Request the full case study
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
                <div className="lg:col-span-1 hidden lg:flex justify-end">
                  <ArrowUpRight className="w-6 h-6 text-ink-muted" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-ink text-background border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="font-display font-semibold text-background text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] max-w-[24ch] mx-auto">
            Don't see your problem?
          </h2>
          <p className="text-background/70 text-lg lg:text-xl max-w-[58ch] mx-auto mt-6">
            Tell us what you're working on. We'll share the closest analog from
            our delivery history and what we'd recommend for your stack.
          </p>
          <a
            href="/pricing"
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
