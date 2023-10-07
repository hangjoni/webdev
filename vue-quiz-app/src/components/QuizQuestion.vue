<template>
  <div>
    <h2>{{ question.text }}</h2>
    <div
      v-for="option in question.options"
      :key="option.id"
      @click="
        option.isCorrect ? (point = 1) : (point = 0);
        selected = option.id;
      "
      :class="{ selected: selected == option.id, option }"
    >
      <span class="label">{{ option.label }}</span>
      <span class="text">{{ option.text }}</span>
      <!-- <span>{{ option.isCorrect }}</span> -->
    </div>
    <!-- <p>point is {{ point }}, selected is {{ selected }}</p> -->
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <button @click="handleNext">Next</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watchEffect } from "vue";

const { question } = defineProps(["question"]);
const emits = defineEmits(["next"]);

let point = ref(0);
let selected = ref();

const errorMessage = ref("");

const handleNext = () => {
  if (!selected.value) {
    errorMessage.value = "You must select an option";
  } else {
    selected.value = null;
    emits("next", point.value);
  }
};
</script>

<style scoped>
.option {
  display: flex;
  gap: 5px;
}
.label {
  background-color: pink;
  border: 1px solid black;
}
.selected {
  background-color: pink;
}
</style>
