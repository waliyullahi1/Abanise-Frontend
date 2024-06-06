<template>
  <div class="bg-[#f4f6f6] text-[poppins] h-fit ">
    <div>
      <Dashboardbtn :transactionreport="true"  class="w-full hiden "></Dashboardbtn>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class=" h-fit  w-full">
           <div
          class="h-fit lg:w-1/3 bg-green-600 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
        ></div>
        <div class="mt- md:ml-60 ml-2 pr-2">
          <h1 class="flex text-2xl font-semibold">Transaction History</h1>
         <div class=" bg-green-100 w-full py-2 mt-5 h-fit px-4">
          <h1 class="text-[poppins] text-green-900 mb-6 font-medium text-[15px] ">Notification</h1>
          <p class="text-[14px] mb-4 text-green-900 font-normal  ">Welcome to our  website, We are 100%, Also we are selling  (WAEC, NABTEB, <br class="md:block hidden">and NECO Result Checker) with other epin for o'level Registration </p>
        </div>
      
       <div>
        
         <div class="w bg-red-900  text-[15px] ul  overflow-scroll h-fit    mb-20   mt-  border-2">
               <table class="font-normal bg-white  w-full text-sm">
                <tr>
                  <th class="cols">Reference </th>
                  <th>Date/Time</th>
                  <th>Type</th>
                  <th>Desc</th>
                  <th>Recipient</th>
                  <th>Value</th>
                  <th>Amount</th>
                  <th  class="whitespace-nowrap">New Wallet Bal</th>
                  <th class="whitespace-nowrap">Old Wallet Bal</th>
                  <th>Status</th>
                </tr>
                <tr  v-for="item in data" :key="item.id">
                  <td class="cols py-10" >{{ item.refid }}</td>
                  <td class="cols">{{ item.transactionDate }}</td>
                  <td class="cols">{{ item.type }}</td>
                  <td class="cols">{{ item.description }}</td>
                  <td class="cols">{{ item.recipient }}</td>
                  <td class="cols">{{ item.value }}</td>
                  <td class="cols">₦{{ item.amount }}</td>
                  <td class="cols">₦{{ item.newwallet }}</td>
                  <td class="cols">₦{{ item.oldwallet }}</td>
                  <td class="cols text-center my-2 " style="color:white; "><p :class="{ success: item.status === 'success' || item.status === 'success', failed: item.status === 'failed', pending: item.status === 'pending'}" >{{ item.status }}</p></td>
                             </tr>
              </table>
        </div>
       </div>

       </div>

      </div>
    </div>

     <NavigationLoadingJs :isJsFinishedRun="isJsFinishedRun" > </NavigationLoadingJs>
  </div>
</template>

<!-- <script>
export default {
  setup() {
   
   const router = useRouter() 
   const checktransaction = async () => {
  try {

    const response = await axios({
      url: "http://localhost:3500/checktransaction",
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

  } catch (error) {

  }
}


//    watch(this.data, async (newValue) => {
// console.log(newValue);



// })

 
   return { };
 },
  data() {
    return {
      data:[],
      isJsFinishedRun:false,
      transaction: [
        
        {
          id: 4,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },


        {
          id: 3,
          date: "23-03-2023",
          type: "Glo Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Glo Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
      ],
    };
  },
  methods: {

  },

created: async function(){
  
    const response = await fetch('http://localhost:3500/transaction',{
      method : "GET",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      
    })
  
  if (!response.ok) {
    const errorData = await response.json();
   
    console.log(errorData);
   this.erromessage = errorData.message;
    throw new Error(errorData.message);
    
  }
  
  const firstsdata = await response.json();
  const data =  firstsdata.reverse()

   this.data = data
this.isJsFinishedRun=true
 

      try {        console.log('run');
        const response = await axios({
          url: "http://localhost:3500/checktransaction",
          method: "GET",
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        });
  
      } catch (error) {

      }
   
   
    


},

};



</script> -->



<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

import { useHead } from '@vueuse/head'
import { useOnline } from '@vueuse/core'
const { notify } = useNotification();

import { useRouter } from 'vue-router'

const router = useRouter()


const data =  ref()
 const isJsFinishedRun=ref(false)
 const checkdata = ref()

const fetch = async()=>{
  try {

const response = await axios({
  url: "http://localhost:3500/transaction",
  method: "GET",
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});


data.value = response.data.reverse()
console.log(data.value);
isJsFinishedRun.value=true
 
console.log(data.value);
} catch (error) {

}
}

fetch()

const checktransaction = async () => {
  try {

    const response = await axios({
      url: "http://localhost:3500/checktransaction",
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

  } catch (error) {

  }
}

 checktransaction() 



useHead({
     // Can be static or computed
     title: 'Login in - abanise.com | Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Data, Airtime to cash,',
    meta: [
       {        name: `description`,
       content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',      },
       // {
       //   itemprop: `name,
       //   content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
       // },
       {
         name: 'site_name',
         content: 'abaniseedu.com',
       },
       {
         name: 'type',
         content: 'website ',
       },
       {
        name: 'site_name',
        content: 'abaniseedu.com',
       },
       {
        name: 'type',
         content: 'website ',
      },

       {
         name: 'url',
         content: 'abaniseedu.com',
       },

      ],

  })

</script>
<style >
table {
  font-family: arial, sans-serif;
  width: 1000px  ;
 

}

td,
th {
  border: none;
  text-align: left;
  padding: 10px;
 

}
.cols{
    color: #5e5e5e;
    border-right: white solid 2px;

}
.over{
    overflow: hidden;
}

tr:nth-child(even) {
  background-color: #f7f7f7;
  
}

.td{
   border: rgb(196, 41, 41) solid 20px;
   color: aquamarine !important;
}

.success {
  background-color: green;
}



.failed {
  background-color: red;
}


.pending{
  background-color: #717171;
}
.success::first-letter, .failed::first-letter, .pending::first-letter{
  text-transform: capitalize;
}
.scroll-hide ul::-webkit-scrollbar { 
  width: 0 !important;
  display: none; 
}

.ul{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.ul::-webkit-scrollbar {
    display: none;
}

 .blur{
    
   

    filter: blur(8px);
  -webkit-filter: blur(8px);
    }
</style>