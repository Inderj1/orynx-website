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
    category: "Healthcare & Clinical Agents",
    color: "teal",
    agents: [
      {
        icon: Network,
        name: "EHR Bridge",
        role: "Universal Healthcare Integration",
        description: "Real-time bidirectional sync across 78+ EHR platforms (Epic, Cerner, Allscripts, athenahealth) with FHIR R4 and HL7 support.",
        maturity: "Production",
      },
      {
        icon: MessageSquare,
        name: "Ambient Scribe",
        role: "Clinical Transcription",
        description: "Real-time SOAP note generation from doctor-patient conversations using Deepgram and Azure OpenAI. NHS- and HIPAA-compliant.",
        maturity: "Production",
      },
      {
        icon: Activity,
        name: "DiaWound Analyzer",
        role: "Computer Vision Triage",
        description: "Camera-based wound classification, severity assessment, healing tracking, and red-flag alerts for diabetic care.",
        maturity: "Production",
      },
      {
        icon: Sparkles,
        name: "MedSynth Generator",
        role: "Synthetic Patient Data",
        description: "Privacy-safe synthetic patient records for model training, simulation, and research. 100% HIPAA-compliant by design.",
        maturity: "Production",
      },
    ],
  },
  {
    category: "Compliance & Communications Agents",
    color: "gold",
    agents: [
      {
        icon: Shield,
        name: "ComplianceOS",
        role: "Evidence Collection",
        description: "Automates SOC 2, ISO 27001, and HIPAA evidence across 12+ tool integrations with continuous monitoring and audit-ready reporting.",
        maturity: "Production",
      },
      {
        icon: Workflow,
        name: "Policy Generator",
        role: "Document Automation",
        description: "AI-generated policy documents and control mappings derived from framework requirements and live infrastructure state.",
        maturity: "Production",
      },
      {
        icon: Bot,
        name: "Call Center AI",
        role: "Voice Triage",
        description: "LiveKit + Gemini 2.0 voice agents with intelligent triage, multi-language routing (4+), and sub-500ms response handoff.",
        maturity: "Production",
      },
      {
        icon: Globe,
        name: "CommBridge",
        role: "Unified Communications",
        description: "Single-API routing across Slack, Teams, Discord, email, voice, and push. Multi-language microservices (Go, Rust, Python, TS).",
        maturity: "Production",
      },
    ],
  },
  {
    category: "Developer & Data Intelligence Agents",
    color: "coral",
    agents: [
      {
        icon: Code2,
        name: "AutoPRD",
        role: "Autonomous Dev Pipeline",
        description: "Feedback → PRD → implementation → reviewed code. Claude Code agent loop with Docker-sandboxed execution and auto-generated test suites.",
        maturity: "Production",
      },
      {
        icon: Search,
        name: "Schema Interpreter",
        role: "Data Discovery",
        description: "Automatically identifies relevant tables, columns, FHIR resources, and relationships across connected systems.",
        maturity: "Production",
      },
      {
        icon: Database,
        name: "Query Generator",
        role: "NL → SQL / FHIR",
        description: "Converts natural language to optimized PostgreSQL, FHIR queries, or GraphQL with JOINs, filters, and aggregations.",
        maturity: "Production",
      },
      {
        icon: Sparkles,
        name: "Result Explainer",
        role: "Insight Synthesis",
        description: "Transforms raw query results into business insights, clinical summaries, and actionable next-step suggestions.",
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
  { label: "Policy & Audit Layer", icon: Shield, color: "teal" },
  { label: "Write-Back / Response", icon: ArrowRight, color: "gold" },
]

/* ─── SDK Features ─── */

const sdkCapabilities = [
  {
    icon: Network,
    title: "24+ Context Strategies",
    description: "Full shared, scoped, isolated, hierarchical, and more. Every agent gets exactly the context it needs — critical for PHI, PCI, and tenant-boundary enforcement.",
    span: "md:col-span-4",
  },
  {
    icon: Database,
    title: "Cognitive Graph Memory",
    description: "Multi-tier memory (hot, warm, cold) modelling facts, experiences, beliefs, and summaries. LLM-powered extraction with deduplication and conflict resolution.",
    span: "md:col-span-4",
  },
  {
    icon: Code2,
    title: "Typed Handoff Protocol",
    description: "Explicit contracts between agents with type-safe handoffs. Stateful agents with validated transitions and full lineage tracking for every decision.",
    span: "md:col-span-4",
  },
  {
    icon: Layers,
    title: "Multi-Language SDK",
    description: "Python, TypeScript, Rust, and Go. First-class support across all four with identical APIs. Rust/Go core delivers up to 10x speedups.",
    span: "md:col-span-3",
  },
  {
    icon: Shield,
    title: "Compliance-Ready Safety",
    description: "Policy engine with anomaly detection and human escalation. GDPR, HIPAA, and PCI-DSS ready out of the box. Sandboxed code execution with resource limits.",
    span: "md:col-span-5",
  },
  {
    icon: GitBranch,
    title: "Full Audit & Lineage",
    description: "Complete audit trail of every agent action, decision, and data access. Data flow tracking and DLP presets for enterprise compliance.",
    span: "md:col-span-4",
  },
]

/* ─── Maturity Metrics ─── */

const maturityMetrics = [
  { value: "100+", label: "LLM providers supported", icon: BrainCircuit },
  { value: "24+", label: "Swappable context strategies", icon: Layers },
  { value: "78+", label: "EHR connectors live", icon: Network },
  { value: "99.9%", label: "System uptime", icon: Activity },
  { value: "10x", label: "Rust/Go core speedups", icon: Zap },
  { value: "4", label: "Language SDKs (Py, TS, Rust, Go)", icon: Code2 },
]

/* ─── Agent Code Preview ─── */

const codeLines = [
  { text: "import { Agent, GraphMemory } from '@orynx/agents'", type: "import" },
  { text: "", type: "blank" },
  { text: "const agent = new Agent({", type: "declaration" },
  { text: "  name: 'patient-sync',", type: "property" },
  { text: "  memory: new GraphMemory({", type: "property" },
  { text: "    networks: ['episodic', 'semantic', 'procedural', 'belief'],", type: "nested" },
  { text: "    tiers: ['hot', 'warm', 'cold'],", type: "nested" },
  { text: "  }),", type: "close" },
  { text: "  context: 'scoped',", type: "property" },
  { text: "  handoff: { typed: true, lineage: true },", type: "property" },
  { text: "  policy: { compliance: ['HIPAA', 'GDPR'] },", type: "property" },
  { text: "  tools: ['ehr-bridge', 'comm-bridge', 'audit'],", type: "property" },
  { text: "})", type: "close" },
  { text: "", type: "blank" },
  { text: "await agent.run('Reconcile patient records across EHRs')", type: "execution" },
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
            Orynx Agents SDK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Enterprise-grade agent{" "}
            <span className="text-teal">infrastructure</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Provider-agnostic multi-agent framework with typed handoffs, cognitive graph memory, durable execution, and compliance-ready safety. 100+ LLM providers, four language SDKs.
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
            Real benchmarks from real deployments across healthcare, fintech, IoT, and compliance. Our agents are not prototypes — they run enterprise workloads at scale.
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
              The Orynx Agents SDK gives you typed, production-ready agents in under 15 lines of code. Cognitive graph memory, 24+ context strategies, typed handoffs, and compliance policy are built into the framework — not bolted on.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Python, TypeScript, Rust, and Go SDKs",
                "Cognitive graph memory with multi-tier storage",
                "Typed handoff protocol with explicit contracts",
                "Full lineage tracking for every decision",
                "100+ LLM providers, MCP client + server",
                "GDPR, HIPAA, and PCI-DSS ready out of the box",
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
    { icon: Activity, name: "Clinical Reasoner", desc: "Multi-modal reasoning across imaging, labs, vitals, and unstructured notes" },
    { icon: Workflow, name: "Care-Pathway Planner", desc: "MCTS-based optimal care-pathway recommendation with lookahead planning" },
    { icon: BarChart3, name: "Risk Forecaster", desc: "Neural risk scoring from longitudinal patient and financial data" },
    { icon: Cpu, name: "IoT Telemetry Agent", desc: "Real-time anomaly detection across device fleets and clinical sensors" },
    { icon: Globe, name: "Knowledge Synthesizer", desc: "Cross-domain summarization across regulations, research, and live system state" },
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
              Cross-Domain Intelligence
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
            Specialised agents working in concert across healthcare, fintech, IoT, and compliance. Neural reasoning concepts with MCTS-based planning and lookahead.
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
            src="/heroes/agents.png"
            alt=""
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1800px"
            className="object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 via-55% to-background/40" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
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
            <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-5 max-w-[16ch]">
              AI agents that{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                act.
              </span>
            </h1>
            <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
              Not prototypes. Not demos. Orynx runs production agents across
              healthcare, fintech, IoT, compliance, and communications — with
              intelligent context management, multi-tier memory, typed handoffs,
              and HIPAA-grade audit trails.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-7">
              {["24+ Context Strategies", "Multi-Tier Memory", "100+ LLM Providers", "4 Language SDKs"].map((label) => (
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
              Each family is purpose-built for a domain — healthcare, compliance & communications, and developer & data intelligence — with production-grade reliability and enterprise compliance baked in.
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
