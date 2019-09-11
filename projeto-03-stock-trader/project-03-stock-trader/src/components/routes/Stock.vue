<template>
  <section id="portfolio">
    <h1>{{$route.name}}</h1>
    <div class="container">
      <Card v-for="(item, key) in stock" :key="key">
        <Toolbar slot="card-title">
          <h3 slot="title">Card {{key}}</h3>
        </Toolbar>
        <div slot="card-content">
          <BuyInput :item="{key, ...item}"></BuyInput>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Toolbar from "@/components/components/Toolbar";
import Card from "@/components/components/Card";
import BuyInput from "@/components/partials/BuyInput"

import { mapGetters } from "vuex";
export default {
  components: { Card, Toolbar, BuyInput },
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