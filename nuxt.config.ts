import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-03-27",

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
    "@nuxt/icon",
  ],

  app: {
    head: {
      title: "Orynx | AI Products & Software Engineering",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Integration platforms, AI products, and custom software engineering. Healthcare, fintech, IoT, compliance, and beyond." },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Orynx" },
        { property: "og:image", content: "https://orynx.co.uk/og-image.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://orynx.co.uk/og-image.png" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Orynx",
            url: "https://orynx.co.uk",
            logo: "https://orynx.co.uk/favicon.png",
            description: "Integration platforms, AI products, and custom software engineering.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Edinburgh",
              addressCountry: "GB",
            },
            email: "admin@orynx.ai",
            telephone: "+447985309592",
            sameAs: [],
          }),
        },
      ],
    },
  },

  site: {
    url: "https://orynx.co.uk",
  },
});
