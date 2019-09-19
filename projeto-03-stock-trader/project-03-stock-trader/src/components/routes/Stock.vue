<template>
  <section id="portfolio">
    <h1>{{$route.name}}</h1>
    <div class="container">
      <Card v-for="(item, key) in stock" :key="key" class="offset-md6 xs12 sm6 md4">
        <h3 slot="card-title">Card {{key}}</h3>
        <div>
          <BuyInput :item="{key, ...item}"></BuyInput>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Toolbar from "@/components/components/Toolbar";
import Card from "@/components/components/Card";
import BuyInput from "@/components/partials/BuyInput";

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
</style>