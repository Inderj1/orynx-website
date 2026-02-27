"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { useRef, useState, useEffect } from "react"
import {
  Factory, Landmark, ShoppingCart, HeartPulse, Truck, FlaskConical,
  ArrowRight, Database, Brain, Zap, Check, BarChart3,
  Link2, Cog, TrendingUp, Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/* ─── Hover‑shine card (reference3 BentoCard) ─── */
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

/* ─── Animated entrance (reference3 AnimatedCard) ─── */
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

/* ─── Color map ─── */
const colorClasses: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30", dot: "bg-teal" },
  coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/30", dot: "bg-coral" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", dot: "bg-gold" },
}

/* ─── Industry solutions data ─── */
const solutions = [
  {
    icon: Truck,
    title: "Supply Chain",
    description:
      "End-to-end visibility and autonomous decision-making. Markets AI integrates weather, geopolitical, and logistics data for proactive disruption management.",
    useCases: [
      "End-to-end supply chain visibility",
      "Disruption prediction & mitigation",
      "Neural demand forecasting",
      "MCTS-based supply chain planning",
      "Logistics optimization & routing",
      "Supplier risk scoring & monitoring",
    ],
    color: "teal",
    rdTag: true,
  },
  {
    icon: Landmark,
    title: "Finance",
    description:
      "Real-time financial intelligence with closed-loop write-back. LEDGERLY PRO deploys 10 intelligent AR agents — from invoice creation to cash application.",
    useCases: [
      "10 intelligent AR agents (LEDGERLY PRO)",
      "CFO Copilot with natural language queries",
      "Automated Cash Application",
      "Dispute Management & Resolution",
      "Credit Risk Assessment",
      "AR Aging & Forecasting",
    ],
    color: "coral",
    rdTag: false,
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Optimize inventory via Core AI's self-learning engine and predict equipment failures with Axis AI's digital twins. Direct SAP and Oracle integration.",
    useCases: [
      "Inventory optimization via Core AI",
      "Predictive maintenance via Axis AI",
      "Supply chain risk monitoring",
      "Production line efficiency analysis",
      "Demand forecasting & planning",
      "Quality control automation",
    ],
    color: "gold",
    rdTag: false,
  },
  {
    icon: ShoppingCart,
    title: "Retail",
    description:
      "Merge internal sales data with external market signals for adaptive pricing and assortment decisions. Pulse AI monitors trends in real time.",
    useCases: [
      "Dynamic pricing optimization",
      "Assortment planning & merchandising",
      "Customer demand sensing",
      "Omnichannel inventory balancing",
    ],
    color: "teal",
    rdTag: false,
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Streamline operational workflows, optimize resource allocation, and ensure compliance. Reads from EHR and financial systems with strict data governance.",
    useCases: [
      "Resource allocation & scheduling",
      "Revenue cycle optimization",
      "Compliance monitoring & reporting",
      "Supply chain for medical supplies",
    ],
    color: "coral",
    rdTag: false,
  },
]

/* ─── Implementation steps ─── */
const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect",
    description:
      "Plug into your existing ERP systems via the Enterprise Data Bridge. No ETL, no data movement — bidirectional read/write through the Unified Business Schema.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Learn",
    description:
      "Core AI builds a self-learning model of your business using Graph Memory with 4 knowledge networks: episodic, semantic, procedural, and belief.",
  },
  {
    icon: Zap,
    number: "03",
    title: "Act",
    description:
      "Closed-loop write-back drives autonomous decisions directly into SAP, Oracle, and Salesforce. Insights become actions without manual intervention.",
  },
]

/* ─── Testimonials ─── */
const TESTIMONIALS_ROW_1 = [
  { quote: "StrataxAI reduced our supply chain disruptions by 40% in the first quarter. The Markets AI predictions are remarkably accurate.", author: "David Chen", role: "VP Supply Chain", company: "Global Manufacturing Co.", avatar: "DC" },
  { quote: "Our finance team went from spending 3 days on AR reconciliation to 3 hours. LEDGERLY PRO's agents work around the clock.", author: "Sarah Mitchell", role: "CFO", company: "TechCorp Industries", avatar: "SM" },
  { quote: "The closed-loop write-back changed everything. Insights don't just sit in dashboards — they drive action automatically.", author: "James Park", role: "CTO", company: "Nexus Retail Group", avatar: "JP" },
  { quote: "Enterprise Data Bridge connected our entire SAP landscape in days, not months. Zero data migration required.", author: "Priya Sharma", role: "IT Director", company: "Pharma Solutions Ltd.", avatar: "PS" },
  { quote: "The CFO Copilot lets me ask 'Who owes me money?' in plain English and get actionable answers instantly.", author: "Elena Rodriguez", role: "Finance Director", company: "BuildFast Corp", avatar: "ER" },
]

