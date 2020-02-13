import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    weather: null,
    searchHistory: [],
    location: {}
  },
  mutations: {
    getWeatherByCoords(state, coords) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b48493f02664a91b20a3fd845b9f9ff3`
        )
        .then(res => {
          if (state.weather) {
            state.searchHistory = [...state.searchHistory, state.weather];
          }
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
          state.searchHistory = [...state.searchHistory, state.weather];
          state.weather = res.data;
        })
        .catch(err => {
          console.log("An error occured: ", err);
        });
    },
    setLocation(state, coords) {
      console.log(coords);
      state.location = {
        latitude: coords.latitude,
        longitude: coords.longitude
      };
    }
  },
  getters: {
    temperatureCelsius(state) {
      return (state.weather.main.temp - 273.15).toFixed().toString() + "°C";
    },
    temperatureFahrenheit(state) {
      return (
        ((state.weather.main.temp * 9) / 5 - 459.67).toFixed().toString() + "°C"
      );
    }
  }
  // actions: {
  //   getWeatherByCoords({ commit, state }, coords) {
  //     commit("getWeatherByCoords", coords).then(() => {
  //       commit("setLocation", state.weather.weather.coords);
  //     });
  //   },
  //   getWeatherByCity({ commit }, city) {
  //     commit("getWeatherByCity", city);
  //   },
  //   setLocation({ commit }, coords) {
  //     commit("setLocation", coords);
  //   }
  // }
});

export default store;
