<template>
  <div class="home">
    <div class="home__inner">
      <Header />
      <InitialScreen v-if="!weather" />
      <template v-else>
        <div class="home__bottom--mobile">
          <template v-if="!notFound">
            <component
              :is="
                $store.state.activePage === 'Weather' ? 'Weather' : 'Forecast'
              "
            />
          </template>
          <CityNotFound v-else />
        </div>
        <div class="home__bottom--desktop">
          <Weather />
          <CityNotFound v-if="notFound" />
          <Forecast />
        </div>
      </template>
      <History />
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/TheHeader/TheHeader.vue';
import Weather from '@/components/templates/Weather/Weather.vue';
import InitialScreen from '@/components/templates/InitialScreen/InitialScreen.vue';
import History from '@/components/organisms/History/History.vue';
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
    CityNotFound,
    History
  },
  computed: {
    ...mapState(['weather', 'notFound'])
  }
};
</script>

<style lang="scss" scoped src="./Home.scss" />
