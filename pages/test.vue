
<template class=" text-[poppins]">
  <div class=" bg-slate-200 text-[puppins] ">
    <Header :headertext="false" class="fixed z-40 top-0"></Header>
    <div class="  flex justify-center items-center mt-9   w-full h-screen">
      <section id="error" :class="both? 'hidden': 'block'" v-if="showInstructions"
        class="bg-white py-6 px-4  overflow-scroll bg  z-40 fixed mt-10 shadows rounded-lg  w-[80%] sm:h-fit h-screen pb-20 mb-10 ">
        <p   class=" message pl-5 text-2xl text-red-700 uppercase  text-center text-">{{erromessage}}</p>
        <h1 class="text-xl text-center font-medium ">Please read the instruction below before you click start </h1>
        <nav>
          <ul class="  list-outside ml-4 mt-5 font-medium list-disc">
            <li>Enter the correct phone number and Network type.</li>
            <li>Please, Don't try to refresh the page when you are on the exam.</li>
            <li>You have 5 minite to answer all the question, so you need to be fast.</li>
            <li> You must answer three question Correctly before you can receive your gift.</li>
            <li>If you dont score more than five, We are sorry, you can't receive any gift.</li>
            <li> You have three chances to play this game if you don't pass it.</li>
          </ul>
        </nav>
        <form action="" class=" mt-7 mb-9 sm:grid block grid-cols-2 gap-7  w-full h-fit  text-xl">
          <div class="flex bg-white w-full flex-col">
            <label for="" class="text-primary font-medium px-4 text-[15px]">Network</label>
            <select v-model="form.network"
              class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none border-2 font-medium h-full focus:border-primary border-gray-300  py-[.3rem]"
              placeholder="Password" @input="onInput">
              <option value="MTN">MTN</option>
              <option value="GLO">GLO</option>
              <option value="9MOBILE">9MOBILE</option>
              <option value="AIRTEL">AIRTEL</option>
            </select>
            <p :class="errornetwork ? 'flex' : 'hidden '" class="e pl-5 text-red-700 text-[13px]">
              Select the Network
            </p>
          </div>


          <div class="flex bg-white w-full flex-col">
            <label for="" class="text-primary font-medium w-full px-4 text-[15px]">Phone Number</label>
            <input v-model="form.phone" type="text" pattern="[0-9]*"
              class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border-2 border-gray- border-gray-300 py-[.3rem]"
              placeholder="phone number " @input="onInput" />
            <div class="relative w-0 h-0">
              <p :class="errorphone ? 'flex' : 'hidden '" class="e pl-5 text-red-700 w-36  overflow-visible text-[13px]">
                Enter correct phone
              </p>
            </div>

          </div>

        </form>
        <Button class="mt-4" :loading="loadingState" @click="start()" loadingText2="please wait">
          Start Exam
        </Button>
      </section>
      <section   v-else class="bg-white mt-10 shadows rounded-lg overflow-hidden w-[80%] h-fit">
        <div class="">
          <div class="sm:h-32 h-fit py-3 px-4 text-white text-xl bg-primary w-full">
            <h1 class="sm:text-xl text-[14px] leading-tight mb-10">Notice: {{ selectedQuestions[questionIndex].notice }}
            </h1>
            <h1 class="font-semibold  sm:text-[20px] text-[15px] ">{{ selectedQuestions[questionIndex].question }}</h1>
          </div>
          <div class="py-3 px-5">
            <p>Time left: {{ Math.floor(timeLeft / 60) }} minutes {{ timeLeft % 60 }} seconds</p>
            <!-- Add a start button -->
            
            <label class="containerss text-[15px]" v-for="(option, index) in selectedQuestions[questionIndex].choices"
              :key="index">
              {{ option }}
              <input type="radio" v-model="selectedOption" :value="option" name="radio">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <div class="flex px-4 justify-between">
          <button @click="previous" class="py-2 px-4 t text-white bg-primary hover:bg-green-800 ease-in-out duration-500">
            Previous
          </button>
          <button v-if="questionIndex < selectedQuestions.length - 1" @click="next"
            class="py-2 px-4 t text-white bg-primary hover:bg-green-800 ease-in-out duration-500">
            Next
          </button>
          <button v-else @click="prevsubmit"
            class="py-2 px-4 t text-white bg-secondary hover:bg-red-600 ease-in-out duration-500">
            Submit
          </button>
        </div>
        <div class="mt-7 py-3 px-5 flex justify-center w-full gap-3">
          <div class="sm:py-3 border-black border-2 sm:px-5 py-1 px-3 rounded-full w-fit h-fit font-semibold text-black"
            v-for="(q, index) in selectedQuestions" :key="index" @click="goToQuestion(index)" :class="{
              'bg-red text-primary border-secondary bg-white': questionIndex === index && q.userAnswer === null,
              'bg-primary border-primary text-white': questionIndex !== index && q.userAnswer !== null,
              'bg-white border-primary': q.userAnswer === null,
              'bg-slate-600 border-slate-600 text-white': q.userAnswer !== null && questionIndex === index,
            }">
            <p>{{ index + 1 }}</p>
          </div>
        </div>
      </section>
      <!-- v-if="showInstructions"v-else  -->
      <div v-if="isSubmitted" class=" items-center mt-48 mx-auto w-full flex flex-row justify-center">
        <section v-if="examStatus === 'passed'"
          class="bg-white border-primary border-4 py-6 px-4 overflow-scroll bg   shadows rounded-lg  w-[90%] sm:h-fit h-screen pb-20 mb-10 ">
          <div class="w-full justify-center items-center flex"><img src="@/assets/image/success.gif"
              alt="sucessful payment" class=" w-32 mx-0 justify-center "></div>
          <h1 class="text-3xl text-center text-green-600  font-medium ">You win, Congratulation 👍 </h1>
          <h2 class="text-xl  font-semibold mt-2 text-center">Your score is {{ score }} out of
            {{ this.selectedQuestions.length }}</h2>
          <p class="text-center font-medium ">Thanks for participate in this activity, and you would have receive 1GB on your phone number that you provided</p>
          <p class="text-center font-medium ">Thanks for participate in this activity, and you need to ready this
            instruction Carefully and scroll down before you can receive your gift</p>
          <p class="mt-2">Also will want to notices you that, on this website we are selling Scratch card pin (that you
            can use to check your waec, neco, nabteb result and exam pin for GCEWAEC, GCENECO, GCENABTEB soon on),<br> and
            and then Airtime and databundle for MTN, GLO, AIRTEL etc at cheapest price </p>

       


      
          <nav>

          </nav>
          
          <Button  class="mt-4" :loading="loadingState2"  loadingText2="please wait">
           <NuxtLink to="/">Home</NuxtLink>
          </Button>
        </section>
        <section v-else
          class="bg-white border-secondary border-4 py-6 px-4 overflow-scroll bg  shadows rounded-lg  w-[90%] sm:h-fit h-screen pb-20 mb-10 ">
          <div class="w-full justify-center items-center flex"><img src="@/assets/image/faileds.gif"
              alt="sucessful payment" class=" w-32 mx-0 justify-center "></div>
          <h1 class="text-3xl text-center text-red-600  font-medium ">Sorry, You failed exam 👍 </h1>
          <h2 class="text-xl  font-semibold mt-2 text-center">Your score is {{ score }} out of
            {{ this.selectedQuestions.length }}</h2>
          <!-- <p class="text-center font-medium ">Thanks for participate in this activity, and you would have receive 1GB on your phone number that you provided</p> -->
          <p class="text-center font-medium ">Thanks for participate in this activity, and you need to retry it again at
            1st january 2023 </p>
          <p class="mt-2">Also will want to notices you on this website that, we are selling Scratch card pin (that you
            can use to check your waec, neco, nabteb result and exam pin for GCEWAEC, GCENECO, GCENABTEB soon on),<br> and
            and then Airtime and databundle for MTN, GLO, AIRTEL etc at cheapest price </p>



          <h1 class=" font-medium">Now click this below button to go back home </h1>
          <nav>

          </nav>

          <Button class="mt-4" :loading="loadingState3" @click="startTimer()" loadingText2="please wait">
            Home
          </Button>
        </section>
      </div>

      <div :class="presubmitetem ? 'translate-y-0' : 'translate-y-[1000px]'"
        class="   w-full  duration-700  justify-center items-center flex overflow-hidden     py-1 fixed   px-4 ">

        <div 
          class="duration-700  bg-white shadows py-2 px-2  sm:w-1/4 w-full ">
          <h1 class=" text-xl font-semibold text-center"> HMMMMM <br>ARE YOU READY TO SUBMITE</h1>
          <div class="flex gap-3 pt-3 text-white ">

            <button @click="unsubmite()" class="text-2xl py-2  font-medium bg-secondary w-full  ">No</button>

            <button @click="submite()" class="text-2xl py-2 font-medium bg-primary w-full  ">Yes</button>

          </div>

        </div>
      </div>

  
    </div>


  </div>
