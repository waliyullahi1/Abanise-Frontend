import { NewsHeader } from '../../.nuxt/components';
<template>
    <div>
        <NewsHeader></NewsHeader>
        <div class="flex w-[90%] mx-auto">

            <div class="txet-xl md:w-[70%] w-full mt-9 ">
                <div class=" mt-5 py-5 shadow-xl w-full px-5 ">

                    <h1 class=" tittle-[Bebas Neue] mb-4 text-[bebas neue] font-[] tex - text-xl font-bold">WAEC Timetable
                        For 2024 May/June SSCE</h1>
                    <div class="mt-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate animi asperiores
                            reiciendis quas reprehenderit error quam hic officia maxime nam natus sequi ducimus at
                            mollitia atque laudantium, voluptate beatae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate animi asperiores
                            reiciendis quas reprehenderit error quam hic officia maxime nam natus sequi ducimus at
                            mollitia atque laudantium, voluptate beatae.</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate animi asperiores
                        reiciendis quas reprehenderit error quam hic officia maxime nam natus sequi ducimus at mollitia
                        atque laudantium, voluptate beatae.
                    </div>

                </div>
            </div>

            <div class="md:block w-[30%] hidden">
                <div class=" m   mt-5 shadow-lg bg-white ">
                    <h3 class=" my-2 font-semibold text-xl">Latest Posts</h3>
                    <div v-for="item in 8" :key="item.id" class="  ">
                        <h3 class=" px-2  py-3 border-t-2 text-[13px]  hover:text-primary ">WAEC GCE Result (1st Series)
                            2024 Out –
                            Check Here </h3>
                    </div>
                </div>
            </div>


        </div>

        <NavigationFooter></NavigationFooter>

    </div>
</template>

<script setup>


import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id;

const userData = ref(null);
</script>

<style>
.blur {

    backdrop-filter: blur(5px);
}

.family {
    font-family: 'Roboto';
}
</style>