<template>
  <div>
    {{ url }}
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  url: {
    type: String,
    default: "placeholder",
  },
});

const { url } = toRefs(props);
</script>

<style lang="scss" scoped></style>
