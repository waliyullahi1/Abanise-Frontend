<template>
  <div class=" w-full duration-500" :class="top?'  -translate-y-36':'translate-y-0 '">
    <div :class="headertext ? ' md:bg-transparent' : ' bg-primary shodow'"
    class="text-[poppins]  w-full lg:top-0   place-contnt-center fixed    ">
    <div class=" contains  mx-auto px-2 bg-gray-100 font-sembold">
      <div class="sm:text-[15px] text-[13px] gap-3 flex">

        <p class="text- text-yellow-600">Phone number: <span class="ml-1 text-black">07068393706</span></p>
        <p>|</p>
        <p class="text- text-yellow-600  hidden sm:flex">Email <span class="ml-1 text-black">alfaabanise@gmail.com</span></p>
      </div>
    </div>
    <div :class="headertext ? 'bg-transparent ' : ' bg-primary'"
      class=" container w-full duration-1000  mx-auto sm:mb-4 mb-0  px-3 flex justify-between items-center ">
      <router-link to="/" class="flex gap-5 w-full  items-center">
        <div>
          <navigation-logo2></navigation-logo2>

        </div>
        <div class=" text-white hidden sm:block h-fit">
          <p class=" leading-[20px] sm:text-xl text-[15px]   font-medium">Abanise_edu</p>
          <p class=" leading-[20px] sm:text-[16px] text-[13px] font-medium"> consultant</p>
        </div>
      </router-link>


      <div @click="emitclick" class="w-full   h-fit flex justify-end">
        <nav
          class=" lg:anination translate- lg:translate-x-0 duration-700 ease-in-out transform  lg:top-0 top-[4rem]  place-contnt-center fixed  lg:static justify-center px-3  lg:h-7 lg:w-full w-[15rem] lg:justify-end text-[13px] justify-ed items-center lg:flex"
          :class="rotate ? 'translate-x-32' : 'translate-x-[30rem]'">
          <ul @click=" this.rotate = true"
            class=" lg:bg-transparent bg-primary px-5 lg:px-0  h-screen lg:h-4 justify-start  lg:justify-center lg:flex-row flex-col flex klg:mt-5 mt-0 lg:gap-5 gap-4">
            <li class=" font-semibold md:hover:border-b mt-10 lg:mt-0 boder border-transparent hover:text-secondary transform duration-200 ease-in-out  text-white">
              <router-link to="/">Home</router-link></li>
             
              <li  class=" font-semibold   text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out ">
              <nuxt-link :to="{ path: '/', hash: '#ScratchCards' }">Cards</nuxt-link>

            </li>
            <li @click=" transc()"
              class=" font-semibold   text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out ">
              <h1> <a href="https://news.abaniseedu.com/">News</a></h1>
            </li>

            <div
              class=" font-semibold  text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out ">
              <router-link to="/aboutus">About us</router-link></div>

            <li
              class=" font-semibold  text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out ">
                <nuxt-link :to="{ path: '/', hash: '#how' }">How it work</nuxt-link></li>

            <li
              class=" font-semibold  text-white hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out ">
              <router-link to="/login">login</router-link></li>


          </ul>
        </nav>
      </div>


      <div @click="emitclick" class="  block lg:hidden ">


        <div>
          <div class="w-8 h-1 bg-white relative mt-7 mr-5  transform duration-200 "
            :class="rotate ? 'rotate rotate-45 top-2 ' : 'rotate-0'"></div>
          <div class="w-8 h-1 mb-7 bg-white relative  mt-1 transform duration-200 "
            :class="rotate ? ' rotate -rotate-45 buttom-2 ' : 'rotate-0 '"></div>
        </div>
      </div>
    </div>

  </div> 
  </div>
 
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

let rotate = ref(false);
let flex = ref(true);
let scrollPosition = ref(0);
let top = ref(false);

let lastScrollPosition = 0;

const transc = () => {
  emit('transaction');
};

const emitclick = () => {
  rotate.value = !rotate.value;
};

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset;
  top.value = currentScrollPosition > lastScrollPosition;
  scrollPosition.value = currentScrollPosition;
  lastScrollPosition = currentScrollPosition;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

defineProps({
  headertext: Boolean
});
</script>



<style>

.shodow {
  box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
}
</style>