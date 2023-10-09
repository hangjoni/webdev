<template>
  <div class="modal-overlay">
    <div class="modal">
      <button @click="$emit('close')" class="close-button">x</button>
      <slot></slot>
      <p v-if="modalErrorMessage" class="error">{{ modalErrorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from 'vue'
const props = defineProps(['modalErrorMessage'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  width: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
}
.error {
  color: red;
  font-size: small;
  font-style: italic;
}
</style>
