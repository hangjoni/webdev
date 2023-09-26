// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    exposeConfig: true,
  },
  app: {
    head: {
      title: "AI Icons",
      meta: [
        { name: "description", content: "Beautiful icons at your fingertips" },
      ],
    },
  },
});
