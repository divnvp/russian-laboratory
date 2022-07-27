import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/first",
    name: "First",
    component: () => import("../views/FirstPage.vue"),
  },
  {
    path: "/second",
    name: "Second",
    component: () => import("../views/SecondPage.vue"),
  },
  {
    path: "/third",
    name: "Third",
    component: () => import("../views/ThirdPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
