"use client"

import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { FAQ } from "@/components/faq/faq"
import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowUpRight, Check, Mail, Calendar, MessageSquare } from "lucide-react"
import Image from "next/image"
import { COMPANY_EMAIL, COMPANY_NAME } from "@/lib/brand-copy"

const offerings = [
  {
    name: "Products",
    tagline: "Production-ready platforms",
    features: [
      "EHR Bridge — universal healthcare integration",
      "ComplianceOS — SOC 2 / ISO 27001 / HIPAA automation",
      "Call Center AI — sub-500ms voice agents",
      "CommBridge — unified comms across Slack, Teams, voice",
      "AutoPRD — autonomous dev pipeline",
      "Orynx Agents — multi-agent SDK, 100+ LLM providers",
    ],
    highlighted: true,
  },
  {
    name: "Services",
    tagline: "Dedicated engineering teams",
    features: [
      "Web development (Next.js, Vue, Node)",
      "AI & ML model development",
      "LLM integration & RAG",
      "Mobile, desktop & custom systems",
      "Same team, discovery to production",
    ],
    highlighted: false,
  },
  {
    name: "Healthcare specialists",
    tagline: "Clinical-grade products & integrations",
    features: [
      "Ambient Scribe — NHS-compliant transcription",
      "OpenEyes Cloud — ophthalmology EPR",
      "MedSynth — synthetic patient data",
      "DiaWound AI — diabetic wound analysis",
      "Orynx Education — virtual patient simulations",
    ],
    highlighted: false,
  },
]

const nextSteps = [
  {
    icon: MessageSquare,
    title: "We read every message",
    desc: `An engineer from ${COMPANY_NAME} replies, not a sales rep. We aim to respond inside one business day.`,
  },
  {
    icon: Calendar,
    title: "Discovery call",
    desc: "30 minutes on your systems, your data, and what you're trying to do. No pitch deck.",
  },
  {
    icon: Check,
    title: "Scoped proposal",
    desc: "If it's a fit, we send a fixed-scope plan within a week. If it's not, we say so.",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-background overflow-hidden border-b border-rule">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/home.png"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1800px"
            className="object-cover object-right-top opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 via-55% to-background/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 pt-[80px] pb-12 lg:pt-[96px] lg:pb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Speak with our team
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-5 max-w-[16ch]">
            Tell us what{" "}
            <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
              you're building.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
            An engineer will reply, usually within one business day. The first
            conversation is just about your systems, your stack, and what
            you're trying to do.
          </p>
        </div>
      </section>

      {/* Form + What happens next */}
      <section className="relative py-20 lg:py-28 border-b border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form column */}
          <div className="lg:col-span-7">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Send a message
            </span>
            <h2 className="font-display font-semibold text-ink text-3xl lg:text-4xl tracking-[-0.02em] mt-3">
              Start the conversation.
            </h2>

            {submitted ? (
              <div className="mt-8 p-6 rounded-xl border border-rule bg-surface">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="w-5 h-5 text-brand-blue" />
                  <span className="font-semibold text-ink">Got it — thanks.</span>
                </div>
                <p className="text-ink-soft text-sm leading-relaxed">
                  We'll reply from a real {COMPANY_NAME} engineer, usually
                  within one business day. If it's urgent, email{" "}
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-blue hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-sm font-medium text-ink mb-1.5">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      className="w-full h-11 px-4 rounded-md border border-rule bg-background text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="Jane Doe"
                    />
                  </label>
                  <label className="block">
                    <span className="block text-sm font-medium text-ink mb-1.5">Work email</span>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full h-11 px-4 rounded-md border border-rule bg-background text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand-blue transition-colors"
                      placeholder="jane@company.com"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="block text-sm font-medium text-ink mb-1.5">Company</span>
                  <input
                    type="text"
                    name="company"
                    className="w-full h-11 px-4 rounded-md border border-rule bg-background text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand-blue transition-colors"
                    placeholder="Company name"
                  />
                </label>
                <label className="block">
                  <span className="block text-sm font-medium text-ink mb-1.5">What are you trying to do?</span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-rule bg-background text-ink placeholder:text-ink-muted focus:outline-none focus:border-brand-blue transition-colors resize-y"
                    placeholder="A few sentences on the problem, the systems involved, and what success looks like."
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group"
                >
                  Send message
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <p className="text-xs text-ink-muted">
                  Or email us directly at{" "}
                  <a href={`mailto:${COMPANY_EMAIL}`} className="text-brand-blue hover:underline">
                    {COMPANY_EMAIL}
                  </a>
                  .
                </p>
              </form>
            )}
          </div>

          {/* Next steps column */}
          <div className="lg:col-span-5">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              What happens next
            </span>
            <h2 className="font-display font-semibold text-ink text-3xl lg:text-4xl tracking-[-0.02em] mt-3">
              Three steps. No deck.
            </h2>
            <ul className="mt-8 space-y-6">
              {nextSteps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                    <step.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        0{i + 1}
                      </span>
                      <h3 className="font-display font-semibold text-ink text-lg">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-ink-soft text-sm leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-rule">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-4 h-4 text-ink-muted" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                  Direct
                </span>
              </div>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="font-display font-semibold text-ink text-xl hover:text-brand-blue transition-colors"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What you're choosing */}
      <section className="relative py-20 lg:py-28 bg-surface border-b border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="max-w-[60ch] mb-14">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              What you can buy
            </span>
            <h2 className="font-display font-semibold text-ink text-4xl lg:text-5xl tracking-[-0.02em] mt-3">
              Products, services,{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                or both.
              </span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mt-5">
              Most engagements pair one of our platforms with a dedicated team
              to integrate it. Pricing is custom — tell us what you run and
              what you want different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offerings.map((offering) => (
              <motion.div
                key={offering.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`relative p-7 rounded-2xl border ${
                  offering.highlighted
                    ? "border-brand-blue/40 bg-background shadow-[0_8px_32px_-12px_rgba(0,53,192,0.15)]"
                    : "border-rule bg-background"
                }`}
              >
                {offering.highlighted && (
                  <span className="absolute -top-3 left-7 px-3 py-1 rounded-full bg-accent-orange text-white text-[10px] font-mono uppercase tracking-[0.18em]">
                    Flagship
                  </span>
                )}
                <h3 className="font-display font-semibold text-ink text-xl tracking-[-0.01em]">
                  {offering.name}
                </h3>
                <p className="text-ink-soft text-sm mt-1.5">{offering.tagline}</p>
                <ul className="mt-6 space-y-3">
                  {offering.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-ink-soft leading-relaxed">
                      <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <Footer />
    </main>
  )
}
