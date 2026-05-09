"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  BrainCircuit, Activity, Globe, Zap, Database, Shield,
  BarChart3, MessageSquare, Cpu, Code2, Network, Layers,
  ArrowRight, CheckCircle2, Timer, Eye, FileText, TrendingUp,
  Search, Terminal, Workflow, ArrowLeftRight, ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

/* ─── CAMP Modules ─── */

const campModules = [
  {
    icon: BrainCircuit,
    name: "Core AI",
    role: "Self-Learning Engine",
    description: "Graph Memory with 4-network cognitive model — episodic, semantic, procedural, belief. Learns from every execution and gets measurably smarter every week.",
    span: "md:col-span-7 md:row-span-2",
    featured: true,
  },
  {
    icon: Activity,
    name: "Axis AI",
    role: "Predictive Foresight",
    description: "What-if simulations, digital twins, and natural language queries across all connected systems.",
    span: "md:col-span-5",
    featured: false,
  },
  {
    icon: Globe,
    name: "Markets AI",
    role: "External Signals",
    description: "Weather, geopolitical, logistics, and demand data for proactive disruption management.",
    span: "md:col-span-5",
    featured: false,
  },
  {
    icon: Zap,
    name: "Pulse AI",
    role: "Autonomous Resolution",
    description: "Issue detection, auto-resolution, and team sync. Agents that act, not just recommend.",
    span: "md:col-span-7",
    featured: false,
  },
]

/* ─── AI Modules ─── */

const aiModules = [
  { icon: Activity, name: "AXIS.AI", description: "Predictive analytics & digital twins" },
  { icon: TrendingUp, name: "STOX.AI", description: "Inventory optimization & demand sensing" },
  { icon: BarChart3, name: "MARGEN.AI", description: "Margin analysis & pricing intelligence" },
  { icon: Workflow, name: "ORDLY.AI", description: "Order lifecycle management & automation" },
  { icon: Zap, name: "PULSE", description: "Real-time issue detection & auto-resolution" },
  { icon: Globe, name: "MARKETS.AI", description: "External market & disruption signals" },
  { icon: FileText, name: "DOC.AI", description: "Document extraction & intelligent processing" },
  { icon: MessageSquare, name: "COMMS.AI", description: "Multi-channel business communications" },
  { icon: Search, name: "Process Mining", description: "Automated workflow discovery & optimization" },
  { icon: Terminal, name: "Command Tower", description: "Centralized operations control & monitoring" },
  { icon: Eye, name: "Vision.AI", description: "Visual inspection & quality assurance" },
  { icon: Cpu, name: "Analytics", description: "Cross-domain reporting & BI dashboards" },
]

/* ─── ERP Categories ─── */

