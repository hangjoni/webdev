<!-- components/Option.vue -->

<template>
  <div
    :class="['option', color, { selected: isSelected }]"
    @click="selectOption"
  >
    Option {{ color }}
  </div>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";

const props = defineProps({
  color: String,
});

const emit = defineEmits();

const isSelected = ref(false);

const selectOption = () => {
  isSelected.value = !isSelected.value;
  emit("select", { color: props.color, selected: isSelected.value });
};
</script>

<style>
.option {
  padding: 10px;
  border: 1px solid black;
  cursor: pointer;
}

.red {
  background-color: red;
}

.blue {
  background-color: blue;
}

.selected {
  border: 3px solid black;
}
</style>
