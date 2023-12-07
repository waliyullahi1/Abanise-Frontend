<template class=" text-[poppins]">
  <div class=" bg-slate-200 text-[puppins] ">
    <Header :headertext="false" class="fixed z-40 top-0"></Header>
    <div class="  flex justify-center items-center mt-9   w-full h-screen">
      <section  class="bg-white mt-10 shadows  rounded-lg overflow-hidden  w-[80%] h-fit">
        <div class="">
          <div class=" sm:h-32 h-fit py-3 px-4 text-white text-xl  bg-primary w-full">
            <h1 class=" sm:text-xl text-[14px] leading-tight mb-10">  Notice: {{ questions[questionIndex].notice }} </h1>
            <h1 class="font-semibold text-xl"> {{ questions[questionIndex].question }} </h1>
          </div>
          <div class=" py-3 px-5">

            <label class="container" v-for="(option, index) in questions[questionIndex].choices" :key="index">
              {{ option }}
              <input type="radio" v-model="this.selectedOption" :value="option"  name="radio">
              <span class="checkmark"></span>
            </label>

          </div>


        </div>
        <div class=" flex px-4 justify-between ">
          <div @click="previous" class=" sm:w-10 w-6 text-primary hover:text-secondary ease-in-out  duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
              viewBox="0 0 256 256" xml:space="preserve">
              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 C 20.186 90 0 69.813 0 45 C 0 20.187 20.186 0 45 0 z M 51.263 73.4 l 8.6 -8.6 L 40.064 45 l 19.799 -19.799 l -8.6 -8.6 L 22.864 45 L 51.263 73.4 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>

          </div>
          <div @click="next" class=" sm:w-10 w-6 rotate-180 text-primary hover:text-secondary ease-in-out  duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
              viewBox="0 0 256 256" xml:space="preserve">
              <defs>
              </defs>
              <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path
                  d="M 45 0 c 24.813 0 45 20.187 45 45 c 0 24.813 -20.187 45 -45 45 C 20.186 90 0 69.813 0 45 C 0 20.187 20.186 0 45 0 z M 51.263 73.4 l 8.6 -8.6 L 40.064 45 l 19.799 -19.799 l -8.6 -8.6 L 22.864 45 L 51.263 73.4 z"
                  style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
              </g>
            </svg>

          </div>
        </div>

        <div class="mt-7 py-3 px-5 flex justify-center w-full gap-3">
          <div class="sm:py-3 border-black  border-2 sm:px-5 py-1 px-3 rounded-full w-fit h-fit font-semibold  text-black"
            v-for="(q, index) in questions" :key="index" @click="goToQuestion(index)" :class="{
               'bg-red text-primary border-primary bg-white': questionIndex === index && q.userAnswer === null,
      'bg-primary border-primary text-white': questionIndex !== index && q.userAnswer !== null,
      'bg-white border-primary': q.userAnswer === null,
      ' bg-slate-600 border-slate-600 text-white': q.userAnswer !== null && questionIndex === index,
            }">
            <p>{{ index + 1 }}</p>
          </div>
        </div>
      </section>
      

       <div :class=" submiteEnter ? 'w-full h-full'  : 'w-0 h-0 '"   class="  : bg-opacity-75   flex justify-center items-center    py-1 fixed   px-4 ">

        <div :class=" submiteEnter ? 'translate-y-0' : 'translate-y-[1000px]'"  class="duration-700  bg-white shadows py-2 px-2 relative sm:w-1/4 w-full ">
          <h1 class=" text-xl font-semibold text-center" > HMMMMM <br>ARE YOU READY TO SUBMITE</h1>
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



const questions = [
  {
    notice: 'Pick one that compudatle to this question ',
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
    };
  },
  methods: {
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

  }
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
.containers input {
  position: absolute;
  opacity: 0;
  margin: 10;
  cursor: pointer;
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  border:#000000 12px solid;
}

.bg-red {
  color: #00c489;

  border: #00c489 2px solid;
}

.bg-yellow {
  color: black;
  border-radius: 100%;
  border: #000000 2px solid;

}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 6px;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  
}

/* On mouse-over, add a grey background color */
.containers:hover input~.checkmark {
  background-color: #ccc;
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  border:#000000 1px solid;
}



/* When the radio button is checked, add a blue background */
.containers input:checked~.checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.containers input:checked~.checkmark:after {
  display: block;
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