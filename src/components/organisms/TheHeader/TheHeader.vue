<template>
  <header class="header">
    <TabMenu />
    <UserActions />
    <!-- <CityInformation v-if="!notFound && !initialScreen" /> -->
    <CityInformation />
  </header>
</template>

<script>
import TabMenu from '@/components/molecules/TabMenu/TabMenu.vue';
import UserActions from '@/components/organisms/UserActions/UserActions.vue';
import CityInformation from '@/components/molecules/CityInformation/CityInformation.vue';
import { mapState } from 'vuex';

export default {
  name: 'TheHeader',
  components: {
    UserActions,
    TabMenu,
    CityInformation
  },
  computed: {
    ...mapState(['notFound', 'initialScreen'])
  }
};
</script>

<style lang="scss" scoped src="./TheHeader.scss" />
