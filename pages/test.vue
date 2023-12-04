<template>
    <!-- ... -->
    <div v-for="(q, index) in questions" :key="index">
      <h1>{{ q.question }}</h1>
      <ul v-for="c of q.choices" :key="c">
        <label>
          {{ c }}
          <input type="radio" :checked="answers[index] === c" :name="'question' + index" :disabled="index > questionIndex" @change="answerQuestion(index, c)">
        </label>
      </ul>
    </div>
    <button @click="next" :disabled="questionIndex >= questions.length - 1 || !answers[questionIndex]">Next</button>
    <button @click="submit" :disabled="!allQuestionsAnswered">Submit</button>
    <!-- ... -->
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
      questions,
      questionIndex: 0,
      question: questions[0],
      answer: "",
    };
  },
  methods: {
    answerQuestion(answer) {
      this.questions[this.questionIndex].userAnswer = answer;
    },
    next() {
      if (this.questionIndex < this.questions.length - 1) {
        this.questionIndex++;
        this.question = this.questions[this.questionIndex];
      }
    },
    goToQuestion(index) {
      this.questionIndex = index;
      this.question = this.questions[this.questionIndex];
    },
    previous() {
      if (this.questionIndex > 0) {
        this.questionIndex--;
        this.question = this.questions[this.questionIndex];
      }
    },
  },
};
</script>

  