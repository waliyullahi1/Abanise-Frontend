<template>
  <div> 
    <div>
      <div class=" text-left  input-containers ani bite ">

        <label
          for="name"
         class="mx-3"
        >
          <span class="py- text-[13px] px-1 font-semibold  relative top-3 mb-5 bg-white  w-fit">{{ label }}</span>
        </label>

        <select
        :value="inputValue" @input="$emit('update:inputValue', $event.target.value)"
          ref="inputRef"
          required
          :disabled="disabled"
          class="w-full px-2 h-[2.6rem] focus:shadow-blue-400 shadow-sm focus:border bg-white   focus:border-blue-700  mt-1 font-sem rounded-[.2rem] ml- text-[15px] outline-none fy border-gray-300 border py-[.3rem]"
        >
          <option class=" text-[15px] font-semibold" v-for="(option, index) in field" :key="index" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
      <!-- Uncomment for error message -->
      <!-- <p v-if="error" class="text-red-700 text-sm mt-1">Please enter your email properly</p> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Define props
const props = defineProps({
  inputValue: String,
  error: Boolean,
  field: Array,
  disabled: Boolean,
  placeholder: String,
  min: Number,
  max: Number,
  label: String
})

// Create a reference to the input field
const inputRef = ref(null)

// Define methods
const focus = () => {
  inputRef.value.focus()
}
</script>

<style scoped>
.input-containers {
  position: relative;
}

.select-field {
  width: 100%;
  background: transparent;
  outline: none;
  padding: 0 0 0.5rem 0.5rem;
}

.input-field:focus + .input-label,
.select-field:not([value=""]) + .input-label,
.input-field:not(:placeholder-shown) + .input-label {
  transform: translateY(-1.3rem);
  font-weight: 600;
  font-size: 0.8rem;
  color: rgb(3, 3, 3);
}

.input-label {
  position: absolute;
  bottom: -15px;
  left: 0;
  height: 3rem;
  pointer-events: none;
  padding-left: 0.5rem;
  transform-origin: left;
  transition: all 0.3s ease;
}

.input-label.active {
  transform: translateY(-1.3rem);
  font-weight: 600;
  font-size: 0.8rem;
  color: rgb(3, 3, 3);
}
</style>
