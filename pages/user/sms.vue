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
                       <div  v-for="item in countryNames" class="flex gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss" :key="item.countryName">
                        
                             <img  :src="`/countryimage/${item.image.toLowerCase()}.png`"
                            class=" w-7" :alt="item.countryName" />
                            <h3 class=" w-full text-[16px] font-medium text-center">{{ item.countryName }}</h3>
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

// const countryNames = [
//     {
//         countryName: 'USA',
//         image: 'usa'

//     },
//     {
//         countryName: 'US',
//         image: 'us'

//     },
//     {
//         countryName: 'UK',
//         image: 'uka'

//     },
//     {
//         countryName: 'Swaziland',
//         image: 'swaziland'

//     },


//     {
//         countryName: 'Anguilla',
//         image: 'anguilla'

//     },

//     {
//         countryName: 'Barbads',
//         image: 'barbados'

//     },

//     {
//         countryName: 'Belgium',
//         image: 'belgium'

//     },
//     {
//         countryName: 'Bosnia',
//         image: 'bosnia'

//     },
//     {
//         countryName: 'Cayman Islands',
//         image: 'caymanIslands'

//     },

//     {
//         countryName: 'Cayman Islands',
//         image: 'caymanIslands'

//     },
//     {
//         countryName: 'Cyprus',
//         image: 'cyprus'

//     },

//     {
//         countryName: 'Estonia',
//         image: 'estonia'

//     },

//     {
//         countryName: 'France',
//         image: 'france'

//     },
//     {
//         countryName: 'Germany',
//         image: 'germany'

//     },

//     {
//         countryName: 'Grenada',
//         image: 'grenada'

//     },
    
//     {
//         countryName: 'Guatemala',
//         image: 'guatemala'

//     },
//     {
//         countryName: 'Latvia',
//         image: 'latvia'

//     },
//     {
//         countryName: 'Lesotho',
//         image: 'Lesotho'
//     },
//     {
//         countryName: 'Lithuania',
//         image: 'Lithuania'

//     },
//     {
//         countryName: 'Mexico',
//         image: 'Mexico'

//     },
//     {
//         countryName: 'moldova',
//         image: 'moldova'

//     },
//     {
//         countryName: 'Netherlands',
//         image: 'netherlands'

//     },
//     {
//         countryName: 'Nicaragua',
//         image: 'Nicaragua'

//     },
//     {
//         countryName: 'Peru',
//         image: 'Peru'

//     },

//     {
//         countryName: 'Poland',
//         image: 'Poland'

//     },
//     {
//         countryName: 'Romania',
//         image: 'Romania'

//     },
//     {
//         countryName: 'Spain',
//         image: 'spain'

//     },
    
//     {
//         countryName: 'Sudan',
//         image: 'sudan'

//     },
    
//     {
//         countryName: 'Switzerland',
//         image: 'Switzerland'

//     },
//     {
//         countryName: 'Tunisia',
//         image: 'Tunisia'

//     },
//     {
//         countryName: 'UAE',
//         image: 'UAE'

//     },
//     {
//         countryName: 'venezuala',
//         image: 'venezuala'

//     },
//     {
//         countryName: 'Zimbabwe',
//         image: 'Zimbabwe'

//     },
//     {
//         countryName: 'Argentina',
//         image: 'Argentina'

//     },
//     {
//         countryName: 'Afghanistan',
//         image: 'af'

//     },
//     {
//         countryName: 'Cameroon',
//         image: 'Cameroon'

//     },
//     {
//         countryName: 'Burkina Faso',
//         image: 'Burkina_faso'

//     },
//     {
//         countryName: 'Columbia',
//         image: 'Columbia'

//     },
//     {
//         countryName: 'Congo',
//         image: 'Congo'

//     },
//     {
//         countryName: 'Egypt',
//         image: 'Egypt'

//     },
//     {
//         countryName: 'Ethiopia',
//         image: 'Ethiopia'

//     },
//     {
//         countryName: 'Finland',
//         image: 'Finland'

//     },
//     {
//         countryName: 'Gambia',
//         image: 'Gambia'

//     },
//     {
//         countryName: 'Indonesia',
//         image: 'Indonesia'

//     },
//     {
//         countryName: 'Iran',
//         image: 'Iran'

//     },
//     {
//         countryName: 'Iraq',
//         image: 'Iraq'

//     },
//     {
//         countryName: 'Ireland',
//         image: 'Ireland'

//     },
//     {
//         countryName: 'Kenya',
//         image: 'Kenya'

//     },
//     {
//         countryName: 'Malawi',
//         image: 'Malawi'

//     },
//     {
//         countryName: 'Malaysia',
//         image: 'Malawi'

//     },
//     {
//         countryName: 'New Guinea',
//         image: 'NewGuinea'

//     },
//     {
//         countryName: 'Nigeria',
//         image: 'Nigeria'

//     },
//     {
//         countryName: 'Philippines',
//         image: 'Philippines'

//     },
//     {
//         countryName: 'Qatar',
//         image: 'Qatar'

//     },
//     {
//         countryName: 'South Africa',
//         image: 'sagm'

//     },
//     {
//         countryName: 'Thailand',
//         image: 'Thailand'

//     },
//     {
//         countryName: 'Togo',
//         image: 'togo'

//     },
//     {
//         countryName: 'Turkey',
//         image: 'Turkey'

//     },
//     {
//         countryName: 'Uganda',
//         image: 'Uganda'

//     },
//     {
//         countryName: 'Hong Kong',
//         image: 'HongKong'

//     },
//     {
//         countryName: 'Italy',
//         image: 'Italy'

//     },
//     {
//         countryName: 'Jamaica',
//         image: 'Jamaica'

//     },
//     {
//         countryName: 'Morocco',
//         image: 'Morocco'

//     },
//     {
//         countryName: 'Portugal',
//         image: 'Portugal'

//     },
//     {
//         countryName: 'Saudi Arabia',
//         image: 'Saudi'

//     },
//     {
//         countryName: 'Sweden',
//         image: 'Sweden'

//     },
//     {
//         countryName: 'China',
//         image: 'China'

//     },
//     {
//         countryName: 'Senegal',
//         image: 'Senegal'

//     },
//     {
//         countryName: 'Russia',
//         image: 'Russia'

//     },
//     {
//         countryName: 'Algeria',
//         image: 'Algeria'

//     },
//     {
//         countryName: ' Ghana',
//         image: 'Ghana'

//     },
//     {
//         countryName: 'Israel ',
//         image: 'Israel'

//     },
//     {
//         countryName: 'Tanzania ',
//         image: 'tanzania'

//     },
//     {
//         countryName: 'Israel ',
//         image: 'Israel'

//     },
//     {
//         countryName: 'Brazil ',
//         image: 'Brazil'

//     },
//     {
//         countryName: 'Angola ',
//         image: 'Angola'

//     },
//     {
//         countryName: 'ARMENIA ',
//         image: 'ARMENIA'

//     },
//     {
//         countryName: 'Gabon ',
//         image: 'gabon'

//     },
//     {
//         countryName: 'Guyana ',
//         image: 'Guyana'

//     },
//     {
//         countryName: 'India ',
//         image: 'india'

//     },
//     {
//         countryName: 'Ivory Coast ',
//         image: 'lag'

//     },
    
    
   
    
    
    
    
// ];
const selectedDog = ref('');


























</script>



<style>
 

.shadowss {
    -webkit-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
-moz-box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
box-shadow: 1px 3px 7px 3px rgba(0,0,0,0.4);
}
</style>