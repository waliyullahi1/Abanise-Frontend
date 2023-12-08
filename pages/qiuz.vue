<template class=" text-[poppins]">
  <div class=" bg-slate-200 text-[puppins] ">
    <Header :headertext="false" class="fixed z-40 top-0"></Header>
    <div class="  flex justify-center items-center mt-9   w-full h-screen">
      <section  class="bg-white mt-10 shadows  rounded-lg overflow-hidden  w-[80%] h-fit">
        <div class="">
          <div class=" sm:h-32 h-fit py-3 px-4 text-white text-xl  bg-primary w-full">
            <h1 class=" sm:text-xl text-[14px] leading-tight mb-10">  Notice: {{ questions[questionIndex].notice }} </h1>
            <h1 class="font-semibold text-xl"> {{ selectedQuestions[questionIndex].question }} </h1>
          </div>
          <div class=" py-3 px-5">
            <p>Time left: {{ Math.floor(timeLeft / 60) }} minutes {{ timeLeft % 60 }} seconds</p>
    <!-- Add a start button -->
    <button @click="startTimer">Start</button>
            <label class="containerss" v-for="(option, index) in selectedQuestions[questionIndex].choices" :key="index">
              {{ option }}
              <input type="radio" v-model="this.selectedOption" :value="option"  name="radio">
              <span class="checkmark"></span>
            </label>

          </div>


        </div>
        <div class=" flex px-4 justify-between ">
          <button  @click="previous" class=" py-2 px-4 t text-white bg-primary hover:bg-green-800 ease-in-out  duration-500">
            Previous 
          </button>
          
          <button v-if="questionIndex < questions.length - 1" @click="next" class=" py-2 px-4 t text-white bg-primary hover:bg-green-800 ease-in-out  duration-500">
          Next
          </button>
          <button v-else @click="submite" class=" py-2 px-4 t text-white bg-secondary hover:bg-red-600 ease-in-out  duration-500">
            Submit 
          </button>
        </div>

        <div class="mt-7 py-3 px-5 flex justify-center w-full gap-3">
          <div class="sm:py-3 border-black  border-2 sm:px-5 py-1 px-3 rounded-full w-fit h-fit font-semibold  text-black"
            v-for="(q, index) in selectedQuestions" :key="index" @click="goToQuestion(index)" :class="{
               'bg-red text-primary border-primary bg-white': questionIndex === index && q.userAnswer === null,
      'bg-primary border-primary text-white': questionIndex !== index && q.userAnswer !== null,
      'bg-white border-primary': q.userAnswer === null,
      ' bg-slate-600 border-slate-600 text-white': q.userAnswer !== null && questionIndex === index,
            }">
            <p>{{ index + 1 }}</p>
          </div>
        </div>
      </section>

       <div :class=" submiteEnter ? 'w-0 h-0'  : 'w-full h-full '"   class=" hidden  w-full : bg-opacity-75   flex justify-center items-center    py-1 fixed   px-4 ">

        <div :class=" submiteEnter ? 'translate-y-0' : 'translate-y-[1000px]'"  class="duration-700  bg-white shadows py-2 px-2 relative sm:w-1/4 w-full ">
          <h1 class=" text-xl font-semibold text-center" > HMMMMM <br>ARE YOU READY TO SUBMITE</h1>
        <div class="flex gap-3 pt-3 text-white ">

        <button   @click="unsubmite()" class="text-2xl py-2  font-medium bg-secondary w-full  ">No</button>
       
        <button @click="submite()" class="text-2xl py-2 font-medium bg-primary w-full  ">Yes</button>

        </div>
        
        </div>
        </div>

        <div>
          <div>
          <div  class="duration-700 shadows py-2 z-20  fixed bg-black w-full ">
              <h1  class="text-3xl text-semibold w-full">You Win</h1>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>



const questions = [
  {
    notice: 'Pick one that compudatle to this question ',
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: '2Pick one that compudatle to this question ',
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: '3Pick one that compudatle to this question ',
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: '4Pick one that compudatle to this question ',
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: 'pick one that compudatle to this question ',
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "United States"],
    rightAnswer: "Russia",
    userAnswer: null, // This will hold the user's answer
  },
  {
    notice: 'pick one that compudatle to this question ',
    question: "What is the 100th digit of Pi?",
    choices: [9, 4, 7],
    rightAnswer: 9,
    userAnswer: null, // This will hold the user's answer
  },
];

export default {
  name: "App",
  data() {
    return {
      submiteEnter:false,
      options: ['One', 'Two', 'Three', 'Four'],
      selectedOption: null,
      questions,
      questionIndex: 0,
      score: 0,
      timer: null,
      timeLeft: 300,
      selectedQuestions: [],
    };
  },
  methods: {
    selectQuestions() {
    let indices = Array.from({length: this.questions.length}, (_, i) => i); // Array of indices
    indices.sort(() => Math.random() - 0.5); // Shuffle the indices
    this.selectedQuestions = indices.slice(0, 5).map(i => this.questions[i]); // Select the first 5
  },
    startTimer() {
      // Set the timer for 5 minutes (300000 milliseconds)
      
    // Clear any existing timer
    if (this.timer) {
      clearInterval(this.timer);
      this.timeLeft = 300; // Reset the time
    }

    // Set the timer for 5 minutes (300 seconds)
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.submite();
      }
    }, 1000);

    },
    
    preSubmite(){
      this.submiteEnter = true
    },
    unsubmite(){

    },
    goToQuestion(index) {
      this.questionIndex = index;
      this.question = this.questions[this.questionIndex];
    },
    next() {
  // Save the user's answer if one is selected
  if (this.selectedOption !== null) {
    this.questions[this.questionIndex].userAnswer = this.selectedOption;
  }
  // Increment the question index
  if (this.questionIndex < this.questions.length - 1) {
    this.questionIndex++;
  }
  // Reset the selected option for the next question
  if (this.questionIndex < this.questions.length) {
    this.selectedOption = this.questions[this.questionIndex].userAnswer;
  } else {
    this.submiteEnter = true
    console.log('Questions have finished');
    clearTimeout(this.timer);
      this.startTimer();clearTimeout(this.timer);
      this.startTimer();
    // this.submite();
  }
},
    previous() {
      if (this.questionIndex > 0) {
        if (this.selectedOption !== null) {
        this.questions[this.questionIndex].userAnswer = this.selectedOption;
      }
        // Decrement the question index
        this.questionIndex--;

        // Restore the user's answer for the previous question
        this.selectedOption = this.questions[this.questionIndex].userAnswer;
      }
    },
    submite() {
      clearTimeout(this.timer)
      let score = 0;
      for (let question of this.questions) {
        if (question.userAnswer === question.rightAnswer) {
          score++;
        }
      }
      console.log(`Score: ${score}`);
      // Display the score to the user
      alert(`Your score is ${score} out of ${this.questions.length}`);
    },

  },

  watch: {
    selectedOption: function (newVal, oldVal) {
      console.log(`User picked: ${newVal}`);
    }

  },
  created() {
    this.selectQuestions();
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
  font-size: 22px;
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
.containerss:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.containerss input:checked ~ .checkmark {
  background-color: #164b3b;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.containerss input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.containerss .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;}

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