import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/Index.vue";
import Answer from "../views/Answer.vue";

const routes = [
  {
    name: "Index",
    path: "/",
    component: Index,
  },
  {
    name: "Answer",
    path: "/answer",
    component: Answer,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

