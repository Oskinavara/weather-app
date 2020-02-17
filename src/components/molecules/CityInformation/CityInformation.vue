<template>
  <div class="city-information">
    <h3 class="city-information__name">{{ city }}</h3>
    <span class="city-information__coord">{{ latitude }}</span>
    <span class="city-information__coord">{{ longitude }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CityInformation',
  computed: {
    ...mapGetters(['city', 'longitude', 'latitude'])
  }
};
</script>

<style lang="scss" scoped src="./CityInformation.scss"></style>
