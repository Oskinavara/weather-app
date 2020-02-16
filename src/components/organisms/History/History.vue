<template>
  <div class="history">
    <HistoryLocation
      v-for="(location, index) in searchHistory"
      :key="index"
      :location="location"
    />
  </div>
</template>

<script>
import HistoryLocation from '@/components/molecules/HistoryLocation/HistoryLocation.vue';
import { mapState } from 'vuex';
export default {
  name: 'History',
  components: {
    HistoryLocation
  },
  computed: {
    ...mapState(['searchHistory'])
  }
};
</script>

<style lang="scss" scoped src="./History.scss" />
