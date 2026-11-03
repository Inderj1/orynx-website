import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/landing/page-hero";
import { ServiceDetailSection } from "@/components/landing/service-detail-section";
import { ProcessSection } from "@/components/landing/process-section";
import { RecentWorkSection } from "@/components/landing/recent-work-section";
import { CtaSection } from "@/components/landing/cta-section";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI for small businesses: websites and apps to start, then AI agents and automation, with business and marketing advice. Based in Edinburgh.",
};

const jumpLinks = [
  ...services.map((service) => ({ href: `#${service.id}`, label: `${service.title} ↓` })),
  { href: "#work", label: "Recent work ↓" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Edinburgh"
        title="AI for small businesses."
        titleAccent="Your website is the first step."
        visual="wave"
        lede="We build the website, then put AI agents to work on the routine. Tailored to your business, priced to suit, online or in person."
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

      {services.map((service) => (
        <div key={service.id} className="border-t border-foreground/10">
          <ServiceDetailSection service={service}>
            {service.id === "automation" && (
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4"
              >
                See Orynx Desk and Orynx Clinic
                <ArrowRight className="w-4 h-4 text-brand-coral-ink transition-transform group-hover:translate-x-1" />
              </Link>
            )}
          </ServiceDetailSection>
        </div>
      ))}

      <ProcessSection />
      <RecentWorkSection />

      <CtaSection
        eyebrow="Say hello"
        titleLines={["Tell us about", "your business."]}
        body="We’re happy to meet online or in person, whenever suits you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={null}
      />
    </>
  );
}
