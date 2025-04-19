<template>
  <footer class="py-8 mt-20 border-t border-accent/20">
    <div class="max-w-screen-xl mx-auto px-5">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0">
          <p class="text-sm text-text">
            Copyright © {{ new Date().getFullYear() }} ORYNX. All rights reserved.
          </p>
        </div>
        <div class="flex items-center space-x-6">
          <a href="/products" 
             class="text-font hover:text-header transition-colors duration-300">
            Products
          </a>
          <a href="/services" 
             class="text-font hover:text-header transition-colors duration-300">
            Services
          </a>
          <a href="/contact" 
             class="text-font hover:text-header transition-colors duration-300">
            Contact
          </a>
          <a href="https://github.com/jayhere1" 
             target="_blank" 
             rel="noopener" 
             class="text-font hover:text-header transition-colors duration-300">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
