<template>
  <div class="bg-[#f4f6f6] text-[poppins]">
    <div>
     
       <SucessTemplate :statusreport="statusreport" :status="status" :transacicon='transacicon'  :transacmessage="transacmessage" :messagetransaction="messagetransaction" @next="next"   class="w-full"></SucessTemplate>
      <Dashboardbtn :airtime="true" class="w-full"></Dashboardbtn>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex mt-10 gap-10">
        <div
          class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
        ></div>

        <div class="w-full 0 py- mb-20 px-5">
          <h1 class="text-[19px] text-gray-600 font-medium">Airtime Vend</h1>
          <div class="bg-green-100 w-fit py-2 mt-5 h-fit px-4">
            <h1
              class="text-[poppins] text-green-900 mb-6 font-medium text-[15px]"
            >
              Notification
            </h1>
            <p class="text-[14px] mb-4 text-green-900 font-normal">
              Welcome to our website, We are 100%, Also we are selling (WAEC,
              NABTEB, <br class="md:block hidden" />and NECO Result Checker)
              with other epin for o'level Registration
            </p>
          </div>
          <div
            class="w-full md: md:max-w-md sm:w-2/3 mt-10 lg:max-w-md h-fit  shadows rounded-[.5rem] ld text-2xl shadow bg-white"
          >

            <form action="" class="flex flex-col gap-5 h-fit p-8 text-xl">
              <div class="flex bg-white flex-col">
                <label for="" class="text-primary mb- px-4 text-[15px]"
                  >Network</label
                >
                <select
                  v-model="form.network"
                  class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-gray-100 border py-[.3rem]"
                  placeholder="Password"
                
                >
                  <option value="MTN">MTN</option>
                  <option value="GLO">GLO</option>
                  <option value="9MOBILE">9MOBILE</option>
                  <option value="AIRTEL">AIRTEL</option>
                </select>
                <p
                  :class="errornetwork ? 'flex' : 'hidden '"
                  class="e pl-5 text-red-700 text-[13px]"
                >
                  select the Network
                </p>
              </div>

              <div class="flex bg-white flex-col">
                <label for="" class="text-primary mb- px-4 text-[15px]"
                  >Amount</label
                >
                <input
                  v-model="form.amount"
                  
                  type="number"
                  class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-gray-100 border py-[.3rem]"
                  placeholder="Amount"
                  @input="onInput"
                />
                <p
                  :class="erroramount ? 'flex' : 'hidden '"
                  class="e pl-5 text-red-700 text-[13px]"
                >
                  Amount must not less than 50₦
                </p>
              </div>

              <div class="flex bg-white flex-col">
                <label for="" class="text-primary px-4 text-[15px]"
                  >Recipients</label
                >
                <input
                  v-model="form.recipients"
                  type="text"
                  pattern="[0-9]*"
                  class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-gray-100 border py-[.3rem]"
                  placeholder="phone number "
                  @input="onInput"
                />
                <p
                  :class="errorphone ? 'flex' : 'hidden '"
                  class="e pl-5 text-red-700 text-[13px]"
                >
                  enter correct phone
                </p>
              </div>

              <Button
                class="mt- text-[13px]"
                :loading="loadingState"
                @click="register()"
                loadingText="please wait..."
              >
                Previews
              </Button>
            </form>
            <Copywrite></Copywrite>
          </div>
        </div>
      </div>

      <div class="mx-">
        <div
          :class="transacPrev ? 'w-full' : 'w-0'"
          class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20 h-screen z-10"
        ></div>
        <div
          :class="transacPrev ? 'bottom-0' : ' bottom-[100rem]'"
          class="duration-700 ease-in-out z-10  w-full h-screen flex pt-32 gap-10 fixed"
        >
          <div
            class="h-fit lg:w-1/4 md:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem]"
          ></div>
          <div>
            <div class="text-[16px] bg-white mx-4 py-5 px-0">
              <p class="text-xl text-center">Transaction Previews</p>
              <p class="message text-xl text-red-700 text-center text-">
                {{ erromessage }}
              </p>
              <div class="mt-10 w-full mb-3">
                <p
                  class="grid grid-cols-6 justify-between ml-0 py-1 border-b-2 border-t-2 px-4"
                >
                  <span class="col-span-4">Network</span>
                  <span class="col-span-2">{{ form.network }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-0 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Service</span>
                  <span class="col-span-2">{{ form.serviceID }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-0 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Recipients</span>
                  <span class="col-span-">{{ form.recipients }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-0 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Total</span>
                  <span class="col-span-">{{ form.amount }}</span>
                </p>
              </div>

              <p
                class="text-secondary cursor-pointer ml-6 mt-5"
                @click="cancelTrans()"
              >
                Cancel
              </p>

             <div class="mx-4">
               <label for="" class="">Transaction code</label><br />
              <input
                type="password"
                @input="onInput"
                v-model="form.TransactionCode"
                name=""
                class="w-full h-10 outline-none mb-3  px-3 rounded-[.5rem] border"
                id=""
              />

              <p
                :class="errortransactionCode ? 'flex' : 'hidden '"
                class="e pl-5 text-red-700 text-[13px]"
              >
                Amount must not less than 50₦
              </p>
              <Button
                class="m"
                :loading="loadingState"
                @click="submitted()"
                loadingText2="please wait"
              >
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
<script   >

  import { useHead } from '@vueuse/head'
  import { useRouter } from 'vue-router'
 





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
    return { };
  },
  data() {
    return {
      transacmessage:true,
      messagetransaction:'',
      status:'',
      transacicon:'',
        statusreport:false,
            message: "",
      errortransactionCode: "",
      erromessage: "",
      transacPrev: false,
      errornetwork: false,
      erroramount: false,
      errorphone: false,
      loadingState: false,
      form: {
        network: "",
        amount: "",
        recipients: "",
        TransactionCode: "",
        serviceID: "Airtime",
      },
    };
  },

  methods: {

    next(){
   
         this.transacmessage=true
          setTimeout(() => {

            this.$router.push('/user/Dashboard');
            this.loadingState = false;

          }, 200);
             },

        cancelTrans() {
      this.transacPrev = false;
    },
    resetErrors() {
      (this.errornetwork = false),
        (this.erroramount = false),
        (this.errorphone = false);
      this.errortransactionCode = false;
    },
    onInput() {
      this.resetErrors();
    },
    register() {
      const regex = /[a-zA-Z]/;
      this.loadingState = true;
    
      const phone = String(this.form.recipients);
      if (!this.form.network || this.form.network === "network") {
        this.errornetwork = true;

        this.loadingState = false;
        return false;
      } else if (!this.form.amount || this.form.amount < 50) {
        this.erroramount = true;

        this.loadingState = false;
        return false;
      }
      if (
        !phone ||
        phone.length < 10 ||
        phone.length > 11 ||
        regex.test(phone)
      ) {
        this.errorphone = true;

        this.loadingState = false;
        return false;
      } else {
        setTimeout(() => {
          this.transacPrev = true;
          this.loadingState = false;
        }, 1000);
      }
    },

    async submitted() {
      this.loadingState = true;

      if (!this.form.TransactionCode) {
        this.errortransactionCode = true;
        this.loadingState = false;
        return false;
      } else {
        try {
          const originalAmount = this.form.amount.toFixed(1)
          this.loadingState = true;
          const response = await fetch("https://api.abaniseedu.com/sub/airtime", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              TransactionCode: this.form.TransactionCode,
              networkName: this.form.network,
              amount: originalAmount,
              phone: this.form.recipients,
              
             
            }),
          });
         
          if (!response.ok) {
            const errorData = await response.json();
            this.erromessage = errorData.message;
            throw new Error(errorData.message);
          } 
          
     
          this.loadingState = true;
          const data = await response.json();
          // this.message = data.success;
          this.status = data.success
          console.log(this.status)
           this.transacPrev = false;
         setTimeout(() => {

             this.loadingState = false;
        this.transacmessage = false;
        if (this.status === 'pending'|| this.status === 'success') {
          this.messagetransaction=`You have successfully buy ${this.form.amount}₦ Airtime  for this number ${this.form.recipients} `
          this.transacicon= true
          this.status = 'success'
          this.message = 'success'
          this.statusreport=true
        } else {
           this.transacicon= false
            this.statusreport=false
            this.status = 'Failed'
           this.messagetransaction='Dear customer We are sorry, Your tansaction is not successful try it again'
        }

          }, 200);
        
        } catch (error) {
        
          this.loadingState = false;
        }
      }
    },
  },

  watch: {
    email(value) {
      this.submit();
    },
  },
};
</script>

<style>
.shadows {
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}
</style>