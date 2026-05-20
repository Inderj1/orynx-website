import {
  GitPullRequest, FlaskConical, Container, Users,
  Bot, Shield, FileText,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `AutoPRD | ${COMPANY_NAME}`,
  description:
    "Autonomous development pipeline. User feedback → PRD → implementation → reviewed code, with Claude Code agents and Docker-sandboxed execution.",
}

const features: ProductFeature[] = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: "Feedback → PRD",
    description: "Raw user feedback distilled into a structured product requirements doc with success criteria, edge cases, and explicit non-goals.",
  },
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Claude Code agent loop",
    description: "Autonomous implementation cycle that runs the dev loop — read code, write code, run tests, iterate — until the PRD criteria are met.",
  },
  {
    icon: <Container className="w-5 h-5" />,
    title: "Docker-sandboxed execution",
    description: "Every action runs inside a disposable container. Compromised tools, runaway scripts, and dependency issues stay isolated from your infrastructure.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Auto-generated test suites",
    description: "Tests written from the PRD's success criteria, not from inferring intent in the diff. Real coverage for the behaviour you actually shipped.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Untrusted-actor review",
    description: "Reviewer agents adversarial to the writer agent — looking for missed edge cases, regressions, and unsafe code paths before a human ever sees the PR.",
  },
  {
    icon: <GitPullRequest className="w-5 h-5" />,
    title: "Reviewable PRs",
    description: "Output is a normal pull request — labelled, summarised, and ready for human review on GitHub or GitLab. No hidden state.",
  },
]

const metrics: ProductMetric[] = [
  { value: "PRD", label: "From raw feedback", icon: <FileText className="w-4 h-4" /> },
  { value: "Sandbox", label: "Every action", icon: <Container className="w-4 h-4" /> },
  { value: "2×", label: "Adversarial review", icon: <Shield className="w-4 h-4" /> },
  { value: "Auto", label: "Test generation", icon: <FlaskConical className="w-4 h-4" /> },
  { value: "PR", label: "On GitHub / GitLab", icon: <GitPullRequest className="w-4 h-4" /> },
  { value: "Human", label: "Final approval", icon: <Users className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Source control",
    items: ["GitHub", "GitLab", "Bitbucket"],
  },
  {
    category: "Feedback intake",
    items: ["Linear", "Jira", "Intercom", "Slack", "GitHub Issues", "Custom webhooks"],
  },
  {
    category: "Runtime",
    items: ["Docker", "Local runners", "GitHub Actions", "Self-hosted"],
  },
  {
    category: "Models",
    items: ["Claude (default)", "GPT-4o", "Gemini", "Self-hosted via vLLM"],
  },
]

const callouts = [
  {
    label: "Why it ships",
    body: "Most coding agents stop at 'here is a plan'. AutoPRD runs the loop end-to-end and presents a reviewable PR — the kind a senior engineer would approve.",
  },
  {
    label: "Where humans stay in the loop",
    body: "PRD signoff and the final PR review. Everywhere in between is automated; the two endpoints are deliberately yours.",
  },
]

export default function AutoPRDPage() {
  return (
    <ProductPageTemplate
      eyebrow="AUTOPRD · AUTONOMOUS DEV PIPELINE"
      heroImage="/heroes/autoprd.png"
      name="AutoPRD"
      headline={
        <>
          Feedback to{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            shipped code.
          </span>
        </>
      }
      description="An autonomous development pipeline that converts user feedback into implemented, tested, and reviewed code. Claude Code agents, untrusted-actor review patterns, and Docker-sandboxed execution — output as a normal pull request."
      accent="teal"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
