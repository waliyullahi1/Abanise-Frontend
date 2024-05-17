<template>

  <div>
    <Dashboardbtn class=" text-[poppins] w-full hiddn "></Dashboardbtn>
    <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div class="flex mt-10 gap-10 ">
      <div class=" h-full w-full lg:block md:block md:w-1/5 hidden   ml-[2rem] "></div>
      <div class=" w-full my-10  ">
        <div class=" w-[90%] mx-auto flex flex-col justify-center ">
          <section class="  mb-20 mt-">
            <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
              <p class="text-[16px] font-medium">Recent Working Countries </p>
            </div>
            <div class=" relative">

              <div>
                <div v-if="!appfound[0]" class=" absolute flex items-center justify-center  w-full ">
                  <p class=" text-2xl text-center "></p>
                </div>
                <div id="apps" class=" py-5  px-3 grid-cols-3 gap-4 w grid max-h-[250px] overflow-y-scroll">

                </div>
              </div>


            </div>


          </section>


          <section class="  ">
            <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
              <p class="text-[16px] font-medium">Choose a Country </p>
              <input type="search5" name="" v-model="searchCoutry" placeholder="search Country..."
                class=" px-2 outline-none h-8 rounded-sm text-black" id="">
            </div>
            <div class="relative">

              <div id="countries"
                class="  z-20 px-3 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-4 overflow-hidden w grid max-h-[250px] overflow-y-scroll">

                <div v-for="item in filteredcountry" @click="shows(item)"
                  :class="{ 'bg-black hover:bg-black  text-white': item.countryName === selected }"
                  class="flex  text-primary gap-3 hover:border-[#799a3b] hover:bg-[#f3fff6] hover:text-[#799a3b] cursor-pointer text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                  :key="item.countryName">

                  <img :src="`/countryimage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="item.countryName" />
                  <h3 class=" w-full text-[14px] font-medium text-center">{{ item.countryName }}</h3>
                </div>

              </div>
            </div>


          </section>


          <section class=" ">
            <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
              <p class="text-[16px] font-medium">Choose an App </p>
              <input type="search" v-model="searchTerm" name="" placeholder="search Country..."
                class=" px-2 outline-none h-8 rounded-sm text-black" id="">
            </div>
            <div class=" relative">
              <div :class="isLoadingFinished ? 'hidden' : 'flex'"
                class=" flex justify-center items-center absolute bg-opacity-20 h-full  w-full bg-primary">
                <img class="w-16 " src="@/assets/image/preload.svg" alt="" srcset="">
              </div>

              <div>
                <div v-if="!appfound[0]" class="  flex items-center justify-center   w-full ">
                  <p class=" text-2xl text-center ">Choose a Country first.</p>
                </div>
                <div id="apps"
                  class=" cursor-pointer py-5  px-3  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 w grid max-h-[250px] overflow-y-scroll">
                  <div v-for="item in filteredApps" @click="generateNnumber(item)"
                    :class="{ 'bg-black hover:bg-black  text-white': item.appName === selectedapp }"
                    class="flex cursor-pointers gap-3 text-center items-center w-full border border-black py-1 px-2 rounded shadowss"
                    :key="item.countryName">

                    <img :src="`/appsImage/${item.image.toLowerCase()}.png`" class=" w-7" :alt="item.appName" />
                    <h3 class=" w-full text-[14px] font-medium  overflow-visible text-center">{{
                  item.appName
                }}</h3>

                    <p class="  text-[10px] flex gap-1 font-medium  px-3 py-[2px] border-green-700 rounded-xl w-fit hfit border  text-end"><div class=""> <p>{{ item.price }}</p> Credits</div></p>
                  </div>
                </div>
              </div>


            </div>


          </section>

          <section class=" mb-20 mt-5">
            <div class=" w-full py-3 flex justify-between items-center  bg-primary rounded-b-md text-white px-3 mb-5">
              <p class="text-[14px] font-medium">Your Numbers ()</p>
            </div>

            <p class="text-[13px] bg-red-500 py-2 px-2 text-white">All numbers are not eligible to receive sms for all
              services we request you to change number and wait only 1min to receive code if no code comes change
              number.
              We never charge money for numbers it only charge for sms/codes.</p>

            <div class="w bg-red-900  text-[15px] ul  overflow-scroll h-fit    mb-20   mt-  border-2">
              <div class=" mt-4 relative w-full h-full">
                <div class=" flex justify-center hidden items-center absolute bg-opacity-20 h-96 w-full bg-primary">
                  <img class="w-16 " src="@/assets/image/preload.svg" alt="" srcset="">
                </div>
              </div>
              <table class="font-normal bg-white  w-full text-sm">
                <tr>
                  <th class=" text-center">Phone Number </th>
                  <th class=" text-center"> Activation Code</th>
                  <th class=" text-center"> Order Time</th>
                  <th class=" text-center">Country</th>
                  <th class=" text-center">App</th>
                  <th class=" text-center">Get Code</th>

                </tr>
                <tr v-for="item in datas" :key="item.id">
                  <td class="">{{ item.Phone_Number }}</td>
                  <td class="">{{ item.Activation_Code }}</td>
                  <td class="">{{ item.transactiondate }}</td>
                  <td class="">{{ item.Country }}</td>
                  <td class="">{{ item.App }}</td>
                  <td class="  flex justify-center ">
                    <button @click="getOtp(item)">
                      <div class=" w-5 text-primary  hover:text-green-700">

                        <svg viewBox="0 0 16 16" xmlns:dc="http://purl.org/dc/elements/1.1/"
                          xmlns:cc="http://creativecommons.org/ns#"
                          xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg"
                          version="1.1" id="svg6190">

                          <metadata id="metadata6196">

                            <rdf:RDF>

                              <cc:Work>

                                <dc:format>image/svg+xml</dc:format>

                                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" />

                                <dc:title />

                                <dc:date>2016</dc:date>

                                <dc:creator>

                                  <cc:Agent>

                                    <dc:title>Timothée Giet</dc:title>

                                  </cc:Agent>

                                </dc:creator>

                                <cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/" />

                              </cc:Work>

                              <cc:License rdf:about="http://creativecommons.org/licenses/by-sa/4.0/">

                                <cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction" />

                                <cc:permits rdf:resource="http://creativecommons.org/ns#Distribution" />

                                <cc:requires rdf:resource="http://creativecommons.org/ns#Notice" />

                                <cc:requires rdf:resource="http://creativecommons.org/ns#Attribution" />

                                <cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks" />

                                <cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike" />

                              </cc:License>

                            </rdf:RDF>

                          </metadata>

                          <g transform="translate(5.025 -1037.1)" id="layer1">

                            <path
                              style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none;stroke-width:4;stroke-linecap:square;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:3.20000005;stroke-opacity:.55063291"
                              d="m7.924 1040.15-1.414 1.414-1.414 1.414 1.414 1.414 1.117-1.117a5 5 0 0 1-1.117 5.36 5 5 0 0 1-5.357 1.115l-1.505 1.505a7 7 0 0 0 8.276-1.206 7 7 0 0 0 0-9.9zm-1.622-1.206a7 7 0 0 0-8.277 1.206 7 7 0 0 0 0 9.9l1.414-1.415 1.414-1.414-1.414-1.414-1.117 1.117a5 5 0 0 1 1.117-5.36 5 5 0 0 1 5.357-1.115z"
                              id="path1139" />

                          </g>

                        </svg>
                      </div>
                    </button>
                  </td>
                </tr>
              </table>
            </div>

          </section>
        </div>


      </div>
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted } from 'vue'
import countryNames from '../../data/countryData.json';
import appAvailable from '../../data/appAvalable.json';
import axios from 'axios'
const { notify } = useNotification();


