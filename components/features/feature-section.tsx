"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  HeartPulse, Shield, Bot, MessageSquare, Code2, BrainCircuit, Lock, Layers,
  Network, Stethoscope, Eye, Sparkles, Activity, GraduationCap,
} from "lucide-react"
import { NetworkNodesIllustration, BrainPatternIllustration } from "./feature-illustrations"

const features = [
  {
    icon: HeartPulse,
    title: "Healthcare Suite",
    subtitle: "EHR integration · clinical AI · synthetic data",
    description: "Live in NHS and US deployments today. Six purpose-built products for hospitals, clinical researchers, and digital-health teams — wired together by EHR Bridge.",
    color: "teal",
    span: "md:col-span-5 md:row-span-2",
    href: "/products/ehr-bridge",
    modules: [
      { icon: Network, name: "EHR Bridge", desc: "78+ EHR connectors" },
      { icon: Stethoscope, name: "Ambient Scribe", desc: "NHS-compliant transcription" },
      { icon: Eye, name: "OpenEyes Cloud", desc: "Ophthalmology EPR" },
      { icon: Sparkles, name: "MedSynth", desc: "Synthetic patient data" },
      { icon: Activity, name: "DiaWound AI", desc: "Wound triage on mobile" },
      { icon: GraduationCap, name: "Orynx Education", desc: "Virtual patient sims" },
    ],
  },
  {
    icon: Shield,
    title: "ComplianceOS",
    subtitle: "SOC 2 · ISO 27001 · HIPAA",
    description: "Continuous evidence collection across 12+ tool integrations. AI-generated policies and one-click auditor exports — kickoff to ready in under 30 days.",
    color: "gold",
    span: "md:col-span-4",
    href: "/products/compliance-os",
  },
  {
    icon: Bot,
    title: "Call Center AI",
    subtitle: "Voice agents",
    description: "Sub-500ms voice loops with intelligent triage, multi-language routing, and human-in-the-loop. LiveKit + Gemini 2.0.",
    color: "coral",
    span: "md:col-span-3",
    href: "/products/call-center-ai",
  },
  {
    icon: MessageSquare,
    title: "CommBridge",
    subtitle: "Unified communications",
    description: "Slack, Teams, Discord, email, voice, and push — one API. Multi-language microservices in Go, Rust, Python, and TypeScript.",
    color: "coral",
    span: "md:col-span-4",
    href: "/products/commbridge",
  },
  {
    icon: Code2,
    title: "AutoPRD",
    subtitle: "Autonomous dev pipeline",
    description: "Feedback to shipped code via Claude Code agents and Docker sandboxes. Output: a reviewable pull request.",
    color: "gold",
    span: "md:col-span-3",
    href: "/products/autoprd",
  },
  {
    icon: BrainCircuit,
    title: "Orynx Agents",
    subtitle: "Multi-agent SDK · 100+ LLM providers",
    description: "Enterprise-grade agent framework with typed handoffs, graph memory, durable execution, and compliance-ready safety. Python, TypeScript, Rust, Go.",
    color: "coral",
    span: "md:col-span-4",
    href: "/agents",
  },
  {
    icon: Layers,
    title: "Run anywhere",
    subtitle: "SaaS · self-hosted · hybrid · on-prem",
    description: "Deploy our platforms on Orynx cloud, in your VPC, or fully on-prem for the strictest compliance regimes. Configurable data residency by region.",
    color: "teal",
    span: "md:col-span-4",
    href: "/products",
  },
  {
    icon: Lock,
    title: "Privacy by design",
    subtitle: "End-to-end encryption · audit-grade",
    description: "HIPAA, SOC 2, and ISO 27001 alignment baked in from the first commit. BAA-ready deployments and configurable data residency.",
    color: "gold",
    span: "md:col-span-4",
    href: "/about",
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
      {index === 5 && (
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
    <section className="relative py-20 lg:py-28 border-t border-rule overflow-hidden">
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
            What we ship
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Production-ready platforms for the{" "}
            <span className="text-teal">hard sectors.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Eleven products across healthcare, compliance, voice, communications,
            and developer tooling. Pick a platform off the shelf and get to
            production in weeks.
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
