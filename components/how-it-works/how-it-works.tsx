"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Activity, MessageSquare, LayoutDashboard } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Activity,
    title: "Proactive",
    subtitle: "Pulse AI",
    description: "Monitors continuously across all enterprise systems, surfaces alerts, and auto-resolves issues before they escalate. Chat-based ticketing keeps teams in sync without manual intervention.",
    color: "teal",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Reactive",
    subtitle: "Axis AI",
    description: "Natural language queries deliver real-time insights across all connected systems. What-if simulations and digital twins provide enterprise foresight for strategic decisions.",
    color: "coral",
  },
  {
    number: "03",
    icon: LayoutDashboard,
    title: "Dashboard-Driven",
    subtitle: "Core AI",
    description: "Responds to events, learns from outcomes, and drives decisions autonomously. Self-learning engine repairs data, optimizes inventory, and computes ROI in real time.",
    color: "gold",
  },
]

const colorClasses: Record<string, { bg: string; text: string; border: string; number: string; glow: string }> = {
  teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30", number: "text-teal", glow: "shadow-teal/20" },
  coral: { bg: "bg-coral/10", text: "text-coral", border: "border-coral/30", number: "text-coral", glow: "shadow-coral/20" },
  gold: { bg: "bg-gold/10", text: "text-gold", border: "border-gold/30", number: "text-gold", glow: "shadow-gold/20" },
}

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Steps */}
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color]
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Connecting gradient line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-[2.25rem] top-[5.5rem] bottom-[-2rem] w-px hidden md:block"
                    initial={{ height: 0 }}
                    animate={isInView ? { height: "100%" } : { height: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                    style={{
                      background: `linear-gradient(to bottom, hsl(var(--${step.color})), transparent)`,
                    }}
                  />
                )}

                <div className={`flex gap-6 items-start p-8 rounded-2xl bg-card border border-border hover:${colors.border} transition-colors duration-300`}>
                  {/* Step number with glow */}
                  <div className={`flex-shrink-0 w-[4.5rem] h-[4.5rem] rounded-2xl ${colors.bg} flex items-center justify-center relative shadow-lg ${colors.glow}`}>
                    <span className={`text-2xl font-bold ${colors.number}`}>{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <step.icon className={`w-5 h-5 ${colors.text}`} />
                      <span className={`text-sm font-medium ${colors.text}`}>{step.subtitle}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
