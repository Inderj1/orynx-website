import {
  Network, Activity, Shield, Database, RefreshCw,
  FileCheck, Clock, Lock, BrainCircuit,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `EHR Bridge | ${COMPANY_NAME}`,
  description:
    "Universal healthcare data integration. Real-time bidirectional sync across 78+ EHR platforms with FHIR R4 and HL7 support.",
}

const features: ProductFeature[] = [
  {
    icon: <Network className="w-5 h-5" />,
    title: "78+ EHR connectors",
    description: "Epic, Cerner, Allscripts, athenahealth, Meditech, NextGen — and the long tail of regional systems hospitals actually run.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Real-time bidirectional sync",
    description: "Read and write back. Patients, encounters, observations, and orders flow both directions with sub-2-second latency.",
  },
  {
    icon: <FileCheck className="w-5 h-5" />,
    title: "FHIR R4 + HL7 v2 native",
    description: "Speak both dialects out of the box. We translate to a single canonical model so your app stays simple.",
  },
  {
    icon: <BrainCircuit className="w-5 h-5" />,
    title: "AI clinical intelligence",
    description: "Optional layer for entity extraction, problem-list deduplication, and structured insight from unstructured notes.",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "Patient data unification",
    description: "One identity per patient across every connected system, with deterministic and probabilistic matching.",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "HIPAA from the first byte",
    description: "End-to-end encryption, signed audit trail, BAA-ready. Designed for clinical-grade deployments.",
  },
]

const metrics: ProductMetric[] = [
  { value: "78+", label: "EHR systems", icon: <Network className="w-4 h-4" /> },
  { value: "<2s", label: "Sync latency", icon: <Clock className="w-4 h-4" /> },
  { value: "FHIR R4", label: "Native standard", icon: <FileCheck className="w-4 h-4" /> },
  { value: "HL7 v2", label: "Native standard", icon: <FileCheck className="w-4 h-4" /> },
  { value: "100%", label: "HIPAA-aligned", icon: <Shield className="w-4 h-4" /> },
  { value: "24/7", label: "Live in production", icon: <Activity className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Tier 1 EHR",
    items: ["Epic", "Cerner", "Allscripts", "athenahealth", "Meditech", "NextGen", "eClinicalWorks", "GE Centricity"],
  },
  {
    category: "Standards",
    items: ["FHIR R4", "FHIR R5", "HL7 v2.x", "CCDA", "DICOM", "X12 EDI", "OAuth 2.0 / SMART on FHIR"],
  },
  {
    category: "Deployment",
    items: ["Cloud SaaS", "Private cloud", "On-prem appliance", "Hybrid"],
  },
]

const callouts = [
  {
    label: "Use case",
    body: "A digital-health team needed Epic + Cerner + athenahealth in one app. EHR Bridge shipped in three weeks instead of a six-month custom integration sprint.",
  },
  {
    label: "What you skip",
    body: "Standing up Mirth or Cloverleaf, writing per-EHR adapters, building HL7 parsers, doing your own MDM. We've already done it.",
  },
]

export default function EHRBridgePage() {
  return (
    <ProductPageTemplate
      eyebrow="EHR BRIDGE · HEALTHCARE INTEGRATION"
      heroImage="/heroes/ehr-bridge.png"
      name="EHR Bridge"
      headline={
        <>
          Plaid for{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            EHR.
          </span>
        </>
      }
      description="Universal healthcare data integration. Real-time bidirectional sync across 78+ EHR platforms — Epic, Cerner, Allscripts, athenahealth — with FHIR R4 and HL7 support, and an optional AI clinical intelligence layer on top."
      accent="teal"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
