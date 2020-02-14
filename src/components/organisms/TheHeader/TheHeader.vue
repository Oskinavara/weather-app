<template>
  <header class="header">
    <BaseInput :value="city" />
  </header>
</template>

<script>
import BaseInput from "@/components/base/BaseInput/BaseInput.vue";

export default {
  name: "TheHeader",
  data() {
    return {
      city: ""
    };
  },
  components: {
    BaseInput
  }
};
</script>

<style lang="scss" scoped>
</style>