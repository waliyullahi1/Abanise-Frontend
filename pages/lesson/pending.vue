


<template>
    <div class=" h-screen bg-gray-100 text-[poppins]">
       <LessonNavigationPending/>
          <div class=" flex h-[70%]  w-full bg- ">

            <div class=" md:w-[320px] w-[95%] md:block b-700 hidden  h-4 bg600 ">

            </div>

            <div class=" text-center relative z-40 bg-slate-200 md:mx-10 mx-2  w-full  md:h-full  h-fit py-6   " >
              <div class="  w-full  flex justify-center">
                <img src="@/assets/image/no_notification.png" alt="no_notification" class=" w-96">
              </div>
              <h4 class=" text-2xl font-bold "> Welcome, Mubarak! </h4>
              <p>   Please your have to wait  for Adme  to preview and  Accept your Account </p>
              <p class="  font-bold ">   Account Status: <span class=" text-red-600">Pending</span> </p>
              <div class=" w-full flex justify-end "><div class=" px-2 sm:w-[20%] w-[60%] shadow-lg"><LessonButton> Log out</LessonButton></div></div>
            </div>


          </div>
    </div>
    
  </template>



<script setup>
  

  
  
  
  
  
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;700&display=swap');
p, h4, div, .content {
  font-family: 'DM Sans', sans-serif;
}


</style>