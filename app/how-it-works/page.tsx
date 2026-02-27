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

const erpCategories = [
  {
    label: "Tier 1 ERP",
    systems: ["SAP S/4HANA", "Oracle ERP Cloud", "Microsoft Dynamics 365", "Workday", "Infor CloudSuite", "IFS Applications"],
  },
  {
    label: "Mid-Market ERP",
    systems: ["NetSuite", "Sage Intacct", "Acumatica", "Epicor ERP", "Unit4", "Syspro", "Odoo"],
  },
  {
    label: "Accounting",
    systems: ["QuickBooks Online", "QuickBooks Desktop", "Xero", "Zoho Books", "FreshBooks", "Wave", "Tally Prime / ERP 9", "MYOB AccountRight"],
  },
  {
    label: "Microsoft",
    systems: ["Dynamics 365", "Business Central", "Dynamics GP", "Dynamics NAV", "Dynamics AX"],
  },
  {
    label: "SAP",
    systems: ["SAP S/4HANA", "SAP Business One", "SAP Business ByDesign"],
  },
  {
    label: "Sage",
    systems: ["Sage Intacct", "Sage 100", "Sage 300", "Sage 500", "Sage X3"],
  },
  {
    label: "Manufacturing",
    systems: ["Plex Systems", "Priority Software", "Deltek Costpoint", "Katana MRP", "MRPeasy"],
  },
  {
    label: "CRM & Other",
    systems: ["Salesforce", "HubSpot", "Ramco ERP", "Cin7", "Fishbowl"],
  },
]

const bridgeCapabilities = [
  { icon: ArrowLeftRight, label: "Bidirectional Sync", desc: "Read and write back via Unified Business Schema" },
  { icon: Webhook, label: "Webhooks", desc: "Real-time event notifications on data changes" },
  { icon: Monitor, label: "AI-Powered Chat", desc: "Natural language queries across all connected systems" },
  { icon: BarChart3, label: "Data Quality Analytics", desc: "Automated data profiling and quality scoring" },
]

const sdkFeatures = [
  {
    icon: Network,
    title: "17+ Context Strategies",
    description: "Full shared, scoped, isolated, hierarchical, and more. Every agent gets exactly the context it needs — no more, no less.",
  },
  {
    icon: Database,
    title: "Graph Memory",
    description: "4-network cognitive model: episodic (experiences), semantic (facts), procedural (skills), and belief (summaries). PersonalizedPageRank scoring.",
  },
  {
    icon: Code2,
    title: "Typed Handoff Protocol",
    description: "Explicit contracts between agents with type-safe handoffs. Full lineage tracking for every decision and every handoff in the chain.",
  },
  {
    icon: Shield,
    title: "Audit & Lineage",
    description: "Complete audit trail of every agent action, decision, and data access. Enterprise-grade compliance built into the framework.",
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
            Enterprise Data Bridge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Connect to any ERP.{" "}
            <span className="text-teal">No data movement.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            40 native connectors supporting REST, OData v2/v4, SOAP, and GraphQL. Kong Gateway routing. Bidirectional read/write via the Unified Business Schema.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16"
        >
          {["Your ERP", "Enterprise Data Bridge", "Unified Business Schema", "CAMP Framework", "Write-Back"].map((step, i) => (
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

        {/* ERP categories grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {erpCategories.map((cat, index) => (
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
            <span className="font-medium text-foreground">On-premise agent available</span> for desktop ERPs like QuickBooks Desktop and Tally.
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
            StrataxAI Agents SDK
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Proprietary multi-agent{" "}
            <span className="text-coral">framework</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            17+ context sharing strategies, typed handoff protocol, Graph Memory with 4-network cognitive model. Available in Python, TypeScript, Rust, and Go.
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
                Neural world model for supply chain optimization, MCTS-based planning, and multi-modal agent perception. These capabilities are in active research and development.
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
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(30 15% 98%) 70%),
              radial-gradient(circle, hsl(218 30% 88% / 0.08) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100% 100%, 40px 40px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            How It Works
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: "-0.03em" }}>
            Three Modes of{" "}
            <span className="text-teal">Intelligence</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            StrataxAI operates across three complementary modes — proactive monitoring, reactive querying, and dashboard-driven autonomy — powered by the Enterprise Data Bridge and StrataxAI Agents SDK.
          </p>
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
