<template class=" text-[poppins]">
  <div>
    <Header :headertext="false" class="fixed z-40 top-0"></Header>
    <NuxtNotifications position="bottom left" :speed="500" />
    <div class="  flex justify-center items-center mt-9   w-full h-screen">
      <section id="error" :class="state.both ? 'hidden' : 'block'" v-if="state.showInstructions"
        class="bg-white  py-6 px-4  overflow-scroll bg  z-40 fixed mt-10 shadows rounded-lg  w-[80%] sm:h-fit h-screen pb-20 mb-10 ">
        <p class=" message pl-5 text-[15px] text-red-700 uppercase  text-center text-">{{ state.erromessage }}</p>
        <h1 class="text-xl text-center font-medium ">Please read the instruction below before you click start </h1>
        <nav>
          <ul class="  list-outside ml-4 mt-5 font-medium list-disc">
            <li>Enter the correct phone number and Network type.</li>
            <li>Please, Don't try to refresh the page when you are on the exam.</li>
            <li>You have 2 minite 15 seconds to answer all the question, so you need to be fast.</li>
            <li> You must answer two question Correctly before you can receive your gift.</li>
            <li>If you dont score two above, We are sorry, you can't receive any gift.</li>
            <li> You have one chance to play this game, So choose your answer wisely. </li>
            <li> Please if you passed, wait, dont refresh that page until you receive that gift </li>
          </ul>
        </nav>
        <form action="" @submit.prevent="start()">
          <div class=" mt-7 mb-9 sm:grid block grid-cols-2 gap-7  w-full h-fit  text-xl">
            <div class="flex bg-white w-full flex-col">
              <label for="" class="text-primary font-medium px-4 text-[15px]">Network</label>
              <select v-model="state.form.network"
                class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none border-2 font-medium h-full focus:border-primary border-gray-300  py-[.3rem]"
                placeholder="Password" @input="onInput">
                <option value="MTN">MTN</option>
                <option value="GLO">GLO</option>
                <option value="9MOBILE">9MOBILE</option>
                <option value="AIRTEL">AIRTEL</option>
              </select>
              <p :class="state.errornetwork ? 'flex' : 'hidden '" class="e pl-5 text-red-700 text-[13px]">
                Select the Network
              </p>
            </div>


            <div class="flex bg-white w-full flex-col">
              <label for="" class="text-primary font-medium w-full px-4 text-[15px]">Phone Number</label>
              <input v-model="state.form.phone" type="text" pattern="[0-9]*"
                class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-2 border-gray- border-gray-300 py-[.3rem]"
                placeholder="phone number " @input="onInput" />
              <div class="relative w-0 h-0">
                <p :class="state.errorphone ? 'flex' : 'hidden '"
                  class="e pl-5 text-red-700 w-36  overflow-visible text-[13px]">
                  Enter correct phone
                </p>
              </div>

            </div>
          </div>
          <Button class="mt-4" :loading="state.loadingState" @click="" type="submit" loadingText2="please wait">
            Start Exam
          </Button>
        </form>


      </section>
      <section v-else class="bg-white mt-10 shadows rounded-lg overflow-hidden w-[80%] h-fit">
        <div class="">
          <div class="sm:h-32 h-fit py-3 px-4 text-white text-xl bg-primary w-full">
            <h1 class="sm:text-xl text-[14px] leading-tight mb-10">Notice: {{
              state.selectedQuestions[state.questionIndex].notice }}</h1>
            <h1 class="font-semibold sm:text-[20px] text-[15px]">{{ state.selectedQuestions[state.questionIndex].question
            }}</h1>
          </div>
          <div class="py-3 px-5">
            <p>Time left: {{ Math.floor(state.timeLeft / 60) }} minutes {{ state.timeLeft % 60 }} seconds</p>
            <label class="containerss text-[15px]"
              v-for="(option, index) in state.selectedQuestions[state.questionIndex].choices" :key="index">
              {{ option }}
              <input type="radio" v-model="state.selectedOption" :value="option" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="flex px-4 justify-between">
          <button @click="previous"
            class="py-2 px-4 t text-white bg-primary hover:bg-green-800 ease-in-out duration-500">Previous</button>
          <button v-if="state.questionIndex < state.selectedQuestions.length - 1" @click="next"
            class="py-2 px-4 t text-white bg-primary hover:bg-green-800 ease-in-out duration-500">Next</button>
          <button v-else @click="prevsubmit"
            class="py-2 px-4 t text-white bg-secondary hover:bg-red-600 ease-in-out duration-500">Submit</button>
        </div>
        <div class="mt-7 py-3 px-5 flex justify-center w-full gap-3">
          <div class="sm:py-3 border-black border-2 sm:px-5 py-1 px-3 rounded-full w-fit h-fit font-semibold text-black"
            v-for="(q, index) in state.selectedQuestions" :key="index" @click="goToQuestion(index)" :class="{
              'bg-red text-primary border-secondary bg-white': state.questionIndex === index && q.userAnswer === null,
              'bg-primary border-primary text-white': state.questionIndex !== index && q.userAnswer !== null,
              'bg-white border-primary': q.userAnswer === null,
              'bg-slate-600 border-slate-600 text-white': q.userAnswer !== null && state.questionIndex === index,
            }">
            <p>{{ index + 1 }}</p>
          </div>
        </div>
      </section>

      <div v-if="state.isSubmitted" class=" items-center mt-48 mx-auto w-full flex flex-row justify-center">
        <section v-if="state.examStatus === 'passed'"
          class="bg-white border-primary border-4 py-6 px-4 overflow-scroll bg   shadows rounded-lg  w-[90%] sm:h-fit h-screen pb-20 mb-10 ">
          <div class="w-full justify-center items-center flex"><img src="@/assets/image/success.gif"
              alt="sucessful payment" class=" w-32 mx-0 justify-center "></div>
          <h1 class="text-3xl text-center text-green-600  font-medium ">You win, Congratulation 👍 </h1>
          <h2 class="text-xl  font-semibold mt-2 text-center">Your score is {{ state.score }} out of
            {{ state.selectedQuestions.length }}</h2>
          <p class="text-center font-medium ">Thanks for participate in this activity, and you would have receive 100
            credit card on
             this phone number {{state.form.phone}} that you provided</p>

          <p class="mt-2">Also will want to notices you that, on this website we are selling Scratch card pin (that you
            can use to check your waec, neco, nabteb result and exam pin for GCEWAEC, GCENECO, GCENABTEB soon on),<br> and
            and then Airtime and databundle for MTN, GLO, AIRTEL etc at cheapest price </p>

            <p>message from api{{ state.erromessage }}</p>



          <nav>

          </nav>

          <Button class="mt-4" :loading="loadingState2" loadingText2="please wait">
            <NuxtLink to="/">Home</NuxtLink>
          </Button>
        </section>
        <section v-else
          class="bg-white border-secondary border-4 py-6 px-4 overflow-scroll bg  shadows rounded-lg  w-[90%] sm:h-fit h-screen pb-20 mb-10 ">
          <div class="w-full justify-center items-center flex"><img src="@/assets/image/faileds.gif"
              alt="sucessful payment" class=" w-32 mx-0 justify-center "></div>
          <h1 class="text-3xl text-center text-red-600  font-medium ">Sorry, You failed exam 👍 </h1>
          <h2 class="text-xl  font-semibold mt-2 text-center">Your score is {{ state.score }} out of
            {{ state.selectedQuestions.length }}</h2>
          <!-- <p class="text-center font-medium ">Thanks for participate in this activity, and you would have receive 1GB on your phone number that you provided</p> -->
          <p class="text-center font-medium ">Thanks for participate in this activity, and you need to retry it again at
            1st january 2023 </p>
          <p class="mt-2">Also will want to notices you on this website that, we are selling Scratch card pin (that you
            can use to check your waec, neco, nabteb result and exam pin for GCEWAEC, GCENECO, GCENABTEB soon on),<br> and
            and then Airtime and databundle for MTN, GLO, AIRTEL etc at cheapest price </p>



          <h1 class=" font-medium">Now click this below button to go back home </h1>
          <nav>

          </nav>

          <Button class="mt-4" :loading="state.loadingState3" @click="startTimer()" loadingText2="please wait">
            Home
          </Button>
        </section>
      </div>

      <div :class="state.presubmitetem ? 'translate-y-0' : 'translate-y-[1000px]'"
        class="   w-full  duration-700  justify-center items-center flex overflow-hidden     py-1 fixed   px-4 ">

        <div class="duration-700  bg-white shadows py-2 px-2  sm:w-1/4 w-full ">
          <h1 class=" text-xl font-semibold text-center"> Hmmm <br>Are you ready to submit</h1>
          <div class="flex gap-3 pt-3 text-white ">

            <button @click="unsubmite()" class="text-2xl py-2  font-medium bg-secondary w-full  ">No</button>

            <button @click="submite()" class="text-2xl py-2 font-medium bg-primary w-full  ">Yes</button>

          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useOnline } from '@vueuse/core'
