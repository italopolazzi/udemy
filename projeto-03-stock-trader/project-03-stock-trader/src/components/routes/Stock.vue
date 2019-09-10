<template>
  <section id="portfolio">
    <h1>{{$route.name}}</h1>
    <div class="container">
      <Card v-for="(item, key) in stock" :key="key">
        <h2 slot="card-title">Card {{key}}</h2>
        <p slot="card-content">{{item}}</p>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from "@/components/components/Card";
import { mapGetters } from "vuex";
export default {
  components: { Card },
  computed: {
    ...mapGetters(["stock"])
  }
};
</script>

<style scoped lang="stylus">
.container {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;
  box-sizing: border-box;
}

.card {
  flex: 0 1 50%;
}
</style>