<template>
  <button
    :type="type" 
    :class="[
      'py-3 px-4 w-full justify-center flex bg-slate-950 hover:bg-slate-800 text-white font-medium text-base duration-500 ease-in-out rounded-md active:bg-slate-700 focus:bg-slate-700',
      { 'zoom-animation': isClicked },
      loading ? 'bg-primary text-white' : ''
    ]"
    :disabled="loading || disabled"
    @click="handleClick"
  >
    <div class="flex items-center justify-center capitalize">
      <div v-if="loading" class="flex items-center text-white">
        <div class="mr-2">
          
          <!-- Loading Spinner SVG -->
          <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#ffffff"
              stroke-width="5"
              r="38"
              stroke-dasharray="179.0707812546182 61.690260418206066"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        </div>
        {{ loadingText }}
      </div>
      <div v-if="!loading">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    loading: Boolean,
    disabled: Boolean,
    loadingText: {
      default: 'Loading',
      type: String
    },
    type: {
      default: 'button',
      type: String
    }
  },
  data() {
    return {
      isClicked: false
    };
  },
  methods: {
    handleClick() {
      this.isClicked = true;
      setTimeout(() => {
        this.isClicked = false;
        this.$emit('button-clicked'); // Emit the event after animation completes
      }, 200); // Match the animation duration (0.2s)
    }
  }
};
</script>

<style>
@keyframes zoomEffect {
  0% { transform: scale(0.97); }
  100% { transform: scale(1); }
}
.zoom-animation { animation: zoomEffect 0.2s ease-in-out; }
</style>
