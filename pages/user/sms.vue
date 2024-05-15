<template>

    <div>
        <Dashboardbtn class=" text-[poppins] w-full hiddn "></Dashboardbtn>
        <div class="w-full h-[5.5rem] bg-secondary"></div>
        <div class="flex mt-10 gap-10 ">
            <div class=" h-full w-full lg:block md:block md:w-1/5  ml-[2rem] "></div>
            <div class=" w-full h-screen border">
                <div class=" w-[90%] ">
               <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Choose a Country </p>
                 <input type="search5" name="" v-model="searchCoutry" placeholder="search Country..." class=" px-2 outline-none h-8 rounded-sm text-black" id="">
                </div>
                    <div id="countries" class="  px-3 grid-cols-4 gap-4 w grid max-h-[250px] overflow-y-scroll">
                       <div  v-for="item in filteredcountry" @click="shows(item)"  :class="{ 'bg-black text-white': item.countryName === selected }"  class="flex gap-3 cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/countryimage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.countryName" />
                            <h3 class=" w-full text-[14px] font-medium text-center">{{ item.countryName }}</h3>
                       </div>
                   
                    </div>

                </div>
                <div class=" w-[90%] mb-20 mt-5">
               <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Choose an App </p>
                 <input  type="search" v-model="searchTerm" name="" placeholder="search Country..." class=" px-2 outline-none h-8 rounded-sm text-black" id="">
                </div>
                    <div id="countries" class=" py-5  px-3 grid-cols-3 gap-4 w grid max-h-[250px] overflow-y-scroll">
                       <div  v-for="item in filteredApps" class="flex gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/appsImage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.appName" />
                            <h3 class=" w-full text-[14px] font-medium line-clamp-1 overflow-visible text-center">{{ item.appName }}</h3>
                            <h3 class=" w-full text-[14px] font-medium  text-end">{{ item.price }}</h3>
                       </div>
                        <!-- <div  v-for="item in appfound"  v-if="!searchTerm.value || item.appName.toLowerCase().includes(searchTerm.value.toLowerCase())" class="flex gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/appsImage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.appName" />
                            <h3 class=" w-full text-[14px] font-medium line-clamp-1 overflow-visible text-center">{{ item.appName }}</h3>
                            <h3 class=" w-full text-[14px] font-medium  text-end">{{ item.price }}</h3>
                       </div> -->
                   
                    </div>

                </div>

            </div>
        </div>
    </div>
    <!-- <div>
    <div
      style="
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      "
    >
      <label v-for="doggo in dogNames" :key="doggo" style="margin-right: 2rem">
        <input type="radio" :value="doggo" v-model="selectedDog" />
        {{ doggo }}
      </label>
    </div>
    <img v-for="doggo in dogNames"
      :src="`/doggos/${doggo.toLowerCase()}.png`"
      width="500"
      :alt="selectedDog"
    />
  </div> -->
</template>




<script setup>
import { ref, onMounted } from 'vue'
import countryNames from '../../data/countryData.json';
import appAvailable from '../../data/appAvalable.json';
import axios from 'axios'

const selected = ref('');
const appfound = ref([]);
const searchTerm = ref('');
const searchCoutry = ref('');
const appfilter= ref('');




const shows = async (item) => {
  selected.value = item.countryName;
  let appfounds = appAvailable.filter(app => app.available.includes(item.countryName));

  appfounds.forEach(element => {
    element.price = "";
  });

  try {
    const response = await axios.get(`http://localhost:3500/getRates/${item.countryName}`);
    const apps = response.data;

    appfounds = appfounds.filter(element => {
      const matchingApp = apps.find(app => app.app === element.appName);
      if (matchingApp) {
        console.log(matchingApp.rate);
        element.price = matchingApp.rate;
        return true;
      }
      return false;
    });
  } catch (error) {
    console.error(error);
  }

  appfound.value = appfounds;
  console.log(appfound.value);
}
const filteredcountry = computed(() => {
  //return countryNames;
  if (searchCoutry.value) {
 const  countryfilter = countryNames.filter(app => app.countryName.toLowerCase().includes(searchCoutry.value.toLowerCase()))
 
     return countryfilter
    //return appfound.value.filter(app => app.appName.toLowerCase().includes(searchTerm.value.toLowerCase()));
  } else {
    console.log(countryNames);
    return countryNames;
  }
});
const filteredApps = computed(() => {
  
  if (searchTerm.value) {
   appfilter.value = appfound.value.filter(app => app.appName.toLowerCase().includes(searchTerm.value.toLowerCase()))
  // console.log(appfilter.value);
     return appfilter.value
    //return appfound.value.filter(app => app.appName.toLowerCase().includes(searchTerm.value.toLowerCase()));
  } else {
    return appfound.value;
  }
});

</script>






<style>
 

.shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
-moz-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
}
</style>