
require('dotenv').config()



export default defineNuxtConfig({
  
  // css: ['~/assets/main.css'],
  routeRules: {
    '/blog/**': { isr: 3000 },
  },
  
  ssr: true,
  hooks: {
  
  },
  
  runtimeConfig: {
    private: {
      PAYSTACK_SECRETY_CODE:process.env.PAYSTACK_SECRETY_CODE,
      REFRESH_TOKEN_SECRETY:process.env.REFRESH_TOKEN_SECRETY,
    },
    public: {
      PAYSTACK_SECRETY_CODE:process.env.PAYSTACK_SECRETY_CODE,
      REFRESH_TOKEN_SECRETY:process.env.REFRESH_TOKEN_SECRETY,
      API_NEWS:'http://localhost:3500/news'
    },
  },
  devtools: { enabled: true },
  
  modules: [
    ['@nuxtjs/google-adsense', {
      id: 'ca-pub-8150576152002690'
    }],
    '@nuxtjs/tailwindcss', 
    '@sidebase/nuxt-pdf',
    'vue3-carousel-nuxt', 
    'nuxt3-notifications', 
    '@pinia/nuxt'
  
  ],
  // googleAdsense: {
  //   id: 'ca-pub-8150576152002690'
  // }
})
