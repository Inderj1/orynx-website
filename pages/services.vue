<script setup>
definePageMeta({ layout: "landing" });

useHead({
  title: "Services | Orynx",
  meta: [{ name: "description", content: "Consulting services for web, AI/ML, LLM integration, and custom development with dedicated engineering teams." }],
});

const services = [
  {
    id: "web",
    icon: "heroicons:globe-alt",
    color: "text-[#3b82f6]",
    colorBg: "bg-[#eff6ff]",
    colorDot: "bg-[#3b82f6]",
    title: "Web Development",
    subtitle: "Modern, scalable web applications",
    desc: "Full-stack engineering for web applications of any complexity. From marketing sites to complex SaaS platforms, we build with modern frameworks and best practices.",
    features: [
      "Single Page & Server-Rendered Applications",
      "Progressive Web Apps (PWA)",
      "API Design & Development (REST, GraphQL)",
      "Database Architecture & Optimization",
      "Cloud Deployment & DevOps (CI/CD)",
      "Performance Optimization & SEO",
    ],
    tech: [
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Nuxt", icon: "logos:nuxt-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "AWS", icon: "logos:aws" },
      { name: "GCP", icon: "logos:google-cloud" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ],
  },
  {
    id: "ai-ml",
    icon: "heroicons:cpu-chip",
    color: "text-[#8b5cf6]",
    colorBg: "bg-[#f5f3ff]",
    colorDot: "bg-[#8b5cf6]",
    title: "AI & Machine Learning",
    subtitle: "Custom models for real-world impact",
    desc: "End-to-end machine learning solutions from data strategy through production deployment. Specialised in healthcare AI, computer vision, and predictive analytics.",
    features: [
      "Custom ML Model Development & Training",
      "Computer Vision & Image Analysis",
      "Natural Language Processing (NLP)",
      "Predictive Analytics & Risk Scoring",
      "Data Pipeline Engineering",
      "Model Monitoring & Retraining",
    ],
    tech: [
      { name: "PyTorch", icon: "logos:pytorch-icon" },
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "scikit-learn", icon: "simple-icons:scikitlearn" },
      { name: "Hugging Face", icon: "noto:hugging-face" },
      { name: "Python", icon: "logos:python" },
      { name: "Jupyter", icon: "logos:jupyter" },
      { name: "NumPy", icon: "logos:numpy" },
      { name: "Pandas", icon: "simple-icons:pandas" },
      { name: "OpenCV", icon: "logos:opencv" },
      { name: "MLflow", icon: "simple-icons:mlflow" },
      { name: "Weights & Biases", icon: "simple-icons:weightsandbiases" },
      { name: "ONNX", icon: "simple-icons:onnx" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Apache Spark", icon: "logos:apache-spark" },
      { name: "DVC", icon: "simple-icons:dvc" },
      { name: "NVIDIA CUDA", icon: "logos:nvidia" },
    ],
  },
  {
    id: "llm",
    icon: "heroicons:chat-bubble-bottom-center-text",
    color: "text-[#10b981]",
    colorBg: "bg-[#ecfdf5]",
    colorDot: "bg-[#10b981]",
    title: "LLM Integration",
    subtitle: "Production-ready AI language systems",
    desc: "From prototype to production LLM deployments. We build RAG systems, AI agents, and custom language model solutions that integrate seamlessly with your workflows.",
    features: [
      "Retrieval-Augmented Generation (RAG) Pipelines",
      "AI Agent Architecture & Orchestration",
      "Model Fine-Tuning & Prompt Engineering",
      "Self-Hosted & Private LLM Deployment",
      "Evaluation Frameworks & Quality Assurance",
      "Conversational AI & Chatbot Development",
    ],
    tech: [
      { name: "OpenAI", icon: "simple-icons:openai" },
      { name: "Claude API", icon: "simple-icons:anthropic" },
      { name: "LangChain", icon: "simple-icons:langchain" },
      { name: "LlamaIndex", icon: "simple-icons:llamaindex" },
      { name: "Ollama", icon: "simple-icons:ollama" },
      { name: "Gemini", icon: "simple-icons:googlegemini" },
      { name: "Pinecone", icon: "simple-icons:pinecone" },
      { name: "Weaviate", icon: "simple-icons:weaviate" },
      { name: "ChromaDB", icon: "simple-icons:chroma" },
      { name: "PostgreSQL pgvector", icon: "logos:postgresql" },
      { name: "FastAPI", icon: "logos:fastapi" },
      { name: "vLLM", icon: "heroicons:server" },
      { name: "Hugging Face", icon: "noto:hugging-face" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "AWS Bedrock", icon: "logos:aws" },
    ],
  },
  {
    id: "custom",
    icon: "heroicons:code-bracket",
    color: "text-[#e85d04]",
    colorBg: "bg-[#fff7ed]",
    colorDot: "bg-[#e85d04]",
    title: "Custom Development",
    subtitle: "Any language. Any platform. Dedicated teams.",
    desc: "A dedicated engineering team for your project, whatever the technology. From mobile apps to embedded systems, we staff the right experts for the job.",
    features: [
      "Mobile Applications (iOS, Android, Cross-Platform)",
      "Desktop & Enterprise Software",
      "Microservices Architecture",
      "Legacy System Modernisation",
      "Third-Party API Integrations",
      "Technical Consulting & Architecture Review",
    ],
    tech: [
      { name: "Go", icon: "logos:go" },
      { name: "Rust", icon: "logos:rust" },
      { name: "Java", icon: "logos:java" },
      { name: "Kotlin", icon: "logos:kotlin-icon" },
      { name: "Swift", icon: "logos:swift" },
      { name: "C#", icon: "logos:c-sharp" },
      { name: ".NET", icon: "logos:dotnet" },
      { name: "Flutter", icon: "logos:flutter" },
      { name: "React Native", icon: "logos:react" },
      { name: "Electron", icon: "logos:electron" },
      { name: "gRPC", icon: "logos:grpc" },
      { name: "RabbitMQ", icon: "logos:rabbitmq-icon" },
      { name: "Kafka", icon: "logos:kafka-icon" },
      { name: "Terraform", icon: "logos:terraform-icon" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "Linux", icon: "logos:linux-tux" },
    ],
  },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="pt-32 pb-20 bg-surface-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <span class="label text-primary mb-4 block">Consulting Services</span>
          <h1 class="text-4xl sm:text-5xl font-bold text-text-primary tracking-[-0.02em] leading-[1.15]">
            Dedicated engineering teams for your toughest challenges
          </h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            We provide expert consulting services across web, AI/ML, LLM, and custom development. Whatever the technology, we have the team.
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="space-y-20">
          <div v-for="service in services" :key="service.id" :id="service.id" class="card p-8 md:p-10 scroll-mt-24">
            <div class="flex items-center gap-3 mb-6">
              <div :class="[service.colorBg, 'w-10 h-10 rounded-xl flex items-center justify-center']">
                <Icon :name="service.icon" :class="[service.color, 'w-5 h-5']" />
              </div>
              <div>
                <h2 class="text-2xl font-bold text-text-primary tracking-[-0.02em]">{{ service.title }}</h2>
                <p class="text-sm text-text-tertiary">{{ service.subtitle }}</p>
              </div>
            </div>

            <p class="text-text-secondary leading-relaxed max-w-3xl mb-10">{{ service.desc }}</p>

            <div class="grid lg:grid-cols-2 gap-10">
              <div>
                <span class="label mb-4 block">What We Deliver</span>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div v-for="feature in service.features" :key="feature" class="flex items-start gap-2.5 p-3.5 rounded-xl bg-surface-secondary border border-border-secondary">
                    <div :class="[service.colorDot, 'w-1.5 h-1.5 rounded-full mt-1.5 shrink-0']"></div>
                    <span class="text-sm text-text-secondary leading-snug">{{ feature }}</span>
                  </div>
                </div>
              </div>
              <div>
                <span class="label mb-4 block">Technologies</span>
                <div class="flex flex-wrap gap-2">
                  <div v-for="tech in service.tech" :key="tech.name" class="tech-pill inline-flex items-center gap-2">
                    <Icon :name="tech.icon" class="w-4 h-4" />
                    <span>{{ tech.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="py-24 bg-surface-secondary">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <span class="label text-primary mb-3 block">How We Work</span>
          <h2 class="text-3xl font-bold text-text-primary tracking-[-0.02em]">Simple, transparent process</h2>
        </div>
        <div class="grid sm:grid-cols-3 gap-4">
          <div v-for="(step, i) in [
            { title: 'Discovery', desc: 'We understand your requirements, assess the technical landscape, and propose the right approach.' },
            { title: 'Build', desc: 'A dedicated team works alongside you with regular updates, reviews, and iterative delivery.' },
            { title: 'Ship & Support', desc: 'We deploy to production and provide ongoing support, monitoring, and continuous improvement.' },
          ]" :key="step.title" class="card p-6">
            <div class="text-4xl font-bold text-border mb-3">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3 class="text-lg font-semibold text-text-primary mb-2">{{ step.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-surface-secondary border-t border-border">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-text-primary tracking-[-0.02em]">Let's build something together</h2>
        <p class="mt-4 text-lg text-text-secondary">Tell us about your project and we'll put together the right team.</p>
        <NuxtLink to="/contact" class="mt-8 inline-flex px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150">
          Start a conversation
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
