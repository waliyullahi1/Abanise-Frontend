<template>
  <form @submit.prevent="handleSubmit" validate>
    <div>
      <label for="email">Email:</label>
      <input 
      required
        type="email" 
        id="email" 
        v-model="form.email" 
        :class="{ 'error': errors.email }" 
        ref="emailInput"
      />
    </div>
    
    <div>
      <label for="password">Password:</label>
      <input 
        type="password" 
        id="password"
        required
        v-model="form.password" 
        :class="{ 'error': errors.password }" 
        ref="passwordInput"
      />
    </div>
    
    <button type="submit">Login</button>
    
    <div v-if="submitAttempted">
      <span v-if="errors.email">{{ errors.email }}</span>
      <span v-if="errors.password">{{ errors.password }}</span>
    </div>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const form = ref({
  email: '',
  password: '',
});

const errors = ref({
  email: '',
  password: '',
});

const submitAttempted = ref(false);

const emailInput = ref(null);
const passwordInput = ref(null);


const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
</script>

<style>
.error {
  border: 1px solid red; /* Highlight error field */
}
</style>


