<template>
  <div id="app">
    <CardList />
  </div>
</template>

<script>
import CardList from './components/CardList.vue'

export default {
  name: 'App',
  components: {
    CardList
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}
</style>
