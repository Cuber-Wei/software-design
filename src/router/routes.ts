import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NotFoundView from "../views/404View.vue";
import ACCESSENUM from "@/access/accessEnum";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLayout from "@/layouts/UserLayout.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    meta: {
      hideInMenu: true,
    },
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
  },
  {
    path: "/",
    name: "题目",
    component: HomeView,
    meta: {
      hideInMenu: false,
    },
  },
  {
    path: "/about",
    name: "关于",
    component: () => import("@/views/AboutView.vue"),
    meta: {
      hideInMenu: false,
    },
  },
  {
    path: "/admin",
    name: "管理员",
    component: AdminView,
    meta: {
      hideInMenu: false,
      access: ACCESSENUM.ADMIN,
    },
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundView,
    meta: {
      hideInMenu: true,
    },
  },
];
