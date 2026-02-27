"use client"

import { Navbar } from "@/components/navbar/navbar"
import { LogoCloud } from "@/components/logo-cloud/logo-cloud"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  MapPin, DollarSign, Users, Package, Gauge,
  ArrowRight, BarChart3, TrendingUp, Wrench,
  Database, Shield, Zap, Clock, Activity,
  CheckCircle2, Truck, HardHat, PieChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"

/* ─── 4 Economic Engines ─── */

const engines = [
  {
    icon: DollarSign,
    name: "Revenue & Job Economics",
    description: "Job-level P&L with real-time cost allocation, margin tracking per project, and profitability scoring across service lines.",
    metrics: ["Job-level P&L", "Real-time margins", "Profitability scoring"],
  },
  {
    icon: Users,
    name: "Labor Efficiency",
    description: "Crew utilization tracking, overtime pattern detection, productivity scoring, and labor cost optimization per job.",
    metrics: ["Crew utilization", "Overtime detection", "Productivity scoring"],
  },
  {
    icon: Package,
    name: "Parts & Materials",
    description: "Inventory optimization, waste tracking, vendor cost analysis, and purchase order intelligence for field operations.",
    metrics: ["Inventory optimization", "Waste tracking", "Vendor analysis"],
  },
  {
    icon: Gauge,
    name: "Cash Speed",
    description: "Days-to-cash acceleration, billing velocity optimization, payment cycle analysis, and cash flow forecasting per project.",
    metrics: ["Days-to-cash", "Billing velocity", "Cash forecasting"],
  },
]

/* ─── 14 Financial Views ─── */

const financialViews = [
  { name: "Job Profitability", icon: DollarSign },
  { name: "Revenue by Service Line", icon: BarChart3 },
  { name: "Labor Cost per Job", icon: Users },
  { name: "Materials Margin", icon: Package },
  { name: "Cash Conversion Cycle", icon: Gauge },
  { name: "Crew Productivity", icon: Activity },
  { name: "Overtime Analysis", icon: Clock },
  { name: "Vendor Spend", icon: Truck },
  { name: "Invoice Aging by Job", icon: TrendingUp },
  { name: "Backlog Value", icon: PieChart },
  { name: "Work-in-Progress", icon: Wrench },
  { name: "Warranty Cost Tracking", icon: Shield },
  { name: "Customer Lifetime Value", icon: Users },
  { name: "Seasonal Demand Forecast", icon: TrendingUp },
]

/* ─── Target Industries ─── */

const industries = [
  "HVAC", "Plumbing", "Electrical", "Roofing",
  "Landscaping", "General Contracting", "Pest Control", "Cleaning Services",
]

/* ─── Key Stats ─── */

const stats = [
  { value: "4", label: "Economic engines", icon: Zap },
  { value: "14", label: "Financial views", icon: BarChart3 },
  { value: "40", label: "ERP connectors", icon: Database },
  { value: "Real-time", label: "Job costing", icon: Clock },
  { value: "8+", label: "Industry verticals", icon: HardHat },
  { value: "Full", label: "Audit trail", icon: Shield },
]

/* ─── ERP Systems ─── */

const erpSystems = [
  "QuickBooks Online", "QuickBooks Desktop", "Xero", "Zoho Books", "FreshBooks", "Wave",
  "NetSuite", "SAP S/4HANA", "SAP Business One", "Sage Intacct", "Sage 100",
  "Microsoft Dynamics 365", "Business Central", "Oracle ERP Cloud",
  "Tally Prime", "MYOB AccountRight", "Acumatica", "Odoo",
]

/* ─── Economic Engines Section ─── */

function EnginesSection() {
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
            4 Economic Engines
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Turn operational data into{" "}
            <span className="text-coral">profitability insights</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Four specialized engines analyze every job, crew, and invoice — delivering real-time financial intelligence purpose-built for field service companies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {engines.map((engine, index) => (
            <motion.div
              key={engine.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-coral/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-4">
                <engine.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{engine.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{engine.description}</p>
              <div className="flex flex-wrap gap-2">
                {engine.metrics.map((metric) => (
                  <span key={metric} className="px-2.5 py-1 rounded-full bg-coral/5 text-coral border border-coral/10 text-[11px] font-medium">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── 14 Financial Views Section ─── */

function FinancialViewsSection() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
            Financial Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            14 purpose-built{" "}
            <span className="text-coral">financial views</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every view designed specifically for field service operations — from job profitability to seasonal demand forecasting.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {financialViews.map((view, index) => (
            <motion.div
              key={view.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="flex items-start gap-3 bg-card border border-border rounded-xl p-4 hover:border-coral/30 transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-coral/10 text-coral flex items-center justify-center flex-shrink-0">
                <view.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-foreground leading-tight">{view.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Industries Section ─── */

function IndustriesSection() {
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
            Built for the Trades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Purpose-built for{" "}
            <span className="text-coral">field service</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Financial intelligence designed from the ground up for field service companies — not a generic tool adapted after the fact.
          </p>
        </motion.div>

        <div className="flex items-center justify-center flex-wrap gap-4 max-w-3xl mx-auto">
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.06 }}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium text-foreground hover:border-coral/30 transition-colors duration-300"
            >
              {industry}
            </motion.span>
          ))}
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
            ERPBridge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Connects to your{" "}
            <span className="text-coral">existing systems</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            LEDGERLY FIELD connects through the Enterprise Data Bridge — no ETL, no data movement, bidirectional sync with your accounting, ERP, and field service management systems.
          </p>
        </motion.div>

        {/* Architecture flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          {["Your ERP / FSM", "ERPBridge", "Unified Schema", "Economic Engines"].map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className={`px-5 py-3 rounded-xl text-sm font-medium ${
                i === 1 ? "bg-coral/10 text-coral border border-coral/30" :
                i === 3 ? "bg-coral/10 text-coral border border-coral/30" :
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
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
            Platform Benchmarks
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Built for{" "}
            <span className="text-coral">field operations</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-coral/30 transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center mx-auto mb-4">
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

export default function LedgerlyFieldPage() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero */}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-coral/10 text-coral text-sm font-medium mb-4">
              Field Operations Intelligence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: "-0.03em" }}>
              Financial Intelligence for{" "}
              <span className="text-coral">Field Service</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Purpose-built financial intelligence for field service companies. Four economic engines analyze every job, crew, and invoice — turning operational data into profitability insights across 14 financial views.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/pricing">
                <Button className="bg-foreground text-background hover:bg-foreground/90 group">
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <span className="px-4 py-2 rounded-full bg-coral/10 text-coral border border-coral/20 text-sm font-semibold">
                LEDGERLY FIELD
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <EnginesSection />
      <FinancialViewsSection />
      <IndustriesSection />
      <ERPIntegrationSection />
      <KeyStatsSection />
      <LogoCloud />
      <CTASection />
      <Footer />
    </main>
  )
}
