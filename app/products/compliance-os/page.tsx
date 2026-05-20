import {
  Shield, FileCheck, Workflow, Bot, Bell,
  Activity, ClipboardList, GitBranch,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `ComplianceOS | ${COMPANY_NAME}`,
  description:
    "Compliance automation with AI-powered workflows. SOC 2, ISO 27001, and HIPAA — automated, monitored, and audit-ready.",
}

const features: ProductFeature[] = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "SOC 2 / ISO 27001 / HIPAA",
    description: "Out-of-the-box control mappings for the three frameworks teams actually need to ship into enterprise customers.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "AI-generated policies & evidence",
    description: "Policies written from your live infrastructure, not a Word template. Evidence collected continuously, not the night before the audit.",
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "12+ tool integrations",
    description: "Pulls evidence from AWS, GCP, GitHub, Okta, Vanta-replaceable identity providers, MDM, and ticketing systems.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Continuous monitoring",
    description: "Drift detection on controls. We tell you the moment something stops being compliant — not at the next quarterly review.",
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: "Audit-ready reporting",
    description: "Export the auditor's evidence pack in one click. Mappings, screenshots, timestamps, signoffs — all there.",
  },
  {
    icon: <GitBranch className="w-5 h-5" />,
    title: "Control lineage",
    description: "Every control links to the policy, the evidence, and the engineer who owns it. Auditors love it. So do CISOs.",
  },
]

const metrics: ProductMetric[] = [
  { value: "3", label: "Frameworks live", icon: <Shield className="w-4 h-4" /> },
  { value: "12+", label: "Tool integrations", icon: <Workflow className="w-4 h-4" /> },
  { value: "24/7", label: "Continuous monitoring", icon: <Activity className="w-4 h-4" /> },
  { value: "100+", label: "Auto-mapped controls", icon: <FileCheck className="w-4 h-4" /> },
  { value: "1-click", label: "Auditor exports", icon: <ClipboardList className="w-4 h-4" /> },
  { value: "<30d", label: "Average to ready", icon: <Bell className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Frameworks",
    items: ["SOC 2 Type I", "SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR (in progress)"],
  },
  {
    category: "Cloud & infra",
    items: ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Fly.io"],
  },
  {
    category: "Identity & devices",
    items: ["Okta", "Google Workspace", "Microsoft Entra", "Jamf", "Kandji", "Mosyle"],
  },
  {
    category: "Source & ticketing",
    items: ["GitHub", "GitLab", "Bitbucket", "Linear", "Jira", "Notion"],
  },
]

const callouts = [
  {
    label: "Why this exists",
    body: "Most compliance tools are spreadsheets dressed up as SaaS. ComplianceOS treats compliance as a system: live controls, live evidence, live owners.",
  },
  {
    label: "Engagement model",
    body: "Self-serve platform plus an Orynx engineer who runs the readiness sprint with you. You get audit-ready, not just tool-onboarded.",
  },
]

export default function ComplianceOSPage() {
  return (
    <ProductPageTemplate
      eyebrow="COMPLIANCEOS · AUTOMATED COMPLIANCE"
      heroImage="/heroes/compliance.png"
      name="ComplianceOS"
      headline={
        <>
          Compliance, on{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            autopilot.
          </span>
        </>
      }
      description="SOC 2, ISO 27001, and HIPAA automation through 12+ tool integrations, AI-generated policies, continuous monitoring, and one-click auditor exports. From kickoff to audit-ready in under 30 days."
      accent="gold"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
