import HomePage from "../pages/HomePage.vue";
import DAAPage from "../pages/DAAPage.vue";
import Newsletters from "../pages/Newsletters.vue";
import GivingBackPage from "../pages/GivingBackPage.vue";

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
  {
    path: "/newsletters",
    name: "Newsletters",
    component: Newsletters
  },
  {
    path: "/givingback",
    name: "GivingBack",
    component: GivingBackPage,
  }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
