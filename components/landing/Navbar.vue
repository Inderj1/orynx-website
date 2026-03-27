<script setup>
const isOpen = ref(false);
const productsOpen = ref(false);

const products = [
  { title: "EHR Bridge", path: "/products#ehr-bridge", desc: "Healthcare data integration" },
  { title: "ComplianceOS", path: "/products#compliance-os", desc: "Compliance automation" },
  { title: "Call Center AI", path: "/products#call-center-ai", desc: "AI voice agents" },
  { title: "CommBridge", path: "/products#commbridge", desc: "Unified communications" },
  { title: "AutoPRD", path: "/products#autoprd", desc: "Autonomous dev pipeline" },
  { title: "Ambient Scribe", path: "/products#ai-scribe", desc: "Medical transcription" },
  { title: "View All", path: "/products", desc: "See all products" },
];

const menuItems = [
  { title: "Services", path: "/services" },
  { title: "Products", path: "/products", hasDropdown: true },
  { title: "Partners", path: "/partners" },
  { title: "News", path: "/news" },
];

const closeAll = () => {
  isOpen.value = false;
  productsOpen.value = false;
};
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-2xl shadow-nav">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2" @click="closeAll">
          <img src="~/assets/img/ORY.png" alt="Orynx" class="h-9 w-auto" />
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-1">
          <template v-for="item in menuItems" :key="item.title">
            <div v-if="item.hasDropdown" class="relative group">
              <NuxtLink
                :to="item.path"
                class="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-tertiary rounded-lg transition-colors inline-flex items-center gap-1"
              >
                {{ item.title }}
                <svg class="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </NuxtLink>
              <div class="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="bg-white rounded-2xl shadow-card ring-1 ring-border p-2 w-64">
                  <NuxtLink
                    v-for="product in products"
                    :key="product.title"
                    :to="product.path"
                    class="flex flex-col px-3 py-2.5 rounded-xl hover:bg-surface-secondary transition-colors"
                  >
                    <span class="text-sm font-medium text-text-primary">{{ product.title }}</span>
                    <span class="text-xs text-text-muted">{{ product.desc }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <NuxtLink
              v-else
              :to="item.path"
              class="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-surface-tertiary rounded-lg transition-colors"
            >
              {{ item.title }}
            </NuxtLink>
          </template>
          <NuxtLink
            to="/contact"
            class="ml-2 px-5 py-2 text-sm font-medium text-white bg-primary rounded-pill hover:bg-primary-hover shadow-button transition-all duration-150"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden p-2 rounded-lg hover:bg-surface-tertiary transition-colors">
          <svg v-if="!isOpen" class="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="md:hidden border-t border-border bg-white">
      <div class="px-4 py-3 space-y-1">
        <template v-for="item in menuItems" :key="item.title">
          <div v-if="item.hasDropdown">
            <button
              @click="productsOpen = !productsOpen"
              class="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-text-secondary rounded-lg hover:bg-surface-secondary"
            >
              {{ item.title }}
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': productsOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div v-show="productsOpen" class="pl-4 space-y-1 mt-1">
              <NuxtLink
                v-for="product in products"
                :key="product.title"
                :to="product.path"
                class="block px-3 py-2 text-sm text-text-tertiary rounded-lg hover:bg-surface-secondary"
                @click="closeAll"
              >
                {{ product.title }}
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            v-else
            :to="item.path"
            class="block px-3 py-2.5 text-sm font-medium text-text-secondary rounded-lg hover:bg-surface-secondary"
            @click="closeAll"
          >
            {{ item.title }}
          </NuxtLink>
        </template>
        <NuxtLink
          to="/contact"
          class="block px-3 py-2.5 text-sm font-medium text-white bg-primary rounded-xl text-center mt-2"
          @click="closeAll"
        >
          Contact Us
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>
