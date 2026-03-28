<script setup>
definePageMeta({ layout: "landing" });

useSeoMeta({
  title: "News | Orynx",
  description: "Latest news and developments from Orynx. Product launches, partnerships, and company updates.",
  ogTitle: "News | Orynx",
  ogDescription: "Latest news and developments from Orynx.",
  ogUrl: "https://orynx.co.uk/news",
  twitterTitle: "News | Orynx",
  twitterDescription: "Latest news and developments from Orynx.",
});

const newsItems = [
  {
    id: 1,
    date: "May 2024",
    title: "Five remarkable QMU innovators could turn unique business ideas into reality",
    desc: "Orynx is paving the way in new AI-driven technology for universities and hospitals. We are now part of the Kickstart Converge challenge.",
    link: "https://www.qmu.ac.uk/news-and-events/news/2024/20240514-five-remarkable-qmu-innovators-could-turn-unique-business-ideas-into-reality/",
  },
];
</script>

<template>
  <div>
    <section class="pt-32 pb-20 bg-surface-secondary relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl">
          <span class="label text-primary mb-4 block">News</span>
          <h1 class="text-4xl sm:text-5xl font-bold text-text-primary tracking-[-0.02em]">Latest updates</h1>
          <p class="mt-6 text-lg text-text-secondary leading-relaxed">Stay up to date with what we're building and where we're heading.</p>
        </div>
      </div>
    </section>

    <section class="py-24 bg-surface">
      <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <div class="space-y-8">
          <article v-for="news in newsItems" :key="news.id" class="card p-8">
            <p class="text-sm text-text-muted mb-3">{{ news.date }}</p>
            <h2 class="text-xl font-bold text-text-primary mb-3">{{ news.title }}</h2>
            <p class="text-text-secondary leading-relaxed mb-4">{{ news.desc }}</p>
            <a :href="news.link" target="_blank" rel="noopener" class="text-sm font-medium text-primary hover:text-primary-hover inline-flex items-center gap-1 transition-colors">
              Read more
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </article>
        </div>
        <div v-if="newsItems.length === 1" class="mt-16 text-center">
          <p class="text-text-muted">More updates coming soon.</p>
        </div>
      </div>
    </section>
  </div>
</template>
