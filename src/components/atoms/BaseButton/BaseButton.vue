<template>
  <button @click="handleClick" class="base-button">
    <img
      :class="[
        'base-button__icon',
        { 'base-button__icon--unit': action === 'unit' }
      ]"
      :src="src"
      :alt="alt"
    />
    <span v-if="action === 'unit'" class="base-button__text">
      {{ buttonText }}
    </span>
  </button>
</template>

<script>
import IconUrls from '@/logic/mixins/IconUrls.js';
import { mapState } from 'vuex';

export default {
  name: 'BaseButton',
  mixins: [IconUrls],
  props: {
    action: {
      type: String,
      default: 'search',
      required: false
    },
    city: {
      type: String,
      required: false,
      default: ''
    }
  },
  computed: {
    ...mapState(['location', 'unitSystem']),
    alt() {
      let alts = {
        search: 'Search',
        localize: 'Localization',
        unit: 'Unit'
      };
      return alts[this.action] + ' icon';
    },
    src() {
      if (this.action === 'search') {
        return this.searchIcon;
      } else if (this.action === 'localize') {
        return this.localizeIcon;
      } else {
        return this.$store.state.unitSystem === 'Metric'
          ? this.fahrenheitIcon
          : this.celsiusIcon;
      }
    },
    buttonText() {
      return this.unitSystem === 'Metric' ? 'Imperial' : 'Metric';
    }
  },
  methods: {
    getWeatherByCoords() {
      this.$store.commit('getWeatherByCoords', this.location);
    },
    getWeatherByCity() {
      this.$store.commit('getWeatherByCity', this.city);
    },
    changeUnitSystem() {
      this.$store.commit('changeUnitSystem');
    },
    handleClick() {
      if (this.action === 'search') {
        this.getWeatherByCity();
      } else if (this.action === 'localize' && 'geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            this.$store.commit('setLocation', pos.coords);
            this.$store.commit('getWeatherByCoords', pos.coords);
          },
          errorObj => alert(errorObj.code + ': ' + errorObj.message)
        );
        this.getWeatherByCoords();
      } else {
        this.changeUnitSystem();
      }
    }
  }
};
</script>

<style lang="scss" scoped src="./BaseButton.scss" />
