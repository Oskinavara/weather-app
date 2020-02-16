<template>
  <div class="base-input">
    <label class="base-input__label" for="search">{{ inputLabel }}</label>
    <input
      name="search"
      :type="inputType"
      placeholder="Search for a location"
      @input="updateValue($event.target.value)"
      @keyup.enter="handleKeyup"
      :label="inputLabel"
      :value="value"
      class="base-input__inner"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BaseInput",
  props: {
    value: {
      type: String,
      default: "",
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
    handleKeyup() {
      this.$store.commit("getWeatherByCity", this.value);
    }
  },
  computed: {
    ...mapState(["location"]),
    inputType() {
      return isNaN(this.value[0]) ? "search" : "number";
    },
    inputLabel() {
      if (this.inputType === "number") {
        return "Coordinates";
      } else return "City Name";
    }
  }
};
</script>

<style lang="scss" scoped src="./BaseInput.scss" />
