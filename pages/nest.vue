<template>
    <div class="overflow-y-hidden text-[poppins]">

        <Header @transaction="transact()" :headertext="headerChange" class="fixed z-40 top-0"></Header>

        <div class="w-full "></div>

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






        <img v-bind:src="item.image" width="2000px" height="12000px" class="" />





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
            image: '',
            data:[],
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
                    itIsAvalable: false,
                    status: 'No'
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
                    alt: 'JAMB past question 2024 for engineering courses',
                    header: 'JAMB Past Question 2024 combine ',
                    condition: `for Engineer Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 2,
                    image: pastquestionimage1,
                    price: '4000.00',
                    alt: 'JAMB past question 2024 for Medicines courses',
                    header: 'JAMB Past Question 2024 combine ',
                    condition: `for Healths Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },

                {
                    id: 3,
                    image: pastquestionimage4,
                    price: '4000.00',
                    alt: 'JAMB past question 2024 for Arts courses',
                    header: 'JAMB Past Question 2024 combine  ',
                    condition: `for All Art Courses`,
                    itIsAvalable: true,
                    status: 'Yes'
                },


                {
                    id: 4,
                    image: pastquestionimage4,
                    price: '4000.00',
                    alt: 'JAMB past question 2024 for Commercial courses',
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
                    header: 'WAEC solution JUN/FEB 2024',
                    condition: 'not been release'
                },

                {
                    id: 2,
                    image: jamblogo,
                    header: `JAMB cbt solution 2024 `,
                    condition: 'Not been release ',

                },


                {
                    id: 3,
                    image: necologo,
                    header: 'NECO solution JUNE/JULY 2024 ',
                    condition: 'Not been release',

                },



                {
                    id: 4,
                    image: nabteblogo,
                    header: `NABTEB solution JUNE/JULY 2024`,
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

    created: async function () {


        const response = await fetch('http://localhost:3500/news', {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',

        })

        if (!response.ok) {
            const errorData = await response.json();
            this.erromessage = errorData.message;
            throw new Error(errorData.message);

        }

        const datas = await response.json();
     
       
        this.data = datas
        datas.forEach(element => {
            const base64Data = element.image.data.data;
            console.log(base64Data[0]); // Replace with your actual Base64 image data
            try {
  const decodedData = atob(base64Data[0]);
  const uint8Array = new Uint8Array(decodedData.length);
  for (let i = 0; i < decodedData.length; ++i) {
    uint8Array[i] = decodedData.charCodeAt(i);
  }
  const blob = new Blob([uint8Array], { type: 'image/jpeg' });
  const imageSrc = URL.createObjectURL(blob);
  console.log(imageSrc);
  this.image = imageSrc // Verify the image URL
} catch (error) {
  console.error('Error decoding Base64 data:', error);
}
            // Decode Base64 to create an image URL
           

        });



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
