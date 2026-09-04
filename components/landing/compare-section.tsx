import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const products = [
  {
    name: "Orynx Conductor",
    description: "Business operations",
    summary: "An AI operations layer for HVAC, plumbing, electrical and other service businesses. Conductor watches calls, calendar, inbox and books, then handles the work that should not need an owner’s attention.",
    rows: [
      { label: "Primary users", value: "Home-service and field-service teams" },
      { label: "Channels", value: "Phone, SMS, WhatsApp, chat and email" },
      { label: "Scheduling", value: "Job value, capacity and dispatch" },
      { label: "Documentation", value: "Jobs, invoices and payments" },
      { label: "Human handoff", value: "Owner or dispatcher can step in any time" },
    ],
    capabilities: [
      { label: "01 · See", title: "Cross-system monitoring" },
      { label: "02 · Speak", title: "Calls and messages" },
      { label: "03 · Prioritise", title: "Margin-aware booking" },
      { label: "04 · Reconcile", title: "Schedule and books in sync" },
    ],
    cta: "Book a Conductor demo",
    highlight: false,
    dot: "bg-brand-blue",
    ctaHover: "hover:border-brand-blue-ink hover:text-brand-blue-ink",
  },
  {
    name: "Orynx Clinic",
    description: "Clinical operations",
    summary: "An AI clinic assistant that handles the work around the visit—documentation, routine messages, scheduling and reminders—while clinical decisions remain with clinicians.",
    rows: [
      { label: "Primary users", value: "Clinics, clinicians and clinical operations" },
      { label: "Channels", value: "Patient messaging, phone and scheduling channels" },
      { label: "Scheduling", value: "Clinical rules, urgency and availability" },
      { label: "Documentation", value: "Ambient clinical notes and audit history" },
      { label: "Human handoff", value: "Clinical judgment always remains human" },
    ],
    capabilities: [
      { label: "01 · Document", title: "Ambient notes" },
      { label: "02 · Coordinate", title: "Triage and scheduling" },
      { label: "03 · Communicate", title: "Patient messaging" },
      { label: "04 · Govern", title: "Compliance and audit" },
    ],
    cta: "Book a Clinic demo",
    highlight: false,
    dot: "bg-brand-coral",
    ctaHover: "hover:border-brand-coral-ink hover:text-brand-coral-ink",
  },
];

export function CompareSection() {
  return (
    <section id="compare" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-brand-coral" />
            At a glance
          </span>
          <h2 className="text-3xl lg:text-5xl font-display tracking-tight mb-6">
            Choose by workflow,
            <br />
            <span className="text-brand-coral-ink">not feature count.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Conductor and Clinic share an operating philosophy, but their data, language 
            and escalation boundaries are deliberately different.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className="relative p-8 lg:p-12 bg-background"
            >
              {/* Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-brand-coral-ink">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl text-foreground mt-2 flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${product.dot}`} />
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 font-mono uppercase tracking-widest">{product.description}</p>
              </div>

              {/* Summary */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                <p className="text-muted-foreground leading-relaxed">{product.summary}</p>
              </div>

              {/* Capabilities */}
              <div className="grid grid-cols-2 gap-4 mb-8 pb-8 border-b border-foreground/10">
                {product.capabilities.map((capability) => (
                  <div key={capability.title}>
                    <span className="block font-mono text-xs uppercase tracking-widest text-brand-coral-ink mb-1">
                      {capability.label}
                    </span>
                    <span className="text-sm font-medium">{capability.title}</span>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <ul className="space-y-4 mb-10">
                {product.rows.map((row) => (
                  <li key={row.label} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <span className="text-foreground font-medium">{row.label}.</span> {row.value}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group border border-foreground/20 text-foreground ${product.ctaHover} hover:bg-foreground/5`}
              >
                {product.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
