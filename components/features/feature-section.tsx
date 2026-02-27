"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  BrainCircuit, LineChart, Globe, Activity, Database, Network, Code2, RefreshCw,
  TrendingUp, Package, ShoppingCart, FileText, Workflow, Radio, BookOpen, CreditCard,
} from "lucide-react"
import { NetworkNodesIllustration, BrainPatternIllustration } from "./feature-illustrations"

const features = [
  {
    icon: BrainCircuit,
    title: "Core AI",
    subtitle: "Self-Learning Engine  \u00b7  8 Modules",
    description: "Graph Memory with 4-network cognitive model — episodic, semantic, procedural, and belief networks. Learns from every execution and gets measurably smarter every week.",
    color: "teal",
    span: "md:col-span-5 md:row-span-2",
    modules: [
      { icon: TrendingUp, name: "MARGEN.AI", desc: "Margin analytics & revenue intelligence" },
      { icon: Package, name: "STOX.AI", desc: "Smart inventory optimization" },
      { icon: ShoppingCart, name: "ORDLY.AI", desc: "Order intelligence platform" },
      { icon: FileText, name: "O2C.AI", desc: "Order-to-cash analysis" },
      { icon: Workflow, name: "PROCESS.AI", desc: "Process mining & analytics" },
      { icon: Radio, name: "TRAXX.AI", desc: "IoT kit & asset tracking" },
      { icon: BookOpen, name: "MASTER.AI", desc: "Master data intelligence" },
      { icon: CreditCard, name: "AP.AI", desc: "Accounts payable intelligence" },
    ],
  },
  {
    icon: LineChart,
    title: "Axis AI",
    subtitle: "Predictive Foresight",
    description: "What-if simulations, digital twins, and natural language queries across all connected systems. Strategic foresight for enterprise decisions.",
    color: "coral",
    span: "md:col-span-4",
  },
  {
    icon: Globe,
    title: "Markets AI",
    subtitle: "External Signals",
    description: "Demand, disruption, and logistics data for adaptive decisions. Converts unstructured signals into quantified action.",
    color: "gold",
    span: "md:col-span-3",
  },
  {
    icon: Activity,
    title: "Pulse AI",
    subtitle: "Autonomous Resolution",
    description: "10+ intelligent agents for issue detection, auto-resolution, and team sync. Chat-based ticketing keeps everyone aligned without manual intervention.",
    color: "coral",
    span: "md:col-span-4",
  },
  {
    icon: Database,
    title: "Enterprise Data Bridge",
    subtitle: "No Data Movement",
    description: "No data movement, bidirectional sync via Unified Business Schema. REST, OData, SOAP, and GraphQL protocols supported natively.",
    color: "teal",
    span: "md:col-span-3",
  },
  {
    icon: Network,
    title: "Graph Memory",
    subtitle: "4-Network Cognitive Model",
    description: "Episodic (experiences), semantic (facts), procedural (skills), and belief (summaries) networks with PersonalizedPageRank scoring.",
    color: "gold",
    span: "md:col-span-4",
  },
  {
    icon: Code2,
    title: "StrataxAI Agents SDK",
    subtitle: "Multi-Agent Framework",
    description: "17+ context sharing strategies, typed handoff protocol with explicit contracts, full lineage tracking. SDKs in Python, TypeScript, Rust, and Go.",
    color: "coral",
    span: "md:col-span-4",
  },
  {
    icon: RefreshCw,
    title: "Closed-Loop Write-Back",
    subtitle: "Autonomous Action",
    description: "Insights write directly back into SAP, Oracle, and Salesforce. Autonomous action, not just recommendations — closing the loop between insight and execution.",
    color: "teal",
    span: "md:col-span-4",
  },
]

const colorClasses = {
  teal: {
    bg: "bg-teal/10",
    text: "text-teal",
    border: "border-teal/20",
    glow: "shadow-teal/5",
  },
  coral: {
    bg: "bg-coral/10",
    text: "text-coral",
    border: "border-coral/20",
    glow: "shadow-coral/5",
  },
  gold: {
    bg: "bg-gold/10",
    text: "text-gold",
    border: "border-gold/20",
    glow: "shadow-gold/5",
  },
}

function BentoCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const colors = colorClasses[feature.color as keyof typeof colorClasses]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.09 }}
      className={`group relative p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-teal/30 transition-all duration-300 ${feature.span} overflow-hidden`}
      style={{ boxShadow: "var(--bento-shadow)" }}
    >
      {/* Diagonal shine on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 50%, transparent 60%)",
          backgroundSize: "400% 400%",
          animation: "bento-shine 3s ease-in-out infinite",
        }}
      />

      {/* Decorative SVG illustration for large cards */}
      {index === 0 && (
        <BrainPatternIllustration className="absolute bottom-2 right-2 w-28 h-28 text-teal pointer-events-none" />
      )}
      {index === 3 && (
        <NetworkNodesIllustration className="absolute bottom-2 right-2 w-24 h-24 text-coral pointer-events-none" />
      )}

      {/* Icon */}
      <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
        <feature.icon className="w-5 h-5" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-foreground mb-1">{feature.title}</h3>
      <p className={`text-sm font-medium ${colors.text} mb-3`}>{feature.subtitle}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>

      {/* Sub-modules grid for featured cards */}
      {"modules" in feature && (feature as any).modules && (
        <div className="grid grid-cols-2 gap-2 mt-5">
          {(feature as any).modules.map((mod: any) => (
            <div key={mod.name} className={`rounded-lg border ${colors.border} bg-background/50 p-3 flex items-start gap-2.5`}>
              <div className={`w-7 h-7 rounded-md ${colors.bg} ${colors.text} flex items-center justify-center flex-shrink-0`}>
                <mod.icon className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold text-foreground leading-tight">{mod.name}</div>
                <div className="text-[10px] text-muted-foreground leading-tight mt-0.5">{mod.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl ${colors.bg} opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10 blur-xl`} />
    </motion.div>
  )
}

export function FeatureSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Angled divider top */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-background transform -skew-y-2 origin-top-left -translate-y-12" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            The Intelligence Stack
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything that powers{" "}
            <span className="text-teal">StrataxAI</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Four CAMP modules, Graph Memory, the StrataxAI Agents SDK, Enterprise Data Bridge, and Closed-Loop Write-Back — working in concert.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
          {features.map((feature, index) => (
            <BentoCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>

      {/* Angled divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-background transform skew-y-2 origin-bottom-right translate-y-12" />
    </section>
  )
}
