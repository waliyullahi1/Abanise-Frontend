<template>
    <div class="overflow-y-hidden text-[poppins]">

        <Header @transaction="transact()" :headertext="headerChange" class="fixed z-40 top-0"></Header>

        <div class="w-full "></div>
        <section class=" j">
            <Carousel :autoplay="9000"  :transition="2000" :wrap-around="true" :items-to-show="1">
                <slide v-for="slide in hero" :key="slide.id" class="w-full  ">
                    <div :style="{ backgroundImage: 'url(' + slide.image + ')' }"
                        class=" image sticky top-0 w-full h-[30rem] md:h-[40rem]  overflow-hidden ">
                        <div class="container pt-8  flex flex-col md:gap-4 gap-0 px-4 justify-center h-full mx-auto ">
                            <div class=" overflow-hidden  h-fit">
                                <h1
                                    class=" heropa  font-medium  text-5xl px-1 text-[1.5rem] sm:text-[2rem]  md:text-[3rem] text-white  ">
                                    {{ slide.heroSection }}</h1>
                            </div>
                            <div class=" w-full flex justify-center items-center overflow-hidden">
                                <div class="md:w-1/2 herop  w-full flex justify-center mx-2 items-center">
                                    <h2 class="sm:text-2xl text-[15px] text-[white] pt-0 ">{{ slide.heroParagraph }}</h2>
                                </div>

                            </div>
                            <div class="flex gap-5 mt-2 sm:mt-8 justify-center items-center">
                                <p
                                    class="flex items-center hover:bg-primary  gap-3 border py-2 px-2 w-fit opacity-60 md:text-2xl text-xl text-white">
                                    <img src="@/assets/image/sign.svg" class="w-10 md:w-10 " alt="Login image">
                                    <NuxtLink to="/login">login</NuxtLink>
                                </p>
                                <p class="md:text-2xl text-xl text-white hover:text-secondary py-2 px-2 border-l-2 ">
                                    <NuxtLink to="/Register">Register</NuxtLink>
                                </p>

                            </div>
                            <h2 class="font-semibold text-7xl text-white hidden font-mem]"> BUY ONLINE REGISTRATION CARD PIN
                                AUTOMATICINSTANTLY DELIVERY</h2>
                        </div>j
                    </div>
                    <template #addons>


                    </template>
                </slide>
            </Carousel>

            <div class="w-full bg-primary  ">
                <div
                    class="grid mx-auto px-4  container md:max-w-full lg:max-w-full justify-between md:grid-cols-4 grid-cols-1 gap-10 py-10 w-full h-fit">
                    <div class=" text-white  border-l-2 pl-3 ">
                        <h2 class=" text-[20px] mb-2  text-white">Discounted Prices</h2>
                        <p class="text-[14px] font leading-relaxed ">Buy Waec , Neco, Nabteb resultchecker and Waec pin,
                            Nabteb pin at highly subsized prices</p>
                    </div>

                    <div class=" text-white  border-l-2 pl-3 ">
                        <h2 class=" text-[20px] mb-2  text-white">Instant Delivery</h2>
                        <p class="text-[14px] font leading-relaxed ">Users receive Product at most 1 minutes after Purchase
                        </p>
                    </div>

                    <div class=" text-white border-l-2 pl-3  ">
                        <h2 class=" text-[20px] mb-2  text-white">24/7 Customer Support</h2>
                        <p class="text-[14px] font leading-relaxed ">Our customer service agent are always available to
                            respond to any issues that you might have</p>
                    </div>

                    <div class=" text-white  border-l-2 pl-3 ">
                        <h2 class=" text-[20px] mb-2  text-white">User-Friendly Experience</h2>
                        <p class="text-[14px] font leading-relaxed ">Top notch user Interface that give you a smooth and
                            satisfying experience</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="ScratchCards" class="container  my-10  mt-10 mx-auto">
            <marquee behavior="scroll" direction="left" scrollamount=""
                class=" text-sm md:text-[13px] font-bold w-full font-bo text-primary "><span>IF YOU WANT TO PROCESS YOUR
                    ADDMISSION TO ANY UNIVERSITY OR POLYTECHNIC KINDLY MESSAGE THIS WHATSAPP NUMBER 07068393706 </span>
            </marquee>
            <div class="  flex flex-col justify-cen
      ter gap-5 items-center ">
                <h2 class="text-3xl font-bold text">CARDS PRODUCT</h2>
                <h2 class="md:text-xl text-sm  font-normal ">CLICK ON ANY CARD BELOW TO BUY THE CARD PIN INSTANTLY </h2>
                <div class="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-20 px-10 ">
                    <div v-for="item in item" :key="item.id"
                        class=" group shadow border-primary w-full overflow-hidden  h-fit flex flex-col gap-3 rounded-[2rem]">
                        <div
                            class="w-full rounded-[2rem] group-hover:drop-shadow-xl  duration-700  pt-3 px-3 overflow-hidden ">
                            <div class="overflow-hidden duration-700   rounded-[2rem] "> <img v-bind:src="item.image"
                                    class="" /></div>

                        </div>
                        <div class=" flex py-3 px-3 flex-col gap-3 border-primary transform duration-300">
                            <div class=" group-hover:w-full w-1 duration-500 h-1 bg-primary"></div>
                            <p class="text-[17px] "><span>{{ item.card }}</span> {{ item.header }} <span
                                    class="tex- text-base font-sebold">({{ item.condition }})</span></p>
                            <div class="flex justify-between">
                                <p class="text-[17px]">Price</p>
                                <p class="font-semibold font-lg ">₦{{ item.price }}</p>
                            </div>
                            <p class="flex justify-between font-font-[17px] ">Availability(status) <span
                                    class="tex text-green-600 ">{{ item.status }}</span></p>
                        </div>
                        <NuxtLink :class="item.itIsAvalable ? 'block' : 'hidden'" target="_blank"
                            :to="`/${item.id}/${item.card}/${item.condition}`">
                            <Primary class="w-full text-center font-[14px] font-sembold">Buy now</Primary>
                        </NuxtLink>
                        <NuxtLink :class="item.itIsAvalable ? 'hidden' : 'block'" target="_blank" :to="`/`">
                            <Primary class="w-full text-center font-[14px]  font-sembold">Not Available</Primary>
                        </NuxtLink>
                        <!-- /${item.card}/${item.condition} -->
                    </div>

                </div>
            </div>
        </section>
        <section class="container  mx-auto my-20 py-5">
            <div class="">
                <h2 class="md:text-3xl text-xl text-primary font-bold text-center">PHONE AIRTIME AND DATA BUNDLE </h2>
                <p class="font-normal md:text-2xl text-[15px] mb-20 text-center">We provide affordable price for Airtime and
                    Data bundle </p>
                <div class="grid md:grid-cols-4 grid-cols-2  md:gap-10 gap-3 justify-center ">
                    <div class="flex flex-col justify-center items-center">
                        <div class="shadows rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img
                                src="@/assets/image/mtn.png" alt="mtn logo" class="w-[13rem]"></div>
                        <div class="e w-fit mt-5 py-2 px-3">
                            <h2 class="font-bold text-primary text-center   text-[1rem]">MTN Airtime VTU And Data</h2>
                            <Primary class="w-full text-center rounded-[2rem] font-semibold">
                                <NuxtLink to="/register"> Buy now</NuxtLink>
                            </Primary>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <div class="shadows rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img
                                src="@/assets/image/airtel.png" alt="mtn logo" class="md:w-[13rem] w-[10rem]"></div>
                        <div class="e w-fit mt-5 py-2 px-3">
                            <h2 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h2>
                            <Primary class="w-full text-center rounded-[2rem]  font-semibold">
                                <NuxtLink to="/register"> Buy now</NuxtLink>
                            </Primary>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center">
                        <div class="shadows rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img
                                src="@/assets/image/9mobile.png" alt="mtn logo" class="w-[13rem]"></div>
                        <div class="e w-fit mt-5 py-2 px-3">
                            <h2 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h2>
                            <Primary class="w-full text-center  rounded-[2rem] font-semibold">
                                <NuxtLink to="/register"> Buy now</NuxtLink>
                            </Primary>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center">
                        <div class="shadows  rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img
                                src="@/assets/image/glo.png" alt="mtn logo" class="w-[13rem]"></div>
                        <div class="e w-fit mt-5 py-2 px-3">
                            <h2 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h2>
                            <Primary class="w-full text-center  rounded-[2rem] font-semibold">
                                <NuxtLink to="/login"> Buy now</NuxtLink>
                            </Primary>
                        </div>
                    </div>

                </div>
            </div>
        </section>
        <section id="how" class="bg-gray-200">
            <div class="container  mx-auto my-20 py-20">
                <h2 class="text-3xl text-center text-primary">How it is works</h2>
                <h2 class="text-xl py-6 text-center text-primary">Start purchasing cards now. It’s easy, secure and takes
                    only a few minutes!</h2>

                <div class="w-full grid grid-cols-1 sm:px-5 px-11 sm:grid-cols-3 gap-6">
                    <div class="c shadow-lg rounded-2xl py-4 px-4 flex  gap-4 justify-center items-center flex-col ">

                        <div><img class="bg w-20 bg-primary py-4 px-4 rounded-full " src="@/assets/image/card1.svg"
                                alt="Select Card type & number of pins"></div>
                        <h2 class="text-3xl text-secondary font-mermaid">1</h2>
                        <p class=" text-xl text-center font-semibold ">Select Card type <br> & number of pins</p>
                        <p class=" text-[15px] text-center">Start by selecting the card you want to purchase from the above
                            list, then select the number of pins in next page </p>
                    </div>
                    <div class="c shadow-lg rounded-2xl py-4 px-4 flex  gap-4 justify-center items-center flex-col ">

                        <div><img class="bg-  w-20 bg-primary py-4 px-4 rounded-full " src="@/assets/image/payment.svg"
                                alt="Make Payment"></div>
                        <h2 class="text-3xl text-secondary font-mermaid">2</h2>
                        <p class=" text-xl text-center font-semibold ">Make Payment <br> </p>
                        <p class=" text-[15px]  text-center">We partnered with Paystack to make your payment process fast
                            and secure. </p>
                    </div>
                    <div class="c shadow-lg rounded-2xl py-4 px-4 flex  gap-4 justify-center items-center flex-col ">

                        <div><img class="bg-  w-20 bg-primary py-4 px-4 rounded-full " src="@/assets/image/token.svg"
                                alt=""></div>
                        <h2 class="text-3xl text-secondary font-mermaid">3</h2>
                        <p class=" text-xl text-center font-semibold ">Receive Tokens Instantly <br> </p>
                        <p class=" text-[15px]  text-center">Immediately after your payment, if successful,you will be
                            direct to another page automatically to copy you token. </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="expo exam" class=" w-[90%] mx-auto">
            <div class="w-full">
                <h1 class="text-2xl mb-5 text-secondary font-semibold ">Expo Exam</h1>
                <Carousel class="mb-10" :autoplay="1000" :transition="1000" :wrap-around="true"  v-bind="settings" :breakpoints="breakpoints">
                    <slide v-for="slide in expo" :key="slide.id" class="w-full   overflow-hidden ">


                        <div class="mx-2">
                            <div
                                class=" group shadow border-primary w-full overflow-hidden  h-fit flex flex-col gap-3 rounded-[2rem]">
                                <div
                                    class="w-full rounded-[2rem] group-hover:drop-shadow-xl duration-700  pt-3 px-3 overflow-hidden ">
                                    <div
                                        class="overflow-hidden flex justify-center duration-700 w-full h-full  rounded-[2rem] ">
                                        <img v-bind:src="slide.image" class=" " /></div>

                                </div>
                                <div class="">
                                    <h1 class="text-[17px] font-medium ">
                                        {{ slide.header }}
                                    </h1>
                                </div>

                                <Primary @click="notices" class="w-full text-center font-[14px] font-sembold">View answer
                                </Primary>

                            </div>
                        </div>

                        <template #addons>
                        </template>
                    </slide>
                </Carousel>

                <div mt-10>
                    <ul v-for="text in expo" :key="text.id">
                        <li @click="notices" class=" font-medium  text-red-800">{{ text.header }}</li>
                    </ul>
                </div>
            </div>
           
        </section>


        <section id="ScratchCards" class="container  my-10  mt-10 mx-auto">
            
            <div class="  flex flex-col justify-center  gap-3 items-center ">
                <h2 class="text-3xl font-bold text">PAST QUESTION </h2>
                <h2 class="md:text-xl text-[15px] text-center  font-normal ">BUY YOUR JAMB PAST QUESTION 2024 NOW </h2>
                <Carousel class="mb-10" :autoplay="1000" :transition="1000" :wrap-around="true"  v-bind="settings" :breakpoints="breakpoints">
                    <slide v-for="slide in pastQuestion" :key="slide.id" class="w-full  mx-12s overflow-hidden ">


                        <div class="mx-2">
                            <div  class=" mx-2 group shadow border-primary w-full overflow-hidden  h-fit flex flex-col gap-3 rounded-[2rem]">
                                <div
                                    class="w-full rounded-[2rem] group-hover:drop-shadow-xl duration-700  pt-3 px-3 overflow-hidden ">
                                    <div class="overflow-hidden flex justify-center duration-700 w-full   rounded-[2rem] ">
                                        <img v-bind:src="slide.image" class=" " />
                                    </div>

                                </div>
                                <div class="">
                                    <h1 class="text-[17px] font-medium ">
                                        {{ slide.header}}  {{ slide.condition }}
                                    </h1>
                                </div>

                                <Primary  class="w-full text-center font-[14px] font-sembold"> <a href="https://wa.me/message/SRWH2WAPTXUAN1">Buy Now</a>
                                </Primary>

                            </div>
                        </div>
                        
                        <template #addons>
                           <Pagination /> 
                        </template>
                    </slide>
                </Carousel>
                
            

                <div class="w-full mt-10">
                    <ul v-for="text in pastQuestion" :key="text.id">
                        <li class=" font-medium  text-red-800"><a href="https://wa.me/message/SRWH2WAPTXUAN1">{{ text.header }} {{ text.condition }}</a></li>
                    </ul>
                </div>
            </div>
        </section>

        <div class="w-full flex justify-center items-center">
            <button
                class="bg-primary justify-center flex hover:bg-secondary ease-in-out duration-700 text-white rounded-xl text-xl py-2 px-4 ">
                <NuxtLink to="/qiuz"> Click here to collect your year gift</NuxtLink>
            </button>

        </div>


        <section>
            <div :class="track ? 'translate-x-0 ' : 'translate-x-[250rem]'"
                class=" duration-700 ease-in-out w-full transform top-0 fixed z-50  blurr h-[50rem]">
                <div class="w-[30rem]  transl duration-700 ease-in-out transform mx-auto shadows bg-white h-[10rem] mt-[20rem]  "
                    :class="track ? '' : 'translate-x-[1rem]'">
                    <div
                        class="border flex border-b-primary  transform py-3 text-center mt-2 justify-center item-center w-full text-primary ">
                        <p class="font-semibold text- text-sm">Transaction ID </p>
                        <img @click="idHidden()" src="@/assets/image/cancel.svg" class="w-4  relative  left-[10rem]" />
                    </div>

                    <form action="" class=" py-10 mb-5 px-3">
                        <Input label="Transaction ID" type="text" placeholder="" :error="false" inputValue=""
                            :disabled=disabled></Input>
                    </form>

                    <button @click="idHidden()">Cancell</button>
                </div>

            </div>
        </section>
        <!-- <loadingJs :isJsFinishedRun="isJsFinishedRun" > </loadingJs> -->
        <NavigationFooter></NavigationFooter>


    </div>
