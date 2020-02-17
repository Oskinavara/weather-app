<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from '@/components/pages/Home/Home.vue';

export default {
  name: 'App',
  components: {
    Home
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

<style lang="scss" src="@/style/index.scss" />
