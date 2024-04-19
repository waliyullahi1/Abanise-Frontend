<template>
    <section class=" lg:w-[80%] w-[96%] mt-9 mx-auto">
      <h2 class="text-xl font-medium">{{ props.header}} </h2>
      <div class=" flex gap-4 w-full">
        <div class="  md:w-2/3 w-full ">


          <div   class="    border-y-4  border-y-primary  mt-2 shadow-lg bg-white ">
            <div>

              <div v-if="news.length > 0" class="sm:flex sm:px-10 py-5 px-4 border-b-2  justify-start   items-center">
                <div class=" sm:w-2/5 w-full  py-3 flex justify-center items-center h-48 overflow-hidden">
                  <img  v-bind:src="news[0].image"  class="v w-full  " alt="">
                </div>
                <div  class=" sm:w-3/5  w-full  r">
                  <h3 class="  sm:text-[18px] text-[16px] hover:text-primary  font-medium ">{{ news[0].title }} </h3>

                  <h3 class="break-all title text-[13px]  sm:text-[15px] ov">The MaserCard Foundation, Canada in partnership with KNUST he MasterCard Foundation, Canada in partnership with KNUST </h3>
                  <NuxtLink target="_blank" :to="`news/${props.newstype}/${news[0]._id}`">
                    
                    <button class=" mt-2 py-1 px-2 text-[14px] duration-500 text-white hover:bg-gray-500 bg-primary">Read More »</button>
                  </NuxtLink>
                 
                 
                </div>
                
              </div>

              <div class="grid gap-3 bg-gray-100 h-fit sm:px-5 px-2 font-normal  py-3 grid-cols-1 sm:grid-cols-2">
                <div v-for="(item, index) in paginatedData" :key="item.id"  class="flex gap-2 justify-center  items-center">
                  <div class=" flex  justify-center items-center  w-2/5 sm:h-20 h-20 overflow-hidden">
                    <img  v-bind:src="item.image" class=" " alt="">
                  </div>
                  <div class=" w-3/5">
                    <NuxtLink target="_blank" :to="`news/${props.newstype}/${item._id}`">
                    
                    <h3 class=" text-[13px] sm:py-4 cursor-pointer hover:text-green-700   px-2 font-[500]">{{ item.title }}</h3>
                  </NuxtLink>
                     
                  </div>
                 
                </div>
              </div>

            </div>

          </div>
         
        </div>

       

      </div>



    </section>
  </template>
  
  <script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useMyStore } from '~/stores/myStore'
const props = defineProps({
  myProp: Array,
  newstype: String,
  header: String,
})
const store = useMyStore()
const allNews = ref([])
const perPage = ref(4)
const news = ref([])

const fetchData = async () => {
  await store.fetchData()
  news.value = props.myProp
}

onMounted(fetchData)

const currentPage = computed(() => {
  const route = useRoute()
  return 1
})

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return news.value.slice(start, end)
})
</script>
  
  <style>
  
  </style>