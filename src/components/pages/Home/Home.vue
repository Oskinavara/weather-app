<template>
  <div class="home">
    <Header />
    <InitialScreen v-if="!weather" />
    <div class="home__bottom" v-else>
      <component
        v-if="!notFound"
        :is="$store.state.activePage === 'Weather' ? 'Weather' : 'Forecast'"
      />
      <CityNotFound v-else />
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/TheHeader/TheHeader.vue';
import Weather from '@/components/templates/Weather/Weather.vue';
import InitialScreen from '@/components/templates/InitialScreen/InitialScreen.vue';
import Forecast from '@/components/templates/Forecast/Forecast.vue';
import CityNotFound from '@/components/molecules/CityNotFound/CityNotFound.vue';

import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    Header,
    InitialScreen,
    Weather,
    Forecast,
    CityNotFound
  },
  computed: {
    ...mapState(['weather', 'notFound'])
  }
};
</script>

<style lang="scss" scoped src="./Home.scss" />
