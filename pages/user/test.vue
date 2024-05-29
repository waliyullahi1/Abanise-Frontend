<template>
    <div class="bg-gray-100 text-[poppins]">
      <div>
        <Dashboardbtn :datapage="true" class="w-full"></Dashboardbtn>
        <SucessTemplate :status="status" :statusreport="statusreport" :transacicon='transacicon'
          :transacmessage="transacmessage" :messagetransaction="messagetransaction" @next="next" class="w-full hidden">
        </SucessTemplate>
        <div class="w-full h-[5.5rem] bg-secondary"></div>
        <div class="flex mt-10 gap-10">
          <div class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"></div>
  
          <div class="w-full 0 py- mb-20 px-5">
            <h1 class="text-[19px] text-gray-600 font-medium">
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
            <div
              class="w-full md: md:max-w-md sm:w-2/3 mt-10 lg:max-w-md h-fit  shadows rounded-[1rem] ld text-2xl shadow bg-white">
              <form @submit.prevent="prevTrans" action="" class="flex flex-col gap-5 h-fit p-8 text-xl font-semild">
                <div>
                  <div class="flex bg-white flex-col">
                    <label  class="text-primary mb- ml-4 text-[15px]">Network</label>
                    <select  v-model="selectedNetwork"   class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border py-[.3rem]">
                     <option v-for="(item, index) in networkName" :key="index" >
                        {{ item.text }}
                      </option>
                    </select>
                   
                  </div>
                </div>
  
                <div class="flex bg-white flex-col">
                  <label for="" class="text-primary ml-4 text-[15px]">Recipients</label>
  
                  <div class="drop-shadow-md mt-">
                    <input type="number" v-model="form.phone" :class="
                      errorphone ? ' border-secondary' : ' border-gray-300 '
                    " @input="onInput"
                      class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border py-[.2rem]"
                      placeholder="Recipients" />
                    <p :class="errorphone ? 'flex' : 'hidden '" class="e pl-5 text-red-700 text-[13px]">
                      please enter correct phone
                    </p>
                  </div>
                  <div class="flex mt-2 ml-3 gap-2 text-gray-700 font-medium items-center">
                    <input id="" type="checkbox" name="Ported_number" />
                    <label id="" for="Ported_number" class="leading-5 text-[14px]">
                      Bypass number validator
                    </label>
                  </div>
                </div>
                <Button class="mt- text-[13px]" :loading="loadingState1" @click="prevTrans()"
                  loadingText="please wait...">Previews</Button>
              </form>
  
              <Copywrite></Copywrite>
            </div>
          </div>
        </div>
  
        <div class="hidden -">
          <div :class="transacPrev ? 'w-full' : 'w-0'"
            class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20 h-screen z-10"></div>
          <div :class="transacPrev ? 'bottom-0' : ' bottom-[100rem]'"
            class="duration-700 ease-in-out z-10  w-full h-screen flex pt-32 gap-10 fixed">
            <div class="h-fit lg:w-1/4 md:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem]"></div>
            <div>
              <div class="text-[16px] bg-white mx-4 py-5 px-0">
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
                    <span class="col-span-">234{{ form.phone }}</span>
                  </p>
                  <p class="grid grid-cols-6 justify-between  py-1 border-b-2 px-4">
                    <span class="col-span-4">Amount</span>
                    <span class="col-span-">₦{{ form.amount }}</span>
                  </p>
                </div>
  
  
  
  
                <div class="mx-3">
                  <p class="text-secondary cursor-pointer  mt-5" @click="cancelTrans()">
                    Cancel
                  </p>
                  <label for="" class="">Transaction code</label><br />
                  <input @input="onInput" v-model="form.TransactionCode" type="password" name=""
                    class="w-full h-10 outline-none mb-3 px-3 rounded-[.5rem] border" id="" />
  
                  <p :class="errortransactionCode ? 'flex' : 'hidden '" class="e pl-5 text-red-700 text-[13px]">
                    transaction Code is required
                  </p>
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
  <script setup >
    import { useHead } from '@vueuse/head'
    import { ref, watch } from 'vue'
    import axios from 'axios'
  let selectedNetwork = ref('')
    
    const form  ={
      network:'',
      serviceID1:'',
      phone:'',
      amount:'',
      TransactionCode:'',
    }
      
      const networkName = [
              { value: "network", text: "Network" },
              { value: "MTN SME DATA ", text: "MTN SME DATA " },
              { value: "MTN CORPORATE DATA", text: "MTN CORPORATE DATA" },
              { value: "AIRTEL CORPORATE DATA", text: "AIRTEL CORPORATE DATA" },
              { value: "GLO CORPORATE DATA", text: "GLO CORPORATE DATA" },
              { value: "9MOBILE SME DATA", text: "9MOBILE SME DATA" },
            ]
        
       
  
   
  watch(selectedNetwork, async(newValue) => {
    console.log(newValue)
    const response = await axios.get(`http://localhost:3500/dataprices/${newValue}`);
      const apps = response.data;
      console.log(apps);
  })
  
  const network = () => {
    console.log(selectedNetwork.value)
  }
  
  
    
  </script>