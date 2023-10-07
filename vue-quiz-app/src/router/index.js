import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quiz from "../views/Quiz.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/quiz/:id", name: "quiz", component: Quiz },
  { path: "/:catchAll(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
