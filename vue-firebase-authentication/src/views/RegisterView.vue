<template>
  <div class="home">
    <h1>Register</h1>
    <SigninComponent />
    <RegisterComponent />
  </div>
</template>

<script setup>
import RegisterComponent from '../components/RegisterComponent.vue'
</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
