import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/demo1",
    component: () => import("@/pages/demo1/index.vue"),
  },
  {
    path: "/demo2",
    component: () => import("@/pages/demo2/index.vue"),
  },
];
