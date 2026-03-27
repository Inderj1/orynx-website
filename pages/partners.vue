<script setup>
definePageMeta({ layout: "landing" });

useHead({
  title: "Partners | Orynx",
  meta: [{ name: "description", content: "Our technology partners: Microsoft, NVIDIA, Google, and AWS." }],
});

const partners = [
  {
    name: "Microsoft",
    program: "Founders Hub Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
    desc: "Azure cloud funding up to $150K alongside comprehensive AI resources, enterprise infrastructure, and dedicated engineering support with staged benefits that scale with growth.",
    benefits: ["Up to $150K in Azure cloud credits", "Comprehensive AI resources and tools", "Dedicated engineering support", "Staged benefits that scale with growth"],
  },
  {
    name: "NVIDIA",
    program: "Inception Program",
    logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
    desc: "As a certified NVIDIA Inception member, we harness NVIDIA-powered solutions to accelerate development with cutting-edge tools and frameworks for seamless platform integration.",
    benefits: ["Accelerated medical image processing with NVIDIA GPUs", "Advanced neural networks for disease prediction", "Optimised AI model training with healthcare frameworks", "Access to NVIDIA developer resources"],
  },
  {
    name: "Google",
    program: "Startups Accelerator",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    desc: "Funded by Google with cloud credits and advanced technology resources, enabling us to leverage the full power of Google Cloud Platform for enterprise-grade infrastructure.",
    benefits: ["Healthcare analytics with Google Cloud Healthcare API", "Enhanced diagnostics with Google AI models", "Scalable cloud infrastructure", "Enterprise-grade development tools"],
  },
  {
    name: "AWS",
    program: "AI & Cloud Innovation Partner",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    desc: "AWS's comprehensive suite of services enables us to build secure and scalable healthcare solutions with robust, compliant infrastructure.",
    benefits: ["HIPAA-compliant data storage with AWS S3", "Real-time analytics with AWS HealthLake", "Secure telehealth deployment", "Enterprise-grade cloud infrastructure"],
  },
];
</script>

<template>
  <div>
    <section class="pt-32 pb-20 bg-surface-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <span class="label text-primary mb-4 block">Partners</span>
          <h1 class="text-4xl sm:text-5xl font-bold text-text-primary tracking-[-0.02em] leading-[1.15]">
            Backed by leading technology companies
          </h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            We collaborate with a network of partners who share our vision for transforming healthcare through technology.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="partner in partners" :key="partner.name" class="card p-8">
            <div class="h-12 mb-6 flex items-center">
              <img :src="partner.logo" :alt="partner.name" class="h-10 w-auto object-contain" />
            </div>
            <span class="label mb-2 block">{{ partner.program }}</span>
            <p class="text-text-secondary leading-relaxed mb-6">{{ partner.desc }}</p>
            <ul class="space-y-2">
              <li v-for="benefit in partner.benefits" :key="benefit" class="flex items-start gap-2.5">
                <svg class="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span class="text-sm text-text-secondary">{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
