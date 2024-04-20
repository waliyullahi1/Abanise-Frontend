<template>
  <div>

    <NewsHeader></NewsHeader>
    <TableLatestNews class="  text-[poppins] "></TableLatestNews>
    <section class=" lg:w-[88%] w-[96%] mt-8 mx-auto">
      <h2 class="text-[20px] font-medium">{{ props.header }} </h2>
      <p class=" md:w-[60%] w-full text-[15px] ">{{ props.paragraph }}</p>
      <div class=" flex gap-4 w-full">
        <div class="  md:w-[60%] gap-2">


          <div class="  w-full   border-y-4  h-fit border-y-primary px-5 py-3 mt-2 shadow-lg bg-white ">
            <div class=" grid-cols-1 gap-6 w-full">

              <div v-for="item in paginatedData" :key="item.title"
                class="sm:block gap-3  p-2 border-b-2 py-8 justify-start   items-center">


                <div class=" h-full   group justify-center items-center gap-2">
                  <NuxtLink target="_blank" :to="`Admission/${item._id}`">
                    <h2 class="hover:text-primary text-xl mb-4 font-normal ">{{ item.title }}</h2>
                  </NuxtLink>
                  <div class=" sm:gap-6 gap-3">
                    <div class="px-5 float-left">
                      <NuxtLink target="_blank" :to="`${props.routes}/${item._id}`"
                        class=" grou bg-black min-h-60 gap-2 m overflow-hidden  flex justify-center items-center h ">
                        <div class="  h-40  w-full"></div>
                        <img v-bind:src="item.image" class=" border-2  hover:opacity-30 duration-500  w-72 " alt="">
                        <img src="@/assets/abanisee1.png" alt=""
                          class=" opacity-0  duration-500  group-hover:opacity-100 opacity- absolute w-10  ">
                        <div class=" relative w-full h-full bg-black"></div>
                      </NuxtLink>
                    </div>

                    <div class="  p">
                      <p v-html="truncateText(extractFirstElements(item.content)) " class=" text-[15px]  fn  divClass"> </p>

                      <NuxtLink target="_blank" :to="`${props.routes}/${item._id}`">
                        <button
                          class=" mt-2 py-1 px-2 text-[14px] duration-500 text-white hover:bg-gray-500 bg-primary">Read
                          More »</button>
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
                    :to="{ path: `${props.routes}`, query: { page: number } }">
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
const props = defineProps({
  admissionNewsData: Array,
  newstype: String,
  header: String,
  paragraph: String,
  routes: String
})
// Access the data from the store
console.log(store.$state.data)
const allNews = ref([]);
const perPage = ref(6);
const news = ref([
  {},{},{},{},{},{},{},
]);


const route = useRoute()
const page = parseInt(route.query.page) || 1
const limit = perPage.value
const skip = (page - 1) * limit

const fetchData = async () => {
  await store.fetchData()
  news.value = props.admissionNewsData 
  console.log(news,'hhhhh');
  currentPage.value = page
}

fetchData()

const currentPage = computed(() => {
  const route = useRoute();
  return parseInt(route.query.page) || 1;
});

const  extractFirstElements=(htmlContent, limit)=> {
        let tempDiv = document.createElement("div");
        tempDiv.innerHTML = htmlContent;
        let allElements = Array.from(tempDiv.children);
        let firstElements = allElements.slice(0, limit);
        return firstElements.map(el => el.outerHTML).join('');
    }

const truncateText = (text) =>  {
        let words = text.split(' ');
        if (words.length > 30) {
            words = words.slice(0, 30);
            return words.join(' ') + '...';
        }}

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
<!-- <script setup>

import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';



const props = defineProps({
  admissionNewsData: Array,
  newstype: String,
  header: String,
  paragraph: String,
  routes: String
})
// Access the data from the store

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
  news.value = props.admissionNewsData
  console.log(props.admissionNewsData);
  console.log(news.value, 'hhhhhh');

  console.log(news);
  currentPage.value = page
}

fetchData()

const currentPage = computed(() => {
  const route = useRoute();
  return parseInt(route.query.page) || 1;
});
const truncateText = (text) =>  {
        let words = text.split(' ');
        if (words.length > 30) {
            words = words.slice(0, 30);
            return words.join(' ') + '...';
        }}
       
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