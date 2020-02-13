<template>
  <div id="app">
    <p>{{ `Latitude: ${weather && weather.coord.lat}` }}</p>
    <p>{{ `Longitude: ${weather && weather.coord.lon}` }}</p>
    <BaseButton @click.native="getWeatherByCoords">Get weather by location</BaseButton>
    <BaseButton @click.native="getWeatherByCity">Get weather by city</BaseButton>
    <BaseButton @click.native="changeMetricSystem">{{metricSystemButton}}</BaseButton>
    <BaseInput v-model="city" />
    <img :src="weatherIcon" alt="weather icon" />
    <h2>{{temperature}}</h2>
    <p>{{humidity}}</p>
    <p>{{windSpeed}}</p>
    <p>{{pressure}}</p>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput/BaseInput.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      city: ""
    };
  },

  computed: {
    ...mapState(["weather", "location", "searchHistory", "metricSystem"]),
    ...mapGetters(["temperature", "pressure", "humidity", "windSpeed"]),
    weatherIcon() {
      return `http://openweathermap.org/img/wn/${this.weather &&
        this.weather.weather &&
        this.weather.weather[0] &&
        this.weather.weather[0].icon}@2x.png`;
    },
    metricSystemButton() {
      return this.metricSystem === "Metric" ? "F" : "°C";
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

<style lang="scss" />
