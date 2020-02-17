<template>
  <div class="tab-menu">
    <BaseTab tab="Weather" />
    <BaseTab tab="Forecast" />
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
