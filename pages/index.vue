<script setup>
definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "Orynx | AI Products & Software Engineering",
  description: "We build integration platforms, AI products, and custom software — from healthcare and fintech to IoT and compliance. Plus dedicated engineering teams.",
  ogTitle: "Orynx | AI Products & Software Engineering",
  ogDescription: "Integration platforms, AI products, and dedicated engineering teams across healthcare, fintech, IoT, and compliance.",
  ogUrl: "https://orynx.co.uk",
  twitterTitle: "Orynx | AI Products & Software Engineering",
  twitterDescription: "Integration platforms, AI products, and dedicated engineering teams.",
});

const services = [
  { icon: "heroicons:globe-alt", title: "Web Development", desc: "Full-stack web applications built with modern frameworks and scalable architecture." },
  { icon: "heroicons:cpu-chip", title: "AI & ML Solutions", desc: "Custom machine learning models, computer vision, NLP, and predictive analytics." },
  { icon: "heroicons:chat-bubble-bottom-center-text", title: "LLM Integration", desc: "RAG pipelines, AI agents, fine-tuning, and production-ready LLM deployments." },
  { icon: "heroicons:code-bracket", title: "Custom Development", desc: "Any language, any platform. Dedicated engineering teams for your project." },
];

const featuredProducts = [
  { name: "EHR Bridge", desc: "Universal healthcare data integration — 78+ EHR connectors", color: "bg-[#156d95]" },
  { name: "ComplianceOS", desc: "SOC 2, ISO 27001, HIPAA automation with AI workflows", color: "bg-[#8b5cf6]" },
  { name: "Call Center AI", desc: "AI voice agents with intelligent triage and routing", color: "bg-[#16b364]" },
  { name: "CommBridge", desc: "Unified comms layer — Slack, Teams, Discord, email, voice", color: "bg-[#f59e0b]" },
  { name: "AutoPRD", desc: "Autonomous dev pipeline — feedback to shipped code", color: "bg-[#6366f1]" },
  { name: "OpenEyes Cloud", desc: "Cloud-native ophthalmology EPR platform", color: "bg-[#0ea5e9]" },
];

const partners = [
  { name: "Microsoft", subtitle: "Founders Hub" },
  { name: "NVIDIA", subtitle: "Inception Program" },
  { name: "Google", subtitle: "Startups Accelerator" },
  { name: "AWS", subtitle: "Cloud Partner" },
];
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-surface-secondary overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <div class="badge badge-primary mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mr-2"></span>
            AI Products & Engineering
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-[56px] font-bold text-text-primary leading-[1.15] tracking-[-0.02em]">
            Software that connects,
            <span class="text-primary">automates, and scales</span>
          </h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed max-w-2xl">
            We build integration platforms, AI products, and custom software — from healthcare and fintech to IoT and compliance. Plus dedicated engineering teams for your toughest challenges.
          </p>
          <div class="mt-10 flex flex-wrap gap-4">
            <NuxtLink to="/products" class="px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150">
              Explore Products
            </NuxtLink>
            <NuxtLink to="/contact" class="px-6 py-3 border border-border text-text-secondary font-medium rounded-pill hover:border-primary hover:text-primary transition-all duration-150">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <span class="label text-primary mb-3 block">Consulting Services</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary tracking-[-0.02em]">Expert teams, any technology</h2>
          <p class="mt-4 text-lg text-text-secondary">
            Dedicated engineering teams for your toughest technical challenges. From web applications to production ML systems.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="service in services" :key="service.title" class="card p-6 group">
            <div class="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary-muted transition-colors">
              <Icon :name="service.icon" class="w-5 h-5 text-primary" />
            </div>
            <h3 class="font-semibold text-text-primary mb-2">{{ service.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <NuxtLink to="/services" class="text-sm font-medium text-primary hover:text-primary-hover inline-flex items-center gap-1 transition-colors">
            Learn more about our services
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Products Showcase -->
    <section class="py-24 bg-surface-secondary">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <span class="label text-primary mb-3 block">Our Products</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-text-primary tracking-[-0.02em]">Integration platforms and AI products</h2>
          <p class="mt-4 text-lg text-text-secondary">
            Universal connectors, AI automation, and industry-specific tools across healthcare, finance, IoT, and compliance.
          </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="product in featuredProducts" :key="product.name" class="card p-6">
            <div :class="[product.color, 'w-2 h-8 rounded-full mb-4']"></div>
            <h3 class="font-semibold text-text-primary mb-1">{{ product.name }}</h3>
            <p class="text-sm text-text-secondary">{{ product.desc }}</p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <NuxtLink to="/products" class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150">
            View all products
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <span class="label mb-10 block">Backed by leading technology partners</span>
        <div class="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div v-for="partner in partners" :key="partner.name" class="text-center">
            <p class="text-xl font-semibold text-text-muted">{{ partner.name }}</p>
            <p class="text-xs text-text-muted mt-1">{{ partner.subtitle }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 bg-surface-secondary border-t border-border">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-text-primary tracking-[-0.02em]">Ready to build something great?</h2>
        <p class="mt-4 text-lg text-text-secondary">
          Whether you need a healthcare AI product or a dedicated development team, we're here to help.
        </p>
        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <NuxtLink to="/contact" class="px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150">
            Start a conversation
          </NuxtLink>
          <NuxtLink to="/about" class="px-6 py-3 border border-border text-text-secondary font-medium rounded-pill hover:border-primary hover:text-primary transition-all duration-150">
            Learn about us
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
