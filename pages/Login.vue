<template>
  <div class="h-screen   text-[poppins] bg2 w-full overflow-x-hidden ">

    <div class=" w-fit pt-20  bg h-screen shadow  ">

      <div class="md:max-w-1/2   lg:max-w-1/2 sm:max-w-md md:px-20 px-2  sm:w-full">
        <div class="flex justify-center"> <navigation-logo></navigation-logo></div>
        <h1 class="font-semibold text-xl font-sans  text-center ">Login in to your account to continue.</h1>
        <p class=" message pl-5 text-xl text-red-700 pb-9 uppercase text-center text-">{{ erromessage }}</p>
        <form class=" " @submit.prevent="submit" action="">
          <div class="">
            <div class="flex input-containers    mt-2 "> <input  type="email"
                :class="state.erroremail ? ' border-secondary' : '  border-primary  '" @input="onInput"
                class="w-full  focus:border-primary input-field bg-white h-[2.5rem]  px-5   outline-none font-normal   border-2 rounded-[5px] focus:border-primry"
                placeholder=" " v-model="state.form.email">
              <label for="name" class="input-label  text-slate-600 font-normal"> <span
                  class=" py-0 px-1  bg-white h-6 w-fit">Your
                  Email</span> </label>

            </div>

            <p :class="state.erroremail ? 'flex' : 'hidden '" class=" absolute  text-red-700 text-['13rem']">
             Please enter your email properly</p>
          </div>


       

          <div class="my-10 ">


            <div class="flex input-containers  b  border-primary  mt-2 ">
              <input :type="state.paswo" @input="onInput"
              :class="state.errorpassword ? ' border-secondary' : '  border-gray-500 '"
      
                class="w-full input-field  h-[2.5rem] drop-shadow-md px-5 border-gre border-gray-500  outline-none font-normal    border-2 rounded-[5px] focus:border-primary "
                placeholder=" " v-model="state.form.password">
              <label for="name" class="input-label  text-slate-600 font-normal"> <span
                  class=" py-0 px-1  bg-white Phone Number h-6 w-fit">Password</span> </label>

              <div class="w-0 h-1">
                <toggle class="  relative top-3 right-5" @revealPassword="revealPassword"
                  @hidePassword="hidePassword"> </toggle>
              </div>
            </div>

            <p :class="state.errorpassword ? 'flex' : 'hidden '" class=" text-red-700 text-['13rem']">Enter Password
              </p>

          </div>
          <p class=" text-[15px] text-secondary w-full text-right mb-40"> <router-link class=" text-primary "
            to="/forgetPassword">Forget Password</router-link></p>

      

          <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> Login</Button>

        </form>

        <p class=" font-semibold">Dont have an account yet? <router-link class=" text-primary"
            to="/Register">Register</router-link></p>

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
        state.$router.push('/user/Dashboard')
        state.loadingState = false
      }, 10);
    } catch (error) {
      console.log(error)
    }
  }
}






</script>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'
import { NuxtLink } from '../.nuxt/components';


export default {
  setup() {



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
    return {};
  },

  data() {
    return {
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
    }
  },

  methods: {

    revealPassword() {
      state.paswo = 'text';
    },
    hidePassword() {
      state.paswo = 'password';
    },
    resetErrors() {

      state.erroremail = false;
      state.errorpassword = false;
    },
    onInput() {
      state.resetErrors();
    },



    async submit() {
      state.loadingState = true;

      if (!state.form.email) {
        state.erroremail = true;
        state.loadingState = false;
        return false;
      } else if (!state.form.password) {
        state.errorpassword = true;
        state.loadingState = false;
        return false;
      } else {

        try {
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
            state.loadingState = false
            const errorData = await response.json();
            state.erromessage = errorData.message;
            throw new Error(errorData.message);

          }
          state.loadingState = true
          const data = await response.json();
          state.message = data.success
          console.log('Success:', data);
          setTimeout(() => {
            state.$router.push('/user/Dashboard')

            state.loadingState = false
          }, 2);
        } catch (error) {
          console.log(error)
        }
      }
    },



  },



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
  } */

.shadow {
  -webkit-box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 7px 37px 3px rgba(0, 0, 0, 0.2);
}</style>