const erpCategories = [
  { label: "Tier 1 ERP", systems: ["SAP S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "Workday", "Infor CloudSuite", "IFS Applications"] },
  { label: "Mid-Market", systems: ["NetSuite", "Sage Intacct", "Acumatica", "Epicor ERP", "Unit4", "Syspro", "Odoo"] },
  { label: "Microsoft", systems: ["Dynamics 365", "Business Central", "Dynamics GP", "Dynamics NAV", "Dynamics AX"] },
  { label: "SAP", systems: ["SAP S/4HANA", "SAP Business One", "SAP Business ByDesign"] },
  { label: "Sage", systems: ["Sage Intacct", "Sage 100", "Sage 300", "Sage 500", "Sage X3"] },
  { label: "Accounting", systems: ["QuickBooks Online", "QuickBooks Desktop", "Xero", "Zoho Books", "FreshBooks", "Wave", "Tally Prime", "MYOB AccountRight"] },
  { label: "Manufacturing", systems: ["Plex Systems", "Priority Software", "Deltek Costpoint", "Katana MRP", "MRPeasy", "Fishbowl"] },
  { label: "CRM & Other", systems: ["Salesforce", "HubSpot", "Ramco ERP", "Cin7"] },
]

/* ─── Terminal Lines ─── */

const terminalLines = [
  { text: "$ stratax bridge sync --all", type: "command" },
  { text: "[12:03:01] Connecting to SAP S/4HANA...", type: "info" },
  { text: "[12:03:02] ✓ SAP authenticated (OAuth2)", type: "success" },
  { text: "[12:03:03] Syncing 14,238 records via OData v4...", type: "info" },
  { text: "[12:03:05] ✓ Unified Business Schema mapped", type: "success" },
  { text: "[12:03:06] Connecting to Oracle ERP Cloud...", type: "info" },
  { text: "[12:03:07] ✓ Oracle authenticated (JWT RS256)", type: "success" },
  { text: "[12:03:08] Syncing 8,412 records via REST...", type: "info" },
  { text: "[12:03:10] ✓ Bidirectional sync complete", type: "success" },
  { text: "[12:03:10] 22,650 total records | 0 errors | <5s", type: "result" },
]

/* ─── SDK Code Lines ─── */

const codeLines = [
  { text: "import { Platform, CAMP } from '@strataxai/enterprise'", type: "import" },
  { text: "", type: "blank" },
  { text: "const platform = new Platform({", type: "declaration" },
  { text: "  name: 'enterprise-ops',", type: "property" },
  { text: "  modules: CAMP.all(),", type: "property" },
  { text: "  bridge: {", type: "property" },
  { text: "    connectors: ['sap', 'oracle', 'salesforce'],", type: "nested" },
  { text: "    schema: 'unified-business',", type: "nested" },
  { text: "    writeBack: true,", type: "nested" },
  { text: "  },", type: "close" },
  { text: "  memory: { type: 'graph', networks: 4 },", type: "property" },
  { text: "  context: { strategies: 17, mode: 'scoped' },", type: "property" },
  { text: "})", type: "close" },
  { text: "", type: "blank" },
  { text: "await platform.deploy({ env: 'production' })", type: "execution" },
]

/* ─── Key Metrics ─── */

const metrics = [
  { value: "99.5%+", label: "Domain-specific accuracy", icon: CheckCircle2 },
  { value: "<5s", label: "Query response time", icon: Timer },
  { value: "40", label: "ERP connectors", icon: Database },
  { value: "4", label: "CAMP AI modules", icon: BrainCircuit },
  { value: "17+", label: "Context strategies", icon: Network },
  { value: "99.9%", label: "System uptime", icon: Activity },
]

/* ─── CAMP Bento Grid Section ─── */

function CAMPBentoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            CAMP Framework
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Four AI modules.{" "}
            <span className="text-teal">One brain.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Core, Axis, Markets, Pulse — working in concert across every connected system. Self-learning, self-correcting, self-improving.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-4 max-w-5xl mx-auto">
          {campModules.map((mod, index) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`${mod.span} bg-card border border-border rounded-2xl p-6 hover:border-teal/30 transition-all duration-300 relative overflow-hidden group`}
              style={{ boxShadow: "var(--bento-shadow)" }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "linear-gradient(135deg, transparent 40%, hsl(var(--teal) / 0.03) 50%, transparent 60%)",
                  backgroundSize: "200% 200%",
                  animation: "bento-shine 3s ease-in-out infinite",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                    <mod.icon className="w-5 h-5" />
                  </div>
                  {mod.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-teal/10 text-teal text-[10px] font-bold tracking-wider uppercase">
                      Core Engine
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1">{mod.name}</h3>
                <p className="text-xs text-teal font-medium mb-3">{mod.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── AI Modules Grid Section ─── */

function AIModulesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            12+ AI Modules
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Purpose-built intelligence{" "}
            <span className="text-teal">modules</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each module is a domain specialist — from predictive analytics to document processing — all connected through the CAMP framework.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {aiModules.map((mod, index) => (
            <motion.div
              key={mod.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-teal/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-3">
                <mod.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-foreground mb-1">{mod.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{mod.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Data Bridge Section ─── */

function DataBridgeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= terminalLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 200)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Enterprise Data Bridge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            40 connectors.{" "}
            <span className="text-teal">Zero data movement.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left: description + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              Native connectors for REST, OData v2/v4, SOAP, and GraphQL. Kong Gateway routing with bidirectional read/write via the Unified Business Schema. No ETL. No data lakes. Just direct, secure access.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-teal">40</div>
                <div className="text-xs text-muted-foreground">ERP Connectors</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <ArrowLeftRight className="w-5 h-5 text-teal" />
                </div>
                <div className="text-xs text-muted-foreground mt-1">Bidirectional Sync</div>
              </div>
            </div>
            {/* ERP category pills */}
            <div className="flex flex-wrap gap-2">
              {[...new Set(erpCategories.flatMap((cat) => cat.systems))].map((sys) => (
                <span key={sys} className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium border border-border">
                  {sys}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-teal/50" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground font-mono">bridge-sync.log</span>
              </div>
            </div>
            <div className="p-6 font-mono text-xs leading-relaxed min-h-[280px]">
              {terminalLines.map((line, i) => {
                const colorClass =
                  line.type === "command" ? "text-foreground font-semibold" :
                  line.type === "success" ? "text-teal" :
                  line.type === "result" ? "text-gold font-semibold" :
                  "text-muted-foreground"
                return (
                  <div
                    key={i}
                    className={`${colorClass} transition-opacity duration-300 ${i < visibleLines ? "opacity-100" : "opacity-0"}`}
                  >
                    {line.text}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── SDK Terminal Preview Section ─── */

function SDKPreviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 120)
    return () => clearInterval(interval)
  }, [isInView])

  const renderLine = (line: typeof codeLines[0], i: number) => {
    if (line.type === "blank") return <div key={i} className="h-5" />
    const colorClass =
      line.type === "import" ? "text-muted-foreground" :
      line.type === "declaration" ? "text-foreground" :
      line.type === "property" ? "text-teal" :
      line.type === "nested" ? "text-coral" :
      line.type === "execution" ? "text-gold" :
      "text-muted-foreground"
    return (
      <div key={i} className={`${colorClass} transition-opacity duration-300 ${i < visibleLines ? "opacity-100" : "opacity-0"}`}>
        {line.text}
      </div>
    )
  }

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Code terminal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                <div className="h-3 w-3 rounded-full bg-teal/50" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground font-mono">platform.ts</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => renderLine(line, i))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
              Developer Experience
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Configure once.{" "}
              <span className="text-teal">Run everything.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The StrataxAI Enterprise platform gives you production-ready AI in under 15 lines of code. CAMP modules, Data Bridge, and Graph Memory are built into the framework.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Full CAMP framework with all 4 AI modules",
                "40 ERP connectors with bidirectional write-back",
                "Graph Memory with PersonalizedPageRank scoring",
                "17+ context strategies for agent orchestration",
                "Multi-language SDKs: Python, TypeScript, Rust, Go",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <a href="/how-it-works">
              <Button className="bg-foreground text-background hover:bg-foreground/90 group">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── Key Metrics Section ─── */

function KeyMetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Platform Benchmarks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Enterprise-proven{" "}
            <span className="text-teal">performance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-teal/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <p className="text-sm text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function StrataxAIPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
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
            STRATAX AI Enterprise · AI Operating System
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-5 max-w-[16ch]">
            The operating system for{" "}
            <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
              enterprise AI.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
            Full CAMP framework with self-learning AI, closed-loop write-back,
            and autonomous decision-making across every enterprise system.
            Powered by the Stratax Labs Agents SDK.
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
              href="#camp"
              className="inline-flex items-center gap-2 h-12 px-5 text-[15px] font-semibold text-ink hover:text-brand-blue transition-colors duration-150 group"
            >
              Explore the framework
              <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      <CAMPBentoSection />
      <AIModulesSection />
      <DataBridgeSection />
      <SDKPreviewSection />
      <KeyMetricsSection />
      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
