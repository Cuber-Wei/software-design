// initial state
import { StoreOptions } from "vuex";
import ACCESSENUM from "@/access/accessEnum";
import { UserControllerService } from "../../generated";
// getters
const getters = {};

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  getters,
  actions: {
    async getLoginUser({ commit, state }, payload) {
      //从远程请求登录信息
      const res = await UserControllerService.getLoginUserUsingGet();
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: ACCESSENUM.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
