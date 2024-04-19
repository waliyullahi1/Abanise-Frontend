import { useRouter } from 'vue-router';
<template>
  <div>

    <header class="w-full  flex justify-center ">
      <div class=" w-full  border-b-2 border-primary">
       
        <div class="   mx-auto px-2 bg-gray-100 font-sembold">
          <div class="text-[12px] gap-3 flex">

            <p class=" text-yellow-600">Phone number: <span class="ml-1 text-black">07068393706</span></p>
            <p>|</p>
            <p class="text- text-yellow-600">Email <span class="ml-1 text-black">alfaabanise@gmail.com</span></p>
          </div>
        </div>
        <div class=" bg-primary ">
          <div class=" px-2 bg-primary py-3 justify-between items-center text-white flex container mx-auto">
             <navigation-logo2></navigation-logo2>
             <router-link to="/"  class=" font-medium">Home</router-link>
          </div>
         
        </div>
        <div class="text-[poppins] bg-gray-100 font-medium text-xl   ">

          <div class="  w-full duration-1000 text-black  my-auto mx-auto   px-3 flex justify-between items-center ">

            <div class="w-full  overflow-hidden  h-fit flex ">
              <nav
                class=" duration-700 ease-in-out transform   place-contnt-center px-3  lg:h-7   justify-ed items-center flex">
                <ul @click=" this.rotate = true" class=" lg:bg-transparent text-[13px] text-primary w-fit  flex gap-4">
                  <li
                    class="  h-full py  lg:mt-0 boder border-transparent  transform duration-200 ease-in-out  ">
                    <router-link to="/news" class="px-4 md:hover:border-b py-2">Home</router-link>
                  </li>

                  <li
                    class="  h-full py  lg:mt-0 boder border-transparent  transform duration-200 ease-in-out  ">
                    <router-link to="/news/Admission" class="px-4 md:hover:border-b py-2">Admission</router-link>
                  </li>

                


                  <li
                    class="  md:hover:border-b lg:mt-0 boder border-transparent  transform duration-200 ease-in-out  ">
                    <router-link to="/">PostUTME</router-link>
                  </li>


                  <li class="  md:hover:border-b   boder border-transparent  transform duration-200 ease-in-out  ">
                    <router-link to="/">JAMB</router-link>
                  </li>


                  <li class="  md:hover:border-b boder border-transparent  transform duration-200 ease-in-out  ">
                    <router-link to="/">O'level</router-link>
                  </li>
                  <li
                    class=" font-semibold    hover:border-b boder border-transparent transform duration-200 ease-in-out ">
                    <a href="#how">NYSC</a>
                  </li>
                  <li
                    class=" font-semibold hover:border-b boder border-transparent econdary transform duration-200 ease-in-out ">
                    <router-link to="">Scholarships</router-link>
                  </li>


                </ul>
              </nav>
            </div>



          </div>

        </div>
      </div>

    </header>
  </div>
</template>

<script>


export default {


  data() {
    return {
      rotate: false,
      flex: true,

    }
  },

  props: {
    headertext: Boolean

  },



  methods: {
    transc() {
      this.$emit("transaction",)
    },
    emitclick() {
      this.rotate = !this.rotate

    },

    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

}
</script>

<style>
.shodow {
  box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
}
</style>