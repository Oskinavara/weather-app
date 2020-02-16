<template>
  <div class="weather-indicator">
    <img
      :src="weatherIcon(weather)"
      alt="Weather icon"
      class="weather-indicator__icon"
    />
    <h2 class="weather-indicator__temperature">
      {{ temperature(weather) }}
    </h2>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
export default {
  name: 'WeatherIndicator',
  computed: {
    ...mapGetters(['weatherIcon', 'temperature']),
    ...mapState(['weather'])
  }
};
</script>

<style lang="scss" scoped src="./WeatherIndicator.scss" />
