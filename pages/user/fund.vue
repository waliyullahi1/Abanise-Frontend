
<template>
  <div>
     <Dashboardbtn :Wallet="true" :fund="true" @logout="logout" class=" text-[poppins] w-full hiddn "></Dashboardbtn>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
        <div class=" h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class=" w-full lg:w-2/5 mx-5  h-fit shadows rounded-[1rem] text-semibold text-2xl shadow bg-white ">


            <p class=" border-b-2 border-gray-300 text-primary py-5 pb-10 px-5 text-[15px]">To fund your wallet, please make a bank transfer of the desired amount to any of these Account details below. Your wallet will automatically be credited as soon as the bank transfer is successful. Please note these are your personal Abaniseedu virtual account details. You are advised to save it as beneficiaries in your banking applications</p>
            <div class="py-5 px-5">
                <p class="font-normal text-3xl pt-10">{{user.account_name }}</p>
                <p class="font-normal text-[19px] ">Wema Bank </p>
                <p class="font-normal text-[15px] ">{{user.account_number}}</p>
            </div>
             <div class="flex gap-1 pl-5">
           <small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com copy 2023</small></div>
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
       const response = await fetch('https://api.abaniseedu.com/refreshtoken',{
     method : "GET",
     headers: {'Content-Type':'application/json'},
     credentials:'include',
     
   })
 
 if (!response.ok) {
   const errorData = await response.json();
   router.push('/login')
  this.erromessage = errorData.message;
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
  data(){

    return{
     
      user:''

    }
  },
 
   methods: {
   async logout(){
      // console.log('kkkkkkk');
  
 
    }


  },

 created: async function(){
  
 
    const response = await fetch('https://api.abaniseedu.com/dashboard',{
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
  // console.log('Success:', data);
   this.user= data.foundUser
  
 this.isJsFinishedRun=true
 
 


},

 watch: {
  email(value) {
    this.submit();
  }
 }

}
</script>

<style>
   .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
</style>