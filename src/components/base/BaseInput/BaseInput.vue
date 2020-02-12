<template>
  <div class="base-input">
    <input
      type="search"
      placeholder="Search for a location"
      @input="updateValue($event.target.value)"
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
  }
};
</script>

<style lang="scss" scoped src="./BaseInput.scss" />
