import {
  MessageSquare, Send, Workflow, RefreshCw, Shield,
  Network, GitBranch, Boxes, Code2,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `CommBridge | ${COMPANY_NAME}`,
  description:
    "Unified communications layer. One API across Slack, Teams, Discord, email, voice, and push notifications.",
}

const features: ProductFeature[] = [
  {
    icon: <Send className="w-5 h-5" />,
    title: "One API, six channels",
    description: "Slack, Teams, Discord, email, voice, and push from a single send call. Per-recipient channel preferences handled for you.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Bidirectional",
    description: "Receive and reply, not just send. Inbound webhooks normalised across channels with thread-aware context.",
  },
  {
    icon: <Boxes className="w-5 h-5" />,
    title: "Multi-language microservices",
    description: "Go for throughput, Rust for hot paths, Python for ML hooks, TypeScript for orchestration. Pick the right tool per service.",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Workflow routing",
    description: "Rule-based routing with fallbacks. Try Slack, fall back to email, escalate to SMS — all configurable per template.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Idempotent delivery",
    description: "Built-in deduplication keys so retries never double-fire. The kind of detail that saves an outage at 3am.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "Webhook + SDK",
    description: "First-class SDKs in TypeScript and Python, plus signed webhooks for everything else. No vendor lock-in.",
  },
]

const metrics: ProductMetric[] = [
  { value: "6", label: "Channels, one API", icon: <MessageSquare className="w-4 h-4" /> },
  { value: "4", label: "Languages in stack", icon: <Code2 className="w-4 h-4" /> },
  { value: "↔", label: "Send + receive", icon: <RefreshCw className="w-4 h-4" /> },
  { value: "1×", label: "Idempotent delivery", icon: <Shield className="w-4 h-4" /> },
  { value: "REST", label: "Webhooks + SDK", icon: <Network className="w-4 h-4" /> },
  { value: "MIT", label: "No lock-in", icon: <GitBranch className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Channels",
    items: ["Slack", "Microsoft Teams", "Discord", "Email (SMTP / SES / Resend)", "Voice (LiveKit, Twilio)", "SMS / Push (FCM, APNs)"],
  },
  {
    category: "SDKs",
    items: ["TypeScript", "Python", "Go", "Rust", "REST", "Webhooks"],
  },
  {
    category: "Deployment",
    items: ["Cloud SaaS", "Self-hosted", "Hybrid", "On-prem"],
  },
]

const callouts = [
  {
    label: "What it replaces",
    body: "Stitching together Twilio, Resend, Slack SDK, Teams Graph API, and a queue. CommBridge is the single layer that fans out to all of them.",
  },
  {
    label: "Why microservices",
    body: "Different channels have different SLAs and different failure modes. Splitting them by service means a flaky email provider doesn't take down voice.",
  },
]

export default function CommBridgePage() {
  return (
    <ProductPageTemplate
      eyebrow="COMMBRIDGE · UNIFIED COMMUNICATIONS"
      heroImage="/heroes/commbridge.png"
      name="CommBridge"
      headline={
        <>
          Six channels.{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            One API.
          </span>
        </>
      }
      description="A unified communication infrastructure layer connecting Slack, Teams, Discord, email, voice, and push notifications through a single, idempotent API. Multi-language microservices in Go, Rust, Python, and TypeScript."
      accent="blue"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