const { notify } = useNotification();

const state = reactive({

  erromessage: '',
  loadingState2: false,
  loadingState3: false,
  loadingState1: false,
  both: false,
  examStatus: '',
  isSubmitted: false,
  showInstructions: true,
  errornetwork: false,
  errorphone: false,
  loadingState: false,
  submiteEnter: true,
  options: ['One', 'Two', 'Three', 'Four'],
  selectedOption: null,
  questions: [], // Initialize your questions array
  questionIndex: 0,
  score: 0,
  timer: null,
  timeLeft: 2 * 60 + 15,
  selectedQuestions: [{
    notice: 'Pick one that compudatle to this question ',
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
    userAnswer: null, // This will hold the user's answer
  }],
  form: {
    network: "",
    phone: "",
  },
});







const resetErrors = () => {
  state.errornetwork = false;
  state.errorphone = false;
};

const onInput = () => {
  resetErrors();
};

const selectQuestions = (questionss) => {
  let indices = Array.from({ length: questionss.length }, (_, i) => i); // Array of indices
  indices.sort(() => Math.random() - 0.5); // Shuffle the indices
  state.selectedQuestions = indices.slice(0, 3).map(i => questionss[i]); // Select the first 5
};



const start = async () => {

  const regex = /[a-zA-Z]/;
  state.loadingState = true;

  const phone = String(state.form.phone);
  if (!state.form.network || state.form.network === "network") {
    state.errornetwork = true;
    state.loadingState = false;
    return false;
  } else if (!phone ||
    phone.length < 10 ||
    phone.length > 11 ||
    regex.test(phone)
  ) {
    state.loadingState = false;
    state.errorphone = true;
    return false;
  } else {
    console.log('yyyyyy');
    try {
      const online = useOnline()
      if (!online.value) {
        notify({
          title: "No Internet Connection",
          text: "Please check your internet connection and try again.",
        });
        state.loadingState = false;
        throw new Error("No internet connection");
      }


      const response = await fetch('https://api-abanise-five.vercel.app/quiz', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          phoneNo: state.form.phone,
        })

      })

      if (!response.ok) {

        const errorData = await response.json();
        state.erromessage = errorData.message;
        notify({
          title: "error",
          text: errorData.message,
        });
        state.loadingState = false;
        throw new Error(errorData.message);

      }
      const data = await response.json();
   
      state.loadingState = true

      if (state.timer) {
        clearInterval(state.timer);
        state.timeLeft = 2 * 60 + 15;
      }

      setTimeout(() => {


      }, 1000);
      ;
      // Select a set of questionsstate.selectQuestions()
      // Set the timer for 5 minutes (300 seconds)
      state.timer = setInterval(() => {
        if (state.timeLeft > 0) {
          state.timeLeft--;
        } else {
          submite();
        }
      }, 1000);
      selectQuestions(data.success);
      state.showInstructions = false
      state.loadingState = true;

      setTimeout(() => {

      }, 7000);
    } catch (error) {
      console.log(error)
    }
  }

};
const unsubmite = () => {
  state.presubmitetem = false;
};

