import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/styles/styles.scss"
// import  "./node_modules/sass-loader/dist/cjs.js"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
