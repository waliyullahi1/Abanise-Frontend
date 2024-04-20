<template>
  <div>

   <NewsTemplate 
  header =" Admission"
  routes="Admission"
  paragraph="Admission: To find out about undergraduate and graduate degree admissions across all tertiary institutions (including colleges of education, universities, polytechnics, and Admission: To find out about undergraduate and graduate degree admissions across all tertiary institutions (including colleges of education, universities, polytechnics, and monotechnics).monotechnics)."
  :admissionNewsData="allNews"
   ></NewsTemplate>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useMyStore } from '~/stores/myStore'

const store = useMyStore()





const allNews = ref([]);



const fetchData = async () => {
  await store.fetchData()
 allNews.value = store.$state.data
  
}

fetchData()








</script>





<!-- <script>
  import { lightFormat } from 'date-fns';
import { NewsTemplate } from '../../../.nuxt/components';
  
  export default {
    data() {
      return {
        currentPage: 1,
        perPage: 6,
        news: [], // This will hold your news data
      };
    },
    // async created() {
    //   const page = parseInt(this.$route.query.page) || 1;
    //   const limit = this.perPage;
    //   const skip = (page - 1) * limit;
  
    //   const response = await fetch('http://localhost:3500/news');
    //   const allNews = await response.json();
    //   this.news = allNews;
    //   this.paginatedNews = allNews.slice(skip, skip + limit);
  
    //   this.currentPage = page;
    //   console.log(allNews);
    //   //   const page = parseInt(this.$route.query.page) || 1;
    //   //   const limit = this.perPage;
    //   //   const skip = (page - 1) * limit;
    //   //   console.log(page, 'skip', skip, 'limit',limit);
    //   // const response = await fetch('http://localhost:3500/news');
    //   // const data = await response.json();
    //   // this.news = data;
    //   // console.log(this.news);
    // },
  
  
    async fetch() {
      const page = parseInt(this.$route.query.page) || 1;
      const limit = this.perPage;
      const skip = (page - 1) * limit;
  
      const response = await fetch('http://localhost:3500/news');
      const allNews = await response.json();
      this.news = allNews;
      this.paginatedNews = allNews.slice(skip, skip + limit);
      console.log(this.news);
      this.currentPage = page;
    },
  
    watchQuery: ['page'], 
    computed: {
      paginatedData() {
        const start = (this.currentPage - 1) * this.perPage;
        const end = start + this.perPage;
        return this.news.slice(start, end);
      },
      totalPages() {
        return Math.ceil(this.news.length / this.perPage);
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.$router.push({ path: '/news', query: { page: this.currentPage + 1 } });
          console.log('hhhhhhh');
        }
      },
      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      shortenTitle(title) {
        const maxLength = 50; // Adjust this value as needed
        if (title.length > maxLength) {
          return title.substring(0, maxLength) + '...';
        } else {
          return title;
        }
      },
    },
  };
  </script> -->

<style>
.title {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}



.router-link-active {
  background-color: #164b3b;
  color: white;

}
</style>