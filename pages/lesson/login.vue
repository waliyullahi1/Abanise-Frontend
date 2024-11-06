<template>
  <div class="flex w-full justify-center bg-black bg-opacity-100 bg-no-repeat bg-cover bg-[url('@/assets/image/school-image.jpg')] sm:h-screen">
    <div class="flex w-full justify-center items-center h-full sm:mx-0 bg-black bg-opacity-70">
      <div class="md:w-[800px] sm:w-[400px] w-full rounded-none sm:rounded-2xl flex justify-center items-center overflow-hidden bg-slate-700 h-[540px]">
        <div class="h-full md:max-w-md hidden md:block bg-[url('@/assets/image/ghost.png')] bg-no-repeat bg-cover justify-around sm:w-full w-full">
          <!-- Sidebar content -->
          <div class="text-[15px] bg-slate-600 bg-opacity-60 py-10 px-5 text-white w-full h-full">
            <h4 class="text-2xl font-bold title" style="font-weight: bolder;">Success Student starts here</h4>
            <h4 class="my-4">Join Abanise tutorials and learn with us</h4>
            <p class="my-4">Access to Free Cbt Training and all jamb pass question</p>
          </div>
        </div>

        <div class="bg-white h-full sm:px-10 px-5 md:max-w-md font-sans sm:w-full w-full overflow-scroll relative">
          <div class="text-center h-full justify-between w-full">
            <div class="py-10">
              <h4 class="text-2xl title font-bold">Sign in to your account</h4>
              <p class="text-base">
                Already have an account?
                <span class="text-secondary" role="button">login here</span>
              </p>
            </div>

            <!-- First Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_first_form" class="text-left inset-0 staggered-form">
                <form @submit.prevent="first_handleSubmit">
                  <LessonInput 
                    v-for="(input, index) in firstFormInputs" 
                    :key="index" 
                    v-model="userData[input.modelKey]" 
                    :type="input.type" 
                    :label="input.label" 
                    :class="`staggered-input delay-${index}`"
                  ></LessonInput>

                  <LessonButton 
                    type="submit" 
                    :class="`staggered-input delay-${index}`" 
                    class="mt-16" 
                    :loading="first_loadingButton">
                    Continue
                  </LessonButton>
                </form>
              </div>
            </transition>

            <!-- Second Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_second_form" class="inset-0 staggered-form">
                <form @submit.prevent="second_handleSubmit">
                  <LessonInput 
                    v-for="(input, index) in secondFormInputs" 
                    :key="index" 
                    :type="input.type" 
                    :label="input.label"  
                    :class="`staggered-input delay-${index}`" 
                    @input="input.oninput ? input.oninput(userData[input.modelKey]) : null" 
                    v-model="userData[input.modelKey]"
                  ></LessonInput>
                  
                  <LessonSelectInput 
                    label="Category"  
                    v-model="userData.category"
                    :class="`staggered-input delay-${secondFormInputs.length}`" 
                    :field="field">
                  </LessonSelectInput>

                  <LessonButton 
                    type="submit" 
                    :loading="second_loadingButton" 
                    class="mt-16">
                    Continue
                  </LessonButton>
                </form>
              </div>
            </transition>

            <!-- Third Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_third_form" class="inset-0 staggered-form">
                <form @submit.prevent="third_handleSubmit">
                  <LessonInput 
                    type="password" 
                    label="Password" 
                    v-model="userData.password" 
                    :class="`staggered-input delay-${index}`"
                  ></LessonInput>

                  <!-- Hidden File Input through LessonInput -->
                  <LessonInputImage 
                    v-model="imageFile" 
                    label="Upload Image" 
                    class=""
                  ></LessonInputImage>

                  <input 
                    type="file" 
                    accept="image/*" 
                    @change="handleFileUpload" 
                    ref="fileInput" 
                    class="hidden"
                  >
                  
                  <LessonButton 
                    type="submit" 
                    :loading="third_loadingButton" 
                    class="mt-16">
                    Continue
                  </LessonButton>
                </form>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRaw } from 'vue';

const userData = reactive({
  firstName: '',
  otherName: '',
  email: '',
  phone_Number: '',
  whatsapps_Number: '',
  passport: '',
  form_image: '',
  category: '',
  subject_teaching: [],
  subject_attend: [],
});

const imageUrl = ref(null);
const fileInput = ref(null);

let hidden_first_form = ref(false);
let first_loadingButton = ref(false);

let hidden_second_form = ref(true);
let second_loadingButton = ref(false);

let hidden_third_form = ref(true);
let third_loadingButton = ref(false);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  console.log("Selected file:", file);
  if (file) {
    // Create an object URL for the selected file
    imageUrl.value = URL.createObjectURL(file);
  }
};

const field = [
  { text: 'Student', label: 'Student' },
  { text: 'Teacher', label: 'Teacher' }
];

const firstFormInputs = [
  { type: 'text', label: 'First Name', modelKey: 'firstName' },
  { type: 'text', label: 'Other Name', modelKey: 'otherName' },
  { type: 'email', label: 'Email', modelKey: 'email' }
];

const secondFormInputs = [
  { 
    type: 'text', 
    label: 'Phone Number', 
    oninput: (value) => { userData.phone_Number = value.replace(/[^0-9]/g, ''); }, 
    modelKey: 'phone_Number' 
  },
  { 
    type: 'text', 
    label: 'Whatsapp No', 
    oninput: (value) => { userData.whatsapps_Number = value.replace(/[^0-9]/g, ''); }, 
    modelKey: 'whatsapps_Number' 
  },
];

const first_handleSubmit = () => {
  first_loadingButton.value = true;
  console.log("User Data:", toRaw(userData));
  setTimeout(() => {
    hidden_first_form.value = true;
    hidden_second_form.value = false;
    first_loadingButton.value = false;
  }, 500);
};

const second_handleSubmit = () => {
  console.log("User Data on Second Submit:", toRaw(userData));
  // Handle submission logic here
  hidden_second_form.value = true;
  hidden_third_form.value = false;
};

const third_handleSubmit = () => {
  third_loadingButton.value = true;
  setTimeout(() => {
    console.log("Final User Data:", toRaw(userData));
    // Handle final submission logic here
    third_loadingButton.value = false;
  }, 500);
};

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

/* Define keyframe for staggered sliding effect */
@keyframes staggeredSlideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.staggered-input {
  opacity: 0;
  animation: staggeredSlideIn 0.5s forwards;
}

.staggered-form .staggered-input.delay-0 {
  animation-delay: 0s;
}

.staggered-form .staggered-input.delay-1 {
  animation-delay: 0.2s;
}

.staggered-form .staggered-input.delay-2 {
  animation-delay: 0.4s;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}

.subtitle {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
</style>
