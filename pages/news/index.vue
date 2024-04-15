<template>
  <div class="text-[poppins]">

    <NewsHeader></NewsHeader>

    <section class=" lg:w-[88%] w-[96%] mt-8 mx-auto">
      <h2 class="text-[20px] font-medium">Latest News </h2>
      <div class=" flex gap-4 w-full">
        <div class="  md:w-[70%] gap-2">
         

          <div class="  w-full   border-y-4  border-y-primary  mt-2 shadow-lg bg-white ">
            <div class=" grid sm:grid-cols-3 grid-cols-1 gap-3 w-full">
             
              <div v-for="item in paginatedData" :key="item.title"
                class="sm:block gap-3  p-2 border-b-2  justify-start   items-center">

                
                <div class="  justify-center items-center gap-2">
                  <NuxtLink target="_blank" :to="`news/${item._id}`" class=" grou bg-black gap-2 overflow-hidden  flex justify-center items-center h ">
                    <img v-bind:src="item.image" class=" border-2 hover:opacity-30 duration-700  w-72 " alt="">
                    <img src="@/assets/abanisee1.png" alt="" class=" absolute w-10  ">
                    <div class=" relative w-full h-full bg-black"></div>
                  </NuxtLink>
                  <NuxtLink class="text-[15px]" target="_blank" :to="`news/${item._id}`">
                  <h3 class="   hover:text-primary  font-normal  ">{{ item.title }}</h3>

                </NuxtLink>
              </div>


              </div>




            </div>

          </div>
          <div class=" flex font-[500] justify-between">

            <div>
              <button @click="nextPage()">wwwww</button>
            </div>
            <nuxt-link :to="{ path: '/news', query: { page: currentPage + 1 } }">Next Page</nuxt-link>
            <button @click="nextPage()">next3</button>
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const allNews = ref([]);
const currentPage = ref(1);
const perPage = ref(6);
const news = ref([]);

// Fetch data when component is created
onMounted(async () => {
  const response = await fetch('http://localhost:3500/news');
  const allNews = await response.json();
  const updatedNews = await Promise.all(allNews.map(async (element) => {
    const imageResponse = await fetch(`http://localhost:3500/news/${element.image}`);
    console.log(imageResponse.url);
    element.image = imageResponse.url;
    return element;
  }));
  console.log(updatedNews.image);
  news.value = updatedNews;
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
    currentPage.value++;
    useRouter().push({ path: '/news', query: { page: currentPage.value } });
  }
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    useRouter().push({ path: '/news', query: { page: currentPage.value } });
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