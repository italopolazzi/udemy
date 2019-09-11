<template>
  <section id="portfolio">
    <h1>{{$route.name}}</h1>
    <div class="container">
      <Card v-for="(item, key) in portfolio" :key="key">
        <Toolbar slot="card-title">
          <h3 slot="title">Card {{key}}</h3>
        </Toolbar>
        <div>
          <SellInput :item="item"></SellInput>
        </div>
      </Card>
    </div>
  </section>
</template>

<script>
import Toolbar from "@/components/components/Toolbar";
import Card from "@/components/components/Card";
import SellInput from "@/components/partials/SellInput"

import { mapGetters } from "vuex";
export default {
  components: { Card, Toolbar, SellInput },
  computed: {
    ...mapGetters(["portfolio"])
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