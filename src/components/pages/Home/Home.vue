<template>
  <div class="home">
    <Header />
    <p>{{ `Latitude: ${weather && weather.coord && weather.coord.lat}` }}</p>
    <p>{{ `Longitude: ${weather && weather.coord && weather.coord.lon}` }}</p>
    <WeatherIndicator />
    <WeatherAttribute
      v-for="attribute in weatherAttributes"
      :key="attribute.name"
      :attribute="attribute"
    />
  </div>
</template>

<script>
import Header from "@/components/organisms/TheHeader/TheHeader.vue";
import WeatherAttribute from "@/components/molecules/WeatherAttribute/WeatherAttribute.vue";
import WeatherIndicator from "@/components/molecules/WeatherIndicator/WeatherIndicator.vue";
import IconUrls from "@/logic/mixins/IconUrls.js";
import { mapState, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
    WeatherAttribute,
    WeatherIndicator
  },
  mixins: [IconUrls],
  computed: {
    ...mapState(["weather", "location", "searchHistory", "unitSystem"]),
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
