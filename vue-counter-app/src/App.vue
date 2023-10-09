<template>
  <div class="mainBody">
    <h4>The current count is...</h4>
    <h1>{{ count }}</h1>
    <div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let count = ref(0);
const increment = () => {
  count.value++;
};
const decrement = () => {
  count.value--;
};
</script>
<style scoped>
.mainBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
  background-color: aliceblue;
  height: 100vh;
}
</style>
