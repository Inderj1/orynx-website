import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import {
  ProductDetailSection,
  type ProductDetail,
} from "@/components/landing/product-detail-section";
import { CompareSection } from "@/components/landing/compare-section";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Orynx Conductor for business operations and Orynx Clinic for clinical teams.",
};

const jumpLinks = [
  { href: "#conductor", label: "Orynx Conductor ↓" },
  { href: "#clinic", label: "Orynx Clinic ↓" },
  { href: "#compare", label: "Compare products ↓" },
];

const conductor: ProductDetail = {
  id: "conductor",
  tag: "Business operations",
  name: "Orynx Conductor",
  body: "An AI operations layer for HVAC, plumbing, electrical and other service businesses. Conductor watches calls, calendar, inbox and books, then handles the work that should not need an owner’s attention.",
  cta: { href: "/contact", label: "Book a Conductor demo" },
  features: [
    {
      label: "01 · SEE",
      title: "Cross-system monitoring",
      body: "Watches the operation around the clock and surfaces missed calls, schedule gaps, unpaid work and follow-ups before they become problems.",
    },
    {
      label: "02 · SPEAK",
      title: "Calls and messages",
      body: "Handles phone, SMS, WhatsApp, web chat and email from one operating context, resolving the routine and escalating the rest.",
    },
    {
      label: "03 · PRIORITISE",
      title: "Margin-aware booking",
      body: "Qualifies the request, understands job value and fills the calendar with the best work—not simply the next available request.",
    },
    {
      label: "04 · RECONCILE",
      title: "Schedule and books in sync",
      body: "Connects appointments, completed work, invoices and payments so the record stays current without duplicate entry.",
    },
  ],
  workflow: ["New request", "Qualified", "Prioritised", "Booked"],
  tone: "blue",
};

const care: ProductDetail = {
  id: "clinic",
  tag: "Clinical operations",
  name: "Orynx Clinic",
  body: "An AI clinic assistant that handles the work around the visit—documentation, routine messages, scheduling and reminders—while clinical decisions remain with clinicians.",
  cta: { href: "/contact", label: "Book a Clinic demo" },
  features: [
    {
      label: "01 · DOCUMENT",
      title: "Ambient notes",
      body: "Drafts structured clinical documentation from the consultation for the clinician to review and approve.",
    },
    {
      label: "02 · COORDINATE",
      title: "Triage and scheduling",
      body: "Collects the right information, supports prioritisation and fills cancellations while preserving clinical escalation rules.",
    },
    {
      label: "03 · COMMUNICATE",
      title: "Patient messaging",
      body: "Answers routine administrative questions and routes anything clinical or uncertain to the care team with context.",
    },
    {
      label: "04 · GOVERN",
      title: "Compliance and audit",
      body: "Uses encryption, role-based access and reviewable logs designed to support HIPAA-aligned workflows.",
    },
  ],
  workflow: ["Patient query", "Context gathered", "Rule applied", "Care team"],
  tone: "coral",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Two purpose-built products"
        title="Different work."
        titleAccent="The same standard of follow-through."
        visual="wave"
        lede="Conductor runs the operational front desk for service businesses. Clinic handles the administrative work surrounding clinical care. Both know when to act and when to bring in a person."
      >
        <div className="flex flex-wrap gap-3">
          {jumpLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center justify-center h-10 px-5 text-sm font-medium rounded-full border border-foreground/20 hover:bg-foreground/5 hover:border-brand-coral-ink hover:text-brand-coral-ink transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </PageHero>

      <ProductDetailSection {...conductor} />
      <div className="border-t border-foreground/10" />
      <ProductDetailSection {...care} />

      <CompareSection />

      <CtaSection
        eyebrow="Not sure where to start?"
        titleLines={["Bring us the workflow", "that keeps breaking."]}
        body="We’ll map it with you and show which Orynx product fits—without forcing clinical and commercial operations into the same model."
        primary={{ href: "/contact", label: "Talk to the team" }}
        secondary={null}
      />
    </>
  );
}
