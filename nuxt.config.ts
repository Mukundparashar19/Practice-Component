export default defineNuxtConfig({
  build: {
    assets: ['db.json'], // Add data.json to assets
  },
  modules: ['@nuxtjs/tailwindcss','@pinia/nuxt','nuxt-primevue'],
  primevue: {
    cssLayerOrder: 'reset,primevue'
  },
  css: ['primevue/resources/themes/aura-light-green/theme.css']
})
