import { HeroSection } from "@/components/landing/hero-section";
import { ProductsSection } from "@/components/landing/products-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { ControlSection } from "@/components/landing/control-section";
import { FaqSection } from "@/components/landing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <HowItWorksSection />
      <ControlSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
