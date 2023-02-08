import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Pricing from "@/views/Pricing.vue";
import DetailBlog from "@/views/DetailBlog.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/pricing", component: Pricing, name: "Pricing" },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
    name: "Login",
  },
  {
    path: "/register",
    component: () => import("@/views/Register.vue"),
    name: "Register",
  },
  {
    path: "/blog/:id",
    component: DetailBlog,
    name: "DetailBlog",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
