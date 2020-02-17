<template>
  <div class="tab-menu">
    <BaseTab @click.native="$store.commit('setActivePage', 'Weather')">
      Current weather
    </BaseTab>
    <BaseTab @click.native="$store.commit('setActivePage', 'Forecast')">
      Forecast
    </BaseTab>
  </div>
</template>

<script>
import BaseTab from '@/components/atoms/BaseTab/BaseTab.vue';

export default {
  name: 'TabMenu',
  components: {
    BaseTab
  }
};
</script>

<style lang="scss" src="./TabMenu.scss" />
