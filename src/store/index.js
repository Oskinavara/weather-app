import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    weather: null
  },
  mutations: {
    getWeatherByCoords(state, coords) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b48493f02664a91b20a3fd845b9f9ff3`
        )
        .then(res => {
          console.log(res.data);
          state.weather = res.data;
        })
        .catch(err => {
          console.log("An error occured: ", err);
        });
    },
    getWeatherByCity(state, city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b48493f02664a91b20a3fd845b9f9ff3`
        )
        .then(res => {
          console.log(res.data);
          state.weather = res.data;
        })
        .catch(err => {
          console.log("An error occured: ", err);
        });
    }
  },
  actions: {
    getWeatherByCoords({ commit }, coords) {
      commit("getWeatherByCoords", coords);
    },
    getWeatherByCity({ commit }, city) {
      commit("getWeatherByCity", city);
    }
  }
});

export default store;
