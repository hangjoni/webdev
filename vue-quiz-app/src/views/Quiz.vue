<template>
  <div v-if="filteredObject">
    <div>{{ filteredObject.name }} Quiz</div>
    <div v-if="isDone">
      <h1>You got {{ points }} out of {{ questions.length }} right</h1>
    </div>
    <div v-else>
      <QuizProgress :progress="progress" />
      <QuizQuestion @next="handleNext" :question="question" />
    </div>
  </div>
  <div v-else>{{ errorMessage }}</div>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import p from "../data/quizzes.json";
import { useRoute } from "vue-router";
import QuizProgress from "../components/QuizProgress.vue";
import QuizQuestion from "../components/QuizQuestion.vue";
// we need to declare all variables in the beginning, else they might not be defined when hydrating the element due to the if block
let questions, question_index, question, isDone, progress, points, handleNext;

const errorMessage = ref("");

const id = useRoute().params.id; //id here represents the subject

const filteredObject = p.find((x) => x.id === parseInt(id));
console.log("filteredObject", filteredObject);
if (filteredObject) {
  questions = filteredObject.questions;
  question_index = ref(0);
  question = computed(() => questions[question_index.value]);
  console.log("question", question.value);
  isDone = ref(false);
  progress = computed(
    () => ((question_index.value + 1) * 100) / questions.length
  );
  points = ref(0);

  handleNext = (num) => {
    console.log("passed in emit", num);
    points.value += num;
    if (question_index.value < questions.length - 1) {
      question_index.value++;
    } else {
      isDone.value = true;
    }
  };
} else {
  errorMessage.value = "Quiz not found!";
}
</script>

<style scoped></style>
