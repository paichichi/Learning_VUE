<template>
  <div class="quiz-game">
    <h1>{{ currentQuestion.question }}</h1>
    <ul class="quiz-ul">
      <li v-for="(answer, index) in currentQuestion.answers" :key="index" @click="checkAnswer(answer)" class="quiz-li">
        {{ answer.text }}
      </li>
    </ul>
    <div v-if="state.showResult">
      <h2>You got {{ state.correctAnswers }} out of {{ questions.length }} correct!</h2>
      <button @click="restartQuiz">Restart Quiz</button>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  setup() {
    const questions = reactive([
      {
        question: 'Who is the one of the best-looking person in the world?',
        answers: [
          { text: 'You 😊', correct: true },
          { text: 'Angelina Jolie', correct: false },
          { text: 'Brad Pitt', correct: false },
        ],
      },
      {
        question: 'What is the name of the underwater continent of New Zealand?',
        answers: [
          { text: 'Pandora', correct: false },
          { text: 'Atlantis', correct: false },
          { text: 'Zealandia', correct: true },
        ],
      },
      {
        question: "Who is one of the world's flightless birds?",
        answers: [
          { text: 'Eagle', correct: false },
          { text: 'Kiwi', correct: true },
          { text: 'Pigeon', correct: false },
        ],
      },
    ]);

    const state = reactive({
      currentQuestionIndex: 0,
      correctAnswers: 0,
      showResult: false,
    });

    const currentQuestion = computed(() => questions[state.currentQuestionIndex]);

    const checkAnswer = (answer) => {
      if (answer.correct) {
        state.correctAnswers++;
      }

      if (state.currentQuestionIndex < questions.length - 1) {
        state.currentQuestionIndex++;
      } else {
        state.showResult = true;
      }
    };

    const restartQuiz = () => {
      state.currentQuestionIndex = 0;
      state.correctAnswers = 0;
      state.showResult = false;
    };

    return { questions, state, currentQuestion, checkAnswer, restartQuiz };
  },
};
</script>

<style>
.quiz-ul {
list-style-type: none;
padding: 0;
}

.quiz-li {
cursor: pointer;
margin-bottom: 10px;
border: 1px solid #ccc;
padding: 10px;
}

.quiz-li:hover {
background-color: #f2f2f2;
}
</style>