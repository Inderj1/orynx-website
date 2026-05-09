"use client"

import { Navbar } from "@/components/navbar/navbar"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  BrainCircuit, Network, Code2, Shield, Workflow, Database,
  MessageSquare, Search, FlaskConical, Cpu, BarChart3, Zap,
  GitBranch, Layers, ArrowRight, CheckCircle2, Timer,
  Activity, Globe, Lock, Users, Bot, Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

/* ─── Agent Family Data ─── */

const agentFamilies = [
  {
    category: "CAMP Framework Agents",
    color: "teal",
    agents: [
      {
        icon: BrainCircuit,
        name: "Core AI",
        role: "Self-Learning Engine",
        description: "Graph Memory with 4-network cognitive model. Learns from every execution — gets measurably smarter every week.",
        maturity: "Production",
      },
      {
        icon: Activity,
        name: "Axis AI",
        role: "Predictive Foresight",
        description: "What-if simulations, digital twins, and natural language queries across all connected systems.",
        maturity: "Production",
      },
      {
        icon: Globe,
        name: "Markets AI",
        role: "External Signals",
        description: "Weather, geopolitical, logistics, and demand data for proactive disruption management.",
        maturity: "Production",
      },
      {
        icon: Zap,
        name: "Pulse AI",
        role: "Autonomous Resolution",
        description: "Issue detection, auto-resolution, and team sync. Agents that act, not just recommend.",
        maturity: "Production",
      },
    ],
  },
  {
    category: "LEDGERLY PRO Agents",
    color: "gold",
    agents: [
      {
        icon: Workflow,
        name: "Invoice Creation",
        role: "Document Generation",
        description: "Automated invoice generation from purchase orders and contracts with multi-format output.",
        maturity: "Production",
      },
      {
        icon: Shield,
        name: "Validation & Compliance",
        role: "Rules Engine",
        description: "Deterministic validation rules that never mix with LLM inference. Full audit trail.",
        maturity: "Production",
      },
      {
        icon: MessageSquare,
        name: "CFO Copilot",
        role: "Natural Language Interface",
        description: '"Who owes me money?" "What invoices are overdue?" Plain English across your entire AR pipeline.',
        maturity: "Production",
      },
      {
        icon: BarChart3,
        name: "Cash Application",
        role: "Payment Matching",
        description: "Intelligent payment-to-invoice matching with dispute detection and resolution workflows.",
        maturity: "Production",
      },
    ],
  },
  {
    category: "Data Intelligence Agents",
    color: "coral",
    agents: [
      {
        icon: Search,
        name: "Schema Interpreter",
        role: "Data Discovery",
        description: "Identifies relevant tables, columns, and relationships across connected systems automatically.",
        maturity: "Production",
      },
      {
        icon: Database,
        name: "SQL Generator",
        role: "Query Synthesis",
        description: "Converts natural language to optimized PostgreSQL with JOINs, filters, and aggregations.",
        maturity: "Production",
      },
      {
        icon: Shield,
        name: "Query Validator",
        role: "Security & Performance",
        description: "Every generated query passes security validation, performance analysis, and error recovery.",
        maturity: "Production",
      },
      {
        icon: Sparkles,
        name: "Result Explainer",
        role: "Business Intelligence",
        description: "Transforms raw query results into business insights, patterns, and actionable suggestions.",
        maturity: "Production",
      },
    ],
  },
]

/* ─── Architecture Flow ─── */

const architectureSteps = [
  { label: "Natural Language Query", icon: MessageSquare, color: "teal" },
  { label: "Conversation Manager", icon: Users, color: "teal" },
  { label: "Schema Interpreter", icon: Search, color: "coral" },
  { label: "Agent Orchestrator", icon: BrainCircuit, color: "gold" },
  { label: "Specialist Agents", icon: Bot, color: "coral" },
  { label: "Validation & Audit", icon: Shield, color: "teal" },
  { label: "Write-Back / Response", icon: ArrowRight, color: "gold" },
]

/* ─── SDK Features ─── */

const sdkCapabilities = [
  {
    icon: Network,
    title: "17+ Context Strategies",
    description: "Full shared, scoped, isolated, hierarchical, and more. Every agent gets exactly the context it needs.",
    span: "md:col-span-4",
  },
  {
    icon: Database,
    title: "Graph Memory",
    description: "4-network cognitive model: episodic (experiences), semantic (facts), procedural (skills), belief (summaries).",
    span: "md:col-span-4",
  },
  {
    icon: Code2,
    title: "Typed Handoff Protocol",
    description: "Explicit contracts between agents with type-safe handoffs. Full lineage tracking for every decision.",
    span: "md:col-span-4",
  },
  {
    icon: Layers,
    title: "Multi-Language SDK",
    description: "Python, TypeScript, Rust, and Go. First-class support across all four with identical APIs.",
    span: "md:col-span-3",
  },
  {
    icon: Shield,
    title: "4-Tier Trust Architecture",
    description: "Deterministic business rules never mix with LLM inference. Multi-layer auth, AES-256-GCM encryption.",
    span: "md:col-span-5",
  },
  {
    icon: GitBranch,
    title: "Full Audit & Lineage",
    description: "Complete audit trail of every agent action, decision, and data access. Enterprise-grade compliance built in.",
    span: "md:col-span-4",
  },
]

