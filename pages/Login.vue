<template>
  <div class="   text-[poppins] bg2 w-full overflow-x-hidden ">

    <div class=" md:w-2/5 sm:w-1/2   sm:pt-14 pt-8  bg    ">

      <div class="  md:px-10  px-5 sm:w-full">
        <div class="flex justify-center"> <img src="@/assets/image/login-images.png" alt=" login image" class="w-1/2">   </div>
        <p class="font-semibold text-2xl font-sans  text-center ">Login</p>

        <p class="font-semibold text-[15px] font-sans  text-center ">Enter your credential to get access</p>
       
        <form class=" " @submit.prevent="submit" action="">
          <div class="">
            <div class="flex input-containers    mt-9 ">
              
              <input type="email" :class="state.erroremail ? ' border-secondary shake ' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md  h-[3rem]  px-5   outline-none font-normal    border border- rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.email">
              
              <label for="name" class="input-label  text-slate-600 font-normal"> <span
                  class=" py-0 px-1  bg-white h-6 w-fit">Your
                  Email</span> </label>

            </div>

            <p :class="state.erroremail ? 'flex' : 'hidden '" class="   text-red-700 text-['13rem']">
             Please enter your email properly</p>
          </div>


       

          <div class="mt-8 ">


            <div class="flex input-containers  b  border-primary  mt-2 ">

              <input :type="state.paswo" :class="state.errorpassword ? ' border-secondary shake ' : '  border-primary  '"
                  @input="onInput"
                  class="w-full focus:border-primary input-field drop-shadow-md   h-[3rem]  px-5   outline-none font-normal    border rounded-[5px] focus:border-primry"
                  placeholder=" " v-model="state.form.password">
             
              <label for="name" class="input-label  text-slate-600 font-normal"> <span
                  class=" py-0 px-1  bg-white Phone Number h-6 w-fit">Password</span> </label>

              <div class="w-0 h-1">
                <toggle class="  relative top-4 right-5" @revealPassword="revealPassword"
                  @hidePassword="hidePassword"> </toggle>
              </div>
            </div>

            <p :class="state.errorpassword ? 'flex' : 'hidden '" class=" text-red-700 text-['13rem']">Enter Password
              </p>

          </div>

          <div class=" flex justify-end text-primary sm:text-[18px] text-[15px] my-3">
             <router-link to="/Forget-Password"> Forget password?</router-link>
          </div>
         
        
          
            <Button class=" " :loading="state.loadingState" @click="submit()" loadingText="Authenticating"> Login</Button>
 
      
         
        </form>

        <p class=" flex  py-5 sm:text-[16px] text-[14px] ">Dont have an account yet? <router-link class="flex  text-primary"
            to="/Register"> <img src="@/assets/image/maleuser.svg" alt="" class=" w-4">Register</router-link></p>

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

import { useRouter } from 'vue-router'

const router = useRouter()


const state = reactive({
  errorphone: '',
  disabled: '',
  erromessage: '',
  paswo: "password",
  erroremail: false,
  errorpassword: false,
  loadingState: false,
  form: {
    username: '',
    email: '',
    password: '',
    comfirmpassword: '',
    phone: "",
    transactionCode: "",
  },

  user: [

  ]
});

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



const revealPassword = () => {
  state.paswo = 'text';
};
const hidePassword = () => {
  state.paswo = 'password';
};
const resetErrors = () => {

  state.erroremail = false;
  state.errorpassword = false;
};
const onInput = () => {
  resetErrors();
};











const submit = async () => {

  state.loadingState = true;
  state.loadingState = true;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex = /[a-zA-Z]/
  if (!state.form.email || !emailPattern.test(state.form.email)) {
    state.erroremail = true;
    state.loadingState = false;
    return false;
  } else if (!state.form.password) {
    state.errorpassword = true;
    state.loadingState = false;
    return false;
  } else {
    try {
        console.log(state.form.email, 'state.form.email');
        console.log(state.form.password, 'state.form.password');
      const online = useOnline()
      if (!online.value) {
        notify({
          title: "No Internet Connection",
          text: "Please check your internet connection and try again.",
        });
        state.loadingState = false;
        throw new Error("No internet connection");
      }
      const response = await fetch('https://api-abanise-five.vercel.app/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: state.form.email,
          pwd: state.form.password,
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
        router.push('/user/Dashboard')
        state.loadingState = false
      }, 10);
    } catch (error) {
      console.log(error)
    }
  }
}






</script>



<style>
.image {
  background-image: url(../assets/image/dash.jpg);
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
  transform: translateY(-1.5rem);
  font-size: 1rem;
  color: rgb(3, 3, 3);



}

.input-label {
  position: absolute;
  bottom: -8px;
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
  } */

.shadow {
  -webkit-box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
}</style>