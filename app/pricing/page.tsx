import { Navbar } from "@/components/navbar/navbar"
import { Pricing } from "@/components/pricing/pricing"
import { Comparison } from "@/components/comparison/comparison"
import { FAQ } from "@/components/faq/faq"
import { CTASection } from "@/components/cta/cta-section"
import { Footer } from "@/components/footer/footer"

export const metadata = {
  title: "Pricing | StrataxAI",
  description: "Choose the right StrataxAI plan for your business. Enterprise-grade AI-powered operational intelligence that scales with your needs.",
}

export default function PricingPage() {
  return (
    <main className="relative">
      <Navbar />
      {/* Hero banner */}
      <section className="pt-32 pb-8 bg-background relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(30 15% 98%) 70%),
              radial-gradient(circle, hsl(218 30% 88% / 0.08) 0.5px, transparent 0.5px)
            `,
            backgroundSize: "100% 100%, 40px 40px",
          }}
        />
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance" style={{ letterSpacing: "-0.03em" }}>
            Simple, transparent{" "}
            <span className="text-teal">pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Most customers see measurable ROI within 30 days. Start with a demo and see the impact for yourself.
          </p>
        </div>
      </section>
      <Pricing />
      <Comparison />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
