import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { COMPANY_NAME, PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: `Case Studies | ${COMPANY_NAME}`,
  description:
    "Stories from the field. How teams shipped real software with Orynx — across healthcare, fintech, IoT, and compliance.",
}

const teasers = [
  {
    industry: "Healthcare · Digital Health Platform",
    metric: "3 weeks",
    metricLabel: "Epic + Cerner + athenahealth, integrated",
    summary:
      "A US digital-health team needed live integration with three Tier-1 EHRs in a quarter. EHR Bridge shipped the first integration in week one and all three by the end of week three — instead of the six-month custom build they'd scoped.",
  },
  {
    industry: "Compliance · SaaS Scale-up",
    metric: "27 days",
    metricLabel: "From kickoff to SOC 2 Type I ready",
    summary:
      "A Series-B SaaS company needed SOC 2 to close enterprise contracts. ComplianceOS pulled evidence from AWS, Okta, GitHub, and Linear continuously while an Orynx engineer ran the readiness sprint. They passed first audit attempt.",
  },
  {
    industry: "IoT · Healthcare Voice",
    metric: "<500ms",
    metricLabel: "End-to-end voice latency in production",
    summary:
      "A clinical scheduling provider replaced their IVR with Call Center AI. Sub-500ms voice loops in four languages, human handoff on confidence drops, and a 40% reduction in calls reaching live agents — without sacrificing patient experience.",
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
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-6 max-w-[18ch]">
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
                    href="/contact"
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
