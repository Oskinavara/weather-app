<template>
  <button
    :class="[
      'base-tab',
      { 'base-tab--active': tab === $store.state.activePage }
    ]"
    @click="$store.commit('setActivePage', tab)"
  >
    {{ tab }}
  </button>
</template>

<script>
export default {
  name: 'BaseTab',
  props: {
    tab: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped src="./BaseTab.scss" />
