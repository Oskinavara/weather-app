import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import axios from "axios";

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
