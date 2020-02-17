<template>
  <div class="forecast">
    <ForecastDay
      v-for="(day, index) in forecastData"
      :key="index"
      class="home__day"
      :dayData="day"
      :dayHeading="daysHeadings[index]"
    />
  </div>
</template>

<script>
import ForecastDay from '@/components/organisms/ForecastDay/ForecastDay.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Forecast',
  components: {
    ForecastDay
  },
  computed: {
    ...mapGetters(['temperature', 'weatherIcon']),
    forecastData() {
      let forecastData = [];
      let forecast = this.$store.state.forecast;
      let hours = 8;
      for (let i = 0; i < forecast.length; i = i + hours)
        forecastData.push(forecast.slice(i, i + hours));
      return forecastData;
    },
    daysHeadings() {
      return [
        'Nearest 24h',
        'Tomorrow',
        'Day after tomorrow',
        'Two days after tomorrow',
        'Three days after tomorrow'
      ];
    }
  }
};
</script>

<style lang="scss" scoped src="./Forecast.scss" />
