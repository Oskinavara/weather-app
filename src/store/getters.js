/* eslint-disable */

const getters = {
  temperature: state => location => {
    if (state.unitSystem === "Metric") {
      return location
        ? (location.main.temp - 273.15).toFixed().toString() + "°C"
        : "";
    } else
      return location
        ? (location.main.temp * (9 / 5) - 459.67).toFixed().toString() + "°F"
        : "";
  },

  city: state => {
    return state && state.weather && state.weather.name;
  },

  pressure: state => {
    return state.weather ? state.weather.main.pressure.toString() + " hPa" : "";
  },

  humidity: state => {
    return state.weather ? state.weather.main.humidity.toString() + "%" : "";
  },

  windSpeed: state => {
    if (state.unitSystem === "Metric") {
      return state.weather ? state.weather.wind.speed.toString() + " m/s" : "";
    } else
      return state.weather
        ? (state.weather.wind.speed * 2.237).toFixed(1).toString() + " mph"
        : "";
  },

  latitude: state => {
    let latitude = state.weather && state.weather.coord && state.weather.coord.lat
    let fractional = latitude % Math.floor(latitude);
    let latitudeConverted = (Math.floor(latitude) + fractional * 0.6).toPrecision(4)
    return latitude > 0
      ? Math.abs(latitudeConverted) + ' N'
      : Math.abs(latitudeConverted) + ' S'
  },

  longitude: state => {
    let longitude = state.weather && state.weather.coord && state.weather.coord.lon
    let fractional = longitude % Math.floor(longitude);
    let longitudeConverted = (Math.floor(longitude) + fractional * 0.6).toPrecision(4)
    return longitude > 0
      ? Math.abs(longitudeConverted) + ' E'
      : Math.abs(longitudeConverted) + ' W'
  },
  
  weatherIcon: state => location => {
    let icon = location && location.weather && location.weather[0] && location.weather[0].icon;
    return `http://openweathermap.org/img/wn/${icon}@2x.png`
  },

  forecast: state => {
    return state.forecast;
  }
};
export default getters;
