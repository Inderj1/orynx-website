<script setup>
definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "Products | Orynx",
  description: "Integration platforms, AI products, and industry tools. EHR Bridge, ComplianceOS, Call Center AI, CommBridge, AutoPRD, and more.",
  ogTitle: "Products | Orynx",
  ogDescription: "Integration platforms and AI products across healthcare, compliance, communications, and developer tools.",
  ogUrl: "https://orynx.co.uk/products",
  twitterTitle: "Products | Orynx",
  twitterDescription: "Integration platforms and AI products across healthcare, compliance, and more.",
});

const products = [
  {
    id: "ehr-bridge",
    badge: "Healthcare Integration",
    name: "EHR Bridge",
    desc: "Universal healthcare data integration — Plaid for EHR. Connect across 78+ EHR platforms with a single integration layer, eliminating data silos with seamless interoperability.",
    color: "bg-[#156d95]",
    features: ["78+ EHR Connectors (Epic, Cerner, Allscripts, athenahealth)", "Real-Time Bidirectional Data Sync", "FHIR R4 & HL7 Support", "Patient Data Unification & Deduplication", "AI Clinical Intelligence Layer", "HIPAA Compliant, Zero Replacement Required"],
    stats: ["FHIR R4 Compliant", "<2s Sync Time", "78+ Connectors"],
  },
  {
    id: "openeyes-cloud",
    badge: "Ophthalmology EPR",
    name: "OpenEyes Cloud",
    desc: "Modernised cloud-hosted OpenEyes platform for ophthalmology clinics. Enhanced with modern cloud infrastructure, improved performance, and seamless browser-based deployment.",
    color: "bg-[#f59e0b]",
    features: ["Purpose-Built Ophthalmology EPR", "EyeDraw Graphical Clinical Documentation", "Imaging Device Integration (OCT, Visual Field Analysers)", "Clinical Data Visualisation & Trend Tracking", "Rapid Surgical Documentation (Cataract, Glaucoma, Vitreoretinal)", "Cloud-Native, Browser-Based Architecture"],
    stats: ["Cloud Native", "100% Browser-Based", "24/7 Availability"],
  },
  {
    id: "medsynth",
    badge: "Synthetic Data",
    name: "MedSynth",
    desc: "Synthetic data generation for healthcare AI and medical training. Generates realistic, privacy-safe patient data for model training, simulations, and research.",
    color: "bg-[#0ea5e9]",
    features: ["Realistic Synthetic Patient Records", "Enhanced Virtual Mannequin Training", "Authentic Clinical Pressure Scenarios", "Diverse Training (Emergency, Surgical, Chronic, Rare Conditions)", "100% Privacy-Compliant by Design", "Scalable On-Demand Generation"],
    stats: ["100% Privacy-Safe", "HIPAA Compliant", "Scalable"],
  },
  {
    id: "diawound-ai",
    badge: "Wound Care AI",
    name: "DiaWound AI",
    desc: "AI-powered diabetic wound analysis and management. Capture wound images and receive instant classification, severity assessment, healing tracking, and clinical recommendations.",
    color: "bg-[#ef4444]",
    features: ["AI-Powered Wound Assessment via Camera", "Clinical Management Plans & Red Flag Alerts", "Patient Profile Management with Diabetes Tracking", "Scan History & Side-by-Side Comparison", "Native iOS & Android App", "Secure & HIPAA-Ready"],
    stats: ["AI Assessment", "iOS & Android", "Real-Time Insights"],
  },
  {
    id: "compliance-os",
    badge: "Compliance Automation",
    name: "ComplianceOS",
    desc: "Compliance automation platform with AI-powered workflows. Automates SOC 2, ISO 27001, and HIPAA compliance with 12+ integrations and continuous monitoring.",
    color: "bg-[#8b5cf6]",
    features: ["SOC 2, ISO 27001, HIPAA Automation", "12+ Tool Integrations", "AI-Powered Evidence Collection", "Continuous Compliance Monitoring", "Automated Policy Generation", "Audit-Ready Reporting"],
    stats: ["SOC 2 / ISO 27001", "12+ Integrations", "AI-Powered"],
  },
  {
    id: "call-center-ai",
    badge: "Voice AI",
    name: "Call Center AI",
    desc: "AI-powered voice agents with human-in-the-loop supervision. Handles inbound/outbound calls, intelligent triage, and routing using LiveKit and Gemini 2.0.",
    color: "bg-[#16b364]",
    features: ["24/7 AI Voice Agents", "Human-in-the-Loop Supervision", "Intelligent Triage & Multi-Level Routing", "Multi-Language Support (4+ Languages)", "Seamless Human Handoff with Full Context", "Real-Time Call Analytics"],
    stats: ["24/7 Available", "<500ms Response", "4+ Languages"],
  },
  {
    id: "commbridge",
    badge: "Unified Communications",
    name: "CommBridge",
    desc: "Unified communication infrastructure layer connecting Slack, Teams, Discord, email, voice, and notifications through a single API. Multi-language microservices architecture.",
    color: "bg-[#f59e0b]",
    features: ["Slack, Teams, Discord Integration", "Email & Voice Channel Support", "Push Notification Gateway", "Unified API Across All Platforms", "Multi-Language Microservices (Go, Rust, Python, TypeScript)", "Enterprise-Ready Message Routing"],
    stats: ["Multi-Platform", "Unified API", "Enterprise-Ready"],
  },
  {
    id: "autoprd",
    badge: "Developer Tools",
    name: "AutoPRD",
    desc: "Autonomous development pipeline that converts user feedback into implemented, tested, and reviewed code. Feedback flows through PRD generation, AI-powered implementation, quality review, and test generation.",
    color: "bg-[#6366f1]",
    features: ["Feedback → PRD → Code Pipeline", "Claude Code Agent Loop for Implementation", "Untrusted Actor Review Pattern", "Auto-Generated Test Suites with Quality Gates", "Docker Sandbox for Safe Execution", "Multi-Input Support (Text, Audio, Video Transcription)"],
    stats: ["End-to-End Automation", "AI-Powered Review", "Sandbox Mode"],
  },
  {
    id: "ai-scribe",
    badge: "Medical Documentation",
    name: "Ambient Scribe",
    desc: "NHS-compliant medical transcription converting doctor-patient conversations into structured SOAP notes using Deepgram and Azure OpenAI in real time.",
    color: "bg-[#e85d04]",
    features: ["Real-Time Clinical Transcription", "SOAP Note Generation", "Multi-Specialty Support", "Ambient Listening Mode", "NHS & HIPAA Compliant", "EHR Auto-Population"],
    stats: ["Real-Time", "NHS Compliant", "Ambient Mode"],
  },
  {
    id: "orynx-education",
    badge: "Healthcare Education",
    name: "Orynx Education",
    desc: "AI-powered healthcare education platform with virtual patient simulations, interactive 3D anatomy, and adaptive learning pathways for medical professionals.",
    color: "bg-[#ef4444]",
    features: ["AI Virtual Patient Simulations (24/7)", "Interactive 3D Anatomy Explorer", "OSCE & Clinical Skills Training", "AI-Generated Flashcards with Spaced Repetition", "Radiology Training & Imaging Library", "Adaptive Learning Pathways"],
    stats: ["AI-Powered", "3D Anatomy", "24/7 Access"],
  },
  {
    id: "orynx-agents",
    badge: "Agentic AI SDK",
    name: "Orynx Agents",
    desc: "Enterprise-grade multi-agent framework built for production. Intelligent context management, multi-tier memory, stateful agents with durable execution, and compliance-ready safety — all provider-agnostic across Python, TypeScript, Rust, and Go.",
    color: "bg-[#0d9488]",
    featureGroups: [
      {
        title: "Context & Orchestration",
        items: [
          "Intelligent context management with 24+ swappable strategies",
          "Smart agent coordination with typed handoff contracts",
          "Stateful agents with validated transitions and persistent state",
          "Durable, crash-safe execution with automatic recovery",
          "Sequential, parallel, and hierarchical orchestration patterns",
        ],
      },
      {
        title: "Memory & Intelligence",
        items: [
          "Multi-tier memory architecture — hot, warm, and cold storage",
          "Cognitive graph memory modelling facts, experiences, beliefs, and summaries",
          "LLM-powered memory extraction with deduplication and conflict resolution",
          "Semantic search across vector stores with automatic embeddings",
          "Checkpointing and time-travel debugging for any workflow",
          "AI-optimised tool selection that improves with usage",
          "Lookahead planning for complex multi-step reasoning",
        ],
      },
      {
        title: "Safety, Compliance & Audit",
        items: [
          "Policy engine with anomaly detection and human escalation",
          "Full data lineage and flow tracking across agents",
          "Enterprise data loss prevention with compliance presets",
          "GDPR, HIPAA, and PCI-DSS ready out of the box",
          "Sandboxed code execution with resource limits",
        ],
      },
      {
        title: "Developer Experience",
        items: [
          "Provider-agnostic — works with 100+ LLM providers",
          "Multi-language SDKs: Python, TypeScript, Rust, Go",
          "High-performance core with up to 10x speedups",
          "Native agent-to-agent protocol with skill discovery",
          "Model Context Protocol (MCP) client and server",
          "Built-in REST API server with real-time streaming",
          "Interactive CLI and YAML-based crew configuration",
        ],
      },
    ],
    stats: ["24+ Context Strategies", "Multi-Tier Memory", "Durable & Stateful", "Compliance-Ready", "100+ LLM Providers", "4 Language SDKs"],
  },
];
</script>

