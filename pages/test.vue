<template>
  <div>
    <h1></h1>
    <label class="container" v-for="(option, index) in questions[questionIndex].choices" :key="index">
        {{ option }}
        <input type="radio" v-model="this.selectedOption" :value="option" name="radio">
        <span class="checkmark"></span>
    </label>
    <button @click="next()">next</button> <button @click="previous()" >previous</button> <button @click="submite()" >submite</button>
  </div>
  
    <!-- ... -->
    
<!-- <label class="container">One
  <input type="radio" checked="checked" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">Two
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">Three
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label>
<label class="container">Four
  <input type="radio" name="radio">
  <span class="checkmark"></span>
</label> -->
  </template>
  
  <script>
const questions = [
  {
    question: "What is American football called in England?",
    choices: ["American football", "football", "Handball"],
    rightAnswer: "American football",
    userAnswer: null, // This will hold the user's answer
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "Canada", "United States"],
    rightAnswer: "Russia",
    userAnswer: null, // This will hold the user's answer
  },
  {
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
      options: ['One', 'Two', 'Three', 'Four'],
      selectedOption: null,
      questions,
      questionIndex: 0,
      score:0,
      // question: questions[0],
      // answer: "",
    };
  },
  methods: {
    next() {
    // Save the user's answer if one is selected
    if (this.selectedOption !== null) {
      this.questions[this.questionIndex].userAnswer = this.selectedOption;
    }
    // Increment the question index
    this.questionIndex++;

    // Reset the selected option for the next question
    if (this.questionIndex < this.questions.length) {
      this.selectedOption = this.questions[this.questionIndex].userAnswer;
    } else {
      console.log('Questions have finished');
      this.submite();
    }
  },
  previous() {
    if (this.questionIndex > 0) {   
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
    selectedOption: function(newVal, oldVal) {
      console.log(`User picked: ${newVal}`);
    }
 
}


};
</script>
 <style>
.container {
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
.container input {
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
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
 	top: 9px;
	left: 9px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}</style>
  