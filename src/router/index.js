import HomePage from "../pages/HomePage.vue";
import DAAPage from "../pages/DAAPage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/daa",
    name: "DAA",
    component: DAAPage,
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
