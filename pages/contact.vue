<script setup>
definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "Contact | Orynx",
  description: "Get in touch with Orynx. Based in Edinburgh, Scotland. Let's discuss your project — AI products, integration platforms, or dedicated teams.",
  ogTitle: "Contact Orynx",
  ogDescription: "Get in touch to discuss AI products, integration platforms, or dedicated engineering teams.",
  ogUrl: "https://orynx.co.uk/contact",
  twitterTitle: "Contact Orynx",
  twitterDescription: "Get in touch to discuss your project.",
});
</script>

<template>
  <div>
    <section class="pt-32 pb-20 bg-surface-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <span class="label text-primary mb-4 block">Contact</span>
          <h1 class="text-4xl sm:text-5xl font-bold text-text-primary tracking-[-0.02em]">Let's talk</h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">
            Whether you're exploring our products or need a dedicated development team, we'd love to hear from you.
          </p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid md:grid-cols-5 gap-16">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-bold text-text-primary mb-6">Get in touch</h2>
            <p class="text-text-secondary leading-relaxed mb-8">
              Have a question or want to discuss a project? Fill in the form and we'll get back to you shortly.
            </p>
            <div class="space-y-6">
              <div>
                <h3 class="text-sm font-semibold text-text-primary mb-1">Email</h3>
                <a href="mailto:admin@orynx.ai" class="text-text-secondary hover:text-primary transition-colors">admin@orynx.ai</a>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-text-primary mb-1">Phone</h3>
                <a href="tel:+447985309592" class="text-text-secondary hover:text-primary transition-colors">07985 309592</a>
              </div>
              <div>
                <h3 class="text-sm font-semibold text-text-primary mb-1">Location</h3>
                <p class="text-text-secondary">Edinburgh, Scotland</p>
              </div>
            </div>
          </div>
          <div class="md:col-span-3">
            <LandingContactform />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
