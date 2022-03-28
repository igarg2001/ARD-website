import HomePage from "../pages/HomePage.vue";
import DAAPage from "../pages/DAAPage.vue";
import Newsletters from "../pages/Newsletters.vue";
import GivingBackPage from "../pages/GivingBackPage.vue";
import TeamPage from "../pages/TeamPage.vue";
import CSRGivingPage from "../pages/CSRGivingPage.vue";
import AlumniGivingPage from "../pages/AlumniGivingPage.vue";
import NewsHeadlinePage from "../pages/NewsHeadline.vue";
import ReunionPage from "../pages/ReunionPage.vue"

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
    component: Newsletters,
  },
  {
    path: "/givingback",
    name: "GivingBack",
    component: GivingBackPage,
  },
  {
    path: "/team",
    name: "Team",
    component: TeamPage,
  },
  {
    path: "/csrgiving",
    name: "CSRGiving",
    component: CSRGivingPage,
  },
  {
    path: "/alumnigiving",
    name: "AlumniGiving",
    component: AlumniGivingPage,
  },
  {
    path: "/news",
    name: "NewsHeadline",
    component: NewsHeadlinePage,
  },
  {
    path: "/events",
    name: "ReunionPage",
    component: ReunionPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