const goToQuestion = (index) => {
  state.questionIndex = index;
};

// Lifecycle hooks
onMounted(() => {

});
watch(() => state.selectedOption, (newVal, oldVal) => {
  console.log(`User picked: ${newVal}`);
});

const next = () => {
  if (state.selectedOption !== null) {
    state.selectedQuestions[state.questionIndex].userAnswer = state.selectedOption;
  }
  if (state.questionIndex < state.selectedQuestions.length - 1) {
    state.questionIndex++;
  }
  if (state.questionIndex < state.selectedQuestions.length) {
    state.selectedOption = state.selectedQuestions[state.questionIndex].userAnswer;
  } else {
    console.log('Questions have finished');
    clearInterval(state.timer);
    submite();
  }
};

const previous = () => {
  if (state.questionIndex > 0) {
    if (state.selectedOption !== null) {
      state.selectedQuestions[state.questionIndex].userAnswer = state.selectedOption;
    }
    state.questionIndex--;
    state.selectedOption = state.selectedQuestions[state.questionIndex].userAnswer;
  }
};

const prevsubmit = () => {
  if (state.selectedOption !== null) {
    state.selectedQuestions[state.questionIndex].userAnswer = state.selectedOption;
  }
  state.presubmitetem = true;
  console.log('tttttttt');
};




const submite = async () => {

  clearInterval(state.timer);
  for (let question of state.selectedQuestions) {
    if (question.userAnswer === question.rightAnswer) {
      state.score++;
    }
  }
  state.presubmitetem = false;
  state.both = true;
  state.showInstructions = true;
  state.isSubmitted = true;
  if (state.score >= 2) {
    console.log('pass exam');
    state.examStatus = 'passed';
    console.log(state.form.network, state.form.phone, state.score);
    try {
      const response = await fetch('https://api-abanise-five.vercel.app/quiz/gift', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          phoneNo: state.form.phone,
          networkType: state.form.network
        })

      })

      if (!response.ok) {
        console.log('bad')
        const errorData = await response.json();
        state.erromessage = errorData.message;
        state.score = 0;
        notify({
          title: "error",
          text: errorData.message,
        });
        state.loadingState = false;
        throw new Error(errorData.message);

      }
      const data = await response.json();
      state.erromessage =  data.success
        
      state.score = 0
      console.log(data);

    } catch (error) {
      console.log(error)
    }

    state.isSubmitted = true;
    state.score++;

  };
  console.log('failedexam');
  state.score++;
}





</script>

<style>
.containers {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.containerss {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 400;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.containerss input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.containerss:hover input~.checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.containerss input:checked~.checkmark {
  background-color: #164b3b;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.containerss input:checked~.checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.containerss .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

.shadows {
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}

/* Style the indicator (dot/circle) */
.containers .checkmark:after {
  top: 8px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>