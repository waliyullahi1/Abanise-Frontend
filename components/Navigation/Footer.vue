<template>
  <div id="footer" class="">
    <div class=" overflow-hidden w-fit font-[Poppins] fixed animate-bounce right-[1rem] bottom-[3rem] 0 top- flex justify-end ">
     <div class="bg- bg-green-600 cursor-pointer shadow-[90px] rounded-full p-2">
       <a href="https://wa.me/message/SRWH2WAPTXUAN1">
        <img class="w-[50px] group  hover:scale-105 f" src="@/assets/image/whatsapps.svg"/>
       </a>
     </div>
    </div>
  <footer class=" pt-10 bg-[#000100] text-[13px]  w-full ">
       <div class="flex md:flex-row flex-col  mx-auto  container justify-between items-center px-5 py-5">
          <p class=" whitespace-nowrap text-white">Get connected with us on socials network!</p>
          <div class="flex gap-3">
            <a href=" " class=" flex gap-1"><img src="@/assets/image/whatsapp.svg" class="w-5"/><p class="text-white"> Whatsapp</p></a>

            <a href=" " class=" flex gap-1"><img src="@/assets/image/Facebook.svg" class="w-5"/><p class="text-white">Facebook</p></a>

            <a href=" " class=" flex gap-1"><img src="@/assets/image/twitter.svg" class="w-5"/><p class="text-white"> Twitter</p></a>
          </div>
       </div>
        <div class="flex py-10 gap- container px-5 border-t-2 mx-auto">
        <div class="w-full md:w-1/3 mr-10">
          <logos class="w-32 "></logos>
          <p class="sm:text-[15px] text-[13px] text-white">We are the best source. With a platform that is trusted by Paystack , you can shop online with complete confidence and no worries</p>
        </div>

       <div class=" w-full md:flex hidden">
         <div class="md:grid md:grid-cols-3 flex flex-col justify-center text-white  ">
          

           <div class="mt-5 t">
                <p class=" text-[15px] font-semld mb-5 ">PRODUCT</p>
                <div class="flex flex-col text-[14px]  gap-2">
                    <a href="#section" class=" hover:text-secondary  w-fit " >Vend Jamb Pin <router-link to="/1/Waec/result%20checker"></router-link> </a>
                    <a href="#section" class=" hover:text-secondary  w-fit "><router-link to="/1/Waec/result%20checker">Waec scratch card</router-link> </a>
                      <a href="#section" class=" hover:text-secondary  w-fit "><router-link to="/4/GCEWAEC/result%20checker">Waec GCE epin</router-link></a>
                     <a href="#section" class=" hover:text-secondary  w-fit "><router-link to="/2/Neco/result%20checker">Neco scratch card</router-link> </a>
                       <a href="#section" class=" hover:text-secondary  w-fit "> <router-link to="/3/Nabteb/result%20checkerNabteb">Nabteb scratch card</router-link></a>
                         <a href="#section" class=" hover:text-secondary  w-fit "><router-link to="/6/Nabteb/result%20checkerNabteb">Nabteb GCE Epin</router-link> </a>
                </div>
           </div>

          <div class="mt-5">
             <p class=" text-[15px] mb-5 te ">USEFUL LINKs</p>
                 <div class=" text-[15px]  flex-col  flex gap-2 ">
                    <a href="#how" class=" hover:text-secondary w-fit "> <router-link to="/1/Waec/result%20checker">How it is works </router-link></a>
                    <a href="" class=" hover:text-secondary  w-fit  ">Blogs </a>
                      <a href="" class="hover:text-secondary    w-fit ">Princing</a>
                     <a href="" class=" hover:text-secondary   w-fit ">Helping </a>
                </div>
           </div>

           <div class="mt-5">
             <p class="w-fit text-[15px] mb-5 font-sed  ">CONTACT</p>
                 <div class="flex flex-col text-[14px] gap-2">
                    <a href="" class=" w-fit  hover:text-secondary flex  "> 
                     <img src="@/assets/image/Location.svg" class="w-5"/> 
                      Ibadan Road, Arround Total FIlling Station, Iwo </a>
                    <a href=""  class="  w-fit flex hover:text-secondary   "><img src="@/assets/image/phone.svg" class="w-7"/>07068393706, 08134105599 </a>
                     
                </div>
           </div>

           
         </div>
       </div>
      
      </div>
      <div class="flex  text-center text-white justify-center items-center gap-1"> 
                      <!-- <div class=" w-4 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path d="M24 4C12.972066 4 4 12.972074 4 24C4 35.027926 12.972066 44 24 44C35.027934 44 44 35.027926 44 24C44 12.972074 35.027934 4 24 4 z M 24 7C33.406615 7 41 14.593391 41 24C41 33.406609 33.406615 41 24 41C14.593385 41 7 33.406609 7 24C7 14.593391 14.593385 7 24 7 z M 24.5 12C18.328169 12 13.5 17.50434 13.5 24C13.5 30.49566 18.328169 36 24.5 36C28.1558 36 31.376101 34.025262 33.34375 31.121094 A 2.0002 2.0002 0 1 0 30.033203 28.878906C28.714852 30.824738 26.7282 32 24.5 32C20.729831 32 17.5 28.55034 17.5 24C17.5 19.44966 20.729831 16 24.5 16C26.406567 16 28.126085 16.856239 29.421875 18.324219 A 2.0008888 2.0008888 0 1 0 32.421875 15.675781C30.451665 13.443761 27.625433 12 24.5 12 z" fill="currentColor" />
                          </svg>
                      </div> -->
          Copyright 2024 abaniseedu.com ©  All Rights Reserved
            
           
          </div>
    </footer>
  </div>
</template>

<script>
import Logos from './Logos.vue'
export default {
  components: { Logos },

}
</script>

<style>

</style>