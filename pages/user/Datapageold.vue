<template>
  <div class="bg-[#f4f6f6] text-[poppins]">
    <div>
      <Dashboardbtn :datapage="true" class="w-full"></Dashboardbtn>
      <SucessTemplate :status="status" :statusreport="statusreport" :transacicon='transacicon'
        :transacmessage="transacmessage" :messagetransaction="messagetransaction" @next="next" class="w-full">
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
            class="w-full md: md:max-w-md sm:w-2/3 mt-10 lg:max-w-md h-fit  shadows rounded-[.5rem] ld text-2xl shadow bg-white">
            <form @submit.prevent="prevTrans" action="" class="flex flex-col gap-5 h-fit p-8 text-xl font-semild">
              <div v-for="(field, index) in formFields" :key="index">
                <div class="flex bg-white flex-col">
                  <label :for="field.name" class="text-primary mb- ml-4 text-[15px]">{{ field.label }}</label>
                  
                  <select :id="field.name" v-model="formValues[field.name]"   :class="
                    field.errorselection
                      ? ' border-secondary'
                      : '  border-gray-300 '
                  "
                   class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-gray-100 border py-[.3rem]">
                    <option v-for="(option, index) in getOptions(field)" :key="index" :value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                  <p :class="field.errorselection ? 'flex' : 'hidden '" class="pl-5 text-red-700 text-[14px]">
                    {{ field.message }}
                  </p>
                </div>
              </div>

              <div class="flex bg-white flex-col">
                <label for="" class="text-primary font-medium ml-4 text-[15px]">Recipients</label>

                <div class=" mt-">
                  <input type="number" v-model="form.phone" :class="
                    errorphone ? ' border-secondary' : ' border-gray-300 '
                  " @input="onInput"
                  class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-gray-100 border py-[.3rem]"                    placeholder="Recipients" />
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

      <div class="mx-">
        <div :class="transacPrev ? 'w-full' : 'w-0'"
          class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20 h-screen z-10"></div>
        <div :class="transacPrev ? 'bottom-0' : ' bottom-[100rem]'"
          class="duration-700 ease-in-out z-10  w-full h-screen flex pt-32 gap-10 fixed">
          <div class="h-fit lg:w-1/4 md:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem]"></div>
          <div>
            <div class="text-[16px] bg-white mx-4 py-5 px-0">
              <p class="text-xl text-center">Transaction Previews</p>
              <p class="message pl-5 text-2xl text-red-700 text-center text-">
                {{ erromessage }}
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
<script>
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
      title: 'Data Bundle - Cheapest Data Bundle Plan in 2023 – MTN | Airtel | Glo | 9Mobile | NairaData Nigeria',
      meta: [
        {
          name: `description`,
          content: 'Cheapest Data Plans: Are you in need of cheap data plans you can use? This article will provide you with the cheapest data plans you can use for MTN, Airtel, Glo, and 9Mobile.',
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
      transacicon: '',
      loadingState2:false,
      loadingState1:false,
      transacmessage: true,
      messagetransaction: '',
      status: '',
      statusreport: false,
      errortransactionCode: "",
      transacPrev: "",
      erromessage: "",
      loadingState: false,
      errorphone: "",
      form: {
        errortransactionCode: false,
        phone: "",
        serviceID1: "",
        amount: "",
        planoption: "",
        variation_code: "",
        network: "",
        TransactionCode: "",
        datatype: "",
      },
      formFields: [
        {
          name: "product",
          label: "Network",
          errorselection: false,
          message: "please select network",
          options: [
            { value: "network", text: "Network" },
            { value: "MTN", text: "MTN" },
            { value: "GLO", text: "GLO" },
            { value: "Airtel", text: "Airtel" },
            { value: "ninemobile", text: "9mobile" },
          ],
        },
        {
          name: "amount",
          label: "Data Plan",
          errorselection: false,
          message: "please select network",
        },
      ],
      formValues: {
        product: "network",
        amount: 2000,
        plan: "",
      },
      productOptions: {
        network: [{ value: 2000, text: "Select data Type" }],

        GLO: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "Corporate500mb - ₦190 - 1Month",
            plan: 173,

          },
          {
            value: 4000,
            text: "Corporate200mb - ₦80 - 1Month",
            plan: 172,

          },

          {
            value: 5000,
            text: "Corporate1GB - ₦255 - 1Month",
            plan: 174,

          },
          {
            value: 6000,
            text: "Corporate2GB - ₦510 - 1Month",
            plan: 175,

          },

          {
            value: 7000,
            text: "Corporate3GB - ₦765 - 1Month",
            plan: 176,

          },

          {
            value: 8000,
            text: "Corporate5GB - ₦1275 - 1Month",
            plan: 177,

          },

          {
            value: 9000,
            text: "Corporate10GB - ₦2550 - 1Month",
            plan: 	178,

          },

        ],

        MTN: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "SME500mb - ₦138 - 1Month",
            plan: 1,

          },
          {
            value: 4000,
            text: "SME1GB - ₦260 - 1Month",
            plan: 2,

          },

          {
            value: 5000,
            text: "SME2GB - ₦520- 1Month",
            plan: 3,

          },
          {
            value: 6000,
            text: "SME3GB - ₦780- 1Month",
            plan: 4,

          },

          {
            value: 7000,
            text: "SME5GB - ₦1300- 1Month",
            plan: 5,

          },

          {
            value: 8000,
            text: "SME10GB - ₦2600 - 1Month",
            plan: 168,

          },
          //Mtn Corporate data 

          // {
          //   value: 40000,
          //   text: "Corporate500MB - ₦138 - 1 Month",
          //   plan: 13,

          // },
          // {
          //   value: 9000,
          //   text: "Corporate1GB - ₦275 - 1 Month",
          //   plan: 14,

          // },

          // {
          //   value: 10000,
          //   text: "Corporate2GB - ₦560 - 1 Month",
          //   plan: 15,

          // },

          // {
          //   value: 20000,
          //   text: "Corporate3GB - ₦840 - 1 Month",
          //   plan: 16,

          // },

          // {
          //   value: 30000,
          //   text: "Corporate5GB - ₦1400 - 1 Month",
          //   plan: 17,

          // },

          // {
          //   value: 40000,
          //   text: "Corporate10GB - ₦2780 - 1 Month",
          //   plan: 18,

          // },
        ],
        Airtel: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "Corporate100mb - ₦55 - 7DAYS",
            plan: 157,

          },
         
          {
            value: 4000,
            text: "Corporate1GB - ₦290 - 1Month",
            plan: 160,

          },


          {
            value: 6000,
            text: "Corporate2GB - ₦580 - 1Month",
            plan: 161,

          },

          {
            value: 7000,
            text: "Corporate500mb - 160₦ - 1Month",
            plan: 159,

          },

          {
            value: 8000,
            text: "Corporate5GB - ₦1450 - 1Month",
            plan: 162,

          },
          {
            value: 9000,
            text: "Corporate10GB - ₦ 2900- 1Month",
            plan: 165,

          },


        ],
        ninemobile: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "SME1.5 - ₦525 - 1Month",
            plan: 106,

          },
          {
            value: 4000,
            text: "SME1GB - ₦350- 1Month",
            plan: 105,

          },

          {
            value: 5000,
            text: "SME2GB - ₦700 - 1Month",
            plan: 107,

          },
          {
            value: 6000,
            text: "SME3GB - ₦1050 - 1Month",
            plan: 108,

          },

          {
            value: 7000,
            text: "SME5GB - ₦1550 - 1Month",
            plan: 109,

          },

        

          {
            value: 50000,
            text: "500mb - ₦220 - 14days",
            plan: 104,

          },
          //ninimobile Corporate data 

        

        


        ],

      },
    };
  },
  methods: {

    next() {
    
      this.transacmessage = true
      setTimeout(() => {

        this.$router.push('/user/Dashboard');
        this.loadingState = false;

      }, 200);
    },
    getOptions(field) {
      if (field.name === "amount") {
        return this.productOptions[this.formValues.product] || [];
      }
      return field.options;
    },
    getSelectedOption(field) {
      if (field) {
        const selectedValue = this.formValues[field.name];
        const options = this.getOptions(field);
        if (options) {
          // Check if options is not undefined
          const selectedOption = options.find(
            (option) => option.value === selectedValue
          );
          return selectedOption;
        } else {
        
        }
      }
    },

    cancelTrans() {
      this.transacPrev = false;
    },

    resetErrors() {
      this.formFields[0].errorselection = false;
      this.formFields[1].errorselection = false;
      this.errorphone = false;
      this.errortransactionCode = false;
    },
    onInput() {
      this.resetErrors();
    },
    prevTrans() {
      this.loadingState1 = true;
      const selectedOption = this.getSelectedOption(this.formFields[1]);
      const selectedProduct = this.getSelectedOption(this.formFields[0]);
      const phone = String(this.form.phone);
      const regex = /[a-zA-Z]/;
      const amountoption = selectedOption.text.split(" - ")[1]; //amount to pay
      const datatype = selectedOption.text.split(" - ")[0];
      const planoption = selectedOption.plan;
      // const variation_code = selectedOption.variation_code; //service id
      const networkoption = selectedProduct.text; //network he/she that choose
      const serviceIDoptionArray = selectedOption.text.split(" - ");
      const serviceIDoption1 = `${serviceIDoptionArray[0]} `;
      // console.log(planoption, 'planoption');
      // console.log(amountoption, 'amountoption');
      // console.log(datatype, 'datatype');
      // console.log(networkoption, 'networkoption');
      // console.log(serviceIDoptionArray, 'serviceIDoptionArray');
      // console.log(serviceIDoption1, 'serviceIDoption1');

      if (networkoption === "network") {
        this.formFields[0].errorselection = true;
        this.loadingState1 = false;
        return false;
      } else if (serviceIDoption1 === "Select data Type ") {
        this.formFields[1].errorselection = true;
        this.loadingState1 = false;
        console.log("yyyyyyy");
        return false;
      } else if (!phone || phone.length < 10 || phone.length > 11 || regex.test(phone)) {
        this.errorphone = true;
        this.loadingState1 = false;

        return false;
      } else {
        this.form.amount = amountoption.replace("₦", "");
        this.form.network = networkoption;
        this.form.serviceID1 = serviceIDoption1;
        this.form.planoption = planoption;
        // this.form.variation_code = variation_code;
        this.form.datatype = datatype;
        // console.log(this.form.planoption, this.form.variation_code);
        setTimeout(() => {
          this.transacPrev = true;
          this.loadingState1 = false;
        }, 1000);
      }
    },

    async submitted() {
      this.loadingState2= true;
      console.log(this.form.network,'this.form.network');
      if (!this.form.TransactionCode) {
        this.errortransactionCode = true;
        this.loadingState2 = false;
        // console.log( this.loadingState2);
        return false;
      } else {
        try { 
          // console.log(this.form.planoption,'this.form.planoption,');
          // console.log(this.networkoption,'this.networkoption');
          // console.log(this.form.amount,'this.form.amount');
          // console.log(this.form.datatype,'this.form.datatype');
          // console.log(this.form.TransactionCode,'this.form.TransactionCode');
          // console.log(`0${this.form.phone}`,'`0${this.form.phone}`');
          this.loadingState2 = true;
          const response = await fetch("https://api.abaniseedu.com/sub/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
           
            body: JSON.stringify({
              "plan": this.form.planoption,
              "networkName": this.form.network,
              "phone": `0${this.form.phone}`,
              "TransactionCode": this.form.TransactionCode,
              "datatype": this.form.datatype,
              "amount": this.form.amount,

            }),
          });

          if (!response.ok || response.status == 500) {
            const errorData = await response.json();
            this.erromessage = errorData.message;
            this.loadingState2 = false;
            throw new Error(errorData.message);
            
          }
          this.loadingState2 = true;
          const data = await response.json();
          this.message = data.success;
          // console.log("Success:", data);
          this.status = data.success
          this.transacPrev = false;
          this.transacmessage = false;
          this.loadingState2 = true;
 
          if (this.status === 'pending'|| this.status === 'success') {
            this.messagetransaction = `You have successfully shared ${this.form.datatype} data  for this number ${this.form.phone} `
            this.transacicon= true
          this.status = 'success'
          this.message = 'success'
          this.statusreport=true
          this.loadingState2 = false;
          } else {
            this.transacicon= false
            this.statusreport=false
            this.status = 'Failed'
            this.loadingState2 = false;
            this.messagetransaction = 'Dear customer we are sorry, your tansaction is not successful try it again.'
          }

        } catch (error) {
          // console.log(error);
          this.loadingState2 = false;
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