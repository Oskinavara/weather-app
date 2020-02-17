<template>
  <div class="forecast-hour">
    <p class="home__temp">{{ temperature(hourData) }}</p>
    <img :src="weatherIcon(hourData)" alt="Weather icon" />
    <p class="home__hour">{{ hourData.dt_txt.substring(11, 16) }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ForecastHour',
  props: {
    hourData: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['temperature', 'weatherIcon'])
  }
};
</script>

<style lang="scss" scoped src="./ForecastHour.scss" />
