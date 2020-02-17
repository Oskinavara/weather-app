<template>
  <div class="home">
    <div class="home__wrapper">
      <Header />
      <template v-if="!notFound">
        <CityInformation />
        <WeatherIndicator />
        <WeatherAttribute
          v-for="attribute in weatherAttributes"
          :key="attribute.name"
          :attribute="attribute"
        />
      </template>
      <CityNotFound v-else />
      <div class="home__day" v-for="(day, index) in forecastDays" :key="index">
        <div class="home__item" v-for="(item, index2) in day" :key="index2">
          <p class="home__temp">{{ temperature(item) }}</p>
          <img :src="weatherIcon(item)" alt="">
          <p class="home__hour">{{ item.dt_txt.substring(11, 16) }}</p>
        </div>
      </div>
    </div>
    <History />
  </div>
</template>

<script>
import Header from '@/components/organisms/TheHeader/TheHeader.vue';
import CityInformation from '@/components/molecules/CityInformation/CityInformation.vue';
import CityNotFound from '@/components/molecules/CityNotFound/CityNotFound.vue';
import History from '@/components/organisms/History/History.vue';
import WeatherAttribute from '@/components/molecules/WeatherAttribute/WeatherAttribute.vue';
import WeatherIndicator from '@/components/molecules/WeatherIndicator/WeatherIndicator.vue';
import IconUrls from '@/logic/mixins/IconUrls.js';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Header,
    WeatherAttribute,
    History,
    WeatherIndicator,
    CityInformation,
    CityNotFound
  },
  mixins: [IconUrls],
  computed: {
    ...mapState(['notFound', 'forecast']),
    ...mapGetters([
      'pressure',
      'humidity',
      'windSpeed',
      'latitude',
      'longitude',
      'temperature',
      'weatherIcon'
    ]),
    forecastDays() {
      let forecastDays = [];
      // let forecast = this.forecast;
      let size = 8;
      for (let i = 0; i < this.forecast.length; i = i + size)
        forecastDays.push(this.forecast.slice(i, i + size));
      return forecastDays;
    },
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
    }
  },

  beforeMount() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.$store.commit('setLocation', pos.coords);
        this.$store.commit('getWeatherByCoords', pos.coords);
        this.$store.commit('getForecastByCoords', pos.coords);
      });
    }
  }
};
</script>

<style lang="scss" scoped src="./Home.scss" />
