<template>
  <div>

   <NewsTemplate></NewsTemplate>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useMyStore } from '~/stores/myStore'

const store = useMyStore()

// Access the data from the store
console.log(store.$state.data)
const allNews = ref([]);
const perPage = ref(6);
const news = ref([
  {}, {}, {}, {}, {}, {}, {},
]);


const route = useRoute()
const page = parseInt(route.query.page) || 1
const limit = perPage.value
const skip = (page - 1) * limit

const fetchData = async () => {
  await store.fetchData()
  news.value = store.$state.data
  console.log(news);
  currentPage.value = page
}

fetchData()

const currentPage = computed(() => {
  const route = useRoute();
  return parseInt(route.query.page) || 1;
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return news.value.slice(start, end);
});

const totalPages = computed(() => {
  return Math.ceil(news.value.length / perPage.value);
});

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    const router = useRouter();
    router.push({ path: '/news', query: { page: currentPage.value + 1 } });
  }
};

const goToPage = (pageNumber) => {
  const router = useRouter();
  if (router) {
    router.push({ path: '/news', query: { page: pageNumber } });
  } else {
    console.error('Router is undefined');
  }
};


const previousPage = () => {
  if (currentPage.value > 1) {
    const router = useRouter();
    router.push({ path: '/news', query: { page: currentPage.value - 1 } });
  }
};
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