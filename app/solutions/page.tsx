"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { useRef, useState, useEffect } from "react"
import {
  HeartPulse, Landmark, Cpu, ShieldCheck,
  ArrowRight, ArrowUpRight, Workflow, Database, Brain, Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

/* ─── Hover-shine card ─── */
function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card px-6 pt-6 pb-8 transition-all duration-300 ${className}`}
      style={{ boxShadow: "var(--bento-shadow)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, transparent 0%, transparent 30%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 55%, transparent 70%, transparent 100%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

function AnimatedCard({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "left" | "right"
  className?: string
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [delay])

  const translateClass = {
    up: "translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
  }[direction]

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translateClass}`
      }`}
    >
      {children}
    </div>
  )
}

const sectors = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    accent: "teal",
    color: { bg: "bg-teal/10", text: "text-teal", border: "hover:border-teal/30", dot: "bg-teal" },
    description:
      "Clinical-grade integration and AI for hospitals, digital health teams, and clinical researchers. Live in NHS and US deployments today.",
    useCases: [
      "EHR integration across 78+ platforms (EHR Bridge)",
      "Real-time clinical transcription (Ambient Scribe)",
      "Ophthalmology EPR (OpenEyes Cloud)",
      "Diabetic wound triage (DiaWound AI)",
      "Synthetic patient data for AI training (MedSynth)",
      "Healthcare education & simulation (Orynx Education)",
    ],
    href: "/products/ehr-bridge",
    cta: "See EHR Bridge",
  },
  {
    icon: Landmark,
    title: "Fintech",
    accent: "blue",
    color: { bg: "bg-brand-blue/10", text: "text-brand-blue", border: "hover:border-brand-blue/30", dot: "bg-brand-blue" },
    description:
      "Payments infrastructure, risk scoring, and unified comms for fintech teams. Custom engineering when off-the-shelf doesn't fit.",
    useCases: [
      "Payments orchestration & ledger systems",
      "Risk scoring & fraud detection ML",
      "RAG-powered analyst copilots",
      "Voice agents for collections & support",
      "Audit-ready compliance posture",
    ],
    href: "/services#ai-machine-learning",
    cta: "See AI / ML services",
  },
  {
    icon: Cpu,
    title: "IoT & Real-time",
    accent: "coral",
    color: { bg: "bg-coral/10", text: "text-coral", border: "hover:border-coral/30", dot: "bg-coral" },
    description:
      "Real-time pipelines, voice, and edge intelligence. Sub-500ms voice loops, durable telemetry ingest, and on-device ML.",
    useCases: [
      "Sub-500ms voice agents (Call Center AI)",
      "Unified comms layer (CommBridge)",
      "Telemetry pipelines at scale",
      "Edge inference & on-device ML",
      "Multi-protocol device integration",
    ],
    href: "/products/call-center-ai",
    cta: "See Call Center AI",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    accent: "gold",
    color: { bg: "bg-gold/10", text: "text-gold", border: "hover:border-gold/30", dot: "bg-gold" },
    description:
      "SOC 2, ISO 27001, and HIPAA — automated and audit-ready. ComplianceOS plus our compliance engineers run the readiness sprint with you.",
    useCases: [
      "SOC 2 Type I & Type II",
      "ISO 27001",
      "HIPAA (BAA-ready deployments)",
      "GDPR data flows",
      "Continuous control monitoring",
      "One-click auditor exports",
    ],
    href: "/products/compliance-os",
    cta: "See ComplianceOS",
  },
]

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Connect",
    description:
      "We start at the systems edge — EHR, ERP, payment rails, telephony. EHR Bridge and CommBridge handle the protocol mess so your app stays simple.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Build",
    description:
      "Dedicated engineers ship the workflows on top — using our own platforms where they fit, custom code where they don't. Same team, discovery to production.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Run",
    description:
      "Production-grade observability, ongoing support, and iteration. Privacy-by-design throughout: HIPAA, SOC 2, ISO 27001 alignment from day one.",
  },
]

export default function SolutionsPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-background overflow-hidden border-b border-rule">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/agents.png"
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
            Solutions
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-5 max-w-[16ch]">
            Built for the{" "}
            <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
              hard sectors.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
            Healthcare, fintech, IoT, and compliance — the four sectors where
            integration, real-time AI, and audit-grade rigour all matter at
            the same time.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group"
            >
              {PRIMARY_CTA_LABEL}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#sectors"
              className="inline-flex items-center gap-2 h-12 px-5 text-[15px] font-semibold text-ink hover:text-brand-blue transition-colors duration-150 group"
            >
              See sectors
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section id="sectors" className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedCard delay={0} direction="up">
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-medium text-teal uppercase tracking-wider">
                Where we work
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Four sectors. One discipline.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every sector here demands the same combination: deep
                integration, real-time AI, and the privacy posture that gets
                you through procurement.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {sectors.map((s, i) => {
              const Icon = s.icon
              return (
                <AnimatedCard key={s.title} delay={80 + i * 60} direction="up">
                  <BentoCard className={`flex flex-col h-full min-h-[360px] ${s.color.border}`}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl ${s.color.bg} ${s.color.text} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {s.description}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 mb-5">
                      {s.useCases.map((uc) => (
                        <li key={uc} className="flex items-start gap-2.5">
                          <span className={`w-1.5 h-1.5 rounded-full ${s.color.dot} mt-1.5 flex-shrink-0`} />
                          <span className="text-sm text-muted-foreground leading-snug">{uc}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={s.href}
                      className={`mt-auto inline-flex items-center gap-1 text-sm font-semibold ${s.color.text} hover:underline`}
                    >
                      {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </BentoCard>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="py-20 lg:py-24 bg-muted/30 border-t border-rule">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mb-14">
            <span className="text-sm font-medium text-teal uppercase tracking-wider">
              How we engage
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
              Three steps. Same team throughout.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {steps.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.number} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-card border border-border flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal" />
                    </div>
                    <span className="text-4xl font-bold text-teal/30">{s.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
