import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { StorySection } from "@/components/landing/story-section";
import { ValuesSection } from "@/components/landing/values-section";
import { BoundarySection } from "@/components/landing/boundary-section";
import { CtaSection } from "@/components/landing/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Orynx builds accountable applied AI that returns time to business and clinical teams.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Orynx"
        title="Work worth automating."
        titleAccent="Judgment worth protecting."
        visual="wave"
        lede="We build AI for the calls, messages, schedules and records that consume capable teams—not for the decisions that make those teams valuable."
      />
      <StorySection />
      <ValuesSection />
      <BoundarySection />
      <CtaSection
        eyebrow="Build with us"
        titleLines={["Show us where", "the work gets stuck."]}
        body="Whether you want to use Orynx or help shape it, the conversation starts with a real workflow and the people responsible for it."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={null}
      />
    </>
  );
}
