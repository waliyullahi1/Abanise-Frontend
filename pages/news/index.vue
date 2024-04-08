<template>
  <div class="text-[poppins]">

    <NewsHeader></NewsHeader>

    <section class=" lg:w-[88%] w-[96%] mt-8 mx-auto">
      <h2 class="text-[20px] font-medium">Latest News </h2>
      <div class=" flex gap-4 w-full">
        <div class="  md:w-[70%] w ">


          <div class="  w-full   border-y-4  border-y-primary  mt-2 shadow-lg bg-white ">
            <div class=" grid sm:grid-cols-2 grid-cols-1 gap-3 w-full">

              <div v-for="item in paginatedData" :key="item.title"
                class="sm:flex gap-3  p-2 border-b-2  justify-start   items-center">
                <div class=" sm:w-2/5 w-full flex justify-center items-center h-40 overflow-hidden">
                  <img src="@/assets/image/UNIZIK-1.png" class="v w-full  " alt="">
                </div>
                <div class=" sm:w-3/5  w-full  r">
                <NuxtLink target="_blank" :to="`news/${item._id}`">
                    <h3 class="  sm:text-[14px] text-[14px] hover:text-primary  font-medium ">{{ item.title }}</h3>
                  </NuxtLink>
                  
                  <h3 class="break-all title text-[13px]  sm:text-[15px] ov">The MasterCard Foundation, Canada in
                    partnership with KNUST he MasterCard Foundation, Canada in partnership with KNUST </h3>
                  <button class=" mt-2 py-1 px-2 text-[14px] duration-500 text-white hover:bg-gray-500 bg-primary">
                    <NuxtLink target="_blank" :to="`news/${item._id}`"> Read More » </NuxtLink>
                   </button>
                </div>

              </div>




            </div>

          </div>
          <div class=" flex font-[500] justify-between">

            <div>
              <button @click="nextPage()">wwwww</button>
            </div>
            <nuxt-link :to="{ path: '/news', query: { page: currentPage + 1 } }">Next Page</nuxt-link>
           <nuxt-link :to="{ path: '/news', query: { page: currentPage - 1 } }">Previous Page</nuxt-link>
            <div>
              <p class="text-[12px] ">Page 1 of 611</p>
            </div>
          </div>
        </div>

  <TableLatestNews></TableLatestNews>

      </div>



    </section>
    <NewsSections> </NewsSections>

    <NavigationFooter></NavigationFooter>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const currentPage = ref(1);
const perPage = ref(6);
const news = ref([
  {

  },
  {

  },

  {

},
{

},
{

},
{

},
{

},
{

},
]);

// Fetch data when component is created
onMounted(async () => {
  const page = parseInt(useRoute().query.page) || 1;
  const limit = perPage.value;
  const skip = (page - 1) * limit;

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

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    useRouter().push({ path: '/news', query: { page: currentPage.value + 1 } });
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    useRouter().push({ path: '/news', query: { page: currentPage.value - 1 } });
  }
};
</script>


<!-- <script>
import { lightFormat } from 'date-fns';

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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Adjust this value as needed */
}

.router-link-active {
  background-color: #164b3b;
  color: white;
}
</style>