<template>
  <div>
    <img :src="url" class="w-[400px] h-[400px] object-contain" />
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
