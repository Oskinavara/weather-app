<template>
  <div class="weather-indicator">
    <img
      :src="weatherIcon"
      alt="weather icon"
      class="weather-indicator__icon"
    />
    <h2 class="weather-indicator__temperature">
      {{ $store.getters.temperature }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'WeatherIndicator',
  computed: {
    weatherIcon() {
      let weather = this.$store.state.weather;
      return `http://openweathermap.org/img/wn/${weather &&
        weather.weather &&
        weather.weather[0] &&
        weather.weather[0].icon}@2x.png`;
    }
  }
};
</script>

<style lang="scss" scoped src="./WeatherIndicator.scss" />
