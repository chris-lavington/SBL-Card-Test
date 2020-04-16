<template>
  <div>
    <h1>SBL Cards Test</h1>
    <section class="sbl-cards-container">
      <Card v-for="card in cards" :key="card.id" :card="card" />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'CardList',
  components: {
    Card
  },
  data() {
    return {
      cards: []
    }
  },
  created() {
    axios
      .get('https://api.jsonbin.io/b/5e95bd3c5fa47104cea035df')
      .then(response => {
        this.cards = response.data.items
      })
      .catch(error => {
        console.log('Error: ' + error.response)
      })
  }
}
</script>

<style lang="scss" scoped>
@media #{$mq-small} {
  .sbl-cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: $base-spacing;
  }
}
@media #{$mq-medium} {
  .sbl-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $base-spacing;
  }
}
</style>
