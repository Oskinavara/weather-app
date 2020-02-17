<template>
  <div class="forecast-day">
    <h3 class="forecast-day__heading">{{ dayHeading }}</h3>
    <div class="forecast-day__wrapper">
      <ForecastHour
        v-for="(hour, index) in dayData"
        :key="index"
        :hourData="hour"
      />
    </div>
  </div>
</template>

<script>
import ForecastHour from '@/components/molecules/ForecastHour/ForecastHour.vue';
export default {
  name: 'ForecastDay',
  props: {
    dayData: {
      type: Array,
      required: true
    },
    dayHeading: {
      type: String,
      required: true
    }
  },
  components: {
    ForecastHour
  }
};
</script>

<style lang="scss" scoped src="./ForecastDay.scss" />
