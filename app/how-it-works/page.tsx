"use client"

import { Navbar } from "@/components/navbar/navbar"
import { HowItWorks } from "@/components/how-it-works/how-it-works"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  Database, ArrowLeftRight, Network, Code2, Shield,
  Webhook, Monitor, BarChart3, FlaskConical,
} from "lucide-react"
import Image from "next/image"

const integrationCategories = [
  {
    label: "Tier-1 Hospital EHR",
    systems: ["Epic", "Cerner (Oracle Health)", "Allscripts", "Meditech", "athenahealth", "NextGen"],
  },
  {
    label: "NHS & UK Systems",
    systems: ["EMIS Web", "SystmOne (TPP)", "Vision", "Cerner Millennium UK", "OpenEyes"],
  },
  {
    label: "Specialty EPR & Imaging",
    systems: ["OpenEyes (Ophthalmology)", "TrakCare", "Dedalus", "Sectra PACS", "GE Centricity", "Agfa"],
  },
  {
    label: "Standards & Interop",
    systems: ["FHIR R4", "HL7 v2.x", "CDA", "DICOM", "IHE profiles", "SMART on FHIR"],
  },
  {
    label: "Communications",
    systems: ["Slack", "Microsoft Teams", "Discord", "Email (SMTP/IMAP)", "Voice (LiveKit, Twilio)", "SMS & Push"],
  },
  {
    label: "Compliance & Identity",
    systems: ["AWS Audit Manager", "Drata", "Vanta", "Okta", "Azure AD", "Auth0"],
  },
  {
    label: "Fintech & Payments",
    systems: ["Stripe", "Plaid", "Adyen", "QuickBooks", "Xero", "Sage Intacct"],
  },
  {
    label: "Cloud & Infrastructure",
    systems: ["AWS", "GCP", "Azure", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "RabbitMQ"],
  },
]

const bridgeCapabilities = [
  { icon: ArrowLeftRight, label: "Bidirectional Sync", desc: "Read and write back via the Unified Schema with sub-2-second latency" },
  { icon: Webhook, label: "Webhooks", desc: "Real-time event notifications on clinical, comms, and business data changes" },
  { icon: Monitor, label: "AI-Powered Chat", desc: "Natural language queries across all connected systems" },
  { icon: BarChart3, label: "Data Quality Analytics", desc: "Automated record profiling, deduplication, and quality scoring" },
]

const sdkFeatures = [
  {
    icon: Network,
    title: "24+ Context Strategies",
    description: "Full shared, scoped, isolated, hierarchical, and more. Every agent gets exactly the context it needs — critical for PHI, PCI, and tenant-boundary enforcement.",
  },
  {
    icon: Database,
    title: "Cognitive Graph Memory",
    description: "Multi-tier (hot, warm, cold) memory modelling facts, experiences, beliefs, and summaries. LLM-powered extraction with deduplication and conflict resolution.",
  },
  {
    icon: Code2,
    title: "Typed Handoff Protocol",
    description: "Explicit contracts between agents with type-safe handoffs. Stateful agents with validated transitions and full lineage tracking on every decision.",
  },
  {
    icon: Shield,
    title: "Audit & Compliance",
    description: "Complete audit trail of every agent action, decision, and data access. GDPR, HIPAA, and PCI-DSS ready out of the box with DLP presets.",
  },
]

function DataBridgeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle server room background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&h=1080&fit=crop"
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal/10 text-teal text-sm font-medium mb-4">
            Universal Integration Layer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Connect to any system.{" "}
            <span className="text-teal">No data movement.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            78+ EHR connectors plus unified comms, compliance, fintech, and cloud integrations. FHIR R4, HL7, REST, GraphQL, gRPC, and SOAP. Bidirectional read/write with sub-2-second sync.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
          {["Your System", "Orynx Integration Layer", "Unified Schema (FHIR / Business / Comms)", "Orynx Agents", "Write-Back"].map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className={`px-5 py-3 rounded-xl text-sm font-medium ${
                i === 1 ? "bg-teal/10 text-teal border border-teal/30" :
                i === 3 ? "bg-coral/10 text-coral border border-coral/30" :
                "bg-muted text-muted-foreground border border-border"
              }`}>
                {step}
              </div>
              {i < 4 && (
                <span className="text-muted-foreground hidden md:inline">&rarr;</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Integration categories grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {integrationCategories.map((cat, index) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-5"
            >
              <h4 className="text-sm font-semibold text-foreground mb-3">{cat.label}</h4>
              <ul className="space-y-2">
                {cat.systems.map((sys) => (
                  <li key={sys} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal flex-shrink-0" />
                    {sys}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="grid md:grid-cols-4 gap-4">
          {bridgeCapabilities.map((cap, index) => (
            <motion.div
              key={cap.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center p-4"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center mx-auto mb-3">
                <cap.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-foreground mb-1">{cap.label}</h4>
              <p className="text-xs text-muted-foreground">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* On-premise note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Self-hosted deployment available</span> for on-premise EHRs, private LLMs (Ollama, vLLM), and air-gapped environments.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function AgentsSDKSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
            Orynx Agents SDK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Provider-agnostic multi-agent{" "}
            <span className="text-coral">framework</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            24+ context-sharing strategies, typed handoff protocol, cognitive graph memory with multi-tier storage. 100+ LLM providers. Available in Python, TypeScript, Rust, and Go.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {sdkFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-coral/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* R&D tag for advanced capabilities */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-muted/50 border border-border rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-sm font-semibold text-foreground">Advanced R&D Capabilities</h4>
                <span className="px-2 py-0.5 rounded-full bg-gold/10 text-gold text-[10px] font-bold tracking-wider uppercase">R&D</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Neural clinical-reasoning world models, MCTS-based care-pathway planning, multi-modal perception (imaging, vitals, notes), and synthetic data generation (MedSynth). These capabilities are in active research and development.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function HowItWorksPage() {
  return (
    <main className="relative">
      <Navbar />
      {/* Hero banner */}
      <section className="relative bg-background overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/heroes/platform.png"
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
          <div className="max-w-[60ch]">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              Technology · Platform
            </span>
            <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-5 max-w-[16ch]">
              Three modes of{" "}
              <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
                intelligence.
              </span>
            </h1>
            <p className="text-ink-soft text-lg lg:text-xl max-w-[58ch] leading-[1.55] mt-7">
              Orynx operates across three complementary modes — proactive
              monitoring, reactive natural-language querying, and
              dashboard-driven autonomy — powered by the Universal Integration
              Layer and the Orynx Agents SDK.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />

      <DataBridgeSection />
      <AgentsSDKSection />
      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
