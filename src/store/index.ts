import { createStore } from "vuex";
import user from "./user";

export default createStore({
  state: () => ({
    all: [],
  }),
  actions: {},
  modules: {
    user,
  },
});
