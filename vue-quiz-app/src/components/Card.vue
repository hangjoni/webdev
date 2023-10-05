<template>
  <div class="card">
    <img :src="image_link" alt="" />
    <h3>{{ subject }}</h3>
    <p v-if="question_count > 1">{{ question_count }} questions</p>
    <p v-else>{{ question_count }} question</p>
  </div>
</template>

<script setup>
const props = defineProps(["subject", "question_count", "image_link"]);
</script>

<style scoped>
.card {
  box-shadow: 5px 5px 5px lightslategray;
}
img {
  object-fit: cover;
  width: 100%;
}
</style>
