<template>
  <div class=" bg-[#f4f6f6] text-[poppins]">
    <Dashboardbtn :scratchcards="true" class="t"></Dashboardbtn>
    <div class="h-[7rem] w-full"></div>
    <div class="flex gap-10">
      <div
        class="h-fit lg:w-1/3 sm:w-[2rem] md:w-1/4 hidden lg:block md:block ml-[2rem]"
      ></div>
      <div
        class="w-full h-fit shadows rounded-[1rem] py-5 text-semibold text-2xl shadow bg-white"
      >
        <div
          class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-3 lg:gap-6 gap-10 px-8 lg:px-5"
        >
          <div
            v-for="(item, index) in item"
            :key="item.id"
            class="group shadows border-primary w-full overflow-hidden h-fit flex flex-col gap-3 rounded-[2rem]"
          >
            <div class="w-full rounded-[2rem] pt-3 px-3 overflow-hidden">
              <div class="overflow-hidden rounded-[2rem]">
                <img v-bind:src="item.image" />
              </div>
            </div>
            <div
              class="flex py-3 px-3 flex-col gap-3 border-primary transform duration-300"
            >
              <div
                class="group-hover:w-full w-1 duration-500 h-1 bg-primary"
              ></div>
              <p class="text-sm">
                <span>{{ item.card }}</span> {{ item.header }}
                <span class="tex- text-base font-semibold"
                  >({{ item.condition }})</span
                >
              </p>
              <div class="flex justify-between">
                <p class="text-[15px] font-semibold">Price</p>
                <p class="font-semibold text-[15px]">₦{{ item.price }}</p>
              </div>
              <p class="flex justify-between font-semibold text-[15px]">
                Availability(status)
                <span class="tex text-green-600 text-[15px]">{{ item.status }}</span>
              </p>
            </div>
                <Button  :class="item.itIsAvalable? 'hidden':'block'"
           
              :loading="item.loadingState1"
              loadingText="Authenticating"
              class="w-full text-center text- text-[15px] font-semibold"
              >Not Available </Button>

            <Button :class="item.itIsAvalable? 'block':'hidden'"
              @click="updateNextItemName(index)"
              :loading="item.loadingState1"
              loadingText="Authenticating"
              class="w-full text-center text- text-[15px] font-semibold"
              >Buy now</Button
            >
          </div>
        </div>

        <div>
          <div
             :class="transacPrev ? ' w-full' : '  w-0'"
            class="fixed overflow-auto top-0 right-0   bg-black opacity-50 h-screen z-10"
          >:class="transacPrev ? 'w-full' : 'w-0'"</div>
          <div class="w-full  h-fit">
            <div class=" flex justify-center w-full">
              <div
                :class="transacPrev ? 'bottom-[1rem]' : 'bottom-[60rem]'"
                class="duration-700 fixed ease-in-out z-10 w-full h-screen flex pt-32 md:gap-10 gap-0 fixd"
              >
                <div
                  class="h-fit lg:w-0 sm:w-0 sm:hidden md:block md:w-0 md:ml-[5rem] ml-0"
                ></div>
                <div
                  class="md: md:w-1/2 sm:w-2/3 lg:max-w-md w-full ul mx-5 shadows rounded-[1rem] ld text-2xl shadow bg-white py-5 px-5  h-[35rem] overflow-y-auto"
                >
                  <h1
                    class="text-[13px] text-center uppercase font-medium leading-tight text-primary"
                  >
                    Please enter the correct email, so that you can also receive
                    your pin in your email
                  </h1>

                   
                  <form action="" class=" ">
                    <div>
                       <p  class=" message pl-5 text-[14px] text-red-700  text-center text-">{{erromessage}}</p>
  
                    </div>
                    <div class="sm:flex block gap-5 items-center">
                      <Input
                        label="Exam Type "
                        :type="text"
                        placeholder="Enter Quantity"
                        :error="false"
                        v-model:inputValue="form.name"
                        inputValue=""
                        disabled="disabled"
                        min="1"
                      ></Input>
                      <Input
                        label="Amount"
                        type="text"
                        placeholder="Enter your email address"
                        :error="false"
                        :inputValue="form.price"
                        disabled="disabled"
                        class="mt-1 -300"
                      ></Input>
                    </div>

                    <div class="sm:flex block gap-5">
                      <div class="w-full">
                        <Input
                          label="Enter Quantity"
                          type="number"
                          placeholder="Enter Quantity"
                          :error="false"
                          v-model:inputValue="form.quantity"
                          :inputValue="input"
                          :min="Number(1)"
                        ></Input>
                        <p
                          :class="errorquantity ? 'flex' : 'hidden '"
                          class="absolu pl-5 text-red-700 text-[13px]"
                        >
                          please enter correct quantity
                        </p>
                      </div>
                      <div class="w-full">
                        <h1 class="mt-1 font-semibold text-[15px]">Total</h1>
                        <div
                          class="-2 w-full h-8 px-5 bg-gray-300 mt-1 text-[15px] rounded-lg"
                        >
                          ₦{{ this.form.quantity * this.form.price }}
                        </div>
                      </div>
                    </div>

                    <Input
                      label="Recipient email"
                      type="text"
                      :error="erroremail1"
                      v-model:inputValue="form.email"
                      class="mt-1 bg-g-200"
                      placeholder="Recipient email"
                    ></Input>
                    <p
                      :class="erroremail1 ? 'flex' : 'hidden '"
                      class="absolu pl-5 text-red-700 text-[13px]"
                    >
                      please enter correct email
                    </p>

                    <Input
                      label="Transaction code"
                      type="text"
                      :error="errortransactionCode"
                      v-model:inputValue="form.transactionpin"
                      class="mt-1 mb-3 bg-g-200"
                      placeholder="Your Number"
                    ></Input>
                    <p
                      :class="errortransactionCode ? 'flex' : 'hidden '"
                      class="absolu pl-5 text-red-700 text-[13px]"
                    >
                      please enter correct email
                    </p>

                    <p
                      class="text-secondary cursor-pointer ml-6 text-[15px]"
                      @click="cancelTrans()"
                    >
                      Cancel
                    </p>
                    <Button
                      :loading="loadingState2"
                      @click="submit()"
                      loadingText="wait please...."
                    >
                      Buy now</Button
                    >
                   
                  </form>
                 
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      

        <div class="flex gap-1">
          <img src="@/assets/image/copy.svg" alt="" class="w-3" /><small
            class="font-semibold text- text-sm gap-1 flex text-gray-800"
            >abaniseedu.com
            <img src="@/assets/image/copy.svg" alt="" class="w-3" />2023</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waecImg from "@/assets/image/waeccard.jpg";

