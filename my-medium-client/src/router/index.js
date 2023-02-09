import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Pricing from "@/views/Pricing.vue";
import DetailBlog from "@/views/DetailBlog.vue";
import WriteNow from "@/views/WriteNow.vue";
import PremiumLounge from "@/views/PremiumLounge.vue";
import UserFollow from "@/views/UserFollow.vue";
import { errorNotification } from "@/utility/notification";

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
  {
    path: "/post",
    component: WriteNow,
    name: "WriteNow",
  },
  {
    path: "/premium",
    component: PremiumLounge,
    name: "PremiumLounge",
  },
  {
    path: "/userfollow",
    component: UserFollow,
    name: "UserFollow",
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name === "Login" && localStorage.access_token) {
    errorNotification("You are already logged in");
    next({ path: "/" });
  } else if (to.name === "Register" && localStorage.access_token) {
    errorNotification("You are already logged in");
    next({ path: "/" });
  } else if (to.name === "WriteNow" && !localStorage.access_token) {
    errorNotification("You must login first");
    next({ path: "/login" });
  } else if (to.name === "PremiumLounge" && !localStorage.access_token) {
    errorNotification("You must login first");
    next({ path: "/login" });
  } else if (to.name === "UserFollow" && !localStorage.access_token) {
    errorNotification("You must login first");
    next({ path: "/login" });
  } else {
    next();
  }
});

export default router;
