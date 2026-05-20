import {
  Eye, Cloud, Image, Stethoscope, Activity, Shield, Zap, Layers,
} from "lucide-react"
import { ProductPageTemplate, type ProductFeature, type ProductIntegration, type ProductMetric } from "@/components/product/product-page-template"
import { COMPANY_NAME } from "@/lib/brand-copy"

export const metadata = {
  title: `OpenEyes Cloud | ${COMPANY_NAME}`,
  description:
    "Cloud-native ophthalmology EPR. EyeDraw documentation, OCT and visual-field device integration, rapid surgical templates.",
}

const features: ProductFeature[] = [
  {
    icon: <Eye className="w-5 h-5" />,
    title: "EyeDraw graphical documentation",
    description: "The clinical drawing standard for ophthalmology. Slit-lamp findings, fundus, lens diagrams — drawn in seconds, structured for query.",
  },
  {
    icon: <Image className="w-5 h-5" />,
    title: "Imaging device integration",
    description: "Native ingestion from OCT scanners, visual field analysers, and fundus cameras. Side-by-side review in the same record.",
  },
  {
    icon: <Stethoscope className="w-5 h-5" />,
    title: "Rapid surgical documentation",
    description: "Procedure templates for cataract, vitreoretinal, and oculoplastic surgery. From start to signed-off op note in minutes.",
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "Cloud-native, browser-only",
    description: "No installs, no terminal servers, no Citrix. Clinicians work from any modern browser with 24/7 availability.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Modernised OpenEyes",
    description: "Built on the trusted open-source OpenEyes data model — re-architected for cloud, scaled for multi-trust deployments.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Clinical-grade security",
    description: "NHS-aligned, end-to-end encrypted, with audit trails on every record access. Data residency in your jurisdiction.",
  },
]

const metrics: ProductMetric[] = [
  { value: "Browser", label: "Native, no installs", icon: <Cloud className="w-4 h-4" /> },
  { value: "EyeDraw", label: "Built in", icon: <Eye className="w-4 h-4" /> },
  { value: "OCT / VFA", label: "Device integration", icon: <Image className="w-4 h-4" /> },
  { value: "Surgical", label: "Rapid templates", icon: <Stethoscope className="w-4 h-4" /> },
  { value: "24/7", label: "Cloud availability", icon: <Activity className="w-4 h-4" /> },
  { value: "NHS", label: "Aligned", icon: <Shield className="w-4 h-4" /> },
]

const integrations: ProductIntegration[] = [
  {
    category: "Imaging devices",
    items: ["Heidelberg Spectralis", "Topcon DRI OCT", "Zeiss Cirrus", "Humphrey VFA", "Optos", "Fundus cameras"],
  },
  {
    category: "EHR / interop",
    items: ["NHS Spine", "FHIR R4", "HL7 v2.x", "DICOM", "EMIS Web", "SystmOne"],
  },
  {
    category: "Deployment",
    items: ["Multi-trust cloud", "Single-tenant", "On-prem option", "UK / EU residency"],
  },
]

const callouts = [
  {
    label: "Heritage",
    body: "OpenEyes is the most widely-used open-source ophthalmology EPR in the NHS. Orynx hosts and maintains the cloud-native version.",
  },
  {
    label: "Why browser-native",
    body: "No client install means upgrades roll out instantly, devices are interchangeable, and remote ophthalmology is a real workflow — not a workaround.",
  },
]

export default function OpenEyesCloudPage() {
  return (
    <ProductPageTemplate
      eyebrow="OPENEYES CLOUD · OPHTHALMOLOGY EPR"
      heroImage="/heroes/compliance.png"
      name="OpenEyes Cloud"
      headline={
        <>
          Ophthalmology, in the{" "}
          <span className="font-serif italic font-normal text-brand-blue tracking-[-0.01em]">
            browser.
          </span>
        </>
      }
      description="A modernised, cloud-hosted ophthalmology EPR. EyeDraw graphical documentation, OCT and visual-field integration, rapid surgical templates — all in a browser-native architecture with 24/7 availability."
      accent="blue"
      features={features}
      integrations={integrations}
      callouts={callouts}
      metrics={metrics}
    />
  )
}
