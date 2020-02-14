<template functional>
  <div class="weather-attribute">
    <img class="weather-attribute__icon" :src="props.attribute.src" :alt="props.attribute.alt" />
    <div class="weather-attribute__text-wrapper">
      <h4 class="weather-attribute__name">{{ props.attribute.name }}</h4>
      <span class="weather-attribute__value">{{ props.attribute.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeatherAttribute",
  props: {
    attribute: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped src='./WeatherAttribute.scss' />
