import axios from "axios";
const mutations = {
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
    state.location = {
      latitude: coords.latitude,
      longitude: coords.longitude
    };
  },
  changeUnitSystem(state) {
    state.unitSystem === "Imperial"
      ? (state.unitSystem = "Metric")
      : (state.unitSystem = "Imperial");
  }
};

export default mutations;
