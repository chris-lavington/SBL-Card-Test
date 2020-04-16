<template>
  <article class="card" :id="card.id">
    <a v-if="card.url" :href="card.url">
      <div class="card-image">
        <img
          :src="
            card.image
              ? card.image
              : 'https://ichef.bbci.co.uk/news/960/cpsprodpb/33E4/production/_109648231_ohmy.png'
          "
        />
        <span v-if="card.runningTime">
          <font-awesome-icon icon="clock" />
          {{ card.runningTime + ' MINS' }}
        </span>
      </div>
      <div class="card-body">
        <h3 v-if="card.title">{{ card.title }}</h3>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    card: Object
  }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
h3 {
  font-size: ($base-font-size + 0.2);
  font-weight: 400;
}
.card {
  border: 1px solid $border-color;
  margin-top: $base-spacing;
  text-align: left;
  @include cardShadow(1);
  &:hover {
    @include cardShadow(3);
    background: darken($base-background-color, 10%);
  }
}
.card-image {
  position: relative;
  span {
    @include cardShadow(1);
    font-size: ($base-font-size - 0.3);
    background: $base-font-color;
    color: $base-background-color;
    padding: ($base-spacing/2);
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
.card-body {
  padding: ($base-spacing / 2) $base-spacing;
  display: inline-block;
}
@media #{$mq-small} {
  .card {
    margin-top: 0;
  }
  .card-image {
    height: 10.5em;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
