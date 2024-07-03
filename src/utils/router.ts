import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: () => import("../views/Home.vue") },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.name?.toString() ?? to.path.slice(1).replaceAll("/", "_");
  next();
});
export default router;
