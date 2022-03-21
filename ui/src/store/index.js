import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "Ação executada com sucesso",
    snackbar: false,
    color: "succes",
  },
  getters: {},
  mutations: {
    SET_SNACK(state, payload) {
      state.snackbar = payload;
    },
    SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    SET_COLOR(state, payload) {
      state.color = payload;
    },
  },
  actions: {
    modifyState({ commit }, values) {
      commit("SET_SNACK", values);
    },
    modifyMessage({ commit }, values) {
      commit("SET_MESSAGE", values);
    },
    modifyColor({ commit }, values) {
      commit("SET_COLOR", values);
    },
  },
  modules: {},
});
