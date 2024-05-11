<template>

    <div>
        <Dashboardbtn class=" text-[poppins] w-full hiddn "></Dashboardbtn>
        <div class="w-full h-[5.5rem] bg-secondary"></div>
        <div class="flex mt-10 gap-10 ">
            <div class=" h-full w-full lg:block md:block md:w-1/5  ml-[2rem] "></div>
            <div class=" w-full h-screen border">
                <div class=" w-[80%] ">
               <div class=" w-full py-3 flex justify-between  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Choose a Country </p>
                 <input type="search" name="" placeholder="search Country..." class=" px-2 outline-none rounded-sm text-black" id="">
                </div>
                    <div id="countries" class=" https://www.pinterest.com/pin/882424120728212578/ px-3 grid-cols-4 gap-4 w grid max-h-[250px] overflow-y-scroll">
                       <div  v-for="item in countryNames" class="flex gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/countryimage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.countryName" />
                            <h3 class=" w-full text-[16px] font-medium text-center">{{ item.countryName }}</h3>
                       </div>
                   
                    </div>

                </div>
                <div class=" w-[80%] mt-5">
               <div class=" w-full py-3 flex justify-between  bg-primary rounded-b-md text-white px-3 mb-5">
                 <p class="text-[16px] font-medium">Choose an App </p>
                 <input type="search" name="" placeholder="search Country..." class=" px-2 outline-none rounded-sm text-black" id="">
                </div>
                    <div id="countries" class=" https://www.pinterest.com/pin/882424120728212578/ px-3 grid-cols-4 gap-4 w grid max-h-[250px] overflow-y-scroll">
                       <div  v-for="item in appAvailable" class="flex gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/appsImage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.appName" />
                            <h3 class=" w-full text-[16px] font-medium text-center">{{ item.appName }}</h3>
                       </div>
                   
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



<script setup lang="ts">
import { ref, onMounted } from 'vue'
import countryNames from '../../data/countryData.json';
import appAvailable from '../../data/appAvalable.json';

const selectedDog = ref('');


























</script>



<style>
 

.shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
-moz-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
}
</style>