</template>

<script>
import { useNotification } from '#app'


const questions = [
  {
    notice: 'Choose  appropriate option from the list provided',
    question: "What is location of ABANISE's turtory central in iwo ?",
    choices: ["Arround Ceebee hotel area, Barika, iwo", "Opposite celestias Church, Barika iwo", "Opposite Barika petrol Station iwo"],
    rightAnswer: "Opposite celestias Church, Barika iwo",
    userAnswer: null,
  },
  {
    notice: 'Choose the  appropriate option from the list provided',
    question: "This below are selling product and services of ABANISE's Educational instituted  ",
    choices: ["Textbook, Cobular, Stationary", "Educational services, Computer Accessories,  Bookshop, ", "Educational services, Bookshop, Tailer, "],
    rightAnswer: "Educational services, Computer Accessories,  Bookshop",
    userAnswer: null,
  },
  {
    notice: 'Choose the  appropriate option from the list provided',
    question: "What are the Main Abanise educational office adress?",
    choices: ["Elemo's Compound along kajola road iwo", "Agoro compound's Along Kajola road iwo", "Osin's Compound, Along Kajola road iwo"],
    rightAnswer: "Agoro compound's Along Kajola road iwo",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "what is the name of ABANISE turtorial Coodinator lesson",
    choices: ["Mr FATAI MURITALA", "Mr OLARINWA BOLAJI ", "Mr ADEWOLE OSUNLOWO"],
    rightAnswer: "Mr FATAI MURITALA",
    userAnswer: null, // Thishis will hold the user's answer
  },
  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "What is the name of ABANISE Turtorial English Teacher  ?",
    choices: ["Mr OLADELE BOLAJI", "Mr BOLAJI OLARINWA", "Mr ADEWOLE OSUNLOWO"],
    rightAnswer: "Mr oladele Bolaji",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: 'Fill the gap with appropriate option from the list provided ',
    question: "if i were ________ i would reject the offer ?",
    choices: ['himself', 'them', 'he'],
    rightAnswer: 'he',
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Complete the sentences with the correct option form the list below',
    question: "He acts ________ he were a general manger ?",
    choices: ['as', 'if', 'as if'],
    rightAnswer: 'as if',
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose the option that best complete the gap',
    question: "The book will sell in ________?",
    choices: ['hundreds of thousand ', 'a hundreds thousand ', 'hundred thousand'],
    rightAnswer: 'hundreds of thousand ',
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose the option that best complete the gap',
    question: " We are been ready to cater for  ________ ?",
    choices: ['the poor and the needy ', 'poor and needs ', 'the poor and needy'],
    rightAnswer: 'the poor and the needy',
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose the option that best complete the Question tag',
    question: " Dola has left school,  ________ ?",
    choices: ["didn't he", "has't he", "doesn't he"],
    rightAnswer: "has't he",
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose the option that best complete the Question tag',
    question: " Sola can't read,  ________  candle light.",
    choices: ["at", "to", "by"],
    rightAnswer: "by",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: 'Choose the option that best complete the Question tag',
    question: " Sola can't read,  ________  candle light.",
    choices: ["at", "to", "by"],
    rightAnswer: "by",
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "What is the name of ABANISE Turtorial Mathemtices Teacher  ?",
    choices: ["Mr FATAI MURITALA", "Mr OLARINWA BOLAJI ", "Mr ADEWOLE OSUNLOWO"],
    rightAnswer: "Mr FATAI MURITALA",
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "What is the name of ABANISE Turtorial Chemistry Teacher  ?",
    choices: ["Mr OGUNDARE SEYI", "Mr ODUNOLA SEYI", "Mr OGUNDARE AKAANI"],
    rightAnswer: "Mr OGUNDARE SEYI",
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "What is the name of ABANISE Turtorial Biology Teacher  ?",
    choices: ["Mr ODUNOLA SEYI", "Mr OYERINDE EMMANUEL", "Mr OYERINDE AKAANI"],
    rightAnswer: "Mr OYERINDE EMMANUEL",
    userAnswer: null, // This will hold the user's answer
  },

  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "What is the name of ABANISE Turtorial Mathemtices Teacher  ?",
    choices: ["Mr FATAI MURITALA", "Mr OLARINWA BOLAJI ", "Mr ADEWOLE OSUNLOWO"],
    rightAnswer: "Mr FATAI MURITALA",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: 'Choose  appropriate option from the list provided ',
    question: "What is the name of ABANISE Turtorial government Teacher  ?",
    choices: ["Mr IDRIS BABATUNDE", "Mr YUNUS ADEKUNLE ", "Mr IDRIS ADEKUNLE"],
    rightAnswer: "Mr FATAI MURITALA",
    userAnswer: null, // This will hold the user's answer
  },

];

