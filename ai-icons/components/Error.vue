<template>
  <div>
    {{ errorMessage }}
  </div>
</template>

<script setup>
import { toRefs } from "vue";
const props = defineProps({
  errorMessage: {
    type: String,
    default: "some error",
  },
});

const { errorMessage } = toRefs(props);
</script>

<style lang="scss" scoped></style>
