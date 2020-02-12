<template>
  <div id="app">
    <BaseButton @click.native="getCurrentLocation">Get current location</BaseButton>
    <p>{{ `Latitude: ${coords.latitude}` }}</p>
    <p>{{ `Longitude: ${coords.longitude}` }}</p>
    <BaseButton @click.native="getWeatherByCoords">Get weather by location</BaseButton>
    <BaseButton @click.native="getWeatherByCity">Get weather by city</BaseButton>
    <p v-for="(x, index) of $store.state.weather" :key="index">{{x}}</p>
    <BaseInput v-model="city" />
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton/BaseButton.vue";
import BaseInput from "@/components/base/BaseInput/BaseInput.vue";
export default {
  name: "App",
  components: {
    BaseButton,
    BaseInput
  },
  data() {
    return {
      coords: {
        latitude: null,
        longitude: null
      },
      city: ""
    };
  },
  methods: {
    getCurrentLocation() {
      navigator.geolocation.getCurrentPosition(position => {
        this.coords.latitude = position.coords.latitude;
        this.coords.longitude = position.coords.longitude;
      });
    },
    getWeatherByCoords() {
      this.$store.dispatch("getWeatherByCoords", this.location);
    },
    getWeatherByCity() {
      this.$store.dispatch("getWeatherByCity", this.city);
    }
  },

  mounted() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(pos => console.log(pos));
    }
  }
};
</script>

<style lang="scss" />
