<template>
  <div class="home">
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
  </div>
</template>

<script>
import Header from '@/components/organisms/TheHeader/TheHeader.vue';
import CityInformation from '@/components/molecules/CityInformation/CityInformation.vue';
import CityNotFound from '@/components/molecules/CityNotFound/CityNotFound.vue';
import WeatherAttribute from '@/components/molecules/WeatherAttribute/WeatherAttribute.vue';
import WeatherIndicator from '@/components/molecules/WeatherIndicator/WeatherIndicator.vue';
import IconUrls from '@/logic/mixins/IconUrls.js';
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    Header,
    WeatherAttribute,
    WeatherIndicator,
    CityInformation,
    CityNotFound
  },
  mixins: [IconUrls],
  computed: {
    ...mapState([
      'weather',
      'location',
      'searchHistory',
      'unitSystem',
      'notFound'
    ]),
    ...mapGetters([
      'temperature',
      'pressure',
      'humidity',
      'windSpeed',
      'latitude',
      'longitude'
    ]),
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
      });
    }
  }
};
</script>

<style lang="scss" scoped src="./Home.scss" />
