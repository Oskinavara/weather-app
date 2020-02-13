<template>
  <div class="base-input">
    <label for="search">{{ inputLabel }}</label>
    <input
      name="search"
      :type="inputType"
      placeholder="Search for a location"
      @input="updateValue($event.target.value)"
      :label="inputLabel"
      :value="value"
    />
  </div>
</template>

<script>
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
    }
  },
  computed: {
    inputType() {
      return isNaN(this.value[0]) ? "text" : "number";
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
