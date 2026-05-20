import {
  GraduationCap, Users, Box, Stethoscope, Sparkles,
  Clock, Layers, Activity,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `Orynx Education | ${COMPANY_NAME}`,
  description:
    "AI-powered healthcare education. Virtual patient simulations, interactive 3D anatomy, OSCE training, and adaptive learning pathways.",
}

const features: ProductFeature[] = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Virtual patient simulations",
    description: "Realistic patient encounters that adapt to learner choices. Take a history, examine, investigate, decide — and learn from the outcome.",
  },
  {
    icon: <Box className="w-5 h-5" />,
    title: "Interactive 3D anatomy",
    description: "Manipulate, dissect, and annotate. Anatomy that learners can rotate and explore beats a textbook every time.",
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: "OSCE training",
    description: "Structured clinical-skills practice with AI examiners. Immediate, calibrated feedback against the real OSCE rubric.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Adaptive learning pathways",
    description: "Difficulty and content adapt to each learner's gaps. The platform spends learner time where it has the most impact.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "24/7 access",
    description: "Cloud-native and browser-only. Learners can practice on a phone between rotations, on a laptop at home, on a campus PC.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Built on MedSynth",
    description: "Cases generated from MedSynth's privacy-safe synthetic patient data. Endless variety without privacy risk.",
  },
]

const metrics: ProductMetric[] = [
  { value: "Virtual", label: "Patient sims", icon: <Users className="w-4 h-4" /> },
  { value: "3D", label: "Interactive anatomy", icon: <Box className="w-4 h-4" /> },
  { value: "OSCE", label: "Skills training", icon: <Stethoscope className="w-4 h-4" /> },
  { value: "Adaptive", label: "Learning pathways", icon: <Sparkles className="w-4 h-4" /> },
  { value: "24/7", label: "Cloud access", icon: <Clock className="w-4 h-4" /> },
  { value: "Live", label: "AI feedback", icon: <Activity className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Learner devices",
    items: ["Web", "iPad", "iPhone", "Android", "Campus PCs"],
  },
  {
    category: "Institutional integrations",
    items: ["LTI 1.3 (Canvas, Moodle, Blackboard)", "SAML SSO", "SCORM", "xAPI"],
  },
  {
    category: "Curriculum",
    items: ["UK medical school year 1–5", "PA programmes", "Nursing", "Postgraduate (CPD)", "Custom curricula"],
  },
]

const callouts = [
  {
    label: "Why simulations",
    body: "Real patients are scarce, repetitive practice is impossible, and consequences in education should be reversible. Simulations solve all three.",
  },
  {
    label: "Built with MedSynth",
    body: "Endless realistic case material without sourcing, anonymising, or licensing real patient data. Privacy by design from the first cohort.",
  },
]

export default function OrynxEducationPage() {
  return (
    <ProductPageTemplate
      eyebrow="ORYNX EDUCATION · HEALTHCARE LEARNING"
      heroImage="/heroes/agents.png"
      name="Orynx Education"
      headline={
        <>
          Practice without the{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            patient queue.
          </span>
        </>
      }
      description="AI-powered healthcare education with virtual patient simulations, interactive 3D anatomy, OSCE training, and adaptive learning pathways. Built on MedSynth for endless, privacy-safe case material."
      accent="blue"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
