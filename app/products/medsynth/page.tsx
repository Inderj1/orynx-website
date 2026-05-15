import {
  Sparkles, Database, Shield, FlaskConical, Layers,
  Activity, Lock, FileCheck,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `MedSynth | ${COMPANY_NAME}`,
  description:
    "Privacy-safe synthetic patient data. Realistic records for AI training, simulation, and clinical research.",
}

const features: ProductFeature[] = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Realistic, not random",
    description: "Records that pass clinical sniff tests — coherent histories, plausible labs, longitudinal narratives. Built from de-identified distributions, not noise.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "100% privacy-safe by design",
    description: "Synthetic from the ground up. Nothing is re-identifiable because nothing real was used. HIPAA-aligned, no PHI, no consent surface.",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "All clinical domains",
    description: "Emergency, surgical, chronic care, oncology, rare conditions, paediatrics. Generate cohorts at the size and balance your model needs.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "FHIR R4 native",
    description: "Output as FHIR R4 resources straight into your data lake. Compatible with EHR Bridge for end-to-end pipelines.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Cohort design",
    description: "Specify demographics, comorbidities, severity distributions, and rare-event prevalence. Reproducible with seeded generation.",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Validation reports",
    description: "Per-batch reports on statistical fidelity, clinical plausibility, and bias. Auditable artefacts for IRB and regulatory review.",
  },
]

const metrics: ProductMetric[] = [
  { value: "100%", label: "Synthetic, no PHI", icon: <Lock className="w-4 h-4" /> },
  { value: "FHIR R4", label: "Native output", icon: <Database className="w-4 h-4" /> },
  { value: "All", label: "Clinical domains", icon: <FlaskConical className="w-4 h-4" /> },
  { value: "Reproducible", label: "Seeded generation", icon: <Sparkles className="w-4 h-4" /> },
  { value: "Audited", label: "Per-batch reports", icon: <FileCheck className="w-4 h-4" /> },
  { value: "HIPAA", label: "Aligned by design", icon: <Shield className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Output formats",
    items: ["FHIR R4", "CSV", "Parquet", "JSON Lines", "OMOP CDM", "Custom schemas"],
  },
  {
    category: "Pipelines",
    items: ["EHR Bridge", "Direct S3 / GCS export", "Webhook delivery", "REST API"],
  },
  {
    category: "Use cases",
    items: ["Model training", "Demo environments", "QA & test fixtures", "Education", "Bias studies", "IRB pre-work"],
  },
]

const callouts = [
  {
    label: "Why synthetic",
    body: "Real PHI takes months of approvals and lawyers. MedSynth gets your model to first training run in hours, with no privacy review on the data itself.",
  },
  {
    label: "What it doesn't replace",
    body: "Real-world validation. Use MedSynth for development, then validate the trained model on de-identified real data with the right governance in place.",
  },
]

export default function MedSynthPage() {
  return (
    <ProductPageTemplate
      eyebrow="MEDSYNTH · SYNTHETIC PATIENT DATA"
      heroImage="/heroes/ehr-bridge.png"
      name="MedSynth"
      headline={
        <>
          Patient data without the{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            privacy review.
          </span>
        </>
      }
      description="Realistic, privacy-safe synthetic patient records for healthcare AI training, medical simulation, and research. Across emergency, surgical, chronic, oncology, and rare conditions — 100% HIPAA-aligned by design."
      accent="gold"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
