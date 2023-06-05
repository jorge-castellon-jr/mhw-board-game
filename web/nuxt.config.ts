// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    'nuxt-quasar-vite'
  ],
  pinia: {
    // disableVuex: true,
    // enableDevtools: true,
  },
  quasar: {
    css: ['@quasar/extras/material-icons/material-icons.css']
  }
});
