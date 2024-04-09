
require('dotenv').config()


const getPostRoutes = async () => {
  // Replace this with your own data
  const item  =[
    {
        id: 1,

        image:'waecImg' ,
        price:'4000.00',
        card:'Waec',
        header:'Scratch card ',
        condition:`result checker`,
        itIsAvalable:true,
        status:'Yes'
    },

    {
        id: 2,
        image: 'neco',
        price:'1200.00',
        card:'Neco',
        header:'Scratch card ',
        condition:'result checker',
        itIsAvalable:true,
        status:'Yes'
    },

    {
        id: 3,
        image: 'nabteb',
        price:'1000.00',
        card:'Nabteb',
        header:'Scratch card ',
        condition:'result checker',
        itIsAvalable:true,
        status:'Yes'
    },


      {
        id: 4,
        image: 'gcewaec',
        price:'19,000.00',
        card:'GCEWaec',
        header:'Pin card ',
        condition:'For registration',
        itIsAvalable:false,
        status:'No'
    },

    {
        id: 5,
        image: 'neco',
        price:'12,500.00',
        card:'GCENeco',
        header:'Pin card ',
        condition:'For registration',
        itIsAvalable:false,
        status:'No'
    },


    {
        id: 6,
        image: 'nabtebgce',
        price:'16,500.00',
        card:'GCENabteb',
        header:'pin ',
        condition:'For registration',
        itIsAvalable:false,
        status:'No'
    },

    {
        id:7,
        image: 'vwaec',
        price:'15000',
        card:'Waec',
        header:'Result Verification ',
        condition:'Correction of date of birth in NYSE',
        itIsAvalable:false,
        status:'No'
    },






]

  return item.map((items) => `/${items.id}/${items.card}/${items.condition}`)}
export default defineNuxtConfig({
  
  // css: ['~/assets/main.css'],
  routeRules: {
    '/blog/**': { isr: 3000 },
  },
  
  ssr: true,
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const slugs = await getPostRoutes()
      nitroConfig.prerender.routes.push(...slugs)
    },
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