/* ─── Maturity Metrics ─── */

const maturityMetrics = [
  { value: "99.5%+", label: "Domain-specific accuracy", icon: CheckCircle2 },
  { value: "<5s", label: "Query response time", icon: Timer },
  { value: "10M+", label: "Rows processed in <10min", icon: Database },
  { value: "99.9%", label: "System uptime", icon: Activity },
  { value: "15%+", label: "Cross-domain learning improvement", icon: BrainCircuit },
  { value: "20+", label: "Tools in agent library", icon: Cpu },
]

/* ─── Agent Code Preview ─── */

const codeLines = [
  { text: "import { Agent, GraphMemory } from '@strataxai/sdk'", type: "import" },
  { text: "", type: "blank" },
  { text: "const agent = new Agent({", type: "declaration" },
  { text: "  name: 'invoice-processor',", type: "property" },
  { text: "  memory: new GraphMemory({", type: "property" },
  { text: "    networks: ['episodic', 'semantic', 'procedural', 'belief'],", type: "nested" },
  { text: "    scoring: 'PersonalizedPageRank',", type: "nested" },
  { text: "  }),", type: "close" },
  { text: "  context: 'scoped',", type: "property" },
  { text: "  handoff: { typed: true, lineage: true },", type: "property" },
  { text: "  tools: ['erp-bridge', 'write-back', 'audit'],", type: "property" },
  { text: "})", type: "close" },
  { text: "", type: "blank" },
  { text: "await agent.run('Process overdue invoices for Q4')", type: "execution" },
]

/* ─── Color utilities ─── */

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string; glow: string }> = {
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30", dot: "bg-teal", glow: "shadow-teal/20" },
  coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/30", dot: "bg-coral", glow: "shadow-coral/20" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", dot: "bg-gold", glow: "shadow-gold/20" },
}

/* ─── Agent Family Section ─── */

