import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_HOST,
});


instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${localStorage.token}`;

export default new Vuex.Store({
  state: {
    token: localStorage.token,
  },

  mutations: {
    setToken(state, value) {
      localStorage.token = value;
      instance.defaults.headers.common["Authorization"] = `Bearer ${value}`;
    },
  },
  actions: {
    async login({ state, commit, rootState }, params) {
      const { data } = await instance.post("/login", params);
      const token = data.success ? data.token : "";
      commit("setToken", token);
      return data;
    },

    async registration({ state, commit, rootState }, params) {
      const { data } = await instance.post("/registration", params);
      const token = data.success ? data.token : "";
      commit("setToken", token);
      return data;
    },

    async create_new({ state, commit, rootState }, params) {
      const { data } = await instance.post("/news/create", params);
      return data;
    },

    async delete_new({ state, commit, rootState }, params) {
      const url = "/news/delete/" + params
      const { data } = await instance.delete(url);
      return data;
    },

    async me_inform({ state, commit, rootState }) {
      const { data } = await instance.get("/users/me_inform");
      // const token = data.success ? data.token : "";
      // commit("setToken", "");
      return data;
    },

    async logout({ state, commit, rootState }) {
      const { data } = await instance.get("/users/logout");
      commit("setToken", "");
      return data;
    },

    // async delete_profil({ state, commit, rootState }) {
    //   const { data } = await instance.get("/users/logout");
    //   commit("setToken", "");
    //   return data;
    // },

    async usersList({ state }, params) {
      const { data } = await instance.get("/users");
      return data;
    },

    async newsList({ state }, params) {
      const { data } = await instance.get("/news");
      return data;
    },

    // async messageCreate({ state }, params) {
    //   const { data } = await instance.post("/message/create", params);
    //   return data;
    // },    
  },
  modules: {},
});
