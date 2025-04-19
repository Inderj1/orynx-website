// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    // "nuxt-icon", // Temporarily commented out due to compatibility issues
    "@nuxt/image-edge",
  ],
  plugins: ["~/plugins/firebase.js"],
  runtimeConfig: {
    public: {
      firebaseApiKey: process.env.VUE_APP_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.VUE_APP_FIREBASE_APP_ID,
      firebaseMeasurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID,
    },
    private: {
      cohereApiKey: process.env.COHERE_API_KEY,
    },
  },
  app: {
    head: {
      title: "Orynx",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "favicon.png" },
        { 
          rel: "stylesheet", 
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
        }
      ],
    },
  },
});
