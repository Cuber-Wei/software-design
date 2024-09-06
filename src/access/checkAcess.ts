import ACCESSENUM from "@/access/accessEnum";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @return boolean 是否有对应权限
 */
const checkAccess = (loginUser: any, needAccess: string) => {
  //获取当权用户具有的权限(默认未登录)
  const loginUserAccess = loginUser?.userRole ?? ACCESSENUM.NOT_LOGIN;
  switch (needAccess) {
    case ACCESSENUM.NOT_LOGIN:
      return true;
    case ACCESSENUM.USER:
      if (loginUserAccess === ACCESSENUM.NOT_LOGIN) return false;
      break;
    case ACCESSENUM.ADMIN:
      if (loginUserAccess !== ACCESSENUM.ADMIN) return false;
      break;
  }
  return true;
};
export default checkAccess;
