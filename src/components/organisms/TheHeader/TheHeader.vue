<template>
  <header class="header">
    <BaseInput
      @input="updateValue"
      @keyup-enter="getWeatherByCity"
      :value="city"
    />
    <BaseButton action="search" :city="city" />
    <BaseButton action="localize" />
    <BaseButton action="unit" />
  </header>
</template>

<script>
import BaseInput from "@/components/atoms/BaseInput/BaseInput.vue";
import BaseButton from "@/components/atoms/BaseButton/BaseButton.vue";

export default {
  name: "TheHeader",
  data() {
    return {
      city: ""
    };
  },
  components: {
    BaseInput,
    BaseButton
  },
  methods: {
    updateValue(value) {
      this.city = value;
    }
  }
};
</script>

<style lang="scss" scoped src="./TheHeader.scss" />
