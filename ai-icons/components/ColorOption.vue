<template>
  <span
    :class="[
      'w-[1.6rem] h-[1.6rem] rounded-full inline-flex items-center justify-center bg-opacity-60',
      { 'bg-sky-800': isSelected },
    ]"
  >
    <span
      :class="[color, 'w-6 h-6 rounded-full border-4 border-white']"
      @click="selectOption"
    >
      <svg
        v-if="isSelected"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        class="absolute w-4 h-4 text-white"
      >
        <path
          fill-rule="evenodd"
          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </span>
  </span>
</template>

<script setup>
import { defineProps, ref, defineEmits } from "vue";
const props = defineProps({
  color: {
    type: String,
    default: "bg-slate-500",
  },
});

const emit = defineEmits();
const isSelected = ref(false);

const parseColor = (twColor) => {
  if (/\w+-\w+/g.test(twColor)) {
    return twColor.split("-")[1];
  } else {
    //default to empty string
    return "";
  }
};

const parsedColor = parseColor(props.color);

const selectOption = () => {
  isSelected.value = !isSelected.value;
  emit("select", { color: parsedColor, selected: isSelected.value });
};
</script>

<style lang="scss" scoped></style>
