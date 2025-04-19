<script setup>
import LandingAboutUs from '~/components/landing/AboutUs.vue';

definePageMeta({
  layout: "landing",
  title: "Orynx - Home",
  meta: [
    { hid: 'description', name: 'description', content: 'Welcome to Orynx, your go-to platform for integrating AI technology in healthcare.' },
    { hid: 'og:title', property: 'og:title', content: 'Orynx - Home' },
    { hid: 'og:description', property: 'og:description', content: 'Welcome to Orynx, your go-to platform for integrating AI technology in healthcare.' },
    { hid: 'og:image', property: 'og:image', content: '/assets/img/ORY.png' },
    { hid: 'og:url', property: 'og:url', content: 'https://orynx.co.uk' },
    { hid: 'twitter:title', name: 'twitter:title', content: 'Orynx - Home' },
    { hid: 'twitter:description', name: 'twitter:description', content: 'Welcome to Orynx, your go-to platform for integrating AI technology in healthcare.' },
  ],
  script: [
    {
      type: 'application/ld+json',
      json: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Orynx',
        url: 'https://orynx.co.uk',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://orynx.co.uk/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    }
  ]
});

</script>

<template>
  <LandingContainer>
    <LandingHero />
    <LandingAboutUs />
  </LandingContainer>
</template>
