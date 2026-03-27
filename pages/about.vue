<script setup>
definePageMeta({ layout: "landing" });

useHead({
  title: "About | Orynx",
  meta: [{ name: "description", content: "Orynx builds integration platforms, AI products, and custom software. Dedicated engineering teams based in Edinburgh, Scotland." }],
});

const values = [
  { icon: "heroicons:puzzle-piece", title: "Product Builders", desc: "We don't just consult — we build and ship our own products, so we understand the full lifecycle from idea to production." },
  { icon: "heroicons:light-bulb", title: "Innovation Driven", desc: "We combine cutting-edge AI research with practical application, from multi-agent systems to real-time voice AI." },
  { icon: "heroicons:users", title: "Dedicated Teams", desc: "Our engineering teams are allocated to your project, bringing deep expertise across web, AI/ML, and custom development." },
  { icon: "heroicons:lock-closed", title: "Security First", desc: "Built with compliance in mind — HIPAA, SOC 2, ISO 27001. End-to-end encryption and privacy-by-design at every layer." },
];

const capabilities = [
  "AI/ML model development & deployment",
  "Full-stack web application engineering",
  "LLM integration & RAG pipelines",
  "Integration platforms (EHR, ERP, IoT, Comms)",
  "Cloud infrastructure (AWS, GCP, Azure)",
  "Mobile application development",
  "Voice AI & real-time systems",
  "Compliance automation",
];
</script>

<template>
  <div>
    <section class="pt-32 pb-20 bg-surface-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <span class="label text-primary mb-4 block">About Orynx</span>
          <h1 class="text-4xl sm:text-5xl font-bold text-text-primary tracking-[-0.02em] leading-[1.15]">
            Engineers, AI specialists, and product builders
          </h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            Based in Edinburgh, Scotland, we build integration platforms, AI products, and custom software — and provide dedicated engineering teams for organisations across healthcare, finance, compliance, and beyond.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span class="label text-primary mb-3 block">Our Mission</span>
            <h2 class="text-3xl font-bold text-text-primary tracking-[-0.02em]">Technology that solves real problems</h2>
            <p class="mt-6 text-text-secondary leading-relaxed">
              We believe the best software comes from teams who understand both the technology and the domain. That's why we build our own products alongside client work — it keeps us sharp and grounded in what actually ships.
            </p>
            <p class="mt-4 text-text-secondary leading-relaxed">
              From universal integration platforms to AI-powered automation, we focus on software that connects systems, reduces manual work, and scales with your business.
            </p>
          </div>
          <div class="card p-8">
            <span class="label mb-6 block">Our Capabilities</span>
            <ul class="space-y-4">
              <li v-for="cap in capabilities" :key="cap" class="flex items-start gap-3">
                <svg class="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-text-secondary">{{ cap }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface-secondary">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="max-w-2xl mb-16">
          <span class="label text-primary mb-3 block">What Sets Us Apart</span>
          <h2 class="text-3xl font-bold text-text-primary tracking-[-0.02em]">Built on the right principles</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div v-for="value in values" :key="value.title" class="card p-6">
            <div class="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-4">
              <Icon :name="value.icon" class="w-5 h-5 text-primary" />
            </div>
            <h3 class="font-semibold text-text-primary mb-2">{{ value.title }}</h3>
            <p class="text-sm text-text-secondary leading-relaxed">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface">
      <div class="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-text-primary tracking-[-0.02em]">Ready to work together?</h2>
        <p class="mt-4 text-lg text-text-secondary">Whether you need a product built or a dedicated team, let's talk.</p>
        <NuxtLink to="/contact" class="mt-8 inline-flex px-6 py-3 bg-primary text-white font-medium rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
