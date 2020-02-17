<template>
  <div class="forecast-day">
    <ForecastHour
      v-for="(hour, index) in dayData"
      :key="index"
      :hourData="hour"
    />
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
    }
  },
  components: {
    ForecastHour,
  },
};
</script>

<style lang="scss" scoped src="./ForecastDay.scss" />
