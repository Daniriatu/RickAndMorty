import AboutPage from "@/shared/pages/AboutPage.vue";
import HomePage from "@/shared/pages/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import { characterRoute } from "../characters/router/index";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/about", name: "about", component: AboutPage },
    // {
    //   path: "/characters",
    //   name: "characters",
    //   component: () => import("@/characters/layout/CharacterLayout.vue"),
    // },
    { ...characterRoute },
    { path: "/:patMatch(.*)", redirect: () => ({ name: "home" }) },
  ],
});

export default router;
