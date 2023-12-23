<template>
  <div class="h-screen  bg2   w-full overflow-x-hidden text-[poppins]">

    <div class=" md:w-fit w-full bg md:pt-10 pt-5  h-fit  md:h-screen shadow     ">
      <div class="md:max-w-1/2   lg:max-w-1/2sm:max-w-md px-2 md:px-20 sm:w-full ">
        <div class="flex justify-center"> <navigation-logo></navigation-logo></div>
        <h1 class="font-semibold text-xl font-sans  text-center ">Create an Account.</h1>
        <p class=" message pl-5 text-[15px] text-red-700 uppercase  text-center text-">{{ state.erromessage }}</p>
        <p class=" message pl-5 text-[15px] text-green-700  pb-9 text-center text-">{{ state.message }}</p>

        <form class="mx-" @submit.prevent="submit" action="">



          <div class="my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
            <!-- <div class="">
              <div class="flex input-containers    mt-2 "> <input type="username"
                  :class="state.errorFirstname ? ' border-secondary' : '  border-primary  '" @input="onInput"
                  class="w-full drop-shadow-md focus:border-primary input-field bg-white h-[2.5rem]  px-5   outline-none font-normal   border-2 rounded-[5px] focus:border-primry"
                  placeholder="" v-model="state.form.firstname">
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white h-6 w-fit">Your
                    Name</span> </label>

              </div>

              <p :class="state.errorFirstname ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">
                please enter your full name</p>
            </div> -->
              
            <div>
              <div class="flex input-containers    mt-2 ">
                <input type="username" :class="state.errorFirstname ? ' border-secondary' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.firstname">
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white h-6 w-fit">First
                    name</span> </label>
              </div>
              <p :class="state.errorFirstname ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">
                please
                enter your first name properly</p>
            </div>

            <div>
              <div class="flex input-containers    mt-2 ">
                <input type="username" :class="state.errorLastname ? ' border-secondary' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.lastname">
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white h-6 w-fit">Last
                    name</span> </label>
              </div>
              <p :class="state.errorLastname ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">
                please
                enter your last name properly</p>
            </div>

          </div>

          <div class="my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
            <div>
              <div class="flex w-full  input-containers border-primary  mt-2 "> <input type="text" @input="onInput"
                  :class="{ 'border-secondary': state.erroremail || state.erroremail1, 'border-gray-500': !state.erroremail && !state.erroremail1 }"
                  class="w-full input-field  h-[2.5rem]  px-5   outline-none font-normal drop-shadow-md   border-2 rounded-[5px] focus:border-primary "
                  placeholder=" " v-model="state.form.email">
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white h-6 w-fit">Email</span> </label>
              </div>
              <p :class="state.erroremail ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">please
                enter your email</p>
              <p :class="state.erroremail1 ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">please
                enter correct email</p>
            </div>


            <div>
              <div class="flex input-containers    mt-2 ">
                <input type="username" :class="state.errorphone ? ' border-secondary' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.phone">
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white h-6 w-fit">Phone Number</span> </label>
              </div>
              <p :class="state.errorphone ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">
                please
                enter correct phone</p>
            </div>
            <!-- <div>
              <div class="flex  b   input-containers border-primary  mt-2 "> <input type="text"
                  :class="state.errorphone ? ' border-secondary' : '   border-gray-500'" @input="onInput"
                  class="w-full input-field drop-shadow-md h-[2.5rem]  px-5  outline-none font-normal    border-2 rounded-[5px] focus:border-primary "
                  placeholder="" v-model="state.form.phone">
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white Phone Number h-6 w-fit">Phone Number</span> </label>

              </div>
              <p :class="state.errorphone ? 'flex' : 'hidden '" class=" relative pl-5 text-red-700 text-['13rem']">please
                enter correct phone</p>
            </div> -->

          </div>

          <div class="my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
            <div class=" ">
              <div class="flex input-containers  b  border-primary  mt-2 ">
                <input :type="state.password" :class="state.errorpassword ? ' border-secondary' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.password">
               
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1  bg-white Phone Number h-6 w-fit">Password </span> </label>

                <div class="w-0 h-1">
                  <toggle class="  relative top-3 right-5" @revealPassword="revealPassword" @hidePassword="hidePassword">
                  </toggle>
                </div>
              </div>

              <p :class="state.errorpassword ? 'flex' : 'hidden '" class=" text-red-700 text-['13rem']">password must
                be at least 6 characters.</p>
            </div>

            <div class=" ">
              <div class="flex input-containers  b border-primary  mt-2 ">
                <input :type="state.comfirmpassword" :class="state.comfirmpassword ? ' border-secondary' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.comfirmpassword">
               

                
                <label for="name" class="input-label  text-slate-600 font-normal"> <span
                    class=" py-0 px-1 relative bg-white Phone Number h-6 w-fit">Comfirm Password </span> </label>

                <div class="w-0 h-1">
                  <toggle class="  relative top-3 right-5" @revealPassword="revealPasswordconfirm"
                    @hidePassword="hidePasswordconfirm"> </toggle>
                </div>
              </div>

              <p :class="state.errorconfirmpassword ? 'flex' : 'hidden '" class=" relative text-red-700 text-['13rem']">password
                and confirm password must match</p>
            </div>

          </div>


          <div class="my-5 ">


            <div class="flex input-containers  b  border-primary  mt-2 ">
              <input :type="state.transaction" @input="onInput"
              class="w-full focus:border-primary input-field drop-shadow-md  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry"
                placeholder="" v-model="state.form.transactionCode">
              <label for="name" class="input-label  text-slate-600 font-normal"> <span
                  class=" py-0 px-1  bg-white Phone Number h-6 w-fit">Transaction code </span> </label>

              <div class="w-0 h-1">
                <toggle class="  relative top-3 right-5" @revealPassword="revealtransaction"
                  @hidePassword="hidetransaction"> </toggle>
              </div>
            </div>

            <p :class="state.errortransactionCode ? 'flex' : 'hidden '" class=" text-red-700 text-['13rem']">The
              Transaction
              code must 4 digit</p>

          </div>




          <Button :loading="state.loadingState" @click="submit()" loadingText="Authenticating"> Register</Button>

        </form>

        <p class=" font-semibold mb-40">Already have an account yet? <router-link class=" text-primary "
            to="/login">Home</router-link></p>

      </div>
    </div>
  </div>
