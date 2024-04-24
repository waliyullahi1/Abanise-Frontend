<template>
  <div >
  <div class="change w-screen" :style="{ backgroundColor: bgColor }" style="height: 2000px; " >
    <div class="h-[1000px] text-white w-full">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione, natus quasi quis, doloribus, beatae debitis consectetur explicabo sequi neque veritatis! Vero asperiores, alias repellat culLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione, natus quasi quis, doloribus, beatae debitis consectetur explicabo sequi neque veritatis! Vero asperiores, alias repellat culpa molestias dolor consectetur aspernatur. Dolorem alias dolor ratione doloribus culpa enim illo reiciendis, consequuntur itaque ut blanditiis porro voluptate beatae amet dicta iure necessitatibus rerum asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus veniam excepturi, est dolore modi inventore fugit! Numquam eius quod nemo! Nulla, alias natus molestias explicabo beatLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ratione, natus quasi quis, doloribus, beatae debitis consectetur explicabo sequi neque veritatis! Vero asperiores, alias repellat culpa molestias dolor consectetur aspernatur. Dolorem alias dolor ratione doloribus culpa enim illo reiciendis, consequuntur itaque ut blanditiis porro voluptate beatae amet dicta iure necessitatibus rerum asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus veniam excepturi, est dolore modi inventore fugit! Numquam eius quod nemo! Nulla, alias natus molestias explicabo beatae illum ipsam quo quas.ae illum ipsam quo quas.pa molestias dolor consectetur aspernatur. Dolorem alias dolor ratione doloribus culpa enim illo reiciendis, consequuntur itaque ut blanditiis porro voluptate beatae amet dicta iure necessitatibus rerum asperiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus veniam excepturi, est dolore modi inventore fugit! Numquam eius quod nemo! Nulla, alias natus molestias explicabo beatae illum ipsam quo quas.
    </div>
  </div></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

let bgColor = ref('black');
let lastScrollPosition = 0;

onMounted(() => {
  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    bgColor.value = currentScrollPosition > lastScrollPosition ? 'red' : 'black';
    lastScrollPosition = currentScrollPosition;
  };

  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll');
});
</script>

<style scoped>
.change {
  transition: background-color 0.5s ease;
}
</style>
