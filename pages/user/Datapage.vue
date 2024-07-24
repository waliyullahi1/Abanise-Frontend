<template>
  <div class="bg-gray-100 text-[poppins]">
    <div>
      <Dashboardbtn :datapage="true" class="w-full"></Dashboardbtn>
      <SucessTemplate :status="statuss" :statusreport="statusreport" :transacicon='transacicon'
        :transacmessage="transacmessage" :messagetransaction="messagetransaction" @next="next" class="w-full">
      </SucessTemplate>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex mt-10 gap-10">
        <div class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"></div>

        <div class="w-full 0 py- mb-20 px-5">
          <h1  class="text-[19px] text-gray-600 font-medium">
            Data Bundle Vend
          </h1>
          <div class="bg-green-100 w-fit py-2 mt-5 h-fit px-4">
            <h1 class="text-[poppins] text-green-900 mb-6 font-medium text-[15px]">
              Notification
            </h1>
            <p class="text-[14px] mb-4 text-green-900 font-normal">
              Welcome to our website, We are 100%, Also we are selling (WAEC,
              NABTEB, <br class="md:block hidden" />and NECO Result Checker)
              with other epin for o'level Registration
            </p>
          </div>
          <div class="w-full md: md:max-w-md sm:w-2/3 mt-10 lg:max-w-md h-fit   rounded-[.2rem] ld text-2xl  bg-white">
            <form @submit.prevent="prevTrans" action="" class=" gap-2 h-fit p-8 text-xl font-semild">


              <label class="text-primary pt-4 font-medium mb- text-[15px]">Network</label>

              <select v-model="selectedNetwork" placeholder="Select network"
                class="w-full focus:border-primary  h-[2.5rem] mb-4  text-[16px] px-2  outline-none    border rounded-[3px] focus:border-primry">
                <option v-for="(item, index) in networkName" :key="index">
                  {{ item.text }}
                </option>
              </select>


              <label class="text-primary pt-4 font-medium mb- text-[15px]">Data Plan</label>
              <select v-model="dataPlane" placeholder="Select data"
                class="w-full focus:border-primary  h-[2.5rem]  text-[16px] px-2 mb-4 outline-none    border rounded-[3px] focus:border-primry">
                <option v-for="(item, index) in dataPlanes" :key="index" class="py-6" @click="network(item)">
                  <button @click="network()" type="button" class=" "> {{ item.custom_name }}</button>
                </option>
              </select>








              <label for="" class="text-primary t-4 font-medium  text-[15px]">Recipients</label>

              <input type="text" v-model="form.phone"
                class="w-full focus:border-primary  h-[2.5rem]  text-[16px] px-2  outline-none    border rounded-[3px] focus:border-primry"
                placeholder="Recipients" />


              <div class="flex mt-2 ml-3 gap-2 text-gray-700 font-medium items-center">
                <input id="" type="checkbox" name="Ported_number" />
                <label id="" for="Ported_number" class="leading-5 text-[14px]">
                  Bypass number validator
                </label>
              </div>

              <Button class="mt- text-[13px]" :loading="loadingState1" @click="prevTrans()"
                loadingText="please wait...">Previews</Button>
            </form>

            <Copywrite></Copywrite>
          </div>
        </div>
      </div>

      <div class=" -">
        <div :class="transacPrev ? 'w-full' : 'w-0'"
          class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20 h-screen z-10"></div>
        <div :class="transacPrev ? 'bottom-0' : ' bottom-[100rem]'"
          class="duration-700 ease-in-out z-10  w-full h-screen flex pt-32 gap-10 fixed">
          <div class="h-fit lg:w-1/4 md:w-1/5 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem]"></div>
          <div class=" flex justify-center items-center w-full">
            <div class="text-[16px]  min-w-[100%] sm:min-w-[60%] bg-white mx-4 py-5 px-0">
              <p class="text-xl text-center">Transaction Previews</p>
              <p class="message pl-5 text-2xl text-red-700 text-center text-">

              </p>
              <div class="mt-10 w-full mb-3">
                <p class="grid grid-cols-6 justify-between py-1 border-b-2 border-t-2 px-4">
                  <span class="col-span-4">Network</span>
                  <span class="col-span-2">{{ form.network }}</span>
                </p>
                <p class="grid grid-cols-6 justify-between py-1 border-b-2 px-4">
                  <span class="col-span-4">serviceID</span>
                  <span class="col-span-2"> {{ form.serviceID1 }} Data</span>
                </p>
                <p class="grid grid-cols-6 justify-between  py-1 border-b-2 px-4">
                  <span class="col-span-4">Recipients</span>
                  <span class="col-span-">{{ form.phone }}</span>
                </p>
                <p class="grid grid-cols-6 justify-between  py-1 border-b-2 px-4">
                  <span class="col-span-4">Amount</span>
                  <span class="col-span-">{{ form.amount }}</span>
                </p>
              </div>




              <div class="mx-3">
                <p class="text-secondary cursor-pointer  mt-5" @click="cancelTrans()">
                  Cancel
                </p>
                <label for="" class="">Transaction code</label><br />
                <input @input="onInput" v-model="form.TransactionCode" type="password" name=""
                  class="w-full h-10 outline-none mb-3 px-3 rounded-[.5rem] border" id="" />
                <Button class="mt-" :loading="loadingState2" @click="submitted()" loadingText="please wait ">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHead } from '@vueuse/head'
