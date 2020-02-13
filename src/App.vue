<template>
  <div id="app">
    <p>{{ `Latitude: ${weather.coord.lat}` }}</p>
    <p>{{ `Longitude: ${weather.coord.lon}` }}</p>
    <BaseButton @click.native="getWeatherByCoords">Get weather by location</BaseButton>
    <BaseButton @click.native="getWeatherByCity">Get weather by city</BaseButton>
    <BaseInput v-model="city" />
    <img :src="weatherIcon" alt="weather icon" />
    <h2>{{temperatureCelsius}}</h2>
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
    ...mapState(["weather", "location", "searchHistory"]),
    ...mapGetters(["temperatureCelsius", "temperatureFahrenheit"]),
    weatherIcon() {
      return `http://openweathermap.org/img/wn/${this.weather &&
        this.weather.weather &&
        this.weather.weather[0] &&
        this.weather.weather[0].icon}@2x.png`;
    }
  },
  methods: {
    getWeatherByCoords() {
      this.$store.commit("getWeatherByCoords", this.location);
    },
    getWeatherByCity() {
      this.$store.commit("getWeatherByCity", this.city);
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
