import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import axios from 'axios';
import store from './store/index.js';

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  store,
  render: function(h) {
    return h(App);
  }
}).$mount('#app');
