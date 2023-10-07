<template>
  <div class="container">
    <header>
      <h1>Quizzes</h1>
      <input type="text" placeholder="Search" v-model="searchTerm" />
    </header>

    <div class="cards">
      <div v-for="cardData in filteredCardsData">
        <RouterLink :to="`/quiz/${cardData.id}`">
          <Card
            :subject="cardData.name"
            :question_count="cardData.questions.length"
            :image_link="cardData.img"
            :key="cardData.id"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from "../components/Card.vue";
import { reactive, ref, computed } from "vue";
import q from "../data/quizzes.json";
import { RouterLink } from "vue-router";

const cardsData = reactive(q);

let searchTerm = ref("");
let filteredCardsData = computed(() => {
  return cardsData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});
console.log("filteredCardsData", filteredCardsData.value);
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
