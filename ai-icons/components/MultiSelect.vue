<template>
  <div class="flex gap-1">
    <ColorOption color="bg-red-500" @select="updateSelection" />
    <ColorOption color="bg-orange-400" @select="updateSelection" />
    <ColorOption color="bg-yellow-300" @select="updateSelection" />
    <ColorOption color="bg-green-300" @select="updateSelection" />
    <ColorOption color="bg-blue-300" @select="updateSelection" />
    <ColorOption color="bg-indigo-700" @select="updateSelection" />
    <ColorOption color="bg-purple-300" @select="updateSelection" />
    <ColorOption color="bg-pink-300" @select="updateSelection" />
    <ColorOption color="bg-amber-700" @select="updateSelection" />
    <ColorOption color="bg-black" @select="updateSelection" />
    <ColorOption color="bg-gray-300" @select="updateSelection" />
  </div>
  <div>Selected colors: {{ selectedColors.join(", ") }}</div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineProps, defineEmits } from "vue"; // You need to import this as well for the emits
import Option from "~/components/Option.vue";

const emit = defineEmits(); // This line helps in setting up the emits in script setup
const selectedColors = ref([]);

const updateSelection = ({ color, selected }) => {
  console.log("emit values", color, selected);
  if (selected && !selectedColors.value.includes(color)) {
    selectedColors.value.push(color);
  } else if (!selected && selectedColors.value.includes(color)) {
    selectedColors.value = selectedColors.value.filter((c) => c !== color);
  }
};

// Watch for changes in selectedColors and emit the value
watch(selectedColors, (newVal) => {
  emit("selectedColors", newVal);
});
</script>
