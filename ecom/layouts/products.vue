<template>
  <header class="shadow-sm bg-white">
    <nav class="container mx-auto p-4 flex justify-between">
      <NuxtLink to="/products" class="font-bold">Nuxt dojo merch</NuxtLink>
    </nav>
  </header>

  <!-- page content -->
  <div class="container mx-auto p-4">
    <slot />
  </div>

  <footer class="container mx-auto p-4 flex justify-between shadow-sm bg-white">
    <ul class="flex gap-4">
      <li><NuxtLink to="/">Home</NuxtLink></li>
      <li><NuxtLink to="/about">About</NuxtLink></li>
      <li><NuxtLink to="/products">Products</NuxtLink></li>
    </ul>
  </footer>
</template>

<style scoped>
.router-link-exact-active {
  color: green;
}
</style>