</template>





<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'
import { useOnline } from '@vueuse/core'
const { notify } = useNotification();
const state = reactive({
  disabled: '',
  message: '',
  errorphone: '',
  erromessage: '',
  password: 'password',
  transaction: 'password',
  passwordConfirm: 'password',
  erroremail1: false,
  errorname: false,
  errorFirstname: false,
  errorLastname: false,
  erroremail: false,
  errorpassword: false,
  errorconfirmpassword: false,
  errortransactionCode: false,
  loadingState: false,
  form: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    comfirmpassword: '',
    phone: "",
    transactionCode: "",

  },

  user: [

  ]
});


// setup() {



//   useHead({
//     // Can be static or computed
//     title: 'Sign Up - abanise.com | Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Data, Airtime to cash,',
//     meta: [
//       {
//         name: `description`,
//         content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
//       },
//       // {
//       //   itemprop: `name,
//       //   content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
//       // },
//       {
//         name: 'site_name',
//         content: 'abaniseedu.com',
//       },
//       {
//         name: 'type',
//         content: 'website ',
//       },
//       {
//         name: 'site_name',
//         content: 'abaniseedu.com',
//       },
//       {
//         name: 'type',
//         content: 'website ',
//       },

//       {
//         name: 'url',
//         content: 'abaniseedu.com',
//       },

//       ],

//   })
//   return { };
// },






const revealPassword = () => {
  state.password = 'text';
};
const hidePassword = () => {
  state.password = 'password';
};

const revealtransaction = () => {
  state.transaction = 'text';
};
const hidetransaction = () => {
  state.transaction = 'password';
};

