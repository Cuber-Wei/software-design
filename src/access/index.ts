import ACCESSENUM from "@/access/accessEnum";
import router from "@/router";
import store from "@/store";
import checkAccess from "@/access/checkAcess";

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;
  // 若之前未登录，自动登录
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser", loginUser);
  }
  const needAccess = (to.meta?.access as string) ?? ACCESSENUM.NOT_LOGIN;
  // 要跳转的页面必须要登录
  if (needAccess !== ACCESSENUM.NOT_LOGIN) {
    // 若没登录，跳转到登陆页面
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 已登录，鉴权
    if (!checkAccess(loginUser, needAccess)) {
      next("/404");
      return;
    }
  }

  next();
});
