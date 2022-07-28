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
    path: "/users",
    name: "users",
    component: () => import("../views/UsersPage.vue"),
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("../views/PostsPage.vue"),
  },
  {
    path: "/albums",
    name: "albums",
    component: () => import("../views/AlbumsPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
