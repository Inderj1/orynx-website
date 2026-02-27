"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, X, Minus } from "lucide-react"

const columns = [
  "StrataxAI",
  "Generic AI Tools",
  "Open-Source Agent Frameworks",
  "Traditional ERP Add-ons",
]

const features = [
  {
    name: "Context sharing strategies",
    detail: "17+",
    values: ["check", "minus", "x", "x"],
  },
  {
    name: "Graph Memory (4-network)",
    values: ["check", "x", "x", "x"],
  },
  {
    name: "Typed Handoff Protocol",
    values: ["check", "x", "x", "x"],
  },
  {
    name: "Full lineage & audit tracking",
    values: ["check", "x", "x", "minus"],
  },
  {
    name: "Multi-language SDK (Py/TS/Rust/Go)",
    values: ["check", "x", "minus", "x"],
  },
  {
    name: "Native ERP integration (40+)",
    values: ["check", "x", "x", "minus"],
  },
  {
    name: "Closed-loop write-back",
    values: ["check", "x", "x", "minus"],
  },
  {
    name: "No data movement",
    values: ["check", "x", "x", "check"],
  },
]

function CellIcon({ value, rowIndex, colIndex }: { value: string; rowIndex: number; colIndex: number }) {
  const delay = rowIndex * 0.06 + colIndex * 0.05

  if (value === "check") {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3, type: "spring" }}
        className="w-7 h-7 rounded-full bg-teal/15 flex items-center justify-center"
      >
        <Check className="w-4 h-4 text-teal" />
      </motion.div>
    )
  }
  if (value === "x") {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.3, type: "spring" }}
        className="w-7 h-7 rounded-full bg-muted flex items-center justify-center"
      >
        <X className="w-4 h-4 text-muted-foreground/30" />
      </motion.div>
    )
  }
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.3, type: "spring" }}
      className="w-7 h-7 rounded-full bg-muted flex items-center justify-center"
    >
      <Minus className="w-4 h-4 text-muted-foreground/50" />
    </motion.div>
  )
}

export function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Compare
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Why teams choose{" "}
            <span className="text-teal">StrataxAI</span>
          </h2>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-[700px]">
            {/* Header row */}
            <div className="grid grid-cols-5 gap-2 mb-4">
              <div className="p-4" />
              {columns.map((col, i) => (
                <div
                  key={col}
                  className={`p-4 text-center rounded-t-xl text-sm font-semibold ${
                    i === 0
                      ? "bg-teal/10 text-teal border border-teal/30"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Feature rows */}
            {features.map((feature, rowIndex) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: rowIndex % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: rowIndex * 0.06 }}
                className={`grid grid-cols-5 gap-2 ${rowIndex % 2 === 0 ? "bg-muted/30" : ""}`}
              >
                <div className="p-4 text-sm font-medium text-foreground flex items-center">
                  {feature.name}
                </div>
                {feature.values.map((val, colIndex) => (
                  <div
                    key={colIndex}
                    className={`p-4 flex items-center justify-center ${
                      colIndex === 0 ? "bg-teal/5" : ""
                    }`}
                  >
                    <CellIcon value={val} rowIndex={rowIndex} colIndex={colIndex} />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
