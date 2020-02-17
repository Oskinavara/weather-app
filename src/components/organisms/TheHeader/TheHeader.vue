<template>
  <header class="header">
    <TabMenu />
    <UserActions />
    <CityInformation v-if="!$store.state.notFound && $store.state.weather" />
  </header>
</template>

<script>
import TabMenu from '@/components/molecules/TabMenu/TabMenu.vue';
import UserActions from '@/components/organisms/UserActions/UserActions.vue';
import CityInformation from '@/components/molecules/CityInformation/CityInformation.vue';

export default {
  name: 'TheHeader',
  components: {
    UserActions,
    TabMenu,
    CityInformation
  }
};
</script>

<style lang="scss" scoped src="./TheHeader.scss" />
