<template>
    <section class=" lg:w-[80%] w-[96%] mt-9 mx-auto">
      <h2 class="text-xl font-medium">Admission </h2>
      <div class=" flex gap-4 w-full">
        <div class="  md:w-3/5 w-full ">


          <div   class="    border-y-4  border-y-primary  mt-2 shadow-lg bg-white ">
            <div>

              <div class="sm:flex sm:px-10 py-5 px-4 border-b-2  justify-start   items-center">
                <div class=" sm:w-2/5 w-full  py-3 flex justify-center items-center h-48 overflow-hidden">
                  <img src="@/assets/image/UNIZIK-1.png" class="v w-full  " alt="">
                </div>
                <div class=" sm:w-3/5  w-full  r">
                  <h3 class="  sm:text-[18px] text-[16px] hover:text-primary  font-medium ">WAEC GCE Result (1st Series) 2024 Out – Check Here </h3>

                  <h3 class="break-all title text-[13px]  sm:text-[15px] ov">The MasterCard Foundation, Canada in partnership with KNUST he MasterCard Foundation, Canada in partnership with KNUST </h3>
                  <button class=" mt-2 py-1 px-2 text-[14px] duration-500 text-white hover:bg-gray-500 bg-primary">Read More »</button>
                </div>
                
              </div>

              <div class="grid gap-3 bg-gray-100 h-fit sm:px-5 px-2 font-normal  py-3 grid-cols-1 sm:grid-cols-2">
                <div v-for="item in 4 " :key="item.id" class="flex gap-2 justify-center  items-center">
                  <div class=" flex  justify-center items-center  w-2/5 sm:h-20 h-20 overflow-hidden">
                    <img src="@/assets/image/UNIZIK-1.png" class=" " alt="">
                  </div>
                  <div class=" w-3/5">
                     <h1 class=" text-[13px] sm:py-4 cursor-pointer hover:text-green-700   px-2 font-[500]">How To Print JAMB Mock Exam Venue And Time From JAMB Website </h1>
                  </div>
                 
                </div>
              </div>

            </div>

          </div>
         
        </div>

        <div class=" md:block md:w-full   hidden">
          <div class=" m   mt-5 shadow-lg bg-white ">
            <div v-for="item in 8" :key="item.id" class="  ">
              <h3 class=" px-4  py-3 border-t-2 text-[15px] hover:text-primary ">WAEC GCE Result (1st Series) 2024 Out –
                Check Here </h3>
            </div>
          </div>
        </div>

      </div>



    </section>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>