function AgentFamilySection({ family, familyIndex }: { family: typeof agentFamilies[0]; familyIndex: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const colors = colorMap[family.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: familyIndex * 0.15 }}
      className="mb-16 last:mb-0"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className={`px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-bold tracking-wider uppercase`}>
          {family.category}
        </span>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {family.agents.map((agent, index) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: familyIndex * 0.15 + index * 0.08 }}
            className={`bg-card border border-border rounded-2xl p-6 hover:${colors.border} transition-all duration-300 group`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}>
                <agent.icon className="w-5 h-5" />
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-bold tracking-wider uppercase">
                {agent.maturity}
              </span>
            </div>
            <h4 className="text-base font-bold text-foreground mb-1">{agent.name}</h4>
            <p className={`text-xs ${colors.text} font-medium mb-3`}>{agent.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ─── Architecture Flow Section ─── */

function ArchitectureFlowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle network background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
            Agent Architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Multi-agent orchestration{" "}
            <span className="text-coral">in action</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every query flows through a coordinated pipeline of specialist agents — each with typed handoffs, explicit contracts, and full lineage tracking.
          </p>
        </motion.div>

        {/* Flow visualization */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-5xl mx-auto">
          {architectureSteps.map((step, i) => {
            const colors = colorMap[step.color]
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`flex flex-col items-center gap-2 px-4 py-3 rounded-xl border ${colors.border} ${colors.bg} min-w-[120px]`}>
                  <div className={`w-8 h-8 rounded-lg ${colors.bg} ${colors.text} flex items-center justify-center`}>
                    <step.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-foreground text-center leading-tight">{step.label}</span>
                </div>
                {i < architectureSteps.length - 1 && (
                  <span className="text-muted-foreground hidden md:inline text-lg">&rarr;</span>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Six-agent conversation detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-lg font-bold text-foreground mb-6 text-center">6-Agent Conversation Flow</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { step: "1", name: "Conversation Manager", desc: "Analyzes query context, resolves references from session history" },
                { step: "2", name: "Schema Interpreter", desc: "Identifies relevant tables, columns, and relationships automatically" },
                { step: "3", name: "SQL Generator", desc: "Converts natural language to optimized PostgreSQL with JOINs" },
                { step: "4", name: "Query Validator", desc: "Security validation, performance analysis, injection prevention" },
                { step: "5", name: "Error Recovery", desc: "Automatic error detection and self-correction when validation fails" },
                { step: "6", name: "Result Explainer", desc: "Transforms results into business insights and actionable suggestions" },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-7 h-7 rounded-lg bg-teal/10 text-teal flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.name}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── SDK Capabilities Bento Grid ─── */

function SDKBentoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

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
            StrataxAI Agents SDK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Enterprise-grade agent{" "}
            <span className="text-teal">infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Proprietary multi-agent framework with typed handoffs, graph memory, and full lineage tracking. Available in Python, TypeScript, Rust, and Go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-4 max-w-5xl mx-auto">
          {sdkCapabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.09 }}
              className={`${cap.span} bg-card border border-border rounded-2xl p-6 hover:border-teal/30 transition-all duration-300 relative overflow-hidden group`}
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
                <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4">
                  <cap.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Maturity Metrics Section ─── */

function MaturityMetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle data visualization background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Maturity Benchmarks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Production-proven{" "}
            <span className="text-gold">performance</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Real benchmarks from real deployments. Our agents are not prototypes — they run enterprise workloads at scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {maturityMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
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

/* ─── SDK Code Preview Section ─── */

function SDKPreviewSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
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
    <section ref={ref} className="py-24">
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
                <span className="text-xs text-muted-foreground font-mono">agent.ts</span>
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
              Define once.{" "}
              <span className="text-teal">Deploy everywhere.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The StrataxAI Agents SDK gives you typed, production-ready agents in under 15 lines of code. Graph Memory, context strategies, and typed handoffs are built into the framework — not bolted on.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Python, TypeScript, Rust, and Go SDKs",
                "Graph Memory with PersonalizedPageRank scoring",
                "Typed handoff protocol with explicit contracts",
                "Full lineage tracking for every decision",
                "20+ built-in tools (ERP Bridge, write-back, audit)",
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

/* ─── Supply Chain R&D Section ─── */

function SupplyChainRDSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const scAgents = [
    { icon: Workflow, name: "Route Optimizer", desc: "Optimizes delivery routes with real-time traffic and weather data" },
    { icon: BarChart3, name: "Inventory Monitor", desc: "Tracks stock levels, predicts stockouts before they happen" },
    { icon: Activity, name: "Traffic Analyzer", desc: "Analyzes traffic patterns and predicts delivery delays" },
    { icon: Cpu, name: "Maintenance Predictor", desc: "Predicts maintenance needs from vehicle diagnostics data" },
    { icon: Globe, name: "Demand Forecaster", desc: "Neural demand forecasting with MCTS-based supply chain planning" },
  ]

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium">
              Supply Chain Intelligence
            </span>
            <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold text-[10px] font-bold tracking-wider uppercase flex items-center gap-1">
              <FlaskConical className="w-3 h-3" />
              R&D
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Domain-specific{" "}
            <span className="text-coral">agent swarms</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Five specialized agents working in concert for end-to-end supply chain visibility. Neural world model concepts with MCTS-based planning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {scAgents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-coral/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mx-auto mb-3">
                <agent.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-2">{agent.name}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{agent.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function AgentsPage() {
  const familiesRef = useRef(null)
  const isFamiliesInView = useInView(familiesRef, { once: true, margin: "-80px" })

  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/agents.webp"
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1800px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/92 via-background/70 via-55% to-background/15" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10 pt-[96px] pb-12 lg:pt-[120px] lg:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[60ch]"
          >
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Agent Framework · Production-grade
            </span>
            <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-5 max-w-[16ch]">
              AI agents that{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                act.
              </span>
            </h1>
            <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
              Not prototypes. Not demos. Stratax Labs runs 30+ production agents
              across enterprise finance, supply chain, and data intelligence —
              with 99.5%+ accuracy, typed handoffs, and full audit trails.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-7">
              {["12 CAMP Agents", "10 AR Agents", "6 Data Agents", "5 Supply Chain Agents"].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-rule rounded-full px-3 py-1.5 bg-background/60 backdrop-blur-sm"
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agent Families */}
      <section ref={familiesRef} className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFamiliesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Three agent{" "}
              <span className="text-teal">families</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each agent family is purpose-built for a specific domain, with production-grade reliability and enterprise compliance baked in.
            </p>
          </motion.div>

          {agentFamilies.map((family, index) => (
            <AgentFamilySection key={family.category} family={family} familyIndex={index} />
          ))}
        </div>
      </section>

      <ArchitectureFlowSection />
      <SDKBentoSection />
      <MaturityMetricsSection />
      <SDKPreviewSection />
      <SupplyChainRDSection />
      <CTASection />
      <Footer />
    </main>
  )
}
