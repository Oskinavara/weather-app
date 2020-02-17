<template>
  <div class="weather">
    <div class="weather__wrapper">
      <WeatherIndicator />
      <WeatherAttribute
        v-for="attribute in weatherAttributes"
        :key="attribute.name"
        :attribute="attribute"
      />
    </div>
    <History />
  </div>
</template>

<script>
import WeatherAttribute from '@/components/molecules/WeatherAttribute/WeatherAttribute.vue';
import History from '@/components/organisms/History/History.vue';
import WeatherIndicator from '@/components/molecules/WeatherIndicator/WeatherIndicator.vue';
import IconUrls from '@/logic/mixins/IconUrls.js';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Weather',
  components: {
    WeatherAttribute,
    WeatherIndicator,
    History
  },
  mixins: [IconUrls],
  computed: {
    ...mapState(['notFound', 'activePage']),
    ...mapGetters(['pressure', 'humidity', 'windSpeed']),
    weatherAttributes() {
      return [
        {
          name: 'Humidity',
          value: this.humidity,
          src: this.humidityIcon,
          alt: 'Humidity icon'
        },
        {
          name: 'Wind speed',
          value: this.windSpeed,
          src: this.windIcon,
          alt: 'Wind icon'
        },
        {
          name: 'Pressure',
          value: this.pressure,
          src: this.pressureIcon,
          alt: 'Pressure icon'
        }
      ];
    },
    forecastDays() {
      let forecastDays = [];
      // let forecast = this.forecast;
      let size = 8;
      for (let i = 0; i < this.forecast.length; i = i + size)
        forecastDays.push(this.forecast.slice(i, i + size));
      return forecastDays;
    }
  }
};
</script>

<style lang="scss" scoped src="./Weather.scss" />
