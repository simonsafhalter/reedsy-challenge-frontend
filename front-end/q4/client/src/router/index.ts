import { createRouter, createWebHistory } from "vue-router";
import BookDetails from "../components/BookDetails.vue";
import BookList from "../components/BookList.vue";

const routes = [
  { path: "/", component: BookList },
  { path: "/book/:slug", component: BookDetails },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
