"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, ArrowRight, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "STRATAX AI Enterprise",
    tagline: "The AI Operating System for Enterprise",
    price: "Custom",
    cta: "Get a Demo",
    ctaVariant: "default" as const,
    highlighted: true,
    disabled: false,
    features: [
      "Full CAMP framework (Core, Axis, Markets, Pulse)",
      "40+ native ERP connectors",
      "Graph Memory (4-network cognitive model)",
      "17+ context sharing strategies",
      "StrataxAI Agents SDK",
      "Self-Training ML pipelines",
      "Unlimited agents",
      "24/7 dedicated support",
      "SOC 2 Type II compliant",
    ],
  },
  {
    name: "LEDGERLY PRO",
    tagline: "AI-Powered Accounts Receivable Automation",
    price: "Custom",
    cta: "Book a Demo",
    ctaVariant: "outline" as const,
    highlighted: false,
    disabled: false,
    features: [
      "10 intelligent AR agents",
      "CFO Copilot",
      "Cash Application",
      "Dispute Management",
      "Credit Risk Assessment",
      "AR Aging & Forecasting",
      "Compliance & Audit",
      "QuickBooks, Xero, FreshBooks",
    ],
  },
  {
    name: "LEDGERLY FIELD",
    tagline: "Field Operations Intelligence",
    price: "",
    cta: "Coming Soon",
    ctaVariant: "outline" as const,
    highlighted: false,
    disabled: true,
    features: [
      "Details coming soon",
    ],
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/[0.02] via-transparent to-coral/[0.02]" />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Choose the right plan for{" "}
            <span className="text-teal">your business</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Purpose-built AI products for enterprise operations and financial automation.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlighted
                  ? "bg-card border-2 border-teal shadow-xl shadow-teal/10 -translate-y-4"
                  : plan.disabled
                  ? "bg-card/50 border border-border opacity-60"
                  : "bg-card border border-border"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-teal text-white text-xs font-semibold">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </div>

              {/* Price */}
              {plan.price && (
                <div className="mb-8">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                </div>
              )}

              {/* CTA */}
              {!plan.disabled ? (
                <Button
                  size="lg"
                  variant={plan.ctaVariant}
                  className={`w-full mb-8 group ${
                    plan.highlighted
                      ? "bg-foreground text-background hover:bg-foreground/90"
                      : "border-border hover:bg-muted bg-transparent"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ) : (
                <div className="w-full mb-8 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-muted text-muted-foreground text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  {plan.cta}
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + fi * 0.04 }}
                    className="flex items-start gap-3"
                  >
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-teal" : "text-muted-foreground"}`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