const selectedapp = ref('');
const selected = ref('');
const appfound = ref([]);
const searchTerm = ref('');
const searchCoutry = ref('');
const appfilter = ref('');
const isLoadingFinished = ref(true);
const selectedcountry = ref('');
const datas = ref([{}, {}, {}]);






const shows = async (item) => {
  isLoadingFinished.value = false
  selected.value = item.countryName;
  selectedcountry.value = item.countryName
  let appfounds = appAvailable.filter(app => app.available.includes(item.countryName));



  try {
    const response = await axios.get(`https://api-abanise-five.vercel.app/getRates/apps/${item.countryName}`);
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
  isLoadingFinished.value = true
}




const filteredcountry = computed(() => {

  if (searchCoutry.value) {
    const countryfilter = countryNames.filter(app => app.countryName.toLowerCase().includes(searchCoutry.value.toLowerCase()))
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





const getOtp = async (item) => {
  console.log(item, 'rrr');
  try {
    const response = await axios.post(`https://api-abanise-five.vercel.app/getRates/otp`, { country: item.Country, app: item.App, phoneNumber: item.phoneNumberv, transactiondate: item.transactiondate });
    const apps = response.data;

    setTimeout(() => {
      getnumber()
    }, 10);


  } catch (error) {
    console.error(error);
  }
}




const getnumber = async () => {

  try {
    const response = await axios.get('https://api-abanise-five.vercel.app/getRates');
    const apps = response.data;
    data.value = apps.reverse()

  } catch (error) {
    console.error(error);
  }
}
getnumber()





const generateNnumber = async (item) => {
  selectedapp.value = item.appName;

  const selectedApp = item.appName

  try {
    const response = await axios.post(`http://localhost:3500/getRates/generateNumber`, { country: selectedcountry.value, app: selectedApp });
    const apps = response.data;

    setTimeout(() => {
      getnumber()
    }, 10);
    notify({

      title: "Notices",
      text: apps,
    });

  } catch (error) {
    console.error(error);
  }


}




setTimeout(() => {
  getnumber();
}, 30000);

</script>






<style>
table {
  font-family: arial, sans-serif;
  width: 1000px;


}

td,
th {
  border: none;
  text-align: left;
  padding: 2px;


}

.over {
  overflow: hidden;
}

tr:nth-child(even) {
  background-color: white;

}

.shadowss {
  -webkit-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 1px 3px 7px 3px rgba(0, 0, 0, 0.4);
}
</style>