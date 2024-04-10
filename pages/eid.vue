<template>
    <div class="overflow-y-hidden text-[poppins]">

        <Header :headertext="false" class="fixed z-40 top-0"></Header>

        <div class="w-full h-screen mt-32 text-center flex justify-center items-center ">
            <div class=" flex flex-col justify-center items-center">
                <img src="@/assets/image/card.jpg" alt="" srcset="">
          
            </div>
            
        </div>
     


      
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
