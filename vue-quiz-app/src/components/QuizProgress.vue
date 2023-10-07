<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const { progress } = defineProps(["progress"]);
</script>

<style scoped>
.progress-container {
  width: 100%;
  height: 20px;
  background-color: white;
  border: 1px solid black;
}

.progress-bar {
  height: 100%;
  background-color: pink;
}
</style>
