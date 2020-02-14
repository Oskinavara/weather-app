<template>
  <div class="home">
    <Header />
    <p>{{ `Latitude: ${weather && weather.coord.lat}` }}</p>
    <p>{{ `Longitude: ${weather && weather.coord.lon}` }}</p>
    <BaseButton @click.native="getWeatherByCoords">Get weather by location</BaseButton>
    <BaseButton @click.native="getWeatherByCity">Get weather by city</BaseButton>
    <WeatherIndicator />
    <!-- <img :src="weatherIcon" alt="weather icon" />
    <h2 class="home__temperature">{{ temperature }}</h2>-->
    <WeatherAttribute
      v-for="attribute in weatherAttributes"
      :key="attribute.name"
      :attribute="attribute"
    />
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton/BaseButton.vue";
import Header from "@/components/organisms/TheHeader/TheHeader.vue";
import WeatherAttribute from "@/components/molecules/WeatherAttribute/WeatherAttribute.vue";
import WeatherIndicator from "@/components/molecules/WeatherIndicator/WeatherIndicator.vue";
import IconUrls from "@/logic/mixins/IconUrls.js";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    BaseButton,
    Header,
    WeatherAttribute,
    WeatherIndicator
  },
  mixins: [IconUrls],
  computed: {
    ...mapState(["weather", "location", "searchHistory", "metricSystem"]),
    ...mapGetters(["temperature", "pressure", "humidity", "windSpeed"]),
    weatherAttributes() {
      return [
        {
          name: "Humidity",
          value: this.humidity,
          src: this.humidityIcon,
          alt: "Humidity icon"
        },
        {
          name: "Wind speed",
          value: this.windSpeed,
          src: this.windIcon,
          alt: "Wind icon"
        },
        {
          name: "Pressure",
          value: this.pressure,
          src: this.pressureIcon,
          alt: "Pressure icon"
        }
      ];
    }
  },
  methods: {
    getWeatherByCoords() {
      this.$store.commit("getWeatherByCoords", this.location);
    },
    getWeatherByCity() {
      this.$store.commit("getWeatherByCity", this.city);
    },
    changeMetricSystem() {
      this.$store.commit("changeMetricSystem");
    }
  },

  beforeMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.$store.commit("setLocation", pos.coords);
        this.$store.commit("getWeatherByCoords", pos.coords);
      });
    }
  }
};
</script>

<style lang="scss" scoped src="./Home.scss" />
