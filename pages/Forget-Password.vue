<template>
  <div class="   text-[poppins] bg2 w-full overflow-x-hidden ">

    <div class=" md:w-2/5 sm:w-1/2   sm:pt-14 pt-8  bg    ">

      <div class="  md:px-10  px-5 sm:w-full">
        <div class="flex justify-center"> <img src="@/assets/image/maleuser.svg" alt=" login image"
          class=" w-1/4 sm:w-1/4"> </div>
      <p class="font-semibold text-2xl font-sans text-secondary text-center ">Forget Password </p>

      <p class="font-semibold text-[15px] font-sans  text-center ">Enter your email </p>     
        <form class=" " @submit.prevent="submit" action="">
          <div class=" py-4">
            <div class="flex input-containers     ">
            Dear hugdfgdff@gmail.com
            Your new password: 3333333
            thanks
              
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
            <Button class=" " :loading="state.loadingState" @click="submit()" loadingText="Authenticating"> submit</Button>
 
      
         
        </form>

        <p class=" flex gap-2  py-5 sm:text-[16px] text-[14px] ">Already have an Account? <router-link class="flex  text-primary"
            to="/Login"> <img src="@/assets/image/maleuser.svg" alt="" class=" w-4">Login</router-link></p>

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
  
  erroremail: false,
 
  loadingState: false,
  form: {

    email: '',
  },

  user: [

  ]
});





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

  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const regex = /[a-zA-Z]/
  if (!state.form.email || !emailPattern.test(state.form.email)) {
    state.erroremail = true;
    state.loadingState = false;
    return false;
  } else {
    try {
        console.log(state.form.email, 'state.form.email');
       
      const online = useOnline()
      if (!online.value) {
        notify({
          title: "No Internet Connection",
          text: "Please check your internet connection and try again.",
        });
        state.loadingState = false;
        throw new Error("No internet connection");
      }
      const response = await fetch('https://api-abanise-five.vercel.app/resetpassword/requestPasswordReset', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: state.form.email,
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
      console.log(data.success);
      notify({
        title: "successful",
        text: data.sucess,
      });
      console.log('Success:', data.sucess);
      setTimeout(() => {
        router.push('/login')
        state.loadingState = false
      }, 1000);
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