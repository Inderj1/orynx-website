<template>
  <footer class="bg-surface-secondary border-t border-border">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div class="md:col-span-1">
          <img src="~/assets/img/ORY.png" alt="Orynx" class="h-8 w-auto mb-4" />
          <p class="text-sm text-text-tertiary leading-relaxed">
            Integration platforms, AI products, and custom software engineering.
          </p>
        </div>

        <div>
          <h3 class="label mb-4">Products</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/products#ehr-bridge" class="text-sm text-text-tertiary hover:text-primary transition-colors">EHR Bridge</NuxtLink></li>
            <li><NuxtLink to="/products#compliance-os" class="text-sm text-text-tertiary hover:text-primary transition-colors">ComplianceOS</NuxtLink></li>
            <li><NuxtLink to="/products#call-center-ai" class="text-sm text-text-tertiary hover:text-primary transition-colors">Call Center AI</NuxtLink></li>
            <li><NuxtLink to="/products#commbridge" class="text-sm text-text-tertiary hover:text-primary transition-colors">CommBridge</NuxtLink></li>
            <li><NuxtLink to="/products" class="text-sm text-text-tertiary hover:text-primary transition-colors">View All</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="label mb-4">Services</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/services#web" class="text-sm text-text-tertiary hover:text-primary transition-colors">Web Development</NuxtLink></li>
            <li><NuxtLink to="/services#ai-ml" class="text-sm text-text-tertiary hover:text-primary transition-colors">AI & ML Solutions</NuxtLink></li>
            <li><NuxtLink to="/services#llm" class="text-sm text-text-tertiary hover:text-primary transition-colors">LLM Integration</NuxtLink></li>
            <li><NuxtLink to="/services#custom" class="text-sm text-text-tertiary hover:text-primary transition-colors">Custom Development</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="label mb-4">Company</h3>
          <ul class="space-y-2.5">
            <li><NuxtLink to="/about" class="text-sm text-text-tertiary hover:text-primary transition-colors">About</NuxtLink></li>
            <li><NuxtLink to="/partners" class="text-sm text-text-tertiary hover:text-primary transition-colors">Partners</NuxtLink></li>
            <li><NuxtLink to="/news" class="text-sm text-text-tertiary hover:text-primary transition-colors">News</NuxtLink></li>
            <li><NuxtLink to="/contact" class="text-sm text-text-tertiary hover:text-primary transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
        <p class="text-xs text-text-muted">&copy; {{ new Date().getFullYear() }} Orynx. All rights reserved.</p>
        <div class="flex items-center gap-6">
          <a href="mailto:admin@orynx.ai" class="text-xs text-text-muted hover:text-primary transition-colors">admin@orynx.ai</a>
          <span class="text-border">|</span>
          <a href="tel:+447985309592" class="text-xs text-text-muted hover:text-primary transition-colors">07985 309592</a>
          <span class="text-border">|</span>
          <span class="text-xs text-text-muted">Edinburgh, Scotland</span>
        </div>
      </div>
    </div>
  </footer>
</template>
