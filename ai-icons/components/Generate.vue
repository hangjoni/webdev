<template>
  <form
    @submit.prevent="generate"
    class="flex flex-col justify-between bg-slate-50 py-6"
  >
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
        v-model="prompt"
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
      <MultiSelect @selectedColors="handleColors" />
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

    <div v-if="showPending">
      <Pending />
    </div>
    <div v-if="showError">
      <Error :errorMessage="errorMessage" />
    </div>
    <div v-if="showImage">
      <Display :url="generatedImageLink" />
    </div>
  </form>
</template>

<script setup>
// input values
const prompt = ref("");

const generatedImageLink = ref("");

let showPending = ref(false);
let showError = ref(false);
let showImage = ref(false);
let errorMessage = ref("");
let colors = ref([]);
let query = computed(
  () => `${prompt.value} in colors ${" ".join(colors.value)}`
);
console.log("final query ", query);

const handleColors = (colorsList) => {
  colors.value = colorsList;
};

const generate = async () => {
  showPending.value = true;
  showError.value = false;
  showImage.value = false;
  errorMessage.value = "";

  const { error, data } = await useFetch(
    `/api/generate?prompt=${prompt.value}`,
    {
      onResponseError({ request, options, error }) {
        console.log("handled!");
        showError.value = true;
        // this works!
      },
    }
  );
  generatedImageLink.value = data;
  showPending.value = false;
  if (error && error.value) {
    showError.value = true;
    errorMessage.value = error.value.message;
  } else {
    showImage.value = true;
  }
};
</script>

<style lang="scss" scoped></style>
