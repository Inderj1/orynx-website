import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: "Services | Stratax Labs",
  description:
    "From strategy to production. Stratax Labs offers the full lifecycle of enterprise AI — strategy, build, and deploy — with measurable impact across SAP, Salesforce, and Oracle.",
}

const services = [
  {
    n: "01",
    label: "Strategy",
    headline: "Find the AI that earns its keep.",
    body: "We start where the money is. Opportunity sizing, data readiness, build-vs-buy, and a sequenced roadmap with named owners and a 90-day first milestone.",
    points: [
      "Opportunity assessment",
      "Data & integration audit",
      "AI architecture roadmap",
      "Vendor / build decision",
    ],
  },
  {
    n: "02",
    label: "Build",
    headline: "Agents that work the way your team works.",
    body: "We build the data bridge to your SAP, Salesforce, and Oracle, ground the agents in your domain context, and ship them with the CAMP framework — context, action, memory, policy.",
    points: [
      "Enterprise data bridge",
      "CAMP-framework agents",
      "Custom domain training",
      "Closed-loop write-back",
    ],
  },
  {
    n: "03",
    label: "Deploy",
    headline: "Production from day one.",
    body: "Observability, evals, rollback paths, and human-in-the-loop where it matters. We hand you a system you can run — with the documentation, dashboards, and on-call runbooks to do it.",
    points: [
      "Production deployment",
      "Agent observability & evals",
      "Hand-off & training",
      "Ongoing optimization",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="relative bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Services
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-6 max-w-[20ch]">
            From strategy to{" "}
            <span className="font-serif italic font-normal text-brand-blue">
              production.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[62ch] leading-[1.55] mt-8">
            We support your business through the full lifecycle of enterprise AI
            — from finding the opportunity to running it in production. The same
            team end-to-end. No throw-overs.
          </p>
        </div>
      </section>

      {/* Three services */}
      <section className="border-t border-rule">
        {services.map((s, i) => (
          <div
            key={s.n}
            id={s.label.toLowerCase()}
            className={`py-20 lg:py-32 ${i > 0 ? "border-t border-rule" : ""}`}
          >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {s.n} · {s.label}
                  </div>
                  <h2 className="font-display font-semibold text-ink text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] mt-4 max-w-[14ch]">
                    {s.headline}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-8">
                  <p className="text-ink-soft text-lg lg:text-xl leading-[1.6] max-w-[60ch]">
                    {s.body}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-baseline gap-3 text-ink"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-orange">
                          ↳
                        </span>
                        <span className="text-base lg:text-lg">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-ink text-background border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="font-display font-semibold text-background text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] max-w-[24ch] mx-auto">
            Tell us about your problem.
          </h2>
          <p className="text-background/70 text-lg lg:text-xl max-w-[58ch] mx-auto mt-6">
            A 30-minute call. We share the path from strategy through
            deployment for your specific situation.
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
