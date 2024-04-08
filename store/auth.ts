// store/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    news: [],
  }),
  actions: {
    async login() {
        const response = await fetch('http://localhost:3500/news');
        const allNews = await response.json();
      console.log(allNews);
      
     
    },
  },
});
