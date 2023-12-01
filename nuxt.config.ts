
require('dotenv').config()
export default defineNuxtConfig({
  nitro: {
    static: true,
  },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
    // prerender this route and all child routes
    '/prerender-multiple/**': { prerender: true },
  },
 
  runtimeConfig: {
    public: {
      PAYSTACK_SECRETY_CODE:' pk_test_6e7188c6a08247d1027aef4d5bd5eb2312c801fd',
      REFRESH_TOKEN_SECRETY:'3e353f4f0006b6020a42a3e1e0f942803eb7c8ba6152d7a75274c65991b72563ec17aceb452d04cfdbe495683ca334906512fe9a101657262519c9df4dd382f8',
      AUTHURL: 'http://127.0.0.1:8000',
    },
  },
  devtools: { enabled: true },
  plugins: [],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
})