const TESTIMONIALS_ROW_2 = [
  { quote: "Predictive maintenance via Axis AI cut our equipment downtime by 60%. The digital twins are incredibly accurate.", author: "Michael Torres", role: "Plant Manager", company: "AutoParts Inc.", avatar: "MT" },
  { quote: "StrataxAI's Graph Memory learns from every interaction. It gets smarter every week — that's not marketing, it's reality.", author: "Aisha Patel", role: "Data Science Lead", company: "HealthTech Systems", avatar: "AP" },
  { quote: "We tried three other platforms before StrataxAI. None of them could actually write back to our ERP systems.", author: "Tom Anderson", role: "Head of Digital", company: "Retail Dynamics", avatar: "TA" },
  { quote: "SOC 2 Type II compliance out of the box. Our security team approved StrataxAI faster than any other vendor.", author: "Rachel Kim", role: "CISO", company: "FinServ Global", avatar: "RK" },
  { quote: "From pilot to production across 12 warehouses in 6 weeks. The Enterprise Data Bridge is genuinely plug-and-play.", author: "Marcus Webb", role: "VP Operations", company: "LogiChain Partners", avatar: "MW" },
]

/* ─── Platform capabilities ─── */
const capabilities = [
  { icon: Database, title: "Enterprise Data Bridge", desc: "REST, OData, SOAP, GraphQL — no ETL required", color: "teal" },
  { icon: Brain, title: "4 AI Modules", desc: "CAMP framework: Core, Axis, Markets, Pulse", color: "coral" },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II, AES-256-GCM, full audit trails", color: "gold" },
  { icon: Cog, title: "Agents SDK", desc: "17+ context strategies with Graph Memory", color: "teal" },
  { icon: TrendingUp, title: "Self-Learning", desc: "Gets smarter from every interaction automatically", color: "coral" },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live dashboards with autonomous insights", color: "gold" },
]

