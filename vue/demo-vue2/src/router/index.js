import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/index.vue"),
  },
  {
    path: "/about1",
    name: "About1",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About1/index.vue"),
  },
  {
    path: "/excel",
    name: "excel",
    component: () => import("../views/excel/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
