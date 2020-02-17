<template>
  <div class="user-actions">
    <BaseInput @input="updateValue" :value="city" />
    <BaseButton action="search" :city="city" />
    <BaseButton action="localize" />
    <BaseButton action="unit" />
  </div>
</template>

<script>
import BaseInput from '@/components/atoms/BaseInput/BaseInput.vue';
import BaseButton from '@/components/atoms/BaseButton/BaseButton.vue';

export default {
  name: 'UserActions',
  data() {
    return {
      city: ''
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

<style lang="scss" scoped src="./UserActions.scss" />
