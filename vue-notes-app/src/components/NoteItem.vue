<template>
  <div class="note-item">
    <div class="note-message">{{ noteMessage }}</div>
    <div class="date">{{ `${date.getDate()}/${date.getMonth()}/${date.getYear()}` }}</div>
  </div>
</template>

<script setup>
const props = defineProps(['noteMessage', 'date', 'color'])
</script>

<style scoped>
.note-item {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 10px;
  background-color: v-bind(props.color);
  word-wrap: break-word; /* for older browser */
  overflow-wrap: break-word;
}
.note-message {
  font-weight: bold;
  max-width: 100%;
}
.date {
  font-size: small;
}
</style>
