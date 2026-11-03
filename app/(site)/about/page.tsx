import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { StorySection } from "@/components/landing/story-section";
import { ServicesSection } from "@/components/landing/services-section";
import { ValuesSection } from "@/components/landing/values-section";
import { BoundarySection } from "@/components/landing/boundary-section";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orynx is an Edinburgh team helping small businesses put AI to work, starting with the website.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Orynx · Edinburgh"
        title="A local AI team."
        titleAccent="A personal approach."
        visual="wave"
        lede="We help small businesses put AI to work. We start with a website that brings in work, then add AI agents for the routine, with straight business and marketing advice along the way."
      />
      <StorySection />
      <ServicesSection />
      <ValuesSection />
      <BoundarySection />
      <CtaSection
        eyebrow="Say hello"
        titleLines={["Tell us about", "your business."]}
        body="We’re happy to meet online or in person, whenever suits you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/services", label: "See our services" }}
      />
    </>
  );
}