import neco from "@/assets/image/neco.jpg";
import vwaec from "@/assets/image/vgce.jpg";
import nabteb from "@/assets/image/nabteb1.jpg";
import gcewaec from "@/assets/image/gce.jpg";
import nabtebgce from "@/assets/image/pinnabteb.jpg";
import {format} from 'date-fns'
import { useHead } from '@vueuse/head'


export default {
  middleware: 'auth',
  setup() {
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

    router.push('/login') // Redirect to the login page
  }
})
  

    useHead({
      // Can be static or computed
      title: 'Login - abanise.com | Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Data, Airtime to cash,',
      meta: [
        {
          name: `description`,
          content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
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

  props: {
    reference: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
       format:'',
      errorquantity:'',
      erromessage:'',
      recelpt: [
        {
          headers: "Service Name",
          details: "",
        },

        {
          headers: "quantity",
          details: "",
        },

        {
          headers: "Amount",
          details: "",
        },

        {
          headers: "Status",
          details: "Successful ",
        },

        {
          headers: "Date",
          details: "",
        },
      ],

      pin: '',
       
      text: "1",
      input: "1",
      loadingState2: false,
      transacPrev: false,
      track: true,
      erroremail1: false,
      errortransactionCode: false,
      cardlink: "",
      numm: Number(1),
      cardName: "",
      form: {
        name: "",
        email: "",
        semiprice: "",
        quantity: 1,
        price: Number,
        time:'',
        total: "",
        transactionpin: "",
      },

      item:[
                    {
                        id: 1,
                       
                        image:waecImg ,
                        price:'4000.00',
                        card:'WAEC',
                        header:'Scratch card ',
                        condition:'result checker',
                        itIsAvalable:true,
                        status:'Yes'
                    },

                    {
                        id: 2,
                        image: neco,
                        price:'1200.00',
                        card:'NECO',
                        header:'Scratch card ',
                        condition:'result checker',
                        itIsAvalable:true,
                        status:'Yes'
                    },

                    {
                        id: 3,
                        image: nabteb,
                        price:'1000.00',
                        card:'NABTEB',
                        header:'Scratch card ',
                        condition:'result checker',
                        itIsAvalable:true,
                        status:'Yes'
                    },


                      {
                        id: 4,
                        image: gcewaec,
                        price:'19,000.00',
                        card:'GCEWAEC',
                        header:'Pin card ',
                        condition:'For registration',
                        itIsAvalable:false,
                        status:'No'
                    },

                    {
                        id: 5,
                        image: neco,
                        price:'12,500.00',
                        card:'GCENECO',
                        header:'Pin card ',
                        condition:'For registration',
                        itIsAvalable:false,
                        status:'No'
                    },

                   
                    {
                        id: 6,
                        image: nabtebgce,
                        price:'16,500.00',
                        card:'GCENABTEB',
                        header:'pin ',
                        condition:'For registration',
                        itIsAvalable:false,
                        status:'No'
                    },

                    {
                        id:7,
                        image: vwaec,
                        price:'15000',
                        card:'Waec',
                        header:'Result Verification ',
                        condition:'Correction of date of birth in NYSE',
                        itIsAvalable:false,
                        status:'No'
                    },

                    

                  


                   



               


                    
                ],
    };
  },

  methods: {
    updateNextItemName(index) {
      if (index < this.item.length - 1) {
        this.form.name = this.item[index].card;
        this.form.price = this.item[index].price;
        this.item[index].loadingState1 = true;
      } else {
        this.form.name = "11";
        this.form.price = "11";
      }

      setTimeout(() => {
        this.transacPrev = true;
        this.item[index].loadingState1 = false;
      }, 500);
    },

    cancelTrans() {
      this.transacPrev = false;
    },
    resetErrors() {
      (this.errortransactionCode = false),
        (this.erroremail1 = false),
        (this.errorphone = false);
    },
    onInput() {
      this.resetErrors();
    },
    async submit() {
     this.loadingState2 = true;
         
      if (!this.form.quantity) {
        this.errorquantity = true;
        this.loadingState2 = true;
      } else if (!this.form.email) {
        this.erroremail1 = true;
        this.loadingState2 = false;
        return false;
      } else if (!this.form.transactionpin) {
        this.errortransactionCode = true;
        this.loadingState2 = false;
        return false;
      } else {
        this.loadingState2 = true;
        try {
         this.loadingState2 = true
        
         //sub/airtimecard/sell
          const response = await fetch("https://api.abaniseedu.com/card/sell", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              examType: this.form.name,
              numCodes: this.form.quantity,
              amount: this.form.quantity * this.form.price,
              TransactionCode: this.form.transactionpin,
              email: this.form.email,
            }),
          });
        this.form.time =  format(new Date(), 'MMM ddd yyyy hh:mm aaa')
          if (!response.ok) {
             this.loadingState2 = false;
           
            const errorData = await response.json();
           
            this.erromessage = errorData.message;
            throw new Error(errorData.message);
          }
            this.loadingState2 = true;
          const data = await response.json();
      
          // this.message = data.success;
         
          this.message = data.success
         
          localStorage.setItem('cards', JSON.stringify(data))
        
         
          //information  to receipt

            localStorage.setItem("recelptlist", JSON.stringify(this.form))
        

        
        
           
           
            
   
          setTimeout(() => {
            this.$router.push('/user/pagePin')
            this.loadingState = false;
          }, 1000);
        } catch (error) {
          
          this.loadingState = false;
        }
      }
    },


  },

 
};
</script>

<style>

.ul{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.ul::-webkit-scrollbar {
    display: none;
}
</style>