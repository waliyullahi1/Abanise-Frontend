<template>
  <div class="h-screen  text-[poppins]   w-full overflow-x-hidden ">
    <div class=" md:max-w-1/3  lg:max-w-md sm:max-w-md mx-4 mt-10 sm:mx-10">
      <div class="flex justify-center"> <img src="@/assets/image/maleuser.svg" alt=" login image" class=" w-1/4 sm:w-1/4">   </div>
        <p class="font-semibold text-2xl font-sans text-secondary text-center ">Forget Password </p>

        <p class="font-semibold text-[15px] font-sans  text-center ">Enter your email to get message on gmail </p>
      <p class="message pl-5 text-2xl text-green-700 pb-2 text-center text-">{{message}}</p>
      <form class="md:max-w-md lg:max-w-md sm:w-full" @submit.prevent="submit" action="">
        <div class="mb-5">
          <div class="flex b drop-shadow-md mt-2">
            <input type="text" :class="erroremail ? ' border-secondary':'  border-primary '" @input="onInput" class="w-full focus:border-primary h-[3rem] px-5 outline-none font-normal border rounded-[5px] focus:border-primry" placeholder="Email " v-model="form.email">
          </div>
          <p :class="erroremail ? 'flex':'hidden '" class=" pl-5 text-red-700 text-['13rem']"> Enter email</p>
        </div>
        <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> Login</Button>
      </form>
      <p class=" text-[15px]">Back to home?  <router-link class="text-primary" to="/login">Login</router-link></p>
    </div>
  </div>
</template>

<script setup >
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

 


    const router = useRouter();
    const loadingState = ref(false);
    const erroremail = ref('');
    const form = ref({
      email: '',
    });

    const resetErrors = () => {
      erroremail.value = false;
    };

    const onInput = () => {
      resetErrors();
    };

    const submit = async () => {
      if (!form.value.email) {
        console.log('hhhhh');
        erroremail.value = true;
        loadingState.value = false;
        return false;
      } else {
        console.log('fffffffff')
        try {
          const response = await fetch('https://api-abanise-five.vercel.app/resetpassword/requestPasswordReset', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
              email: form.value.email,
            })
          })

          if (!response.ok) {
            const errorData = await response.json();
            erroremail.value = errorData.message;
            throw new Error(errorData.message);
          }
          loadingState.value = true
          const data = await response.json();
          console.log('Success:', data);
          setTimeout(() => {
            router.push({ name: 'login' })
            loadingState.value = false
          }, 7000);
        } catch (error) {
          console.log(error)
        }
      }
    };

    watch(() => form.value.email, submit);

   

</script>

<style>
  .image{
    background-image: url(../assets/image/dash.jpg);
  }
</style>
