<template>
  <div class="bg-gray-100 text-[poppins]">
    <div>
      <Dashboardbtn :Setting="true" class="w-full"></Dashboardbtn>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="md:flex mt-10 block gap-10">
        <div class="h-fit lg:w-1/5 sm:w-0 sm:block hidden lg:block md:block md:w-1/5 md:ml-[3rem] ml-0"></div>
        <div class=" w-full bg-white shadow h-fit mx-2 ">
          <section class=" mx-5 flex gap-4 pt-4 items-center">
            <img src="@/assets/image/account.svg" class="w-[100px] border rounded-full" alt="" />
            <div>
              <h1 class="text-2xl font-medium  text-gray-900 uppercase">{{ user.fullname }}</h1>
              <div>
                <p> <span class=" text-green-700 sm:text-[15px] text-[14px] font-medium tracking-[1px]"> <button
                      @click="updatepassword = true ">Update Password</button>
                  </span> | <button type="button"><span   @click="updatetransaction = true "
                    class=" text-green-700 sm:text-[15px] text-[14px] font-medium tracking-[1px]">Update Transaction
                    pin</span></button> </p>
              </div>
            </div>
          </section>

          <section class=" mt-10 w-full   ">
            <div class="grid grid-cols-3 text-center items-center   justify-between">
              <div class="border-r px-2 border-r-slate-400">
                <h1 class="sm:text-[14px] text-[12px] text-gray-600 font-medium tracking-[1px]"> Wallet Balance</h1>
                <h2 class="sm:text-[23px] text-[14px] text-gray-600  font-light  tracking-[1px]">{{ user.wallet }}</h2>
              </div>

              <div class=" border-r px-2  border-r-slate-400">
                <h1 class="sm:text-[14px] text-[12px] text-gray-600 font-medium tracking-[1px]"> Total Lifetime Funding</h1>
                <h2 class="sm:text-[23px] text-[14px] font-light text-gray-600  tracking-[1px]">{{ totalfund }}</h2>
              </div>

              <div class="  px-2 ">
                <h1 class="sm:text-[14px] text-[12px] text-gray-600 font-medium tracking-[1px]"> Total Lifetime Transactions</h1>
                <h2 class="sm:text-[23px] text-[14px] text-gray-600  font-light  tracking-[1px]">{{ totalspent }}</h2>
              </div>


            </div>
          </section>


          <section class=" mt-10 w-full  ">
            <nav>
              <ul>
                <li class=" flex gap-3 py-6 border-t-2 px-3 ">
                  <img src="@/assets/image/phoneairtime.svg" class="w-4" alt="" />
                  <p> <span class="font-semibold text-gray-700">Phone Number:</span> {{ user.phone }}</p>
                </li>

                <li class=" flex gap-3 py-6 border-t-2 px-3 ">
                  <img src="@/assets/image/mail.svg" class="w-4" alt="" />
                  <p> <span class="font-semibold text-gray-700">Email</span> {{ user.email }}</p>
                </li>

                <li class=" flex gap-3 py-6 border-t-2 px-3 ">
                  <img src="@/assets/image/link.svg" class="w-4" alt="" />
                  <p> <span class="font-semibold text-gray-700">Referral Link:</span> </p>
                </li>

                <li class=" flex gap-3 py-6 border-t-2 px-3 ">
                  <img src="@/assets/image/dashboard_layouts.svg" class="w-5" alt="" />
                  <p> <span class="font-semibold text-gray-700">Account Status:</span> <span
                      class=" font-medium text-green-400">Active</span></p>
                </li>
              </ul>
            </nav>
          </section>

          <section>
            <div class="bg-primary  mb-8 flex justify-between items-center rounded-md font-normal py-5 px-5 text-white">
              <div>
                <img src="@/assets/abanisee.png" alt="" class="w-[4rem] py-4 h-[2rem]">
                <div class="font-semibold">
                  <p class="py-2 ">Account Number : <span>{{ user.account_number }}</span></p>
                  <p>Account Name : <span class=" ">{{ user.account_name }} </span></p>
                  <p>Bank Name : <span class=" ">Wema Bank</span></p>
                  <div class=" mt-6 text-gray-300 text-[12px] font-normal">
                    <h1>AUTOMATED BANK TRANSFER</h1>
                    <p>Make transfer to this account to fund your wallet</p>
                  </div>
                </div>
              </div>
              <div class="  mx-6 hidden md:block">
                <h1 class="text-xl text-center font-semibold">1%</h1>
                <h1 class="font-semibold text-gray-300">Charges</h1>
              </div>
            </div>
          </section>
          
          <div>

          </div>
        </div>

      </div>
      <NavigationLoadingJs  :isJsFinishedRun="isJsFinishedRun"> </NavigationLoadingJs>


      <Changepassword :updatepassword ="updatepassword" @update:updatepassword="handleUpdatePassword"   ></Changepassword>
      <UpdatetransactionPin  :update_transactions ="updatetransaction" @uptransaction="handleupdatetransaction"></UpdatetransactionPin> 
    </div>
  </div>
</template>
<script>
export default {
  setup() {

    const router = useRouter()
    onMounted(async () => {


      try {
        const response = await fetch('https://api-abanise-five.vercel.app/refreshtoken', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',

        })

        if (!response.ok) {
          const errorData = await response.json();
          this.erromessage = errorData.message;
             router.push('/login')
          throw new Error(errorData.message);
       

        }


      } catch (error) {
    
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
    return {};
  },
  data() {
    return {
      isJsFinishedRun: false,
      user: '',
      totalspent: '',
      totalfund: '',
      updatepassword:false,
      updatetransaction:false,
     
    }
  },

  methods: {
    handleUpdatePassword() {
  this.updatepassword = false

},
handleupdatetransaction() {
  this.updatetransaction = false

},
 


  },

  created: async function () {

    try {
       const response = await fetch('https://api-abanise-five.vercel.app/dashboard', {
      method: "GET",
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',

    })

    if (!response.ok) {
      const errorData = await response.json();
      this.erromessage = errorData.message;
      throw new Error(errorData.message);

    }

    const data = await response.json();
 
    this.user = data.foundUser
    this.totalspent = data.totalAmountSpent.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
    this.user.fullname = `${data.foundUser.firstname} ${data.foundUser.lastName} `
    this.user.wallet = data.foundUser.walletBalance.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
    this.user.bankName = data.foundUser.preferred_bank
    this.totalfund = data.totalAmountfund.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
    this.isJsFinishedRun = true


    } catch (error) {
      
    }
   


  },

  watch: {
    email(value) {
      this.submit();
    }
  }

}

</script>

<style>
.shadows {
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}
</style>