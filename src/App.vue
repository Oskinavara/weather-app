<template>
  <div id="app">
    <p>{{ `Latitude: ${location.latitude}` }}</p>
    <p>{{ `Longitude: ${location.longitude}` }}</p>
    <BaseButton @click.native="getWeatherByCoords">Get weather by location</BaseButton>
    <BaseButton @click.native="getWeatherByCity">Get weather by city</BaseButton>
    <p v-for="(x, index) of weather" :key="index">{{ x }}</p>
    <BaseInput v-model="city" />
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput/BaseInput.vue";
import { mapState } from "vuex";
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
    ...mapState(["weather", "location", "searchHistory"])
  },
  methods: {
    getWeatherByCoords() {
      this.$store.dispatch("getWeatherByCoords", this.location);
    },
    getWeatherByCity() {
      this.$store.dispatch("setLocation", {
        latitude: this.weather.coord.lat,
        longitude: this.weather.coord.lon
      });
      this.$store.dispatch("getWeatherByCity", this.city);
    }
  },

  mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.$store.dispatch("setLocation", pos.coords);
        this.$store.dispatch("getWeatherByCoords", pos.coords);
      });
    }
  }
};
</script>

<style lang="scss" />
