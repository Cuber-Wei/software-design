import { RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NotFoundView from "../views/404View.vue";
import ACCESSENUM from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import UserCenterView from "@/views/UserCenterView.vue";
import AboutView from "@/views/AboutView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import ManageQuestionView from "@/views/question/ManageQuestionView.vue";

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
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      hideInMenu: false,
      access: ACCESSENUM.ADMIN,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      hideInMenu: false,
      access: ACCESSENUM.ADMIN,
    },
  },
  {
    path: "/manage/question",
    name: "管理题目",
    component: ManageQuestionView,
    meta: {
      hideInMenu: false,
      access: ACCESSENUM.ADMIN,
    },
  },
  {
    path: "/about",
    name: "关于",
    component: AboutView,
    meta: {
      hideInMenu: false,
    },
  },
  {
    path: "/center",
    name: "用户中心",
    component: UserCenterView,
    meta: {
      hideInMenu: true,
      access: ACCESSENUM.USER,
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
