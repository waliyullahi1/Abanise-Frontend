<template>

    <div>
        <Dashboardbtn class=" text-[poppins] w-full hiddn "></Dashboardbtn>
        <div class="w-full h-[5.5rem] bg-secondary"></div>
        <div class="flex mt-10 gap-10 ">
            <div class=" h-full w-full lg:block md:block md:w-1/5  ml-[2rem] "></div>
            <div class=" w-full h-screen ">

              <section class=" w-[90%] mb-20 mt-">
               <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Recent Working Countries </p>
                </div>
                <div  class=" relative">
                 
                  <div>
                    <div v-if="!appfound[0]" class=" absolute flex items-center justify-center  w-full "> <p class=" text-2xl text-center "></p></div>
                     <div id="apps" class=" py-5  px-3 grid-cols-3 gap-4 w grid max-h-[250px] overflow-y-scroll">
                       </div>
                  </div>
                   

                </div>
                  

                </section>


                <section class=" w-[90%] ">
               <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Choose a Country </p>
                 <input type="search5" name="" v-model="searchCoutry" placeholder="search Country..." class=" px-2 outline-none h-8 rounded-sm text-black" id="">
                </div>
                <div class="relative">
                 
                  <div id="countries" class="  z-20 px-3 grid-cols-4 gap-4 overflow-hidden w grid max-h-[250px] overflow-y-scroll">
                     
                       <div  v-for="item in filteredcountry" @click="shows(item)"  :class="{ 'bg-black hover:bg-black  text-white': item.countryName === selected }"  class="flex  text-primary gap-3 hover:border-[#799a3b] hover:bg-[#f3fff6] hover:text-[#799a3b] cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/countryimage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.countryName" />
                            <h3 class=" w-full text-[14px] font-medium text-center">{{ item.countryName }}</h3>
                       </div>
                   
                    </div>
                </div>
                    

                </section>


                <section class=" w-[90%] mb-5 mt-5">
               <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Choose an App </p>
                 <input  type="search" v-model="searchTerm" name="" placeholder="search Country..." class=" px-2 outline-none h-8 rounded-sm text-black" id="">
                </div>
                <div  class=" relative">
                  <div :class="isLoadingFinished?'hidden' :'flex'" class=" flex justify-center items-center absolute bg-opacity-20 h-full  w-full bg-primary" >
                    <img class="w-16 " src="@/assets/image/preload.svg" alt="" srcset="">
                  </div>

                  <div>
                    <div v-if="!appfound[0]" class="  flex items-center justify-center   w-full "> <p class=" text-2xl text-center ">Choose a Country first.</p></div>
                     <div id="apps" class=" py-5  px-3 grid-cols-3 gap-4 w grid max-h-[250px] overflow-y-scroll">
                       <div  v-for="item in filteredApps" @click="generateNnumber(item)" class="flex gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/appsImage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.appName" />
                            <h3 class=" w-full text-[14px] font-medium line-clamp-1 overflow-visible text-center">{{ item.appName }}</h3>
                            <h3 class=" w-full text-[14px] font-medium  text-end">{{ item.price }}</h3>
                       </div>
                    </div>
                  </div>
                   

                </div>
                  

                </section>

                <section class=" w-[90%] mb-20 mt-5">
               <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[14px] font-medium">Your Numbers ()</p>
              </div>
              <button @click="getnumber()">ggg</button>
              <p class="text-[13px] bg-red-500 py-2 px-2 text-white">All numbers are not eligible to receive sms for all services we request you to change number and wait only 1min to receive code if no code comes change number. We never charge money for numbers it only charge for sms/codes.</p>
                <div  class=" mt-4 relative">
                  <div  class=" flex justify-center items-center absolute bg-opacity-20 min-h-[250px]  w-full bg-primary" >
                    <img class="w-16 " src="@/assets/image/preload.svg" alt="" srcset="">
                  </div>
                 
                   

                </div>
                <div class="w bg-red-900  text-[15px] ul  overflow-scroll h-fit    mb-20   mt-  border-2">
               <table class="font-normal bg-white  w-full text-sm">
                <tr>
                  <th class="cols">Phone Number </th>
                  <th>	Activation Code</th>
                  <th>	Order Time</th>
                  <th>Country</th>
                  <th>App</th>
                  <th>Get Code</th>
                 
                </tr>
                <tr  v-for="item in data" :key="item.id">
                  <td class="cols" >{{ item.Phone_Number }}</td>
                  <td class="cols">{{ item.transactiondate }}</td>
                  <td class="cols">{{ item.transactiondate }}</td>
                  <td class="cols">{{ item.Country }}</td>
                  <td class="cols">{{ item.App }}</td>
                </tr>
              </table>
        </div>

                </section>

            </div>
        </div>
    </div>
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
const isLoadingFinished = ref(true);
const selectedcountry  = ref('');
const data = ref([]);

const shows = async (item) => {
  isLoadingFinished.value =false
  selected.value = item.countryName;
  selectedcountry.value = item.countryName
  let appfounds = appAvailable.filter(app => app.available.includes(item.countryName));



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
  isLoadingFinished.value =true
}
const filteredcountry = computed(() => {

  if (searchCoutry.value) {
 const  countryfilter = countryNames.filter(app => app.countryName.toLowerCase().includes(searchCoutry.value.toLowerCase()))
     return countryfilter
  } else {
    console.log(countryNames);
    return countryNames;
  }

});
const filteredApps = computed(() => {
  
  if (searchTerm.value) {
   appfilter.value = appfound.value.filter(app => app.appName.toLowerCase().includes(searchTerm.value.toLowerCase()))
     return appfilter.value
  } else {
    return appfound.value;
  }

});
const generateNnumber = async (item) => {

  selected.value = item.appName;
 const selectedApp = item.appName
 console.log(selectedApp, selectedcountry.value);



  try {
    const response = await axios.post(`http://localhost:3500/getRates/generateNumber`,{country: selectedcountry.value, app:selectedApp});
    const apps = response.data;

    console.log(apps);
  } catch (error) {
    console.error(error);
  }


}
const getOtp =async () => {

}
const getnumber = async () => {
  console.log('hhhhhh');
  try {
    const response = await axios.get('http://localhost:3500/getRates/number');
    const apps = response.data;
   data.value =  apps.reverse()
   console.log(apps);
  } catch (error) {
    console.error(error);
  }
}
setTimeout(() => {
  getnumber();
}, 30000);

</script>






<style>
 

.shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
-moz-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
}
</style>