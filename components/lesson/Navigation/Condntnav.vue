<template>
  <div>
    <div class=" bg-slate-400 px-2 overflow-scrol  gap-1   pt-7 md:pt-0  h-full justify-between fixed   flex flex-col md:flex-row-reverse justify-beween  w-full se">
      <div class="md:w-[80%] w-[95%] mx-auto  md:h-[4rem] h-fit mt-0 md:mt-7  px-2 py-2     text-md  rounded-2xl shadows bg-white"  >
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
     
       <div class="md:w-[250px] w-[95%] text-white md:bloc md:px-5 px-0 mx-auto k  md:pt-7  pt-0 z-40 md:bg-primary  md:translate-x-0 duration-700  shadows text-[14px] h-fit md:h-screen">
            
                <div class=" w-full  md:flex flex-col  hidden gap-2 items-center justify-center">
                    <div class="rounded-full overflow-hidden  w-20  h-20">
                        <img src="@/assets/image/ghost.png" alt="">
                    </div>
                    
                    <h4 class="  text-md text-white">Mr. Edun Stephen</h4>
                </div>
                <div>
                    <p class=" text-md md:block hidden pl-4 mx-3 text-gray-200 mt-3">Main</p>
                </div>
     
      
            <div class=" md:py-3 py-0  backdrl backdrop-blur-3xl bg-slate-100  bg-whit md:bg-primary py  mb-2 md:px-0 mx- md:mx-0 rounded-xl oen mt-1">
              <div class=" flex h-[98%] overflow-x-clip w-[98%] mx-auto  flex-col bg-slat gap-">
                <div class=" md:block gap-5 flex w-full justify-between ">
                  <NuxtLink v-for="(link, index) in  links" 
                
                  class="group bg-whie h-fit w-fit  "  to="/user/scratch">
                    <div   class="px-0 py-1 group bg-whe md:w-full w-fit  text-white md:py-2 md:px-3  group-hover md:group-hover:shadow-xl group-hover:-translate-y-6   md:group-hover:translate-y-0 ease-in-out  duration-500    md:group-hover:bg-secondary">
                      <div  class="flex md:flex-row      md:justify-start justify-center  flex-col     items-center      md:group-hover:translate-x-3 ease-in-out  duration-500  md:group-hover:gap-4 sm:gap-1 gap-0 md:gap-5">
                        <div class="md:hidden group:r:absolute block">
                          <img :src="`/lesson/${link.image}1.png`" alt="" class=" md:w-5 hidden  group-hover:flex w-5 h-5 md:h-5" srcset=""> 
                          <img :src="`/lesson/${link.image}2.png`" alt="" class=" md:w-5 w-5 h-5 flex  group-hover:hidden md:h-5" srcset=""> 
                        </div>
                        <img :src="`/lesson/${link.image}.png`" alt="" class=" md:w-5 hidden md:block w-5 h-5 md:h-5" srcset=""> 
                      <p class="font-semibold sm:text-sm md:text-white text-black group-hover:text-primary md:group-hover:text-white  text-xs md:text-md whitespace-nowrap truncate">{{ link.label }}</p>                        
                      </div>
                   
                    </div>
                  </NuxtLink>
                </div>
      
                <div>
              
                </div>
      
              
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
  

const hoveredButton = ref(null);

// Calculate scale based on button's proximity to hovered button
const getScaleStyle = (index) => {
  if (hoveredButton.value === null) {
    return { transform: 'scale(1)' };
  }
  
  const distance = Math.abs(index - hoveredButton.value);
  
  // Determine scale based on proximity
  let scale = 1;
  if (distance === 0) scale = 1.2;        // Hovered button
  else if (distance === 1) scale = 1.1;   // First neighbors
  else if (distance === 2) scale = 1;   // Second neighbors
  else scale = 1.1;                       // Further buttons
  
  return { transform: `scale(${scale})` };
};


 
  </script>
  


  
  <style scoped>
  /* Font imports */
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap');
  p, h4, .content {
    font-family: 'DM Sans', sans-serif;
  }
  .over {
  overflow-x: hidden; /* Hide horizontal overflow */
  overflow-y: visible; /* Show vertical overflow */
}
  /* Box shadow for button hover effect */
  .shadows {
    box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  }
  .over{
     overflow-y: visible;
      overflow-x: hidden;
  }
  
  /* Define keyframe animation for staggered input effect */
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


  
  