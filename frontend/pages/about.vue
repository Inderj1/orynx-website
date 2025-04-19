<script setup>
import Container from '~/components/landing/Container.vue';
import Sectionhead from "../components/landing/Sectionhead.vue";

definePageMeta({
  layout: "landing",
  title: "About Us - Orynx",
  meta: [
    { hid: 'description', name: 'description', content: 'Learn more about Orynx, our mission, and values.' },
    { hid: 'og:title', property: 'og:title', content: 'About Us - Orynx' },
    { hid: 'og:description', property: 'og:description', content: 'Learn more about Orynx, our mission, and values.' },
    { hid: 'og:url', property: 'og:url', content: 'https://orynx.co.uk/about' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'About Us - Orynx' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Learn more about Orynx, our mission, and values.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Orynx',
        url: 'https://orynx.co.uk',
        logo: 'assets/img/ORY.png',
        sameAs: [
          'https://www.facebook.com/orynx',
          'https://www.twitter.com/orynx',
          'https://www.linkedin.com/company/orynx'
        ]
      }
    }
  ]
});
</script>

<template>
  <div class="pt-16 pb-24 bg-gradient-to-b from-white to-background-light min-h-screen">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 max-w-6xl">
      <Sectionhead>
        <template #title>ORYNX: Transforming Healthcare Through AI Innovation</template>
      </Sectionhead>
      
      <!-- Hero Banner -->
      <div class="relative rounded-xl overflow-hidden mb-16 mt-8">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 z-10"></div>
        <img src="/health-heart.jpg" alt="Healthcare Innovation" class="w-full h-64 md:h-80 object-cover">
        <div class="absolute inset-0 z-20 flex items-center justify-center">
          <div class="text-center text-white px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">Revolutionizing Healthcare Education</h2>
            <p class="text-lg md:text-xl max-w-3xl mx-auto">
              Empowering healthcare professionals with AI-driven experiential learning
            </p>
          </div>
        </div>
      </div>

      <!-- About Us Section with Icons -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-font mb-8">Who We Are</h2>
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p class="text-text text-lg leading-relaxed">
                At Orynx, we're a team of healthcare professionals, AI specialists, and medical educators committed to revolutionizing patient care through cutting-edge AI solutions. We bridge the gap between advanced technology and practical medical application.
              </p>
              <div class="mt-6 flex items-center">
                <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p class="font-semibold text-font">Founded by experts with decades of combined experience</p>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-font">Healthcare Expertise</h3>
                  <p class="text-text">Deep understanding of clinical environments and healthcare challenges</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-font">AI Innovation</h3>
                  <p class="text-text">Cutting-edge artificial intelligence tailored for healthcare applications</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-font">Educational Focus</h3>
                  <p class="text-text">Commitment to improving healthcare education and training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Our Mission Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-font mb-8">Our Mission</h2>
        <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
          <div class="md:flex">
            <div class="md:w-2/5 bg-primary-dark flex items-center justify-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div class="md:w-3/5 p-8">
              <p class="text-text text-lg leading-relaxed mb-6">
                Our mission at Orynx is to provide healthcare professionals with immersive, AI-powered learning experiences that elevate patient care standards, streamline operations, and achieve superior outcomes.
              </p>
              <p class="text-text text-lg leading-relaxed">
                We empower healthcare providers to practice and perfect their approaches to diagnosis, treatment, and patient communication in risk-free environments, leading to improved real-world performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- What We Do Section -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-font mb-8">What We Do</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <!-- Card 1 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <div class="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-font mb-2">AI-Powered Simulations</h3>
              <p class="text-text">
                We create realistic clinical simulations that react dynamically to healthcare provider interventions, allowing practice in a risk-free environment.
              </p>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <div class="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-font mb-2">Performance Analytics</h3>
              <p class="text-text">
                We provide immediate, objective feedback on clinical decisions and communication approaches with actionable recommendations.
              </p>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <div class="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-font mb-2">Team Collaboration</h3>
              <p class="text-text">
                We facilitate multi-user simulations where healthcare teams practice coordinated care scenarios together to improve communication.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- The Orynx Advantage -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-font mb-8">Why Choose Orynx</h2>
        <div class="bg-gradient-to-r from-primary-dark to-primary rounded-xl p-8 text-white">
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-2xl font-semibold mb-4">Our Approach</h3>
              <p class="text-lg leading-relaxed mb-6">
                What sets Orynx apart is our commitment to combining technological innovation with practical clinical utility. Every solution is designed with direct input from healthcare professionals.
              </p>
              <p class="text-lg leading-relaxed">
                We recognize that technology alone cannot transform healthcare – it must be thoughtfully integrated into clinical practice to achieve meaningful improvements in care quality.
              </p>
            </div>
            <div class="space-y-4">
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-lg">Designed by healthcare professionals for healthcare professionals</p>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-lg">Seamless integration with existing healthcare systems</p>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-lg">Continuous improvement based on user feedback</p>
              </div>
              <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-lg">Comprehensive support and implementation services</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-font mb-6">Ready to Transform Healthcare?</h2>
        <p class="text-lg text-text mb-8">
          Join us in our mission to elevate healthcare through AI-enhanced experiential learning.
        </p>
        <nuxt-link to="/contact" class="inline-block px-8 py-4 bg-primary-dark text-white font-medium rounded-lg hover:bg-primary transition-colors duration-300 text-lg">
          Get in Touch
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
