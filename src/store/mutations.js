import axios from 'axios';
const mutations = {
  getWeatherByCoords(state, coords) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=b48493f02664a91b20a3fd845b9f9ff3`
      )
      .then(res => {
        if (state.weather) {
          state.searchHistory.length === 5
            ? (state.searchHistory = [
                ...state.searchHistory.filter((el, index) => index !== 0),
                state.weather
              ])
            : (state.searchHistory = [...state.searchHistory, state.weather]);
        }
        state.notFound = false;
        state.weather = res.data;
      })
      .catch(err => {
        state.notFound = true;
        console.log('An error occured: ', err);
      });
  },

  getWeatherByCity(state, city) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b48493f02664a91b20a3fd845b9f9ff3`
      )
      .then(res => {
        if (state.weather) {
          state.searchHistory.length === 5
            ? (state.searchHistory = [
                ...state.searchHistory.filter((el, index) => index !== 0),
                state.weather
              ])
            : (state.searchHistory = [...state.searchHistory, state.weather]);
        }
        state.notFound = false;
        state.weather = res.data;
      })
      .catch(err => {
        state.notFound = true;
        console.log('An error occured: ', err);
      });
  },

  getForecastByCity(state, city) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b48493f02664a91b20a3fd845b9f9ff3`
      )
      .then(res => {
        state.forecast = res.data.list;
      })
      .catch(err => {
        state.notFound = true;
        console.log('An error occured: ', err);
      });
  },

  getForecastByCoords(state, coords) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=b48493f02664a91b20a3fd845b9f9ff3`
      )
      .then(res => {
        state.forecast = res.data.list;
      })
      .catch(err => {
        state.notFound = true;
        console.log('An error occured: ', err);
      });
  },

  setLocation(state, coords) {
    state.location = {
      ...state.location,
      latitude: coords.latitude,
      longitude: coords.longitude
    };
  },

  changeUnitSystem(state) {
    state.unitSystem === 'Imperial'
      ? (state.unitSystem = 'Metric')
      : (state.unitSystem = 'Imperial');
  },

  setActivePage(state, page) {
    state.activePage = page;
  }
};

export default mutations;
