<template>
  <div class="flex flex-col p-3 justify-between">
    <!-- Header -->
    <div class="flex flex-row items-center gap-10">
      <img src="../assets/images/cat-pen.jpg" alt="logo" class="w-12 h-12" />
      <div class="sm:flex hidden flex-row justify-between flex-1 items-center">
        <div class="flex flex-row gap-6 justify-start">
          <a href="#">Free tools</a>
          <a href="#">Blog</a>
          <a href="#">Search</a>
        </div>
        <div class="flex flex-row gap-6 justify-end items-center">
          <div>Slider</div>
          <button
            class="border-pink-500 text-pink-500 rounded-lg border-2 px-2 py-1"
          >
            Buy credits
          </button>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="min-h-screen">
      <slot />
    </div>

    <!-- Footer -->
    <div class="border-t-2 border-t-slate-200">
      <p class="text-slate-300 text-xs py-2">All rights reserved</p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
