"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Database, BrainCircuit, ArrowLeftRight,
  Workflow, Shield, Layers, Network, Zap,
  Lock, Eye, FileText, TrendingUp,
} from "lucide-react"

/* ─── Row 1: Data Bridge + Graph Memory capabilities ─── */

const row1 = [
  {
    icon: Database,
    title: "Zero Data Movement",
    description: "Connect to SAP, Oracle, Salesforce, and more via REST, OData, SOAP, and GraphQL — your data stays where it is.",
    color: "teal",
  },
  {
    icon: Layers,
    title: "Unified Business Schema",
    description: "Every connector maps to a single canonical schema. One interface to query across all enterprise systems.",
    color: "teal",
  },
  {
    icon: BrainCircuit,
    title: "4-Network Graph Memory",
    description: "Episodic, semantic, procedural, and belief networks. The system learns from every execution and gets measurably smarter.",
    color: "gold",
  },
  {
    icon: Network,
    title: "17+ Context Strategies",
    description: "Full-context, summary, semantic, temporal, and more. Agents share the right context at the right time.",
    color: "teal",
  },
  {
    icon: ArrowLeftRight,
    title: "Bidirectional Sync",
    description: "Read and write back to your source systems. No one-way data pipelines — true closed-loop architecture.",
    color: "coral",
  },
  {
    icon: Eye,
    title: "Full Lineage Tracking",
    description: "Every data point traced from source to decision. Complete audit trail across all agent interactions.",
    color: "gold",
  },
]

/* ─── Row 2: Trust Architecture + Write-Back capabilities ─── */

const row2 = [
  {
    icon: Shield,
    title: "4-Tier Trust Architecture",
    description: "Deterministic business rules never mix with LLM inference. Each tier has explicit boundaries and guarantees.",
    color: "coral",
  },
  {
    icon: Lock,
    title: "AES-256-GCM Encryption",
    description: "Multi-layer authentication with API keys, JWT RS256, and OAuth2. Enterprise-grade security at every layer.",
    color: "coral",
  },
  {
    icon: Workflow,
    title: "Closed-Loop Write-Back",
    description: "Insights write back directly into SAP, Oracle, and Salesforce autonomously. The loop between insight and action is fully closed.",
    color: "teal",
  },
  {
    icon: Zap,
    title: "Typed Handoff Protocol",
    description: "Explicit contracts between agents. Zero data loss, full validation, and complete state transfer at every handoff.",
    color: "gold",
  },
  {
    icon: FileText,
    title: "SOX & ASC 606 Compliant",
    description: "Full audit trails for every transaction. Revenue recognition, regulatory reporting, and compliance built in.",
    color: "coral",
  },
  {
    icon: TrendingUp,
    title: "Self-Learning Loop",
    description: "Every decision feeds back into Graph Memory. Accuracy improves continuously — measurably smarter every week.",
    color: "gold",
  },
]

function DifferentiatorCard({ item }: { item: typeof row1[0] }) {
  const Icon = item.icon
  return (
    <div className="flex-shrink-0 w-[340px] bg-card border border-border rounded-2xl p-6 hover:border-teal/30 transition-colors duration-300">
      <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 text-${item.color} flex items-center justify-center mb-4`}>
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
    </div>
  )
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-coral/5" />

      <div className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 px-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Platform Architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What makes StrataxAI{" "}
            <span className="text-teal">different</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Enterprise Data Bridge, Graph Memory, and Closed-Loop Write-Back — three architectural pillars that no other platform combines.
          </p>
        </motion.div>

        {/* Marquee Row 1 - scrolls left */}
        <div className="relative mb-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 overflow-hidden group">
            <div
              className="flex gap-6 group-hover:[animation-play-state:paused]"
              style={{
                animation: "scroll-left 40s linear infinite",
              }}
            >
              {[...row1, ...row1].map((item, i) => (
                <DifferentiatorCard key={`r1-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee Row 2 - scrolls right */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/80 to-transparent z-10 pointer-events-none" />

          <div className="flex gap-6 overflow-hidden group">
            <div
              className="flex gap-6 group-hover:[animation-play-state:paused]"
              style={{
                animation: "scroll-right 40s linear infinite",
              }}
            >
              {[...row2, ...row2].map((item, i) => (
                <DifferentiatorCard key={`r2-${i}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
