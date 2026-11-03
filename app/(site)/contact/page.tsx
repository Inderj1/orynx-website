import type { Metadata } from "next";
import { PageHero } from "@/components/landing/page-hero";
import { ContactSection } from "@/components/landing/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Orynx in Edinburgh about a website, app, AI automation, consulting or marketing.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to the team"
        title="Tell us about your business."
        titleAccent="We’ll take it from there."
        lede="Meet us online or in person in Edinburgh. We’ll reply within one working day."
      />
      <ContactSection variant="page" />
    </>
  );
}
