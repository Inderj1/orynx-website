"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import {
  BookOpen, FileText, Shield, Workflow, MessageSquare,
  BarChart3, CreditCard, Clock, TrendingUp, Users,
  Database, ArrowRight, CheckCircle2, Timer,
  Activity, Zap, AlertTriangle, Scale,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

/* ─── AR Agent Pipeline ─── */

const arAgents = [
  { icon: FileText, name: "Invoice Creation", description: "Automated invoice generation from purchase orders and contracts with multi-format output." },
  { icon: Shield, name: "Validation", description: "Deterministic validation rules that never mix with LLM inference. Full compliance checks." },
  { icon: Workflow, name: "Delivery", description: "Multi-channel invoice delivery — email, portal, EDI, and API — with tracking confirmation." },
  { icon: Clock, name: "Payment Reminder", description: "Intelligent dunning sequences with escalation rules and customer behavior learning." },
  { icon: BarChart3, name: "Cash Application", description: "Intelligent payment-to-invoice matching with partial payment handling and reconciliation." },
  { icon: AlertTriangle, name: "Dispute Mgmt", description: "Automated dispute detection, classification, and resolution workflow orchestration." },
  { icon: CreditCard, name: "Credit Risk", description: "Real-time credit scoring with payment history analysis and risk threshold management." },
  { icon: TrendingUp, name: "AR Aging", description: "Aging bucket analysis with cash flow forecasting and collection priority scoring." },
  { icon: Scale, name: "Compliance", description: "Full audit trails, regulatory compliance checks, and automated reporting." },
  { icon: MessageSquare, name: "CFO Copilot", description: "Natural language interface to your entire AR pipeline. Ask anything in plain English." },
]

/* ─── Agent Detail Groups ─── */

const agentGroups = [
  {
    title: "Document Flow",
    agents: [
      { icon: FileText, name: "Invoice Creation", subtitle: "Document Generation", description: "Automated invoice generation from purchase orders and contracts. Multi-format output (PDF, XML, EDI). Template engine with dynamic fields and branding." },
      { icon: Shield, name: "Validation Agent", subtitle: "Rules Engine", description: "Deterministic business rules that never mix with LLM inference. Tax compliance, duplicate detection, and field-level validation with full audit trail." },
      { icon: Workflow, name: "Delivery Agent", subtitle: "Multi-Channel Distribution", description: "Email, customer portal, EDI, and API delivery with read receipts, bounce handling, and retry logic. Tracks every touchpoint." },
    ],
  },
  {
    title: "Payment Flow",
    agents: [
      { icon: Clock, name: "Payment Reminder", subtitle: "Intelligent Dunning", description: "Smart dunning sequences that adapt to customer behavior. Escalation rules, payment plan offers, and multi-channel follow-up." },
      { icon: BarChart3, name: "Cash Application", subtitle: "Payment Matching", description: "Intelligent payment-to-invoice matching with partial payment handling, lockbox processing, and bank feed reconciliation." },
      { icon: AlertTriangle, name: "Dispute Management", subtitle: "Resolution Workflow", description: "Automated dispute detection from customer communications. Classification, assignment, and escalation with SLA tracking." },
      { icon: CreditCard, name: "Credit Risk", subtitle: "Risk Assessment", description: "Real-time credit scoring using payment history, financial data, and external signals. Automated credit limit management." },
    ],
  },
  {
    title: "Intelligence",
    agents: [
      { icon: TrendingUp, name: "AR Aging & Forecasting", subtitle: "Predictive Analytics", description: "Aging bucket analysis with cash flow forecasting, collection priority scoring, and what-if scenarios for cash management." },
      { icon: Scale, name: "Compliance & Audit", subtitle: "Regulatory Engine", description: "Full audit trails for every transaction. SOX compliance, ASC 606 revenue recognition, and automated regulatory reporting." },
      { icon: MessageSquare, name: "CFO Copilot", subtitle: "Natural Language Interface", description: "\"Who owes me money?\" \"What invoices are overdue?\" Plain English queries across your entire AR pipeline with contextual follow-ups." },
    ],
  },
]

