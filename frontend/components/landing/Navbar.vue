<template>
  <nav class="fixed top-0 left-0 w-full backdrop-blur-sm shadow-sm z-50 bg-[#eaeaea]">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <nuxt-link to="/" class="flex items-center">
        <picture>
          <source srcset="@/assets/img/webp/ORY.webp" type="image/webp">
          <source srcset="@/assets/img/ORY.png" type="image/png">
          <img src="@/assets/img/ORY.png" alt="ORYNX Logo" class="h-10 w-auto md:h-12">
        </picture>
      </nuxt-link>
      
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <template v-for="item in menuItems" :key="item.title">
          <!-- Regular menu item -->
          <nuxt-link 
            v-if="!item.hasDropdown"
            :to="item.path"
            :class="[
              'transition-colors duration-300 font-medium',
              item.isHighlighted 
                ? 'bg-header text-white hover:bg-header/90 px-4 py-2 rounded-md shadow-sm' 
                : 'text-font hover:text-header'
            ]">
            {{ item.title }}
          </nuxt-link>
          
          <!-- Dropdown menu item -->
          <div v-else class="relative group">
            <div 
              class="flex items-center cursor-pointer text-font hover:text-header transition-colors duration-300 font-medium"
              @click="item.isOpen = !item.isOpen">
              {{ item.title }}
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div 
              class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50 transform origin-top scale-0 group-hover:scale-100 transition-transform duration-200">
              <nuxt-link 
                v-for="subItem in item.dropdownItems" 
                :key="subItem.title"
                :to="subItem.path"
                class="block px-4 py-2 text-sm text-font hover:bg-gray-100 hover:text-header transition-colors duration-200">
                {{ subItem.title }}
              </nuxt-link>
            </div>
          </div>
        </template>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden p-2 rounded-lg hover:bg-background/10 transition-colors duration-300">
        <svg 
          v-show="!isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-font"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg 
          v-show="isOpen" 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-6 w-6 text-font"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isOpen"
      class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-300">
      <div class="container mx-auto px-4 py-2">
        <template v-for="item in menuItems" :key="item.title">
          <!-- Regular menu item -->
          <nuxt-link 
            v-if="!item.hasDropdown"
            :to="item.path"
            :class="[
              'block py-3 px-4 rounded-lg transition-colors duration-300',
              item.isHighlighted 
                ? 'bg-header text-white hover:bg-header/90 font-medium' 
                : 'text-font hover:text-header hover:bg-background/10'
            ]"
            @click="isOpen = false">
            {{ item.title }}
          </nuxt-link>
          
          <!-- Dropdown menu item -->
          <div v-else class="py-2">
            <div 
              class="flex items-center justify-between py-3 text-font hover:text-header hover:bg-background/10 px-4 rounded-lg transition-colors duration-300 cursor-pointer"
              @click="toggleMobileDropdown(item)">
              {{ item.title }}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-4 w-4 ml-1 transition-transform duration-200"
                :class="{ 'rotate-180': item.isOpen }"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div v-show="item.isOpen" class="pl-4">
              <nuxt-link 
                v-for="subItem in item.dropdownItems" 
                :key="subItem.title"
                :to="subItem.path"
                class="block py-2 text-font hover:text-header hover:bg-background/10 px-4 rounded-lg transition-colors duration-300 ml-2"
                @click="isOpen = false">
                {{ subItem.title }}
              </nuxt-link>
            </div>
          </div>
        </template>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "About", path: "/about", hasDropdown: false },
        { title: "Services", path: "/services", hasDropdown: false },
        { 
          title: "Products", 
          path: "/products", 
          hasDropdown: true, 
          isOpen: false,
          dropdownItems: [
            { title: "Orynx AI", path: "/products?product=orynx-ai" },
            { title: "Orynx Labs", path: "/products?product=orynx-labs" },
            { title: "MediSynth", path: "/products?product=medisynth" },
            { title: "ClinTrialMatch", path: "/products?product=clintrialMatch" }
          ]
        },
        { title: "What's New", path: "/whatsnew", hasDropdown: false },
        { title: "Partners", path: "/partners", hasDropdown: false },
        { title: "Contact Us", path: "/contact", hasDropdown: false, isHighlighted: true },
      ],
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    toggleMobileDropdown(item) {
      item.isOpen = !item.isOpen;
    }
  }
}
</script>
