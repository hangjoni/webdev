<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

useHead({
  title: "Merch",
  meta: [{ name: "title", content: "Merch for Nuxt" }],
});

// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style lang="scss" scoped></style>