<template>
  <div>
    <section class="pt-32 pb-20 bg-surface-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <span class="label text-primary mb-4 block">Product Suite</span>
          <h1 class="text-4xl sm:text-5xl font-bold text-text-primary tracking-[-0.02em] leading-[1.15]">
            Integration platforms, AI products, and industry tools
          </h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            From universal connectors to AI-powered automation — purpose-built software across healthcare, finance, IoT, compliance, and beyond.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="space-y-16">
          <div v-for="product in products" :key="product.id" :id="product.id" class="card p-8 md:p-10 scroll-mt-24">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <div :class="[product.color, 'w-2 h-8 rounded-full']"></div>
              <span class="label">{{ product.badge }}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold text-text-primary tracking-[-0.02em] mb-3">{{ product.name }}</h2>
            <p class="text-text-secondary leading-relaxed max-w-3xl mb-8">{{ product.desc }}</p>

            <!-- Grouped features layout (for products with featureGroups) -->
            <template v-if="product.featureGroups">
              <div class="grid sm:grid-cols-2 gap-8">
                <div v-for="group in product.featureGroups" :key="group.title">
                  <span class="label mb-4 block">{{ group.title }}</span>
                  <ul class="space-y-2.5">
                    <li v-for="item in group.items" :key="item" class="flex items-start gap-2.5">
                      <svg class="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-sm text-text-secondary">{{ item }}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mt-8">
                <span class="label mb-4 block">Highlights</span>
                <div class="flex flex-wrap gap-2">
                  <span v-for="stat in product.stats" :key="stat" class="tech-pill">{{ stat }}</span>
                </div>
              </div>
            </template>

            <!-- Standard features layout -->
            <div v-else class="grid md:grid-cols-2 gap-8">
              <div>
                <span class="label mb-4 block">Key Features</span>
                <ul class="space-y-2.5">
                  <li v-for="feature in product.features" :key="feature" class="flex items-start gap-2.5">
                    <svg class="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-sm text-text-secondary">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              <div>
                <span class="label mb-4 block">Highlights</span>
                <div class="flex flex-wrap gap-2">
                  <span v-for="stat in product.stats" :key="stat" class="tech-pill">{{ stat }}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface-secondary border-t border-border">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-text-primary tracking-[-0.02em]">Interested in our products?</h2>
        <p class="mt-4 text-lg text-text-secondary">Request a demo or learn how our platforms can integrate into your workflows.</p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150">
            Request a Demo
          </NuxtLink>
          <a href="https://www.merix.ai/" target="_blank" rel="noopener" class="px-6 py-3 border border-border text-text-secondary font-medium rounded-pill hover:border-primary hover:text-primary transition-all duration-150 inline-flex items-center gap-2">
            Visit Merix AI
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
