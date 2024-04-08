<template>
    <div class=" w-[30%] md:block hidden">
        <div class="">
          <div class=" m   mt-5 shadow-lg bg-white ">
            <h3>Latest Posts</h3>
            <div v-for="item in paginatedData" :key="item.id" class="  ">
              
                <NuxtLink target="_blank" :to="`news/${item._id}`">
                    <h3 class=" px-4  py-3 border-t-2 text-[13px]  hover:text-primary ">{{ item.title }} </h3>
                
                  </NuxtLink>
            </div>
          </div>
        </div>  
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();

const currentPage = ref(1);
const perPage = ref(9);

const news = ref([]);

// Fetch data when component is created
onMounted(async () => {
  const page = parseInt(useRoute().query.page) || 1;
  const limit = perPage.value;
 
  const skip = (page - 1) * limit;
    console.log(authStore.news);
  const response = await fetch('http://localhost:3500/news');
  const allNews = await response.json();
  news.value = allNews;
  currentPage.value = page;
});

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return news.value.slice(start, end);
});


const totalPages = computed(() => {
  return Math.ceil(news.value.length / perPage.value);
});

const props = defineProps({
  news: Array,
  
 
});
</script>

<style>

.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Adjust this value as needed */
}

.router-link-active {
  background-color: #164b3b;
  color: white;
}
</style>>
  
  <style>
  
  </style>