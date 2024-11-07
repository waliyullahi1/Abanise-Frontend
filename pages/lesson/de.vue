<template>
  <div
    class="flex w-full content justify-center bg-black bg-opacity-100 bg-no-repeat bg-cover bg-[url('@/assets/image/school-image.jpg')]  sm:h-screen">
    <div class="flex w-full justify-center items-center h-full  sm:mx-0 bg-black bg-opacity-70">
      <div
        class="md:w-[800px] sm:w-[400px] w-full rounded-none sm:rounded-2xl flex justify-center items-center overflow-hidden  h-fit bg-slate-700 sm:h-[540px]">
        <div class="h-full md:max-w-md hidden md:block bg-[url('@/assets/image/ghost.png')] bg-no-repeat bg-cover justify-around sm:w-full w-full">
          <!-- Sidebar content -->
          <div class="text-[15px] bg-slate-600 bg-opacity-60 py-10 px-5 text-white w-full h-full">
            <h4 class="text-2xl font-bold content " >Success Student starts here</h4>
            <h4 class="my-4">Join Abanise tutorials and learn with us</h4>
            <p class="my-4">Access to Free Cbt Training and all jamb pass question</p>
          </div>
        </div>

        <div class="bg-white h-full sm:px-10 px-2 md:max-w-md font-sans sm:w-full w-full sm:overflow-scroll relative ">
          <div class="py-2 flex justify-center">
                 <NavigationLogo class="w-10"/>
          </div>
          <div class="text-center h-full justify-between w-full">
            <div class="py-5">
             
              <h4 class="sm:text-3xl text-3xl text-left py-5 md:hidden block font-extrabold  ">Success student <br> <span class=" text-red-600">starts</span> here</h4>
              <h4 class="sm:text-2xl text-xl title font-bold">Sign in to your account</h4>
              <p class="text-base">
                Already have an account?
                <span class="text-secondary" role="button">login here</span>
              </p>
            </div>

            <!-- First Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_first_form" class="text-left inset-0 staggered-form">
                <form @submit.prevent="first_handleSubmit">
                  <LessonInput v-for="(input, index) in firstFormInputs" :key="index" v-model:inputValue="userData[input.modelKey]" :type="input.type"
                    :label="input.label" :class="`staggered-input delay-${index}`"   ></LessonInput>
                  
                    <LessonSelectInput 
                    label="Category"  
                    v-model:inputValue="userData.category"
                    :class="`staggered-input delay-${firstFormInputs.length}`" 
                    :field="field">
                  </LessonSelectInput>
                  
                  <LessonButton type="submit" :loading="first_loaadingButton" class="mt-16">Continue</LessonButton>
                  
                  <button>


                  </button>
                </form>
              </div>
            </transition>

           
           <!-- Second Form -->
          <transition name="slide-stagger" mode="out-in">
            <div v-if="!hidden_second_form" class="inset-0 staggered-form">
              <div class="w-full text-left">
                  <button  :class="`staggered-input delay-${index}`" @click="goBack(1)" class=" text-[15px]   font-semibold" type="button">&lt; Back</button>
              </div>
              
              <form @submit.prevent="second_handleSubmit">
                <LessonInput 
                  v-for="(input, index) in secondFormInputs" 
                  :key="index" 
                  :oninput="input.oninput" 
                  :type="input.type"
                  v-model:inputValue="userData[input.modelKey]"
                   :minlength="input.minlength"
                  :label="input.label"  
                  :class="`staggered-input delay-${index}`" 
                  required
                ></LessonInput>
                <div class="">
                      <LessonSelectSubject 
                      v-model:selectedSubjects="userData.subject" 
                      :label="label"  :class="`staggered-input delay-${index}`" >
                    </LessonSelectSubject>  
                </div >
              
               
                <LessonButton type="submit" :loading="second_loaadingButton" class="mt-16">Continue</LessonButton>
              </form>
            </div>
          </transition>

            <!-- third Form -->
            <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_third_form" class="inset-0 staggered-form">
                <div class="w-full text-left">
                  <button  :class="`staggered-input delay-${index}`" @click="goBack(2)" class=" text-[15px]   font-semibold" type="button">&lt; Back</button>
              </div>
                <form @submit.prevent="third_handleSubmit">
                  
                  
               
                  <LessonInput v-for="(input, index) in thirdFormInputs" :key="index"  :minlength="input.minlength" v-model:inputValue="userData[input.modelKey]" :type="input.type"
                    :label="input.label" :class="`staggered-input delay-${index}`"   ></LessonInput>
                  
                    <LessonButton type="submit" :loading="third_loaadingButton" class="mt-16">Continue</LessonButton>

            
                  
                  <button>


                  </button>
                                           <!-- Hidden File Input through LessonInput -->
               </form>
              </div>
            </transition>

             <!-- Fourth Form -->
             <transition name="slide-stagger" mode="out-in">
              <div v-if="!hidden_fourth_form" class="inset-0 staggered-form">
                <div class="w-full text-left">
                  <button  :class="`staggered-input delay-${index}`" @click="goBack(3)" class=" text-[15px]   font-semibold" type="button">&lt; Back</button>
              </div>
                <form @submit.prevent="fourth_handleSubmit">
                  
                  <LessonInputImage v-model="userData.passport" label="Upload Passport" />
                 <div v-if="userData.category == 'Student'"><LessonInputImage v-model="userData.image_form" label="Upload form" /></div> 
                 
                  <LessonButton type="submit" :loading="fourth_loaadingButton" class="mt-16">Create</LessonButton>
                
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


