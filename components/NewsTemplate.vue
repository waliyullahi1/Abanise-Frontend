<template>
    <div>
  
      <NewsHeader></NewsHeader>
      <TableLatestNews class="  text-[poppins] "></TableLatestNews>
      <section class=" lg:w-[88%] w-[96%] mt-8 mx-auto">
        <h2 class="text-[20px] font-medium">JAMB </h2>
        <p class=" md:w-[55%] w-full text-[15px] ">Admission: To find out about undergraduate and graduate degree admissions across all tertiary institutions (including colleges of education, universities, polytechnics, and monotechnics).</p>
        <div class=" flex gap-4 w-full">
          <div class="  md:w-[55%] gap-2">
  
  
            <div class="  w-full   border-y-4  h-fit border-y-primary px-5 py-3 mt-2 shadow-lg bg-white ">
              <div class=" grid-cols-1 gap-6 w-full">
  
                <div v-for="item in paginatedData" :key="item.title"
                  class="sm:block gap-3  p-2 border-b-2  justify-start   items-center">
  
  
                  <div class=" h-full   group justify-center items-center gap-2">
                   <NuxtLink target="_blank" :to="`Admission/${item._id}`"> 
                      <h2 class="hover:text-primary text-xl mb-4 font-normal ">How To Print JAMB Mock Exam Venue And Time
                        From JAMB Website</h2>
                    </NuxtLink>
                    <div class=" grid sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-3">
                      <NuxtLink target="_blank" :to="`Admission/${item._id}`"
                        class=" grou bg-black min-h-60 gap-2 m overflow-hidden  flex justify-center items-center h ">
                        <div class=" h-32  w-full"></div>
                        <img v-bind:src="item.image" class=" border-2  hover:opacity-30 duration-500  w-72 " alt="">
                        <img src="@/assets/abanisee1.png" alt=""
                          class=" opacity-0  duration-500  group-hover:opacity-100 opacity- absolute w-10  ">
                        <div class=" relative w-full h-full bg-black"></div>
                      </NuxtLink>
                      <div>
                        <p class=" ">Lorem ipsum ndus inventore provident rerum eveniet expedita nihil dignissimos maxime
                          ducimus qui, neque ipsa beatae aspernatur amet suscipit ratione recusandae? Voluptates.</p>
  
                        <NuxtLink target="_blank" :to="`news`">
                          <button class=" mt-2 py-1 px-2 text-[14px] duration-500 text-white hover:bg-gray-500 bg-primary">Read  More »</button>
                        </NuxtLink>
                      </div>
  
                    </div>
  
  
                  </div>
  
  
                </div>
  
  
  
  
              </div>
  
            </div>
            <div class=" flex  justify-between">
  
              <div class="flex w-1/2">
  
                <!-- <div class="  flex text-[14px] gap-2">
                    <nuxt-link class="py-1 text-[13px] px-4" :to="{ path: '/news', query: { page: currentPage + 1 } }">Next
                    </nuxt-link>
                    <nuxt-link class="py-1 text-[13px] px-4"
                      :to="{ path: '/news', query: { page: currentPage - 1 } }">Previous </nuxt-link>
               
                  </div> -->
  
                <div class=" flex gap-4 =">
                  <button class="   flex " v-for="number in totalPages" :key="number" @click="goToPage(number)">
                    <nuxt-link class="h-fit text-[18px] font-medium  bg-transparent bg-none"
                      :to="{ path: 'Admission', query: { page: number } }">
                      <p class=" bg-white w-full  text-red-950">{{ number }}</p>
                    </nuxt-link>
  
                  </button>
                </div>
  
              </div>
  
  
  
              <div>
                <p class="text-[14px] font-medium">Page {{ currentPage }} of {{ totalPages }}</p>
  
              </div>
            </div>
          </div>
  
        </div>
  
  
  
      </section>
  
  
     
  
      <NavigationFooter></NavigationFooter>
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