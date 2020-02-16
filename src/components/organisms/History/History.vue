<template>
  <div class="history" ref="history">
    <HistoryLocation
      v-for="(location, index) in searchHistory"
      :key="index"
      :location="location"
      @click.native="getWeatherByCity(location.name)"
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
  },
  watch: {
    searchHistory() {
      let history = this.$refs.history;
      this.$nextTick(() => {
        history.scrollTop = 0;
      });
    }
  },
  methods: {
    getWeatherByCity(city) {
      this.$store.commit('getWeatherByCity', city);
    }
  }
};
</script>

<style lang="scss" scoped src="./History.scss" />