export default {
  name: "App",
  data() {
    return {
      notify: null,
      erromessage:'',
      loadingState2:false,
      loadingState3:false,
      loadingState1:false,
      both:false,
      presubmitetem: false,
      examStatus:'',
      isSubmitted: false,
      showInstructions: true,
      errornetwork: false,
      errorphone: false,
      loadingState: false,
      submiteEnter: true,
      options: ['One', 'Two', 'Three', 'Four'],
      selectedOption: null,
      questions,
      questionIndex: 0,
      score: 0,
      timer: null,
      timeLeft: 300,
      selectedQuestions: [{
        notice: 'Pick one that compudatle to this question ',
        question: "What is American football called in England?",
        choices: ["American football", "football", "Handball"],
        rightAnswer: "American football",
        userAnswer: null, // This will hold the user's answer
      },],
      form: {
        network: "",
        phone: "",
      },
    };
  },
  mounted() {
    this.notify = useNotification();
  },
  methods: {
    
    resetErrors() {
      this.errornetwork = false,
        this.errorphone = false;
    },
    onInput() {
      this.resetErrors();
    },

    selectQuestions() {
      let indices = Array.from({ length: this.questions.length }, (_, i) => i); // Array of indices
      indices.sort(() => Math.random() - 0.5); // Shuffle the indices
      this.selectedQuestions = indices.slice(0, 5).map(i => this.questions[i]); // Select the first 5
    },
    async start() {
      this.notify({ title: 'Error', text: 'Invalid phone number.' });
      const regex = /[a-zA-Z]/;
      this.loadingState = true;

      const phone = String(this.form.phone);
      if (!this.form.network || this.form.network === "network") {
        this.errornetwork = true;
        this.loadingState = false;
        return false;
      } else if (!phone ||
        phone.length < 10 ||
        phone.length > 11 ||
        regex.test(phone)
      ) {
        this.loadingState = false;
        this.errorphone = true;
        return false;
      }else{
        console.log('yyyyyy');
      try {
    const response = await fetch('http://localhost:3500/quiz',{
      method : "POST",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({ 
        phoneNo:this.form.phone,
      })
      
    })
  
  if (!response.ok) {

    const errorData = await response.json();
   this.erromessage = errorData.message;
   this.scrollToError();
   this.loadingState = false;
    throw new Error(errorData.message);
    
  }
   this.loadingState = true
   if (this.timer) {
        clearInterval(this.timer);
        this.timeLeft = 300; // Reset the time
      }

      setTimeout(() => {
        this.transacPrev = true;
        this.showInstructions = false

      }, 1000);
      ;
      // Select a set of questionsthis.selectQuestions()
      // Set the timer for 5 minutes (300 seconds)
      this.timer = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
        } else {
          this.submite();
        }
      }, 1000);
      this.selectQuestions();
      this.loadingState = true;
  
  setTimeout(() => {
   
      }, 7000);
  } catch (error) {
    console.log(error)
  }
      }

     
  
    },
    unsubmite(){
      this.presubmitetem = false
    },

    // startTimer() {
    //   this.selectQuestions()
    // },

    goToQuestion(index) {
      this.questionIndex = index;
    },
    next() {
      // Save the user's answer if one is selected
      if (this.selectedOption !== null) {
        this.selectedQuestions[this.questionIndex].userAnswer = this.selectedOption;
      }
      // Increment the question index
      if (this.questionIndex < this.selectedQuestions.length - 1) {
        this.questionIndex++;
      }
      // Reset the selected option for the next question
      if (this.questionIndex < this.selectedQuestions.length) {
        this.selectedOption = this.selectedQuestions[this.questionIndex].userAnswer;
      } else {
        console.log('Questions have finished');
        clearInterval(this.timer);
        this.submite();
      }
    },
    previous() {
      if (this.questionIndex > 0) {
        if (this.selectedOption !== null) {
          this.selectedQuestions[this.questionIndex].userAnswer = this.selectedOption;
        };
        this.questionIndex--;
        this.selectedOption = this.selectedQuestions[this.questionIndex].userAnswer;
      }
    },
    prevsubmit(){
      if (this.selectedOption !== null) {
        this.selectedQuestions[this.questionIndex].userAnswer = this.selectedOption;
      }
      this.presubmitetem = true
      console.log('tttttttt')
    },
 
    submite() {
      
      clearInterval(this.timer); // Clear the timer
      
      for (let question of this.selectedQuestions) {
        if (question.userAnswer === question.rightAnswer) {
          this.score++;
        }
      }
      this.presubmitetem = false
      this.both=true
      this.showInstructions=true
     if (this.score >= 3){
      this.examStatus='passed'
     }
      this.isSubmitted = true
    },

  },

  watch: {
    selectedOption: function (newVal, oldVal) {
      console.log(`User picked: ${newVal}`);
    }

  },
  created() {
    // this.selectQuestions();
    // Start the timer when the component is created
  },
};

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
}</style>