/* ─── Testimonial card ─── */
function TestimonialCard({
  testimonial,
  onMouseEnter,
  onMouseLeave,
}: {
  testimonial: typeof TESTIMONIALS_ROW_1[0]
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex-shrink-0 w-[340px] md:w-[400px] rounded-2xl border border-border bg-card p-6 hover:border-teal/30 transition-colors duration-300"
      style={{ boxShadow: "var(--bento-shadow)" }}
    >
      <p className="text-muted-foreground leading-relaxed text-sm">{testimonial.quote}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-teal to-teal/60 flex items-center justify-center text-xs font-bold text-background">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-medium text-foreground text-sm">{testimonial.author}</div>
          <div className="text-xs text-muted-foreground">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Marquee row ─── */
function MarqueeRow({
  testimonials,
  direction = "left",
  speed = 40,
}: {
  testimonials: typeof TESTIMONIALS_ROW_1
  direction?: "left" | "right"
  speed?: number
}) {
  const [isPaused, setIsPaused] = useState(false)
  const duplicated = [...testimonials, ...testimonials]

  return (
    <div className="relative flex overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div
        className="flex gap-6 py-4"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicated.map((testimonial, i) => (
          <TestimonialCard
            key={`${testimonial.author}-${i}`}
            testimonial={testimonial}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        ))}
      </div>
    </div>
  )
}

/* ═══════════════ Page ═══════════════ */

export default function SolutionsPage() {
  /* ─ How-it-works step activation ─ */
  const stepsRef = useRef<HTMLDivElement>(null)
  const [stepsVisible, setStepsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStepsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (stepsRef.current) observer.observe(stepsRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (stepsVisible) {
      steps.forEach((_, i) => {
        setTimeout(() => setActiveStep(i), 400 + i * 300)
      })
    }
  }, [stepsVisible])

  /* ─ Testimonials visibility ─ */
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [testimonialsVisible, setTestimonialsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTestimonialsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (testimonialsRef.current) observer.observe(testimonialsRef.current)
    return () => observer.disconnect()
  }, [])

  /* ─ Capabilities visibility ─ */
  const capsRef = useRef<HTMLDivElement>(null)
  const [capsVisible, setCapsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCapsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    if (capsRef.current) observer.observe(capsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="relative">
      <Navbar />

      {/* ═══ Hero ═══ */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(30 15% 98%) 70%),
              radial-gradient(circle, hsl(218 30% 88% / 0.08) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100% 100%, 40px 40px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl relative z-10">
          <AnimatedCard delay={0} direction="up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              Solutions
            </span>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance"
              style={{ letterSpacing: "-0.03em" }}
            >
              AI solutions for{" "}
              <span className="text-teal">every industry</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              StrataxAI delivers operational intelligence tailored to your industry — connecting to existing
              systems via the Enterprise Data Bridge and driving measurable financial impact from day one.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["Supply Chain", "Finance", "Manufacturing", "Retail", "Healthcare"].map((industry) => (
                <span
                  key={industry}
                  className="px-3 py-1 rounded-full border text-xs font-medium bg-teal/5 text-teal border-teal/20"
                >
                  {industry}
                </span>
              ))}
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* ═══ Industry Solutions Bento Grid ═══ */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <AnimatedCard delay={0} direction="up">
            <div className="mb-12 max-w-2xl">
              <span className="text-sm font-medium text-teal uppercase tracking-wider">
                Industry Solutions
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground md:text-4xl">
                Tailored for your industry
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Every industry has unique challenges. StrataxAI adapts its CAMP framework to deliver
                domain-specific intelligence that drives real outcomes.
              </p>
            </div>
          </AnimatedCard>

          {/* Bento layout: 12-col grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[220px]">
            {/* Supply Chain — featured tall left */}
            <AnimatedCard delay={100} direction="left" className="min-h-[400px] md:min-h-0 md:col-span-5 md:row-span-2">
              <BentoCard className="flex flex-col h-full hover:border-teal/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Supply Chain</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-teal text-xs font-medium">Proactive disruption management</span>
                      <span className="px-1.5 py-0.5 rounded-full bg-gold/10 text-gold text-[9px] font-bold tracking-wider uppercase flex items-center gap-0.5">
                        <FlaskConical className="w-2.5 h-2.5" />
                        R&D
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {solutions[0].description}
                </p>

                <ul className="space-y-2 flex-1">
                  {solutions[0].useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{uc}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/products/stratax-ai"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-teal hover:underline"
                >
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </BentoCard>
            </AnimatedCard>

            {/* Finance — top right */}
            <AnimatedCard delay={200} direction="right" className="min-h-[240px] md:min-h-0 md:col-span-7">
              <BentoCard className="flex flex-col h-full hover:border-coral/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">Finance</h3>
                    <p className="text-coral text-xs font-medium">Powered by LEDGERLY PRO</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {solutions[1].description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {solutions[1].useCases.slice(0, 4).map((uc) => (
                    <span key={uc} className="px-2 py-0.5 rounded-full bg-coral/10 text-coral border border-coral/15 text-[10px] font-medium">
                      {uc}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium">
                    +2 more
                  </span>
                </div>
              </BentoCard>
            </AnimatedCard>

            {/* Manufacturing — bottom right */}
            <AnimatedCard delay={300} direction="up" className="min-h-[240px] md:min-h-0 md:col-span-7">
              <BentoCard className="flex flex-col h-full hover:border-gold/30">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">Manufacturing</h3>
                    <p className="text-gold text-xs font-medium">Core AI + Axis AI digital twins</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {solutions[2].description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {solutions[2].useCases.slice(0, 4).map((uc) => (
                    <span key={uc} className="px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/15 text-[10px] font-medium">
                      {uc}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-[10px] font-medium">
                    +2 more
                  </span>
                </div>
              </BentoCard>
            </AnimatedCard>

            {/* Retail — bottom left */}
            <AnimatedCard delay={400} direction="left" className="min-h-[200px] md:min-h-0 md:col-span-6">
              <BentoCard className="flex flex-col h-full hover:border-teal/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Retail</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{solutions[3].description}</p>
                <ul className="space-y-1.5 mt-auto">
                  {solutions[3].useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-teal mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{uc}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </AnimatedCard>

            {/* Healthcare — bottom right */}
            <AnimatedCard delay={500} direction="right" className="min-h-[200px] md:min-h-0 md:col-span-6">
              <BentoCard className="flex flex-col h-full hover:border-coral/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Healthcare</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{solutions[4].description}</p>
                <ul className="space-y-1.5 mt-auto">
                  {solutions[4].useCases.map((uc) => (
                    <li key={uc} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-coral mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{uc}</span>
                    </li>
                  ))}
                </ul>
              </BentoCard>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
