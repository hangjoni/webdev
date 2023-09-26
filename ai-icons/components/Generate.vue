<template>
  <div class="flex flex-col justify-between bg-slate-50 py-6">
    <h1 class="font-bold text-lg py-2">Let's generate your icon</h1>
    <!-- part 1 -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <h1
          class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
        >
          01
        </h1>
        <div class="flex flex-col">
          <div class="font-bold">Describe the icon</div>
          <div class="text-xs">
            Only input main keywords related to the object, be clear and
            concise, avoid using overly complicated language or vague terms
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="a rocket spewing smoke"
        class="rounded-lg p-2 text-xs"
      />
    </div>
    <!-- part 2 -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <h1
          class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-sky-300"
        >
          02
        </h1>
        <div class="flex flex-col">
          <div class="font-bold">Choose your colors</div>
        </div>
      </div>
      <!-- the colors -->
      <div
        class="w-7 h-7 rounded-full bg-sky-300 flex items-center justify-center"
      >
        <div
          class="w-6 h-6 rounded-full bg-pink-300 border-4 border-white"
        ></div>
      </div>
    </div>
    <!-- part 3 -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-row gap-4">
        <h1
          class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-orange-400"
        >
          03
        </h1>
        <div class="flex flex-col">
          <div class="font-bold">Select a style</div>
        </div>
      </div>
      <!-- the styles -->
      <input type="radio" class="radio checked:bg-pink-300" checked />
    </div>
    <!-- button -->
    <button class="text-white bg-pink-600 rounded-lg px-3 py-1 max-w-xs my-6">
      Generate
    </button>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
