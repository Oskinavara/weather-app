const getters = {
  temperature(state) {
    if (state.metricSystem === "Metric") {
      return state.weather
        ? (state.weather.main.temp - 273.15).toFixed().toString() + "°C"
        : "";
    } else
      return state.weather
        ? (state.weather.main.temp * (9 / 5) - 459.67).toFixed().toString() +
        "F"
        : "";
  },
  city(state) {
    return state.weather.name;
  },
  pressure(state) {
    return state.weather ? state.weather.main.pressure.toString() + "hPa" : "";
  },
  humidity(state) {
    return state.weather ? state.weather.main.humidity.toString() + "%" : "";
  },
  windSpeed(state) {
    if (state.metricSystem === "Metric") {
      return state.weather ? state.weather.wind.speed.toString() + "m/s" : "";
    } else
      return state.weather
        ? (state.weather.wind.speed * 2.237).toString() + "mph"
        : "";
  }
};

export default getters;
