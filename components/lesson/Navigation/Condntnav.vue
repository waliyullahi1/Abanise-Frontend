<template>
    <div class="  gap-1 top-0 right-2 left pt-7 md:pt-0  h-full justify-between  fixed flex flex-col md:flex-row-reverse justify-beween  w-full se">
      <div class="md:w-[80%] w-[95%] mx-auto  md:h-[4rem] h-[3.5rem] mt-0 md:mt-7  px-5     text-md  rounded-2xl shadows bg-white"  >
        <div class=" flex   justify-between overflow-hidden items-center h-full  mx-auto w-[98%]">
           <div class="w-fit gap- flex items-center  gap-3">
            <img src="@/assets/abanisee.png" class="w-[40px]" alt="" />
            <div>
              <p class=" md:text-sm text-xs  leading-4"><span class="font-semibold s ">Welcome back, <br class="sm:hidden block"></span> Mr. Edun Stephen </p>
            </div>
          </div>
    
          <div class="flex gap-3 w-fit items-center">
             <img src="/lesson/message.png" alt="" class="w-6 md:block hidden"> 
             <img src="/lesson/notification.png" alt="" class="w-6   md:block hidden"> 
             <img src="/lesson/search.png" alt="" class="w-6   md:block hidden"> 
             <div class=" rounded-full h-7 w-7 block overflow-hidden  md:hidden  ">
               <img src="@/assets/image/ghost.png" alt="" class=""> 
             </div>
            
          </div>
        </div>
         
       
          
      </div>
     
       <div class="md:w-[250px] text-white md:bloc px-5 k  md:pt-7  pt-0 z-40 md:bg-primary  md:translate-x-0 duration-700  shadows text-[14px] h-fit md:h-screen">
            
                <div class=" w-full  md:flex flex-col  hidden gap-2 items-center justify-center">
                    <div class="rounded-full overflow-hidden  w-20  h-20">
                        <img src="@/assets/image/ghost.png" alt="">
                    </div>
                    
                    <h4 class="  text-md text-white">Mr. Edun Stephen</h4>
                </div>
                <div>
                    <p class=" text-md md:block hidden pl-4 mx-3 text-gray-200 mt-3">Main</p>
                </div>
     
      
            <div class=" md:py-3 py-0 px-2 bg-black md:bg-primary py  mb-2 md:px-0 mx- md:mx-0 rounded-xl overflow-hidden mt-1">
              <div class=" flex  px-  w-full  flex-col bg-slate-800 gap-">
                <div class=" md:block gap-3 flex w-full justify-between ">
                  <NuxtLink v-for="(link, index) in  links"   class="group w-fit "  to="/user/scratch">
                    <div   class="px-0 py-0 group  md:w-full w-fit  text-white md:py-2 md:px-3 rounded-xl group-hover md:group-hover:shadow-xl group-hover:scale-110  md:group-hover:translate-y-0 ease-in-out  duration-500    md:group-hover:bg-secondary">
                      <div  class="flex md:flex-row     md:justify-start justify-center  flex-col     items-center      md:group-hover:translate-x-3 ease-in-out  duration-500 group-hover:gap-0 md:group-hover:gap-4 gap-2 md:gap-5">
                      <img :src="`/lesson/${link.image}.png`" alt="" class=" md:w-5 w-5 h-5 md:h-5" srcset="">
                      <p class="font-semibold text-sm md:text-md whitespace-nowrap truncate">{{ link.label }}</p>                        
                      </div>
                      <!-- <div  class="flex md:flex-row  flex-col group-hover:traslate-y-9   items-center  group-hover:-translate-y-3 ease-in-out  duration-500 md:group-hover:gap-4 gap-1 md:gap-5">
                      <img :src="`/lesson/${link.image}.png`" alt="" class=" md:w-5 w-4 h-4 md:h-5" srcset="">
                        <p class="font-se sm:text-[16px]  text-[11px] tracking-wide flex justify-center ">{{link.label}}</p>
                        
                      </div> -->
                    </div>
                  </NuxtLink>
                </div>
      
                <div>
              
                </div>
      
              
              </div>
            </div>
      
          
          </div>
    </div>
  </template>
  
  <script setup>
import { ref, reactive, toRaw } from 'vue';

 const links = reactive([
  
  {label:'Home', image:'home' },
  {label:'Students', image:'student' },
  {label:'Teachers', image:'teacher' },
  {label:'Admissions', image:'admission' },
  {label:'Events', image:'event' },
  {label:'Schedules', image:'schedules' },

  {label:'School Gallery', image:'photo' },

])
  


 
  </script>
  


  
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
  p, h4, .content {
  font-family: 'DM Sans', sans-serif; /* DM Sans for paragraphs and content */
}

  .shadows {
    box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  }


/* Define keyframe for staggered sliding effect */
@keyframes staggeredSlideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.staggered-input {
  opacity: 0;
  animation: staggeredSlideIn 0.5s forwards;
}

.staggered-form .staggered-input.delay-0 {
  animation-delay: 0s;
}

.staggered-form .staggered-input.delay-1 {
  animation-delay: 0.2s;
}

.staggered-form .staggered-input.delay-2 {
  animation-delay: 0.4s;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

.subtitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}


  </style>