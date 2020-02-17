<template>
  <div class="home">
    <TabMenu />
    <Header />
    <component
      :is="$store.state.activePage === 'Weather' ? 'Weather' : 'Forecast'"
    />
  </div>
</template>

<script>
import Header from '@/components/organisms/TheHeader/TheHeader.vue';
import TabMenu from '@/components/molecules/TabMenu/TabMenu.vue';
import Weather from '@/components/templates/Weather/Weather.vue';
import Forecast from '@/components/templates/Forecast/Forecast.vue';

export default {
  name: 'Home',
  components: {
    Header,
    TabMenu,
    Weather,
    Forecast
  }
};
</script>

<style lang="scss" scoped src="./Home.scss" />
