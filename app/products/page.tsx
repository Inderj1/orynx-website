"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { useRef, useState, useEffect } from "react"
import {
  Network, Shield, Bot, MessageSquare, Code2, BrainCircuit,
  Activity, Eye, Sparkles, GraduationCap, ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

/* ─── Hover-shine wrapper ─── */
function BentoCard({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-teal/30 ${className}`}
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

/* ─── Animated entrance wrapper ─── */
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

/* ─── Product data ─── */

type Product = {
  id: string
  href: string
  name: string
  tagline: string
  description: string
  icon: typeof Network
  accent: "teal" | "gold" | "coral" | "blue"
  bullets: string[]
}

const platformProducts: Product[] = [
  {
    id: "ehr-bridge",
    href: "/products/ehr-bridge",
    name: "EHR Bridge",
    tagline: "Universal healthcare data integration",
    description:
      "Plaid for EHR. Real-time bidirectional sync across 78+ platforms — Epic, Cerner, Allscripts, athenahealth — with FHIR R4 and HL7 support.",
    icon: Network,
    accent: "teal",
    bullets: ["78+ EHR connectors", "FHIR R4 / HL7", "<2s sync", "HIPAA-compliant"],
  },
  {
    id: "compliance-os",
    href: "/products/compliance-os",
    name: "ComplianceOS",
    tagline: "Compliance automation with AI workflows",
    description:
      "SOC 2, ISO 27001, and HIPAA automation across 12+ tool integrations with continuous monitoring and audit-ready reporting.",
    icon: Shield,
    accent: "gold",
    bullets: ["SOC 2 / ISO 27001 / HIPAA", "12+ integrations", "Continuous monitoring", "Audit-ready"],
  },
  {
    id: "call-center-ai",
    href: "/products/call-center-ai",
    name: "Call Center AI",
    tagline: "Voice agents with sub-500ms response",
    description:
      "Inbound and outbound voice agents with intelligent triage, multi-language routing, and human-in-the-loop supervision. LiveKit + Gemini 2.0.",
    icon: Bot,
    accent: "coral",
    bullets: ["<500ms response", "4+ languages", "Human-in-the-loop", "LiveKit + Gemini 2.0"],
  },
  {
    id: "commbridge",
    href: "/products/commbridge",
    name: "CommBridge",
    tagline: "Unified communications layer",
    description:
      "One API across Slack, Teams, Discord, email, voice, and push notifications. Multi-language microservices in Go, Rust, Python, and TypeScript.",
    icon: MessageSquare,
    accent: "blue",
    bullets: ["6 channels, one API", "Go / Rust / Python / TS", "Microservices", "Idempotent delivery"],
  },
  {
    id: "autoprd",
    href: "/products/autoprd",
    name: "AutoPRD",
    tagline: "Autonomous development pipeline",
    description:
      "Feedback → PRD → implementation → reviewed code. Claude Code agents with untrusted-actor review patterns and Docker-sandboxed execution.",
    icon: Code2,
    accent: "teal",
    bullets: ["Feedback to PR", "Sandboxed execution", "Auto-generated tests", "Reviewed by humans"],
  },
  {
    id: "orynx-agents",
    href: "/agents",
    name: "Orynx Agents",
    tagline: "Enterprise-grade agentic AI SDK",
    description:
      "Multi-agent SDK with intelligent context management (24+ strategies), graph memory, durable execution, and 100+ LLM providers across Python, TypeScript, Rust, and Go.",
    icon: BrainCircuit,
    accent: "coral",
    bullets: ["100+ LLM providers", "24+ context strategies", "Graph memory", "4 language SDKs"],
  },
]

const healthcareProducts: Product[] = [
  {
    id: "ambient-scribe",
    href: "/products/ambient-scribe",
    name: "Ambient Scribe",
    tagline: "Real-time clinical transcription",
    description:
      "NHS-compliant. Doctor-patient conversations into structured SOAP notes with EHR auto-population.",
    icon: MessageSquare,
    accent: "teal",
    bullets: ["NHS-compliant", "SOAP-structured", "EHR auto-populate"],
  },
  {
    id: "openeyes-cloud",
    href: "/products/openeyes-cloud",
    name: "OpenEyes Cloud",
    tagline: "Cloud-native ophthalmology EPR",
    description:
      "EyeDraw graphical documentation, OCT and visual-field device integration, rapid surgical templates, browser-native.",
    icon: Eye,
    accent: "blue",
    bullets: ["EyeDraw", "OCT / VFA integration", "Browser-native"],
  },
  {
    id: "medsynth",
    href: "/products/medsynth",
    name: "MedSynth",
    tagline: "Privacy-safe synthetic patient data",
    description:
      "Realistic synthetic records for AI training and simulation across emergency, surgical, chronic, and rare conditions.",
    icon: Sparkles,
    accent: "gold",
    bullets: ["100% HIPAA-safe", "All clinical domains", "Training-ready"],
  },
  {
    id: "diawound-ai",
    href: "/products/diawound-ai",
    name: "DiaWound AI",
    tagline: "Diabetic wound analysis on mobile",
    description:
      "Image capture, instant classification, severity scoring, and healing tracking via native iOS and Android apps.",
    icon: Activity,
    accent: "coral",
    bullets: ["iOS + Android", "Severity scoring", "Healing tracker"],
  },
  {
    id: "orynx-education",
    href: "/products/orynx-education",
    name: "Orynx Education",
    tagline: "AI-powered healthcare education",
    description:
      "Virtual patient simulations, interactive 3D anatomy, OSCE training, and adaptive learning pathways.",
    icon: GraduationCap,
    accent: "teal",
    bullets: ["Virtual patients", "3D anatomy", "OSCE training"],
  },
]

const accentMap: Record<Product["accent"], { bg: string; text: string; border: string; pill: string }> = {
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "hover:border-teal/30",
    pill: "bg-teal/10 text-teal border-teal/15",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "hover:border-gold/30",
    pill: "bg-gold/10 text-gold border-gold/15",
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "hover:border-coral/30",
    pill: "bg-coral/10 text-coral border-coral/15",
  },
  blue: {
    bg: "bg-brand-blue/10",
    text: "text-brand-blue",
    border: "hover:border-brand-blue/30",
    pill: "bg-brand-blue/10 text-brand-blue border-brand-blue/15",
  },
}

const metrics = [
  { value: "78+", label: "EHR connectors" },
  { value: "100+", label: "LLM providers" },
  { value: "24+", label: "Context strategies" },
  { value: "<500ms", label: "Voice response" },
  { value: "<2s", label: "EHR sync" },
  { value: "4", label: "Language SDKs" },
]

/* ─── Page ─── */

export default function ProductsPage() {
  const metricsRef = useRef<HTMLDivElement>(null)
  const [metricsVisible, setMetricsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMetricsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (metricsRef.current) observer.observe(metricsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative bg-background overflow-hidden border-b border-rule">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/platform.png"
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
            Products
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-5 max-w-[16ch]">
            Platforms that{" "}
            <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
              connect & automate.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
            Production-ready integration platforms and AI products across
            healthcare, fintech, IoT, and compliance. Built by engineers, run
            in production today.
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
              href="#platforms"
              className="inline-flex items-center gap-2 h-12 px-5 text-[15px] font-semibold text-ink hover:text-brand-blue transition-colors duration-150 group"
            >
              Browse the suite
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Platform products grid ─── */}
      <section id="platforms" className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedCard delay={0} direction="up">
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-medium text-teal uppercase tracking-wider">
                Platforms
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Six platforms. One studio.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Integration, compliance, voice, communications, dev tooling,
                and the multi-agent SDK that runs underneath them.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {platformProducts.map((p, i) => {
              const c = accentMap[p.accent]
              const Icon = p.icon
              return (
                <AnimatedCard key={p.id} delay={80 + i * 60} direction="up">
                  <BentoCard className={`flex flex-col h-full min-h-[340px] ${c.border}`}>
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-11 h-11 rounded-xl ${c.bg} ${c.text} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                        <p className={`${c.text} text-xs font-medium`}>{p.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                      {p.bullets.map((b) => (
                        <span
                          key={b}
                          className={`px-2 py-0.5 rounded-full ${c.pill} border text-[10px] font-medium`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={p.href}
                      className={`inline-flex items-center gap-1 text-sm font-semibold ${c.text} hover:underline`}
                    >
                      Learn more <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </BentoCard>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Healthcare products ─── */}
      <section className="py-20 lg:py-24 bg-muted/30 border-t border-rule">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedCard delay={0} direction="up">
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-medium text-teal uppercase tracking-wider">
                Healthcare specialists
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Clinical-grade, in production.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Purpose-built tools for clinicians, researchers, and educators
                — privacy-by-design from the first commit.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {healthcareProducts.map((p, i) => {
              const c = accentMap[p.accent]
              const Icon = p.icon
              return (
                <AnimatedCard key={p.id} delay={80 + i * 50} direction="up">
                  <BentoCard className={`flex flex-col h-full min-h-[260px] ${c.border}`}>
                    <div className={`w-10 h-10 rounded-xl ${c.bg} ${c.text} flex items-center justify-center mb-3`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-foreground">{p.name}</h3>
                    <p className={`${c.text} text-[11px] font-medium mb-2`}>{p.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                      {p.description}
                    </p>
                    <Link
                      href={p.href}
                      className={`mt-auto inline-flex items-center gap-1 text-xs font-semibold ${c.text} hover:underline`}
                    >
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </BentoCard>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Key Metrics ─── */}
      <section ref={metricsRef} className="py-20 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${
              metricsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">
              By the Numbers
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              Built for{" "}
              <span className="text-teal">scale</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`border border-border bg-card rounded-2xl p-5 text-center transition-all duration-700 ease-out ${
                  metricsVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-12 scale-90"
                }`}
                style={{
                  transitionDelay: `${i * 80}ms`,
                  boxShadow: "var(--bento-shadow)",
                }}
              >
                <div className="text-2xl md:text-3xl font-bold text-teal">{metric.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