let label= "Choose a Subject"

const userData = reactive({
  
  firstName: '',
  otherName: '',
  email: '',
  phone_Number:'',
  whatsapps_Number:'',
  passport:'',
  image_form:'',
  category:'',
  subject:[],
  password:'',
  confirm_pwd:'',
 

})

const index =ref(Number)
const imageUrl = ref(null);
const fileInput = ref(null);

let hidden_first_form = ref(false);
let first_loaadingButton = ref(false);

let hidden_second_form = ref(true);
let second_loaadingButton = ref(false);

let hidden_third_form = ref(true);
let third_loaadingButton = ref(false);

let hidden_fourth_form = ref(true );
let fourth_loaadingButton = ref(false);




const field = [
{ text: ' ', label: ' ' },
  { text: 'Student', label: 'Student' },
  { text: 'Teacher', label: 'Teacher' }
];

const firstFormInputs = [
{ type: 'text', label: 'First Name', modelKey: 'firstName', minlength:"1" },
{ type: 'text', label: 'Other Name', modelKey: 'otherName',  minlength:"1" },
 
];



let secondFormInputs = [
  { 
    type: 'text', 
    label: 'Phone Number', 
    oninput: (event) => { event.target.value = event.target.value.replace(/[^0-9]/g, '') },
    modelKey: ' phone_Number',
    minlength:"6"
  },
  { 
    type: 'text', 
    label: 'Whatsapp No' ,
     oninput: (event) => { event.target.value = event.target.value.replace(/[^0-9]/g, '') },
     modelKey: 'whatsapps_Number',
    minlength:"6"
   
  },
];
const thirdFormInputs = [
  { type: 'email', label: 'Email ', modelKey:'email' },
  { type: 'password ', label: 'Password',   modelKey:'password', minlength:"6"  },
  { type: 'password ', label: 'Confirm Password',  modelKey:'confirm_pwd', minlength:"6" },
];



const first_handleSubmit = () => {
  first_loaadingButton.value = true;
  console.log(userData.category,'gggg');
  
 

 
  setTimeout(() => {
    hidden_first_form.value = true;
    hidden_second_form.value = false;
    first_loaadingButton.value = false;
  }, 500);
  
};




//Second Submit 
const second_handleSubmit = () => {
  second_loaadingButton.value = true;
 


  if (userData.subject < 1 ) {
  alert("Please select a subject.");
  second_loaadingButton.value = false;
  return
}

if (userData.category == "Techer") {
  if (userData.subject > 2 ) {
  alert("You can't pick more than two Subject ");
  second_loaadingButton.value = false;
  return
}
}


if(userData.category == 'Teacher'){
  if (userData.subject > 1 ) {
  alert("Teachers must select one or two Subject ");
  second_loaadingButton.value = false;
  return
}
  }
  
  setTimeout(() => {
    if(userData.category == "Teacher"){
      hidden_second_form.value = true;
      hidden_third_form.value = false;
      second_loaadingButton.value = false;
      return
    }
    hidden_second_form.value = true;
    hidden_fourth_form.value = false
    second_loaadingButton.value = false;
  }, 500);
  
  
};


const third_handleSubmit = () => {
  third_loaadingButton.value = true;
  console.log(userData);
  if(userData.confirm_pwd !== userData.password){
    alert("Confirm Password and Password must be the same ");
    third_loaadingButton.value = false;
  return
  }
  third_loaadingButton.value = true;
  setTimeout(() => {
    hidden_third_form.value = true;
    hidden_fourth_form.value = false;
    third_loaadingButton.value = false;
  }, 500);
};

const fourth_handleSubmit = () => {
  fourth_loaadingButton.value == true
  if (!userData.passport ) {
  alert("Please upload your passport ");
  fourth_loaadingButton.value = false;
  return
  
 
};

if(userData.category== 'Student'){
 if (!userData.image_form ) {
  alert("Please upload form ");
  fourth_loaadingButton.value = false;
  return
} 
}


};



const goBack = (step) => {
  if (step === 1) {
    hidden_first_form.value = false;
    hidden_second_form.value = true;
  } else if (step === 2) {
    hidden_second_form.value = false;
    hidden_third_form.value = true;
  } else if (step === 3) {
    if (userData.category=="Student") {
      hidden_second_form.value = false;
    hidden_fourth_form.value = true;
    return
    } 
    hidden_third_form.value = false;
    hidden_fourth_form.value = true;
  }
};

watch(userData.passport, (newFile) => {
  userData.passport = newFile ? URL.createObjectURL(newFile) : null;
});

watch(userData.image_form, (newFile) => {
  iuserData.image_form = newFile ? URL.createObjectURL(newFile) : null;
});

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
  p, h4, .content {
  font-family: 'DM Sans', sans-serif; /* DM Sans for paragraphs and content */
}

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


</style>