/* ─── CFO Copilot Terminal Lines ─── */

const copilotLines = [
  { text: "CFO> Who owes me money?", type: "query" },
  { text: "", type: "blank" },
  { text: "Analyzing AR data across 3 connected systems...", type: "info" },
  { text: "", type: "blank" },
  { text: "Top Outstanding Receivables:", type: "header" },
  { text: "  1. Acme Corp         $142,500  (47 days overdue)", type: "result" },
  { text: "  2. TechFlow Inc      $89,200   (32 days overdue)", type: "result" },
  { text: "  3. GlobalMfg Ltd     $67,800   (21 days overdue)", type: "result" },
  { text: "", type: "blank" },
  { text: "Total Outstanding: $1.2M across 84 invoices", type: "summary" },
  { text: "Suggested Actions:", type: "header" },
  { text: "  → Escalate Acme Corp (3rd reminder sent)", type: "action" },
  { text: "  → Offer TechFlow payment plan (pattern detected)", type: "action" },
  { text: "  → Auto-remind GlobalMfg (within policy window)", type: "action" },
]

/* ─── ERP Systems ─── */

const erpSystems = [
  "QuickBooks Online", "QuickBooks Desktop", "Xero", "Zoho Books", "FreshBooks", "Wave",
  "NetSuite", "SAP S/4HANA", "SAP Business One", "Sage Intacct", "Sage 100",
  "Microsoft Dynamics 365", "Business Central", "Oracle ERP Cloud",
  "Tally Prime", "MYOB AccountRight", "Acumatica", "Odoo",
]

/* ─── Key Stats ─── */

const stats = [
  { value: "10", label: "Intelligent agents", icon: Zap },
  { value: "40", label: "ERP connectors", icon: Database },
  { value: "<5s", label: "Response time", icon: Timer },
  { value: "99.5%", label: "Accuracy", icon: CheckCircle2 },
  { value: "Multi-tenant", label: "Architecture", icon: Users },
  { value: "Full", label: "Audit trail", icon: Shield },
]

/* ─── AR Agent Flow Section ─── */

function ARAgentFlowSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            10-Agent Pipeline
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            End-to-end AR{" "}
            <span className="text-gold">automation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            10 intelligent agents working in concert — from invoice creation to cash application. Each agent hands off to the next with typed contracts and full audit trails.
          </p>
        </motion.div>

        {/* Pipeline rows */}
        <div className="max-w-5xl mx-auto space-y-4">
          {[arAgents.slice(0, 5), arAgents.slice(5, 10)].map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-col md:flex-row items-center justify-center gap-3">
              {row.map((agent, i) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 + (rowIdx * 5 + i) * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border border-gold/20 bg-gold/5 min-w-[120px]">
                    <div className="w-8 h-8 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                      <agent.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-foreground text-center leading-tight">{agent.name}</span>
                  </div>
                  {i < row.length - 1 && (
                    <span className="text-muted-foreground hidden md:inline text-lg">&rarr;</span>
                  )}
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Agent Detail Cards Section ─── */

function AgentDetailSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Meet the{" "}
            <span className="text-gold">agents</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three coordinated agent groups covering every aspect of accounts receivable — document flow, payment processing, and financial intelligence.
          </p>
        </motion.div>

        {agentGroups.map((group, groupIdx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
            className="mb-12 last:mb-0"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold tracking-wider uppercase">
                {group.title}
              </span>
            </div>
            <div className={`grid md:grid-cols-2 ${group.agents.length > 3 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4`}>
              {group.agents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.15 + index * 0.08 }}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mb-4">
                    <agent.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-1">{agent.name}</h4>
                  <p className="text-xs text-gold font-medium mb-3">{agent.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* ─── CFO Copilot Terminal Section ─── */

function CFOCopilotSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= copilotLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 180)
    return () => clearInterval(interval)
  }, [isInView])

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Terminal */}
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
                <div className="h-3 w-3 rounded-full bg-gold/50" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-muted-foreground font-mono">cfo-copilot</span>
              </div>
            </div>
            <div className="p-6 font-mono text-xs leading-relaxed min-h-[340px]">
              {copilotLines.map((line, i) => {
                if (line.type === "blank") {
                  return <div key={i} className={`h-4 transition-opacity duration-300 ${i < visibleLines ? "opacity-100" : "opacity-0"}`} />
                }
                const colorClass =
                  line.type === "query" ? "text-gold font-semibold" :
                  line.type === "header" ? "text-foreground font-semibold" :
                  line.type === "result" ? "text-muted-foreground" :
                  line.type === "summary" ? "text-teal font-semibold" :
                  line.type === "action" ? "text-gold" :
                  "text-muted-foreground/70"
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

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
              CFO Copilot
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ask anything in{" "}
              <span className="text-gold">plain English</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The CFO Copilot is a natural language interface to your entire accounts receivable pipeline. Ask questions, get insights, and take action — all in plain English with contextual follow-ups.
            </p>
            <div className="space-y-3 mb-8">
              <p className="text-sm font-medium text-foreground">Example queries:</p>
              {[
                "\"Who owes me money?\"",
                "\"What invoices are overdue this month?\"",
                "\"Show me collection trends for Q4\"",
                "\"Which customers need payment reminders?\"",
                "\"Forecast cash receipts for next 30 days\"",
              ].map((query) => (
                <div key={query} className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground italic">{query}</span>
                </div>
              ))}
            </div>
            <a href="/pricing">
              <Button className="bg-foreground text-background hover:bg-foreground/90 group">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/* ─── ERP Integration Section ─── */

function ERPIntegrationSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            ERPBridge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Connects to your{" "}
            <span className="text-gold">existing systems</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            LEDGERLY PRO connects through the Enterprise Data Bridge — no ETL, no data movement, bidirectional sync with your accounting and ERP systems.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          {["Your ERP", "ERPBridge", "Unified Schema", "AR Agents"].map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className={`px-5 py-3 rounded-xl text-sm font-medium ${
                i === 1 ? "bg-gold/10 text-gold border border-gold/30" :
                i === 3 ? "bg-gold/10 text-gold border border-gold/30" :
                "bg-muted text-muted-foreground border border-border"
              }`}>
                {step}
              </div>
              {i < 3 && (
                <span className="text-muted-foreground hidden md:inline">&rarr;</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* ERP pills */}
        <div className="flex items-center justify-center flex-wrap gap-3">
          {erpSystems.map((sys, index) => (
            <motion.span
              key={sys}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
              className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground"
            >
              {sys}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Key Stats Section ─── */

function KeyStatsSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
            Platform Benchmarks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Production-proven{" "}
            <span className="text-gold">performance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function LedgerlyAIPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/financial.webp"
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
              LEDGERLY PRO · AR Automation
            </span>
            <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] mt-5 max-w-[16ch]">
              Accounts receivable that{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                runs itself.
              </span>
            </h1>
            <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
              10 intelligent agents automating the entire AR workflow — from
              invoice creation to cash application. Natural language queries
              let your finance team ask questions in plain English.
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-7">
              <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-rule rounded-full px-3 py-1.5 bg-background/60 backdrop-blur-sm">
                LEDGERLY PRO
              </span>
              <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-rule rounded-full px-3 py-1.5 bg-background/60 backdrop-blur-sm">
                10 AR Agents
              </span>
              <span className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft border border-rule rounded-full px-3 py-1.5 bg-background/60 backdrop-blur-sm">
                NetSuite · Salesforce · SAP
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <ARAgentFlowSection />
      <AgentDetailSection />
      <CFOCopilotSection />
      <ERPIntegrationSection />
      <KeyStatsSection />
      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
