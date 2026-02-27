"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does StrataxAI connect to our systems?",
    answer: "Through the Enterprise Data Bridge with 40 native connectors supporting REST, OData v2/v4, SOAP, and GraphQL protocols. Kong Gateway handles routing. No data movement — your data stays where it is.",
  },
  {
    question: "Do we need to move our data?",
    answer: "No. Enterprise Data Bridge uses the Unified Business Schema (UBS) for bidirectional read/write in place. No ETL, no pipelines, no copies. Your existing systems remain the single source of truth.",
  },
  {
    question: "What is the CAMP framework?",
    answer: "Core AI (self-learning brain), Axis AI (predictive foresight), Markets AI (external signals), and Pulse AI (autonomous resolution) — four AI modules working in concert across your enterprise.",
  },
  {
    question: "How does Graph Memory work?",
    answer: "Graph Memory is a 4-network cognitive model: episodic (experiences), semantic (facts), procedural (skills), and belief (summaries). It uses PersonalizedPageRank scoring and gets measurably smarter every week as it learns from execution outcomes.",
  },
  {
    question: "What is the StrataxAI Agents SDK?",
    answer: "A proprietary multi-agent framework with 17+ context sharing strategies, typed handoff protocol with explicit contracts, and full lineage tracking across every agent interaction. Available in Python, TypeScript, Rust, and Go.",
  },
  {
    question: "How does LEDGERLY PRO automate AR?",
    answer: "LEDGERLY PRO deploys 10 intelligent agents: Invoice Creation, Validation, Delivery, Payment Reminders, Cash Application, Dispute Management, Credit Risk, AR Aging & Forecasting, Compliance & Audit, and CFO Copilot.",
  },
  {
    question: "What security do you provide?",
    answer: "Multi-layer authentication (API keys, JWT RS256, OAuth2), AES-256-GCM encryption, role-based access, and a 4-tier trust architecture where deterministic rules never mix with LLM inference. Full audit trails on every action.",
  },
  {
    question: "How fast is deployment?",
    answer: "Pre-built modules and 40 native ERP connectors mean you can be operational in days, not months. An on-premise agent is available for desktop ERPs like QuickBooks Desktop and Tally.",
  },
]

function FaqItem({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.span>
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
            {faq.answer}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently asked{" "}
            <span className="text-teal">questions</span>
          </h2>
        </motion.div>

        {/* FAQ items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