</template>


<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import hero2 from '@/assets/image/hero.jpg';
import hero3 from '@/assets/image/her.jpg';
import { onMounted, ref } from 'vue';
import hero1 from '@/assets/image/dash.jpg';
import waecImg from '@/assets/image/waeccard.jpg';
import neco from '@/assets/image/neco.jpg';
import vwaec from '@/assets/image/vgce.jpg'
import nabteb from '@/assets/image/nabteb1.jpg';
import gcewaec from '@/assets/image/gce.jpg';
import jamblogo from '@/assets/image/jamblogo.png';
import necologo from '@/assets/image/necologo.jpg';
import waeclogo from '@/assets/image/waec.jpg';
import nabteblogo from '@/assets/image/nabteblogo.jpg';
import nabtebgce from '@/assets/image/pinnabteb.jpg'
import pastquestionimage1 from "@/assets/image/pastqu1.jpg";
import pastquestionimage2 from "@/assets/image/pastqu2.jpg";
import pastquestionimage3 from "@/assets/image/pastqu3.jpg";
import pastquestionimage4 from "@/assets/image/pastqu4.jpg";
import { useHead } from '@vueuse/head'
export default {
    name: 'Autoplay',

    setup() {
        const { notify } = useNotification();


        const headerChange = ref(true)
        // const isJsFinishedRun=ref(true)
        onMounted(async () => {
            // isJsFinishedRun.value=true
        })
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 70) {
                    headerChange.value = false;
                } else {
                    headerChange.value = true;
                }
            });
        }


        useHead({

            // Can be static or computed
            title: ' Buy WAEC, NECO, NABTEB scratch cards, PINs, TOKEN and result checker online, Buy all exam scratch cards',
            meta: [
                {
                    name: `description`,
                    content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
                },

                {
                    name: `image`,
                    content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
                },

                {
                    name: 'subject',
                    content: 'Your subject here',
                },
                {
                    name: 'owner',
                    content: 'ABANISE EDUCATIONAL INSTITUTE || ICT',
                },
                {
                    name: 'location',
                    content: 'Nigeria',
                },
                {
                    name: 'local-government',
                    content: 'iwo',
                },

                {
                    name: 'state',
                    content: 'osun',
                },

                {
                    name: 'summary',
                    content: 'ABANISE EDUCATIONAL INSTITUTE || ICT',
                },
                {
                    name: 'abstract',
                    content: 'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
                },
                {
                    name: 'keywords',
                    content: 'Buy WAEC Scratch Cards Online, Buy NECO Scratch Cards Online, Buy NABTEB Scratch Cards Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
                },

                {
                    name: 'document-classification',
                    content: 'Buy WAEC Scratch Cards Online, Buy NECO Scratch Cards Online, Buy NABTEB Scratch Cards Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
                },
                {
                    name: 'url',
                    content: 'https://abaniseedu.com',
                },
                {
                    name: 'subtitle',
                    content: 'https://abaniseedu.com',
                },
                {
                    name: 'category',
                    content: 'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
                },
                {
                    name: 'application-name',
                    content: 'Where to Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
                },
            ],

            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '@/src/assets/abanisee.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '@/src/assets/abanisee.png',
                },
                {
                    rel: 'apple-touch-icon',
                    sizes: '180x180',
                    href: '/path/to/apple-touch-icon.png',
                },
                // Add more images or logos as needed
            ],

        })
        return { headerChange };
    },

    data() {
        return {
            breakpoints: {
                // 700px and up
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                100: {
                    itemsToShow: 1.5,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4.5,
                    snapAlign: 'start',
                },
            },
           
            scrollPosition: null,
            track: false,
            item: [
                {
                    id: 1,

                    image: waecImg,
                    price: '4000.00',
                    card: 'Waec',
                    header: 'Scratch card ',
                    condition: `result checker`,
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 2,
                    image: neco,
                    price: '1200.00',
                    card: 'Neco',
                    header: 'Scratch card ',
                    condition: 'result checker',
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 3,
                    image: nabteb,
                    price: '1000.00',
                    card: 'Nabteb',
                    header: 'Scratch card ',
                    condition: 'result checker',
                    itIsAvalable: true,
                    status: 'Yes'
                },


                {
                    id: 4,
                    image: gcewaec,
                    price: '19,000.00',
                    card: 'GCEWAEC',
                    header: 'Pin card ',
                    condition: 'For registration',
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 5,
                    image: neco,
                    price: '12,500.00',
                    card: 'GCENeco',
                    header: 'Pin card ',
                    condition: 'For registration',
                    itIsAvalable: false,
                    status: 'No'
                },


                {
                    id: 6,
                    image: nabtebgce,
                    price: '16,500.00',
                    card: 'GCENabteb',
                    header: 'pin ',
                    condition: 'For registration',
                    itIsAvalable: false,
                    status: 'No'
                },

                {
                    id: 7,
                    image: vwaec,
                    price: '15000',
                    card: 'Waec',
                    header: 'Result Verification ',
                    condition: 'Correction of date of birth in NYSE',
                    itIsAvalable: false,
                    status: 'No'
                },














            ],

            pastQuestion: [
                {
                    id: 1,

                    image: pastquestionimage2,
                    price: '4000.00',
                    alt:'JAMB past question 2024 for engineering courses',
                    header: 'JAMB Past Question 2024 combine ',
                    condition: `for Engineer Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 2,
                    image: pastquestionimage1,
                    price: '4000.00',
                    alt:'JAMB past question 2024 for Medicines courses',
                    header: 'JAMB Past Question 2024 combine ',
                    condition: `for Healths Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 3,
                    image: pastquestionimage4,
                    price: '4000.00',
                    alt:'JAMB past question 2024 for Arts courses',
                    header: 'JAMB Past Question 2024 combine  ',
                    condition: `for All Art Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },


                {
                    id: 4,
                    image: pastquestionimage4,
                    price: '4000.00',
                     alt:'JAMB past question 2024 for Commercial courses',
                    header: 'JAMB Past Question combine ',
                    condition: `for  Commercial Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },

              
            ],

           
            hero: [
                {
                    id: 1,

                    image: hero1,
                    heroSection: 'Buy scratch Card and Exam pin',
                    heroParagraph: 'Get instant accesss to scratch card for resultchecker and Exam PINs for  WAEC, NECO  and NABTEB'
                },




                {
                    id: 2,
                    image: hero2,
                    heroSection: 'Buy & Sell  Airtime, Data Bundle ',
                    heroParagraph: 'We are a major player in distribution & selling affordable and discounted cheapest data bundle for all Network e.g MTN, GLO, AIRTEL, 9Mobile ',

                },

                {
                    id: 2,
                    image: hero3,
                    heroSection: `Get Your Admission Instantly `,
                    heroParagraph: 'Get your Admission to any university or Polytechnic Without jamb ',

                },

                {
                    id: 2,
                    image: hero3,
                    heroSection: `Register Your Olevel's `,
                    heroParagraph: 'You can register your GCEWAEC, GCENABTEB, NABTEB and NECO, and get a good grade ',

                },
            ],

            expo: [
                {
                    id: 1,
                    image: waeclogo,
                    header: 'WAEC EXPO JUN/FEB 2024',
                    condition: 'not been release'
                },

                {
                    id: 2,
                    image: jamblogo,
                    header: `JAMB EXPO 2024 `,
                    condition: 'Not been release ',

                },


                {
                    id: 3,
                    image: necologo,
                    header: 'NECO EXPO JUNE/JULY 2024 ',
                    condition: 'Not been release',

                },



                {
                    id: 4,
                    image: nabteblogo,
                    header: `NABTEB EXPO EXPO JUNE/JULY 2024`,
                    condition: 'Not been release',

                },

            ]
        }
    },
    methods: {
        notices() {
            alert(`We are sorry, It is not been releaseed, Kindly Check Back later`);
        },
        transact() {
            this.track = !this.track
            console.log('happyis')
        },
        idHidden() {
            this.track = !this.track
        }
    },

    created() {

    },

    components: {
        Carousel,
    Slide,
    Pagination,
    Carousel,
  
  },

}
</script>

<style scoped>
.carousel__slide {
    padding: 0px;
}

/* @import '~/assets/main.css'; */
/* .carousel__item {
   width: 200%;
  
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
 
}
.carousel__slide--active .heropa{
   animation: p 3s ;
   animation-iteration-count: 1;  
} */


/* .carousel__slide--active .herop{
   animation: pa 3s ;
   animation-iteration-count: 1;  
}


@keyframes p {
  from {
     transform: translateY(-100px);
      }
  to { transform: scale(0px); }
}
@keyframes pa {
  from {
     transform: translateY(100px);
      }
  to { transform: scale(0px); }
}





    

    .animatio {
      
        
        animation-duration: 2s;
        animation-name: waliu;
        
    }

    @keyframes waliu {
        from{ 
            opacity: 0;
            transform: rotate(90deg);
            transform: translateY(300px);
            color: aqua;
        }

        to{
        
        opacity: 1;
         transform: rotate(0deg);
         transform: translateY(0px);
         color: black;
        }
    } */


.image {

    background-color: #164b3b;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover;
}

.shadows {
    box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}

.blurr {
    backdrop-filter: blur(5px);

}
</style>
