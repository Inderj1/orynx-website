import {
  Activity, Smartphone, Camera, TrendingDown, AlertCircle,
  Shield, Network, Zap,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `DiaWound AI | ${COMPANY_NAME}`,
  description:
    "AI-powered diabetic wound analysis. Image capture, instant classification, severity assessment, and healing tracking on iOS and Android.",
}

const features: ProductFeature[] = [
  {
    icon: <Camera className="w-5 h-5" />,
    title: "Native iOS + Android capture",
    description: "Clinicians and community-care staff snap a photo on the device they already carry. No specialist hardware required.",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    title: "Instant classification",
    description: "Wagner / University of Texas grading, tissue composition, and exudate analysis in seconds — at the bedside or in the home.",
  },
  {
    icon: <TrendingDown className="w-5 h-5" />,
    title: "Healing trajectory tracking",
    description: "Sequential image analysis charts wound area, depth, and tissue change over time. Trends visible at a glance.",
  },
  {
    icon: <AlertCircle className="w-5 h-5" />,
    title: "Red-flag alerts",
    description: "Worsening, infection signs, or stalled healing trigger an alert to the responsible clinician — before the next scheduled visit.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "EHR integration",
    description: "Images, classifications, and trajectories flow into the patient record via EHR Bridge. No double-entry, no orphaned data.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "HIPAA-ready",
    description: "End-to-end encryption, on-device pre-processing, and configurable retention. BAA-ready for clinical deployment.",
  },
]

const metrics: ProductMetric[] = [
  { value: "iOS", label: "+ Android native", icon: <Smartphone className="w-4 h-4" /> },
  { value: "Instant", label: "Classification", icon: <Zap className="w-4 h-4" /> },
  { value: "Trend", label: "Healing tracker", icon: <TrendingDown className="w-4 h-4" /> },
  { value: "Alerts", label: "Red-flag triage", icon: <AlertCircle className="w-4 h-4" /> },
  { value: "EHR", label: "Auto-synced", icon: <Network className="w-4 h-4" /> },
  { value: "HIPAA", label: "Ready", icon: <Shield className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Devices",
    items: ["iPhone", "iPad", "Android phones", "Android tablets", "Bluetooth-paired clinical cameras"],
  },
  {
    category: "EHRs",
    items: ["EMIS Web", "SystmOne", "Epic", "Cerner", "athenahealth", "via EHR Bridge"],
  },
  {
    category: "Deployment",
    items: ["MDM-distributed app", "BYOD with policy", "On-device inference", "Hybrid cloud"],
  },
]

const callouts = [
  {
    label: "Where it shines",
    body: "Community diabetic care, podiatry clinics, and post-surgical follow-up. Anywhere a non-specialist needs to triage a wound and decide what happens next.",
  },
  {
    label: "Built with EHR Bridge",
    body: "Images and assessments land directly in the patient record — no paper, no separate app to remember to update.",
  },
]

export default function DiaWoundAIPage() {
  return (
    <ProductPageTemplate
      eyebrow="DIAWOUND AI · CLINICAL VISION"
      heroImage="/heroes/home.png"
      name="DiaWound AI"
      headline={
        <>
          Wound triage in your{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            pocket.
          </span>
        </>
      }
      description="AI-powered diabetic wound analysis on iOS and Android. Capture an image, get an instant classification and severity score, track healing over time, and trigger red-flag alerts when the wound is worsening."
      accent="coral"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
