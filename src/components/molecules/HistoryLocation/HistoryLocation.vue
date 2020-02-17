<template>
  <div class="history-location">
    <h2 class="history-location__city">{{ location.name }}</h2>
    <div class="history-location__wrapper">
      <img
        :src="weatherIcon(location)"
        alt="Weather icon"
        class="history-location__weather-icon"
      />
      <span class="history-location__temperature">
        {{ temperature(location) }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'HistoryLocation',
  props: {
    location: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters(['weatherIcon', 'temperature'])
  }
};
</script>

<style lang="scss" scoped src="./HistoryLocation.scss" />
