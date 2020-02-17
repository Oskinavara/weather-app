<template>
  <div class="base-input">
    <label class="base-input__label" for="search">{{ inputLabel }}</label>
    <input
      id="search"
      name="search"
      type="search"
      placeholder="Search"
      @input="updateValue($event.target.value)"
      @keyup.enter="handleKeyup"
      :label="inputLabel"
      :value="value"
      class="base-input__inner"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    value: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    },
    handleKeyup() {
      if (this.value) {
        this.$store.commit('getWeatherByCity', this.value);
        this.$store.commit('getForecastByCity', this.value);
      }
    }
  },
  computed: {
    inputType() {
      return isNaN(this.value[0]) ? 'search' : 'number';
    },
    inputLabel() {
      if (!this.value) {
        return 'City';
      }
      if (this.inputType === 'number') {
        return 'Coordinates';
      } else return 'City';
    }
  }
};
</script>

<style lang="scss" scoped src="./BaseInput.scss" />
