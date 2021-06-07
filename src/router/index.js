import HomePage from "../pages/HomePage.vue";
import DAAPage from "../pages/DAAPage.vue";
import TeamPage from "../pages/TeamPage.vue"

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
    path: "/team",
    name: "Team",
    component: TeamPage
  }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