import { ref, watch } from 'vue'
import axios from 'axios'
import Login from '../Login.vue';
const { notify } = useNotification();
const transacicon = ref('')
const statuss = ref('')
import { useRouter } from 'vue-router'
import { differenceInCalendarQuarters } from 'date-fns';

const router = useRouter()

const messagetransaction = ref('')
const statusreport = ref(false)
const transacmessage = ref(true)
const loadingState2 = ref(false)
const loadingState1 = ref(false)
const transacPrev = ref(false)
let selectedNetwork = ref('')
let dataPlanes = ref([{ custom_name: "Select data Type", id: '' },])
const dataPlane = ref()
const findPlane = ref()
const form = {
  plan: '',
  network: '',
  serviceID1: '',
  phone: '',
  amount: '',
  TransactionCode: '',
}

const networkName = [
  { value: "network", text: "Network" },
  { value: "MTN SME DATA ", text: "MTN SME DATA " },
  { value: "MTN SME DATA ", text: " MTN DATA TRANSFER" },
  { value: "MTN CORPORATE DATA", text: "MTN CORPORATE DATA" },
  { value: "AIRTEL CORPORATE DATA", text: "AIRTEL CORPORATE DATA" },
  { value: "GLO CORPORATE DATA", text: "GLO CORPORATE DATA" },
  { value: "9MOBILE SME DATA", text: "9MOBILE SME DATA" },
  { value: "MTN NORMAL DATA", text: "MTN NORMAL DATA" },
  { value: "AIRTEL CORPORATE DATA", text: "AIRTEL CORPORATE DATA" },
  { value: "AIRTEL SPECIAL OFFERS", text: "AIRTEL SPECIAL OFFERS" },
]


const auth = async()=>{
  try {
        const response = await fetch('https://api.abaniseedu.com/refreshtoken', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',

        })

        if (!response.ok) {
         
          router.push('/Login')
          throw new Error(errorData.message);

        }


      } catch (error) {

        router.push('/login') // Redirect to the login page
      }
}

auth()




const notifcation = (tittles, texts) => {

  notify({
    title: tittles,
    text: texts,
  });
  setTimeout(() => {
    loadingState1.value = false
    loadingState2.value = false
  }, 150);


}


const cancelTrans = () => {
  transacPrev.value = false
  loadingState1.value = false
  loadingState2.value = false


}

const next = () => {

  transacmessage.value = true
  setTimeout(() => {

    router.push('/user/Dashboard')
    loadingState2.value = false;

  }, 200);

  
}

const prevTrans = () => {
  loadingState1.value = true

  const regex = /[a-zA-Z]/;
  if (!selectedNetwork.value || selectedNetwork.value === "network") {
    notifcation('notices', 'Select a Network ')
    return false;
  } else if (!form.serviceID1 || form.serviceID1 === "Select data Type ") {
    notifcation('notices', 'Select a Data Plan')

    return false;
  } else if (!form.phone || form.phone.length < 10 || form.phone.length > 11 || regex.test(form.phone)) {
    notifcation('notices', 'Incorrect  Phone number')
    return false;
  }
  else {

    setTimeout(() => {
      transacPrev.value = true;
      loadingState1.value = false;
    }, 1000);
  }

}


const submitted = async () => {

  loadingState2.value = true
  if (!form.TransactionCode) {
    notifcation('notices', 'enter  transaction code')
    return false;
  }
  else {



    try {

      const response = await axios({
        url: "https://api.abaniseedu.com/dataprices",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: {
          plan: findPlane.value.id,
          phone: form.phone,
          TransactionCode: form.TransactionCode,
          networkName: selectedNetwork.value
        }
      });

      const apps = response.data;
     
      if(apps.success === 'success')  {
        transacmessage.value = false

        messagetransaction.value = `You have successfully shared ${selectedNetwork.value} data  for this number ${form.phone} `
        transacicon.value = true
        statuss.value = 'success'
        message.value = 'success'
        statusreport.value = true
        loadingState2.value = false;
      } else {
        transacmessage.value = false
        transacPrev.value = false

        transacicon.value = false
        statusreport.value = false
        statuss.value = 'Failed'
        loadingState2.value = false;
        messagetransaction.value = 'Dear customer we are sorry, your tansaction is not successful try it again.'
      }



    } catch (error) {

      if (error.response) {
        notifcation('notices', error.response.data.message)

      } else if (error.request) {

        notifcation('notices', error.message)
        // The request was made but no response was received

      } else {

        notifcation('notices', error.message)
      }
      transacPrev.value = true;


    }


  }
}







watch(selectedNetwork, async (newValue) => {

  if (selectedNetwork.value !== 'Select data Type') {
    dataPlane.value = []
    dataPlanes.value = []
    const response = await axios.get(`https://api.abaniseedu.com/dataprices/${newValue}`);
    const apps = response.data;

    let data = apps[0].plans
    dataPlanes.value = data


  }


})


watch(dataPlane, async (newValue) => {

  findPlane.value = dataPlanes.value.find(app => app.custom_name === newValue)

  // const gb = findPlane.value.custom_name.split(' ')

  form.serviceID1 = findPlane.value.name
  form.amount = findPlane.value.reseller_amount
  form.network = selectedNetwork.value
})

const network = () => {

}



</script>