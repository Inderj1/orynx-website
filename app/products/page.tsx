"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  BrainCircuit, BookOpen, MapPin, Database, Shield, Workflow,
  Check, ArrowRight, Zap, LineChart, Lock, BarChart3,
  Bot, MessageSquare, Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

/* ─── Hover‑shine wrapper (reference3 BentoCard pattern) ─── */
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
      {/* Diagonal shine on hover */}
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

/* ─── Animated entrance wrapper (reference3 AnimatedCard) ─── */
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

/* ─── Data ─── */

const campModules = [
  { name: "Core AI", desc: "Self-learning brain with Graph Memory", icon: BrainCircuit },
  { name: "Axis AI", desc: "Predictive foresight & digital twins", icon: LineChart },
  { name: "Markets AI", desc: "External demand & disruption signals", icon: BarChart3 },
  { name: "Pulse AI", desc: "Autonomous issue resolution", icon: Zap },
]

const arAgents = [
  "Invoice Creation", "Validation", "Delivery", "Payment Reminders",
  "Cash Application", "Dispute Management", "Credit Risk",
  "AR Aging & Forecasting", "Compliance & Audit", "CFO Copilot",
]

const fieldEngines = [
  { name: "Revenue & Job Economics", desc: "Job-level P&L with real-time cost allocation" },
  { name: "Labor Efficiency", desc: "Crew utilization, overtime, and productivity scoring" },
  { name: "Parts & Materials", desc: "Inventory optimization with waste tracking" },
  { name: "Cash Speed", desc: "Days-to-cash acceleration and billing velocity" },
]

const fieldIndustries = ["HVAC", "Plumbing", "Electrical", "Roofing", "Landscaping", "General Contracting"]

const differentiators = [
  {
    icon: Database,
    number: "01",
    title: "Enterprise Data Bridge",
    description: "Native ERP connectors supporting REST, OData, SOAP, and GraphQL. No ETL, no data movement. Bidirectional read/write via Unified Business Schema.",
  },
  {
    icon: Shield,
    number: "02",
    title: "4-Tier Trust Architecture",
    description: "Deterministic business rules never mix with LLM inference. Multi-layer auth, AES-256-GCM encryption, and full audit trails at every layer.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Closed-Loop Write-Back",
    description: "Insights write back directly into SAP, Oracle, and Salesforce autonomously. The loop between insight and action is fully closed.",
  },
]

const metrics = [
  { value: "40", label: "ERP Connectors" },
  { value: "4", label: "AI Modules" },
  { value: "17+", label: "Context Strategies" },
  { value: "10", label: "AR Agents" },
  { value: "99.5%", label: "Accuracy" },
  { value: "<5s", label: "Response Time" },
]

/* ─── Page ─── */

