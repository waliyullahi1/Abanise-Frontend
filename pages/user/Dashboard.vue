<template>
  <div class="bg-[#f4f6f6] w-full">
    <Dashboardbtn :dashboard="true" class="w-full text-[poppins]"></Dashboardbtn>
    <div class=" flex bg-gray-200 gap-5">
      <div class=" w-1/4 hidden md:block border-4"></div>
      <div class="w-full mt-28  border-4">
        <div class="bg-white rounded-lg shadows">
          <h1 class=" mx-5 text-[14px] border font-semibold w-fit py-2 px-4">{{ user.bankName }}</h1>
          <div class="mx-5  ">
            <div class="bg-primary flex justify-between items-center rounded-md font-normal py-5 px-5 text-white">
              <div>
                <img src="@/assets/abanisee.png" alt="" class="w-[4rem] py-4 h-[2rem]">
                <div class="font-semibold">
                  <p class="py-2 ">Account Number : <span>{{ user.accountNo }}</span></p>
                  <p>Account Name : <span class=" ">{{ user.accountName }}</span></p>
                  <p>Bank Name : <span class=" ">Wema Bank</span></p>
                  <div class=" mt-6 text-gray-300 text-[12px] font-normal">
                    <h1>AUTOMATED BANK TRANSFER</h1>
                    <p>Make transfer to this account to fund your wallet</p>
                  </div>
                </div>
              </div>
              <div>
                <h1 class="text-xl text-center font-semibold">1%</h1>
                <h1 class="font-semibold text-gray-300">Charges</h1>
              </div>
            </div>
            <div class="mt-2">
              <button v-if="!user.accountNo" class="bg-secondary rounded-sm text-white px-2 py-2"
                @click="generateVirtualAccountNo()">Generate virtual account number</button>
            </div>

            <h1 class="mt-10 mx-5 font-semibold text-xl">Welcome to Abaniseedu </h1>
            <div class=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-4 text-[15px] py-6 ">
              <div class="flex items-center gap-4 font-semibold bg-white shadows rounded-lg py-2 px-2 ">
                <div class=" bg-blue-900 w-fit h-fit  rounded-lg py-2 px-3"><img src="@/assets/image/wallets.svg"
                    class="w-10" alt=""> </div>
                <div>
                  <h1 class="   text-gray-400 tracking-[2xl]">Wallet Balance</h1>
                  <p class=" text-xl"> <span>{{ user.wallet }}</span></p>
                </div>
              </div>

              <div class="flex items-center gap-4 font-semibold bg-white shadows rounded-lg py-2 px-2 ">
                <div class=" bg-green-800 w-fit h-fit  rounded-lg py-2 px-3"><img
                    src="@/assets/image/transaction_list.svg" class="w-10" alt=""> </div>
                <div>
                  <NuxtLink to="/user/transaction">
                    <h1 class="   text-gray-400 tracking-[2xl]">Transactions</h1>
                  </NuxtLink>

                </div>
              </div>

              <div class="flex items-center gap-4 font-semibold bg-white shadows rounded-lg py-2 px-2 ">
                <div class=" bg-red-800 w-fit h-fit  rounded-lg py-2 px-3"><img src="@/assets/image/delivery_time.svg"
                    class="w-10" alt=""> </div>
                <div>
                  <h1 class="   text-gray-400 tracking-[2xl]">Wallett Summary</h1>

                </div>
              </div>

            </div>
          </div>
        </div>
        <NavigationLoadingJs :isJsFinishedRun="isJsFinishedRun"></NavigationLoadingJs>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'



export default {
  setup() {
  
    const checktransaction = async () => {
  try {

    const response = await axios({
      url: "https://api.abaniseedu.com/checktransaction",
      method: "GET",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

  } catch (error) {

  }
}


    const router = useRouter()
    onMounted(async () => {




      try {
        const response = await fetch('https://api.abaniseedu.com/refreshtoken', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',

        })
        checktransaction()

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
      user: {
        accountName: '',
        accountNo: '',
        wallet: 0,
        bankName: '',
      },

      user: [

      ]
    }
  },

  methods: {
    async generateVirtualAccountNo() {
      this.isJsFinishedRun = false
      if (this.user.accountNo == null || !this.user.accountNo) {
        const response1 = await fetch('https://api.abaniseedu.com/accout', {
          method: "GET",
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        })
        if (!response1.ok) {
          const errorData = await response.json();
          this.erromessage = errorData.message;
          throw new Error(errorData.message);
        }

        const response = await fetch('https://api.abaniseedu.com/dashboard', {
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
        this.user.accountNo = data.foundUser.account_number
        this.user.accountName = data.foundUser.account_name
        this.user.wallet = data.foundUser.walletBalance.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
        this.user.bankName = data.foundUser.preferred_bank
        this.isJsFinishedRun = true

      } else {
        this.isJsFinishedRun = true

      }

    }





  },

  created: async function () {

    this.isJsFinishedRun = false
    const response = await fetch('https://api.abaniseedu.com/dashboard', {
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

    this.user.accountNo = data.foundUser.account_number
    this.user.accountName = data.foundUser.account_name
    this.user.wallet = data.foundUser.walletBalance.toLocaleString('en-US', { style: 'currency', currency: 'NGN' })
    this.user.bankName = data.foundUser.preferred_bank

    this.isJsFinishedRun = true


    
 
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