<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search" v-model="searchTerm" />
    </header>
    <div class="cards">
      <Card
        v-for="cardData in filteredCardsData"
        :subject="cardData.subject"
        :question_count="cardData.question_count"
        :image_link="cardData.image_link"
        :key="cardData.subject"
      />
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import { reactive, ref, computed } from "vue";

const cardsData = reactive([
  {
    subject: "Math",
    question_count: 19,
    image_link: "/math.jpg",
  },
  {
    subject: "Biology",
    question_count: 10,
    image_link: "/biology.jpg",
  },
  {
    subject: "Chemistry",
    question_count: 8,
    image_link: "/chemistry.jpg",
  },
  {
    subject: "Physics",
    question_count: 2,
    image_link: "/physics.jpg",
  },
  {
    subject: "History",
    question_count: 4,
    image_link: "/history.jpg",
  },
  {
    subject: "Psychology",
    question_count: 7,
    image_link: "/psychology.jpg",
  },
]);

let searchTerm = ref("");
let filteredCardsData = computed(() => {
  return cardsData.filter((item) =>
    item.subject.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
</script>

<style scoped>
.container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 10%;
  padding-right: 10%;
}
.cards {
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
}
.card {
}

header {
  display: flex;
  gap: 2rem;
}
</style>
