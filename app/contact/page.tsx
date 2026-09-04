import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { ContactSection } from "@/components/landing/contact-section";

export const metadata: Metadata = {
  description: "Book an Orynx demo for your business or clinical workflow.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to the team"
        title="Bring us the workflow."
        titleAccent="We’ll bring the questions."
        lede="Tell us what your team handles today, where it breaks down, and which decisions must remain human. We’ll reply within one working day."
      />
      <ContactSection variant="page" />
    </>
  );
}
