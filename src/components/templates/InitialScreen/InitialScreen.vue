<template>
  <div class="initial-screen">
    <img
      class="initial-screen__image"
      src="@/assets/icons/lightning.svg"
      alt="Weather icon"
    />
    <h1 class="initial-screen__title">Weather App</h1>
    <p class="initial-screen__description">
      Search for a location or localize yourself!
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'InitialScreen',
  computed: {
    ...mapState(['weather'])
  }
};
</script>

<style lang="scss" scoped src="./InitialScreen.scss" />
