import {
  Bot, Headphones, Languages, Users, Zap, Mic,
  Phone, Activity, Workflow,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `Call Center AI | ${COMPANY_NAME}`,
  description:
    "AI voice agents with intelligent triage, multi-language routing, and human-in-the-loop. Sub-500ms response, LiveKit + Gemini 2.0.",
}

const features: ProductFeature[] = [
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Inbound + outbound voice",
    description: "Handles whole calls or fronts your agents — triage, scheduling, FAQ, and follow-ups across both directions.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Sub-500ms response",
    description: "End-to-end voice loop fast enough to feel human. No awkward pause that gives the bot away.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Multi-language routing",
    description: "4+ languages with intent-aware routing. Detects language on the first utterance, no prompts needed.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Human-in-the-loop",
    description: "Confidence-based handoff with full conversation transcript and intent summary. Supervisors see context, not silence.",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Intelligent triage",
    description: "Routes calls to the right team or self-serves common asks — refunds, status, simple changes — entirely on its own.",
  },
  {
    icon: <Mic className="w-5 h-5" />,
    title: "LiveKit + Gemini 2.0",
    description: "Built on the best-in-class real-time voice stack. Pluggable LLMs underneath if your compliance team needs alternatives.",
  },
]

const metrics: ProductMetric[] = [
  { value: "<500ms", label: "Voice latency", icon: <Zap className="w-4 h-4" /> },
  { value: "4+", label: "Languages", icon: <Languages className="w-4 h-4" /> },
  { value: "24/7", label: "Always on", icon: <Activity className="w-4 h-4" /> },
  { value: "Inbound", label: "+ outbound", icon: <Phone className="w-4 h-4" /> },
  { value: "Live", label: "Human escalation", icon: <Users className="w-4 h-4" /> },
  { value: "Real-time", label: "Transcripts", icon: <Headphones className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Telephony",
    items: ["Twilio", "Vonage", "SIP trunks", "WebRTC", "PSTN"],
  },
  {
    category: "CRM & helpdesk",
    items: ["Salesforce", "HubSpot", "Zendesk", "Intercom", "Front", "Freshdesk"],
  },
  {
    category: "LLM stack",
    items: ["Gemini 2.0", "GPT-4o", "Claude", "Self-hosted (vLLM)", "Custom"],
  },
]

const callouts = [
  {
    label: "Where it shines",
    body: "Healthcare scheduling, financial services FAQ, e-commerce returns, after-hours coverage. Anywhere call volume spikes and human capacity does not.",
  },
  {
    label: "Compliance",
    body: "Recordings encrypted at rest, redaction on PII, configurable data residency, and a HIPAA-aligned deployment mode for clinical use.",
  },
]

export default function CallCenterAIPage() {
  return (
    <ProductPageTemplate
      eyebrow="CALL CENTER AI · VOICE AGENTS"
      heroImage="/heroes/call-center.png"
      name="Call Center AI"
      headline={
        <>
          Voice agents that don't{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            sound like bots.
          </span>
        </>
      }
      description="Inbound and outbound voice agents with intelligent triage, multi-language routing, and human-in-the-loop supervision. Built on LiveKit and Gemini 2.0 with sub-500ms end-to-end response."
      accent="coral"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
