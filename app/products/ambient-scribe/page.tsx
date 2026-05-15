import {
  Stethoscope, Mic, FileCheck, Network, Shield, Zap,
  Languages, Activity, Lock,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `Ambient Scribe | ${COMPANY_NAME}`,
  description:
    "NHS-compliant real-time medical transcription. Doctor-patient conversations into structured SOAP notes with EHR auto-population.",
}

const features: ProductFeature[] = [
  {
    icon: <Mic className="w-5 h-5" />,
    title: "Real-time transcription",
    description: "Captures the consultation as it happens. No batch processing, no waiting — the note is forming while you're still talking.",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "Structured SOAP notes",
    description: "Subjective, Objective, Assessment, Plan — auto-organised from the conversation. Clinicians review, edit, and sign in seconds.",
  },
  {
    icon: <Network className="w-5 h-5" />,
    title: "EHR auto-population",
    description: "Drops directly into the patient record via EHR Bridge. Encounter notes, ICD-10 codes, and follow-up tasks populated automatically.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "NHS- and HIPAA-compliant",
    description: "Built for clinical environments. Data residency in-region, audit trails, configurable retention, BAA-ready.",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "Specialty-aware vocab",
    description: "Trained on clinical terminology — medications, procedures, anatomy. Handles consultant accents and patient code-switching.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "On-device option",
    description: "For the strictest deployments, transcription runs locally on a clinical device. Audio never leaves the room.",
  },
]

const metrics: ProductMetric[] = [
  { value: "Real-time", label: "Transcription", icon: <Zap className="w-4 h-4" /> },
  { value: "SOAP", label: "Structured notes", icon: <FileCheck className="w-4 h-4" /> },
  { value: "NHS", label: "Compliant", icon: <Shield className="w-4 h-4" /> },
  { value: "EHR", label: "Auto-populated", icon: <Network className="w-4 h-4" /> },
  { value: "Multilingual", label: "Patient + clinician", icon: <Languages className="w-4 h-4" /> },
  { value: "On-device", label: "Optional mode", icon: <Lock className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "EHRs",
    items: ["EMIS Web", "SystmOne", "Vision", "Epic", "Cerner", "athenahealth"],
  },
  {
    category: "Voice stack",
    items: ["Deepgram", "Azure OpenAI", "Whisper (self-hosted)", "Custom"],
  },
  {
    category: "Deployment",
    items: ["Cloud (UK / EU / US)", "Hybrid", "On-device clinical workstation"],
  },
]

const callouts = [
  {
    label: "What it replaces",
    body: "Hours of after-hours documentation. Clinicians spend their evenings with patients' families, not with the EHR.",
  },
  {
    label: "Built with EHR Bridge",
    body: "Auto-population works because Ambient Scribe sits on top of EHR Bridge. One stack, one data model, one integration partner.",
  },
]

export default function AmbientScribePage() {
  return (
    <ProductPageTemplate
      eyebrow="AMBIENT SCRIBE · CLINICAL TRANSCRIPTION"
      heroImage="/heroes/call-center.png"
      name="Ambient Scribe"
      headline={
        <>
          The note writes{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            itself.
          </span>
        </>
      }
      description="NHS-compliant real-time transcription that converts doctor-patient conversations into structured SOAP notes — and auto-populates them into the EHR. Built on EHR Bridge for one-click deployment."
      accent="teal"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
