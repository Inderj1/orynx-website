<script setup>
import Container from '~/components/landing/Container.vue';
import Sectionhead from "../components/landing/Sectionhead.vue";

definePageMeta({
  layout: "landing",
  title: "Our Services - Orynx",
  meta: [
    { hid: 'description', name: 'description', content: 'Explore the range of AI and healthcare technology services offered by Orynx.' },
    { hid: 'og:title', property: 'og:title', content: 'Our Services - Orynx' },
    { hid: 'og:description', property: 'og:description', content: 'Explore the range of AI and healthcare technology services offered by Orynx.' },
    { hid: 'og:url', property: 'og:url', content: 'https://orynx.co.uk/services' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Our Services - Orynx' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Explore the range of AI and healthcare technology services offered by Orynx.' },
  ]
});
</script>

<template>
  <div class="pt-16 pb-24 bg-gradient-to-b from-white to-background-light min-h-screen">
    <!-- Hero Section -->
    <div class="container mx-auto px-4 max-w-6xl">
      <Sectionhead>
        <template #title>Our Services</template>
      </Sectionhead>
      
      <!-- Hero Banner -->
      <div class="relative rounded-xl overflow-hidden mb-16 mt-8">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-dark/80 z-10"></div>
        <img src="@/assets/img/hero.jpg" alt="Healthcare Services" class="w-full h-64 md:h-80 object-cover">
        <div class="absolute inset-0 z-20 flex items-center justify-center">
          <div class="text-center text-white px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-4">AI-Powered Healthcare Solutions</h2>
            <p class="text-lg md:text-xl max-w-3xl mx-auto">
              Empowering healthcare professionals through experiential learning and data-driven insights
            </p>
          </div>
        </div>
      </div>
      
      <!-- Introduction -->
      <div class="mb-16">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-font">Transforming Healthcare Education</h2>
        </div>
        
        <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all">
          <p class="text-text text-lg leading-relaxed">
            At Orynx, we leverage cutting-edge artificial intelligence to revolutionize healthcare education and training. Our services empower healthcare professionals to deliver superior patient care through immersive learning experiences.
          </p>
        </div>
      </div>

      <!-- AI-Powered Clinical Simulation Platform -->
      <div class="mb-16">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-font">Clinical Simulation Platform</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-font mb-3">Immersive Learning Environments</h3>
              <p class="text-text">
                Ultra-realistic patient simulations powered by advanced AI models that react intelligently to clinical decisions, allowing practitioners to practice in a risk-free setting with immediate feedback.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-font mb-3">Specialty-Specific Training</h3>
              <p class="text-text">
                Specialized simulation modules tailored to various medical specialties, developed in collaboration with specialists to ensure clinical accuracy and educational relevance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Personalized Learning & Assessment -->
      <div class="mb-16">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-font">Personalized Learning</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-font mb-3">Adaptive Learning Pathways</h3>
              <p class="text-text">
                Individualized learning journeys based on performance analytics, self-identified goals, and identified knowledge gaps, maximizing educational impact by focusing on areas for improvement.
              </p>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
            <div class="h-3 bg-primary-dark group-hover:bg-primary transition-colors duration-300"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-font mb-3">Performance Analytics</h3>
              <p class="text-text">
                Detailed metrics on clinical reasoning, diagnostic accuracy, treatment selection, and communication effectiveness, enabling precise identification of strengths and areas for development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Institutional Implementation -->
      <div class="mb-16">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-font">Institutional Implementation</h2>
        </div>
        
        <div class="bg-gradient-to-r from-primary-dark/10 to-primary/10 rounded-xl p-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-font mb-3">EHR Integration</h3>
              <p class="text-text">
                Seamless integration with existing electronic health record systems, enabling use of anonymized data and simulation of specific clinical workflows.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-font mb-3">Organizational Assessment</h3>
              <p class="text-text">
                Identification of systemic improvement opportunities and development of customized implementation strategies for your institution.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
              <div class="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-font mb-3">Change Management</h3>
              <p class="text-text">
                Expert guidance on introducing AI-powered learning tools into established clinical environments and overcoming adoption barriers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Model Development -->
      <div class="mb-16">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-font">AI Model Development</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <h3 class="text-xl font-semibold text-font mb-3">Custom Healthcare AI</h3>
            <p class="text-text">
              Development of custom AI models addressing specific clinical challenges, decision support tools, and predictive analytics systems.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <h3 class="text-xl font-semibold text-font mb-3">Model Training</h3>
            <p class="text-text">
              Specialized services in healthcare data preparation, model training using institution-specific clinical data, and continuous improvement.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <h3 class="text-xl font-semibold text-font mb-3">Ethical AI Implementation</h3>
            <p class="text-text">
              Responsible AI development through bias detection, transparent explanation of AI decisions, and privacy-preserving approaches.
            </p>
          </div>
        </div>
      </div>

      <!-- Support & Partnership -->
      <div class="mb-16">
        <div class="flex items-center mb-8">
          <div class="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 class="text-3xl font-bold text-font">Support & Partnership</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <h3 class="text-xl font-semibold text-font mb-3">Technical Support</h3>
            <p class="text-text">
              24/7 platform support, regular maintenance and updates, and user access management assistance.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <h3 class="text-xl font-semibold text-font mb-3">Educational Consultation</h3>
            <p class="text-text">
              Curriculum integration guidance, faculty development, and best practices for maximizing educational impact.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
            <h3 class="text-xl font-semibold text-font mb-3">Continuous Improvement</h3>
            <p class="text-text">
              Regular review of usage patterns, quarterly performance assessments, and ongoing development of new features.
            </p>
          </div>
        </div>
      </div>

      <!-- Getting Started -->
      <div class="mb-16">
        <div class="bg-gradient-to-r from-primary-dark to-primary rounded-xl overflow-hidden">
          <div class="md:flex">
            <div class="md:w-1/3 bg-primary-dark flex items-center justify-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div class="md:w-2/3 p-8 text-white">
              <h2 class="text-3xl font-bold mb-6">Getting Started with Orynx</h2>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span class="text-primary-dark font-bold">1</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-xl">Discovery & Assessment</h3>
                    <p>We begin with a comprehensive assessment of your current training approaches and specific organizational needs.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span class="text-primary-dark font-bold">2</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-xl">Implementation Planning</h3>
                    <p>We develop a customized implementation plan including platform configuration and integration with existing systems.</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span class="text-primary-dark font-bold">3</span>
                  </div>
                  <div>
                    <h3 class="font-semibold text-xl">Pilot Program & Full Deployment</h3>
                    <p>We start with a structured pilot program followed by a phased rollout with comprehensive user training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-font mb-6">Ready to Transform Healthcare Education?</h2>
        <p class="text-lg text-text mb-8">
          Contact our team today to explore how Orynx's AI-powered healthcare solutions can transform learning, 
          improve patient outcomes, and optimize operations at your organization.
        </p>
        <nuxt-link to="/contact" class="inline-block px-8 py-4 bg-primary-dark text-white font-medium rounded-lg hover:bg-primary transition-colors duration-300 text-lg">
          Get in Touch
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
