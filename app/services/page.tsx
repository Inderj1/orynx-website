import type { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { COMPANY_NAME, PRIMARY_CTA_LABEL } from "@/lib/brand-copy"

export const metadata: Metadata = {
  title: `Services | ${COMPANY_NAME}`,
  description:
    "Web development, AI & ML, LLM integration, and custom engineering. Dedicated teams that build production software end-to-end.",
}

const services = [
  {
    n: "01",
    label: "Web Development",
    headline: "Modern, scalable web applications.",
    body: "Full-stack engineering for web applications of any complexity. Single page apps, server-rendered apps, PWAs, APIs, and the cloud plumbing to run them at scale.",
    points: [
      "Single page & server-rendered apps",
      "Progressive web apps (PWA)",
      "API design (REST, GraphQL)",
      "Database architecture & optimisation",
      "Cloud deployment & CI/CD",
      "Performance & SEO",
    ],
    stack: "Vue · Nuxt · React · Next.js · Node · Python · TypeScript · PostgreSQL · MongoDB · Redis · GraphQL · Docker · AWS · GCP · Vercel · Tailwind",
  },
  {
    n: "02",
    label: "AI & Machine Learning",
    headline: "Custom models for real-world impact.",
    body: "End-to-end machine learning from data strategy through production deployment. Computer vision, NLP, predictive analytics — built, trained, and monitored by people who ship.",
    points: [
      "Custom model development & training",
      "Computer vision & image analysis",
      "Natural language processing",
      "Predictive analytics & risk scoring",
      "Data pipeline engineering",
      "Model monitoring & retraining",
    ],
    stack: "PyTorch · TensorFlow · scikit-learn · Hugging Face · Python · NumPy · Pandas · OpenCV · MLflow · W&B · ONNX · Kubernetes · Spark · DVC · CUDA",
  },
  {
    n: "03",
    label: "LLM Integration",
    headline: "Production-ready AI language systems.",
    body: "From prototype to production LLM deployments. Retrieval-augmented generation, agent orchestration, fine-tuning, and the evaluation harnesses that keep them reliable.",
    points: [
      "RAG pipelines",
      "Agent architecture & orchestration",
      "Fine-tuning & prompt engineering",
      "Self-hosted & private LLM deployment",
      "Evaluation frameworks",
      "Conversational AI & chatbots",
    ],
    stack: "OpenAI · Claude · LangChain · LlamaIndex · Ollama · Gemini · Pinecone · Weaviate · ChromaDB · pgvector · FastAPI · vLLM · Hugging Face · AWS Bedrock",
  },
  {
    n: "04",
    label: "Custom Development",
    headline: "Any language. Any platform. Dedicated teams.",
    body: "A dedicated engineering team for your project, whatever the technology. Mobile, desktop, microservices, legacy modernisation, integrations — the engagements that don't fit a category.",
    points: [
      "Mobile (iOS, Android, cross-platform)",
      "Desktop & enterprise software",
      "Microservices architecture",
      "Legacy system modernisation",
      "Third-party API integrations",
      "Technical consulting & architecture review",
    ],
    stack: "Go · Rust · Java · Kotlin · Swift · C# · .NET · Flutter · React Native · Electron · gRPC · RabbitMQ · Kafka · Terraform · GitHub Actions · Linux",
  },
]

const phases = [
  {
    n: "01",
    label: "Discovery",
    body: "We assess requirements, audit existing systems, and agree the success criteria before any code is written.",
  },
  {
    n: "02",
    label: "Build",
    body: "A dedicated team ships the work in regular increments. You see progress weekly, not at the end.",
  },
  {
    n: "03",
    label: "Ship & Support",
    body: "Production deployment, monitoring, and ongoing support. We hand you a system you can run.",
  },
]

export default function ServicesPage() {
  return (
    <main className="relative bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Services
          </span>
          <h1 className="font-display font-semibold text-ink text-[44px] sm:text-[64px] lg:text-[88px] leading-[1.05] tracking-[-0.025em] mt-6 max-w-[20ch]">
            Engineering teams.{" "}
            <span className="font-serif italic font-normal text-brand-blue">
              Built to ship.
            </span>
          </h1>
          <p className="text-ink-soft text-lg lg:text-xl max-w-[62ch] leading-[1.55] mt-8">
            Web, AI &amp; ML, LLM integration, and custom development.
            Dedicated engineers assigned directly to your project — the same
            team from discovery through production.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="border-t border-rule">
        {services.map((s, i) => (
          <div
            key={s.n}
            id={s.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className={`py-20 lg:py-28 ${i > 0 ? "border-t border-rule" : ""}`}
          >
            <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                    {s.n} · {s.label}
                  </div>
                  <h2 className="font-display font-semibold text-ink text-[32px] lg:text-[48px] leading-[1.04] tracking-[-0.025em] mt-4 max-w-[16ch]">
                    {s.headline}
                  </h2>
                </div>
                <div className="lg:col-span-8 space-y-8">
                  <p className="text-ink-soft text-lg lg:text-xl leading-[1.6] max-w-[60ch]">
                    {s.body}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-baseline gap-3 text-ink"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-orange">
                          ↳
                        </span>
                        <span className="text-base lg:text-lg">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted mb-3">
                      Stack
                    </div>
                    <p className="text-sm text-ink-soft leading-[1.7]">
                      {s.stack}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Engagement model */}
      <section className="py-20 lg:py-28 bg-surface border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <div className="max-w-[60ch] mb-14">
            <span className="inline-block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
              How we work
            </span>
            <h2 className="font-display font-semibold text-ink text-4xl lg:text-5xl tracking-[-0.02em] mt-3">
              Three phases.{" "}
              <span className="font-serif italic font-normal text-brand-blue">
                One team.
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {phases.map((p) => (
              <div key={p.n}>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-orange">
                  {p.n}
                </div>
                <h3 className="font-display font-semibold text-ink text-2xl lg:text-3xl tracking-[-0.02em] mt-3">
                  {p.label}
                </h3>
                <p className="text-ink-soft text-base lg:text-lg leading-[1.6] mt-4">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-ink text-background border-t border-rule">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 text-center">
          <h2 className="font-display font-semibold text-background text-[36px] lg:text-[56px] leading-[1.02] tracking-[-0.025em] max-w-[24ch] mx-auto">
            Tell us about your project.
          </h2>
          <p className="text-background/70 text-lg lg:text-xl max-w-[58ch] mx-auto mt-6">
            A 30-minute call. We share how we'd staff and ship it — from
            discovery to production.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent-orange text-white text-[15px] font-semibold hover:bg-accent-orange-deep transition-colors duration-150 group mt-10"
          >
            {PRIMARY_CTA_LABEL}
            <ArrowUpRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
