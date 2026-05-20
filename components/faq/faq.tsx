"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What does Orynx actually build?",
    answer: "Two things: production-ready platforms (EHR Bridge, ComplianceOS, Call Center AI, CommBridge, AutoPRD, Orynx Agents, plus our healthcare suite) and dedicated engineering teams that ship custom software end-to-end across web, AI/ML, LLM integration, and full-stack development.",
  },
  {
    question: "Where do you work?",
    answer: "Healthcare, fintech, IoT, and compliance — the four sectors where deep integration, real-time AI, and audit-grade rigour all matter at the same time. We're based in Edinburgh, Scotland and work with teams worldwide.",
  },
  {
    question: "How does EHR Bridge connect to our systems?",
    answer: "78+ EHR connectors out of the box (Epic, Cerner, Allscripts, athenahealth and the long tail of regional systems) with native FHIR R4 and HL7 v2 support. Real-time bidirectional sync with sub-2-second latency. No data movement required.",
  },
  {
    question: "What is the Orynx Agents SDK?",
    answer: "A multi-agent framework with 24+ context-sharing strategies, typed handoff protocol, multi-tier graph memory, durable execution, and compliance-ready safety policies. 100+ LLM providers supported across Python, TypeScript, Rust, and Go.",
  },
  {
    question: "How fast can ComplianceOS get us audit-ready?",
    answer: "Most teams hit audit-ready in under 30 days. The platform pulls evidence continuously from 12+ tools (AWS, GCP, GitHub, Okta, MDM, ticketing) and an Orynx engineer runs the readiness sprint with you — so you're not just tool-onboarded, you're prepared.",
  },
  {
    question: "What about data privacy and compliance?",
    answer: "Privacy-by-design from the first commit: end-to-end encryption, HIPAA / SOC 2 / ISO 27001 alignment, BAA-ready deployments, and configurable data residency. We architect for clinical-grade and finance-grade workloads.",
  },
  {
    question: "Can we hire a dedicated engineering team?",
    answer: "Yes — that's the Custom Engineering offering. A team is assigned directly to your project (web, AI/ML, LLM, mobile, custom) and stays with it from discovery through production. Same engineers throughout, no throw-overs.",
  },
  {
    question: "How does pricing work?",
    answer: "Custom. Most engagements pair one of our platforms with a dedicated team to integrate and extend it. Tell us what you run and what you want different — we'll quote it within a week.",
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
