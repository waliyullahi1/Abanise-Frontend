<template>
  <div class="bg-[#f4f6f6] text-[poppins] h-fit ">
    <div>
      <Dashboardbtn :Wallet="true"  class="w-full hiden "></Dashboardbtn>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class=" h-fit  w-full">
           <div
          class="h-fit lg:w-1/3 bg-green-600 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
        ></div>
        <div class="mt- md:ml-60 ml-2 pr-2">
          <h1 class="flex text-2xl font-semibold">Fund History</h1>
         <div class=" bg-green-100 w-full py-2 mt-5 h-fit px-4">
          <h1 class="text-[poppins] text-green-900 mb-6 font-medium text-[15px] ">Notification</h1>
          <p class="text-[14px] mb-4 text-green-900 font-normal  ">Welcome to our  website, We are 100%, Also we are selling  (WAEC, NABTEB, <br class="md:block hidden">and NECO Result Checker) with other epin for o'level Registration </p>
        </div>
      
       <div>
        
         <div class="w bg-red-900  text-[15px] ul  overflow-scroll h-fit    mb-20   mt-  border-2">
               <table class="font-normal bg-white w-full  text-sm">
                <tr>
                  <th class="cols">Reference </th>
                  <th>Date/Time</th>
                  <th>Amount</th>
                 
                  <th>Status</th>
                </tr>
                <tr  v-for="item in fund" :key="item.id" >
                  <td class="cols" >MFY|{{ item.transactionId }}</td>
                  <td class="cols">{{ item.dateShow }}</td>
                  
                  <td class="cols">₦ {{ item.amount }}</td>
                  <td class="cols text-center my-2 " style="color:white; "><p class=" bg-green-500 py-1">{{ item.status }}</p></td>
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

<script>
export default {
  setup() {
   
   const router = useRouter() 
   onMounted(async () => {
 

     try {
       const response = await fetch('https://api-abanise-five.vercel.app/refreshtoken',{
     method : "GET",
     headers: {'Content-Type':'application/json'},
     credentials:'include',
     
   })
 
 if (!response.ok) {
   const errorData = await response.json();
  this.erromessage = errorData.message;
  router.push('/login')
   throw new Error(errorData.message);
   
 }

     
     } catch (error) {
       console.error('There has been a problem with your fetch operation:', error)
       router.push('/login') // Redirect to the login page
     }
   })

   useHead({
     // Can be static or computed
     title: 'Airtime, MTN, GLO, 9MOBILE, AIRTEL - abanise.com | Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Data, Airtime to cash,',
     meta: [
       {
         name: `description`,
         content: 'Data Bundle - Cheapest Data Bundle Plan in 2023 – MTN | Airtel | Glo | 9Mobile | NairaData Nigeria',
       },
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
   return { };
 },
  data() {
    return {
      fund:[],
        isJsFinishedRun:false,
    };
  },
  methods: {},

created: async function(){
  
 
    const response = await fetch('https://api-abanise-five.vercel.app/fund',{
      method : "GET",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      
    })
  
  if (!response.ok) {
    const errorData = await response.json();
   this.erromessage = errorData.message;
    throw new Error(errorData.message);
    
  }
 
  const data = await response.json();
  
   this.fund = data
  //  this.user.accountName= `${data.foundUser.first_name } ${data.foundUser.last_name } `
  //  this.user.wallet =data.foundUser.walletBalance
  //  this.user.bankName =data.foundUser.preferred_bank
this.isJsFinishedRun=true
 
 


},
};
</script>

<style >
table {
  font-family: arial, sans-serif;
  width: fit-content;
 

}

td,
th {
  border: none;
  text-align: left;
  padding: 10px;
  width: fit-content;
 

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