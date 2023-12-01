
require('dotenv').config()
export default defineNuxtConfig({
  routeRules: {
    '/blog/**': { isr: 3000 },
  },
  nitro: {
    static: true,
  },
  
  runtimeConfig: {
    public: {
      PAYSTACK_SECRETY_CODE:process.env.PAYSTACK_SECRETY_CODE,
      REFRESH_TOKEN_SECRETY:process.env.REFRESH_TOKEN_SECRETY,
      AUTHURL: 'http://127.0.0.1:8000',
    },
  },
  devtools: { enabled: true },
  plugins: [],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