const revealPasswordconfirm = () => {
  state.passwordConfirm = 'text';
};
const hidePasswordconfirm = () => {
  state.passwordConfirm = 'password';
};


const resetErrors = () => {
  state.erroremail1 = false;
  state.errorname = false;
  state.errorphone = false;
  state.erroremail = false;
  state.errorpassword = false;
  state.errorLastname = false;
  state.errorFirstname = false;
  state.errorconfirmpassword = false;
  state.errortransactionCode = false;
};
const onInput = () => {
  resetErrors();
};

const submit = async () => {
  state.loadingState = true;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex = /[a-zA-Z]/
  if (!state.form.firstname) {
    state.errorFirstname = true;
    state.loadingState = false;
    return false;
  } if (!state.form.lastname || state.form.lastname === state.form.firstname) {
    state.errorLastname = true;
    state.loadingState = false;
    return false;
  } else if (!state.form.email) {
    state.erroremail = true;
    state.loadingState = false;
    return false;
  } else if (!emailPattern.test(state.form.email)) {
    state.erroremail1 = true;
    state.loadingState = false;
    return false;
  } else if (!state.form.phone || state.form.phone.length < 10 || regex.test(state.form.phone)) {
    state.errorphone = true;
    state.loadingState = false;
    return false;
  } else if (!state.form.password || state.form.password.length <= 6) {
    state.errorpassword = true;
    state.loadingState = false;
    return false;
  } else if (state.form.comfirmpassword !== state.form.password) {
    state.errorconfirmpassword = true;
    state.loadingState = false;
    return false;
  } else if (state.form.transactionCode.length < 4 || state.form.transactionCode.length > 4) {
    state.errortransactionCode = true
    state.loadingState = false;
    return false;
  } else {
  
    try {

      const online = useOnline()
      if (!online.value) {
        notify({
          title: "No Internet Connection",
          text: "Please check your internet connection and try again.",
        });
        state.loadingState = false;
        throw new Error("No internet connection");
      }
      const response = await fetch('https://api-abanise-five.vercel.app/register', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          firstname: state.form.firstname,
          lastName: state.form.lastname,
          transaction: state.form.transactionCode,
          email: state.form.email,
          pwd: state.form.password,
          phone: state.form.phone,
        })

      })

      if (!response.ok) {
        const errorData = await response.json();
        notify({
          title: "error",
          text: errorData.message,
        });
        state.erromessage = errorData.message;
        state.loadingState = false;
        throw new Error(errorData.message);

      }
      state.loadingState = true
      const data = await response.json();
      state.erromessage = ''
      state.message = data.success

      notify({
          title: "successful",
          text: data.success,
        });
      console.log('Success:', data);
      setTimeout(() => {
        state.$router.push('/Login')
        state.loadingState = false
      }, 10);
    } catch (error) {
      console.log(error)
    }
  }
}



//  watch: {
//   email(value) {
//    state.submit();
//   }
// }


</script>

<style>
.image {
  background-image: url(../assets/image/dash.jpg);
}

.shadow {
  -webkit-box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
}

.input-containers {
  position: relative;

}

.input-field {
  width: 100%;
  background: transparent;
  outline: none;
  padding: 0 0 0.5rem 0.5rem;
}

.input-field:focus+.input-label,
.input-field:not(:placeholder-shown)+.input-label {
  transform: translateY(-1.3rem);
  font-size: 1rem;
  color: rgb(3, 3, 3);



}

.input-label {
  position: absolute;
  bottom: -15px;
  left: 0;
  height: 3rem;
  pointer-events: none;
  padding-left: 0.5rem;
  transform-origin: left;
  transition: all 0.3s ease;
}


/* .bg{
    background-image: url(../assets/image/aminatebg.gif);
    background-position: center;
    background-size:cover;
    background-repeat: repeat;
  }
  .bg2{
     background-image: url(../assets/image/animatebg2.gif);
    background-position: center;
    background-size:cover;
    background-repeat: repeat;
  } */</style>
