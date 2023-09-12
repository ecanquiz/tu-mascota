// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //ssr: true,
  app: {
    baseURL: '/tumascota/',
    head: {
      link: [
        { rel: 'stylesheet', type:"text/css", href: 'https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' },
      ]
    }
  },
  css: [`assets/styles/main.min.css`],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "nuxt-lodash"
  ]
})
