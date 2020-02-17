<template>
  <div class="forecast">
    <CityInformation />
    <ForecastDay
      v-for="(day, index) in forecastData"
      :key="index"
      class="home__day"
      :dayData="day"
    >
      <!-- <div class="home__item" v-for="(item, index2) in day" :key="index2">
        <p class="home__temp">{{ temperature(item) }}</p>
        <img :src="weatherIcon(item)" alt="Weather icon" />
        <p class="home__hour">{{ item.dt_txt.substring(11, 16) }}</p>
      </div> -->
    </ForecastDay>
  </div>
</template>

<script>
import CityInformation from '@/components/molecules/CityInformation/CityInformation.vue';
import ForecastDay from '@/components/organisms/ForecastDay/ForecastDay.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Forecast',
  components: {
    CityInformation,
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
    }
  }
};
</script>

<style lang="scss" scoped />