export default function ProductsPage() {
  const diffRef = useRef<HTMLDivElement>(null)
  const [diffVisible, setDiffVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)

  const metricsRef = useRef<HTMLDivElement>(null)
  const [metricsVisible, setMetricsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDiffVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (diffRef.current) observer.observe(diffRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (diffVisible) {
      differentiators.forEach((_, i) => {
        setTimeout(() => setActiveStep(i), 400 + i * 300)
      })
    }
  }, [diffVisible])

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
            src="/heroes/platform.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1800px"
            className="object-cover object-right-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 via-40% to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 pt-[80px] pb-12 lg:pt-[96px] lg:pb-16">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Products
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-5 max-w-[16ch]">
            AI products for{" "}
            <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
              enterprise.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
            Enterprise-grade AI that connects to your existing systems, learns
            from every interaction, and writes intelligent decisions back
            autonomously.
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-8">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group"
            >
              {PRIMARY_CTA_LABEL}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="#products"
              className="inline-flex items-center gap-2 h-12 px-5 text-[15px] font-semibold text-ink hover:text-brand-blue transition-colors duration-150 group"
            >
              Browse the suite
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── Product Bento Grid ─── */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedCard delay={0} direction="up">
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-medium text-teal uppercase tracking-wider">
                Our Products
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Three products, one platform
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                From enterprise AI orchestration to accounts receivable automation and field operations intelligence.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[200px]">
            {/* ── STRATAX AI Enterprise: Featured left card ── */}
            <AnimatedCard delay={100} direction="left" className="min-h-[420px] md:min-h-0 md:col-span-7 md:row-span-2">
              <BentoCard className="flex flex-col h-full border-teal/20 hover:border-teal/40">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center flex-shrink-0">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">STRATAX AI Enterprise</h3>
                    <p className="text-teal text-sm font-medium">The AI Operating System for Enterprise</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  Full CAMP framework with self-learning AI, closed-loop write-back, and autonomous decision-making
                  across all enterprise systems. Powered by the StrataxAI Agents SDK.
                </p>

                {/* CAMP module mini-cards */}
                <div className="grid grid-cols-2 gap-2 mb-5 flex-1">
                  {campModules.map((mod) => (
                    <div key={mod.name} className="bg-muted/50 rounded-lg p-3 flex items-start gap-2.5">
                      <mod.icon className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-foreground">{mod.name}</div>
                        <div className="text-[11px] text-muted-foreground leading-tight">{mod.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto pt-2">
                  <a href="/pricing">
                    <Button className="bg-foreground text-background hover:bg-foreground/90 group h-9 text-sm">
                      Get a Demo
                      <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <Link
                    href="/products/stratax-ai"
                    className="inline-flex items-center gap-1 text-sm font-medium text-teal hover:underline"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </BentoCard>
            </AnimatedCard>

            {/* ── LEDGERLY PRO: Top right ── */}
            <AnimatedCard delay={200} direction="right" className="min-h-[280px] md:min-h-0 md:col-span-5 md:row-span-1">
              <BentoCard className="flex flex-col h-full hover:border-gold/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">LEDGERLY PRO</h3>
                    <p className="text-gold text-xs font-medium">AI-Powered AR Automation</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  10 intelligent agents automating the entire accounts receivable workflow.
                  Natural language queries in plain English.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3 flex-1">
                  {arAgents.slice(0, 6).map((agent) => (
                    <span
                      key={agent}
                      className="px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/15 text-[10px] font-medium"
                    >
                      {agent}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium">
                    +4 more
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a href="/pricing">
                    <Button variant="outline" className="border-border hover:bg-muted bg-transparent group h-8 text-xs">
                      Book a Demo
                      <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <Link
                    href="/products/ledgerly-ai"
                    className="inline-flex items-center gap-1 text-xs font-medium text-gold hover:underline"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </BentoCard>
            </AnimatedCard>

            {/* ── LEDGERLY FIELD: Bottom right ── */}
            <AnimatedCard delay={350} direction="up" className="min-h-[280px] md:min-h-0 md:col-span-5 md:row-span-1">
              <BentoCard className="flex flex-col h-full hover:border-coral/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">LEDGERLY FIELD</h3>
                    <p className="text-coral text-xs font-medium">Field Operations Intelligence</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  Purpose-built financial intelligence for field service companies. Four economic engines across 14 financial views.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-3 flex-1">
                  {fieldEngines.map((engine) => (
                    <div key={engine.name} className="bg-coral/5 rounded-lg p-2">
                      <div className="text-[10px] font-semibold text-foreground">{engine.name}</div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{engine.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {fieldIndustries.map((industry) => (
                    <span
                      key={industry}
                      className="px-2 py-0.5 rounded-full bg-coral/5 text-muted-foreground border border-coral/10 text-[10px] font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-auto">
                  <a href="/pricing">
                    <Button variant="outline" className="border-border hover:bg-muted bg-transparent group h-8 text-xs">
                      Book a Demo
                      <ArrowRight className="ml-1.5 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                  <Link
                    href="/products/ledgerly-field"
                    className="inline-flex items-center gap-1 text-xs font-medium text-coral hover:underline"
                  >
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </BentoCard>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* ─── Platform Differentiators (reference3 how‑it‑works pattern) ─── */}
      <section ref={diffRef} className="py-24 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
              diffVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <span className="text-sm font-medium text-teal uppercase tracking-wider">
              Platform
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground text-balance">
              What makes StrataxAI{" "}
              <span className="text-teal">different</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {differentiators.map((diff, i) => (
              <div
                key={diff.title}
                className={`relative transition-all duration-700 ease-out ${
                  activeStep >= i
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-16 scale-95"
                }`}
              >
                {/* Connector line between steps */}
                {i < differentiators.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-10 left-[60%] h-px bg-gradient-to-r from-teal/40 to-transparent transition-all duration-1000 ease-out origin-left ${
                      activeStep > i ? "w-[80%] opacity-100" : "w-0 opacity-0"
                    }`}
                    style={{ transitionDelay: "200ms" }}
                  />
                )}

                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`h-14 w-14 rounded-2xl bg-card border border-border flex items-center justify-center transition-all duration-500 ${
                        activeStep >= i
                          ? "border-teal/30 shadow-[0_0_20px_-5px_hsl(var(--teal)/0.3)]"
                          : ""
                      }`}
                    >
                      <diff.icon
                        className={`w-7 h-7 transition-colors duration-500 ${
                          activeStep >= i ? "text-teal" : "text-muted-foreground/40"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-5xl font-bold transition-all duration-500 ${
                        activeStep >= i ? "text-teal/20" : "text-muted/50"
                      }`}
                    >
                      {diff.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{diff.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{diff.description}</p>
                </div>
              </div>
            ))}
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
