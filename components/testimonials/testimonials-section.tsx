"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Database, BrainCircuit, ArrowLeftRight,
  Workflow, Shield, Layers, Network, Zap,
  Lock, Eye, FileText, TrendingUp,
} from "lucide-react"

/* ─── Row 1: Integration & data capabilities ─── */

const row1 = [
  {
    icon: Database,
    title: "78+ EHR Connectors",
    description: "Epic, Cerner, Allscripts, athenahealth — and the long tail of regional systems hospitals actually run. Live in production today.",
    color: "teal",
  },
  {
    icon: Layers,
    title: "FHIR R4 + HL7 Native",
    description: "Native support for both standards out of the box. We translate to a single canonical model so your app stays simple.",
    color: "teal",
  },
  {
    icon: BrainCircuit,
    title: "Multi-tier Graph Memory",
    description: "Hot, warm, and cold tiers across episodic, semantic, procedural, and belief networks. LLM-powered extraction with conflict resolution.",
    color: "gold",
  },
  {
    icon: Network,
    title: "24+ Context Strategies",
    description: "Shared, scoped, isolated, hierarchical — every agent gets exactly the context it needs. Critical for PHI, PCI, and tenant boundaries.",
    color: "teal",
  },
  {
    icon: ArrowLeftRight,
    title: "Bidirectional Sync",
    description: "Read and write back. Patients, encounters, observations, orders flow both directions with sub-2-second latency.",
    color: "coral",
  },
  {
    icon: Eye,
    title: "Full Lineage Tracking",
    description: "Every action, decision, and data access traced end-to-end. Complete audit trail across every agent interaction.",
    color: "gold",
  },
]

/* ─── Row 2: Real-time, voice & compliance capabilities ─── */

const row2 = [
  {
    icon: Shield,
    title: "HIPAA / SOC 2 / ISO 27001",
    description: "Privacy-by-design from the first commit. BAA-ready deployments and configurable data residency for clinical-grade workloads.",
    color: "coral",
  },
  {
    icon: Lock,
    title: "End-to-end encryption",
    description: "AES-256 at rest and in transit. Multi-layer auth with OAuth 2.0, JWT, and SMART on FHIR for healthcare contexts.",
    color: "coral",
  },
  {
    icon: Zap,
    title: "Sub-500ms voice loops",
    description: "Built on LiveKit and Gemini 2.0. End-to-end voice latency fast enough to feel human — across 4+ languages.",
    color: "teal",
  },
  {
    icon: Workflow,
    title: "Typed handoff protocol",
    description: "Explicit contracts between agents. Stateful agents with validated transitions and full lineage tracking on every decision.",
    color: "gold",
  },
  {
    icon: FileText,
    title: "Audit-ready exports",
    description: "One-click evidence packs for SOC 2, ISO 27001, and HIPAA audits. Mappings, timestamps, signoffs — all there.",
    color: "coral",
  },
  {
    icon: TrendingUp,
    title: "100+ LLM providers",
    description: "Provider-agnostic SDK. Swap models without rewriting agents. Self-host via vLLM where compliance demands it.",
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
            Platform architecture
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            What makes Orynx{" "}
            <span className="text-teal">different.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Deep healthcare integration, real-time voice AI, and audit-grade
            compliance — combined in a single studio that ships both the
            platforms and the engineering teams to deploy them.
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
