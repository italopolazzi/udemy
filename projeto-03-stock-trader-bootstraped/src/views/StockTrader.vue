<template>
  <section :id="$route.name">
    <b-row>
      <b-col cols="12" lg="4" v-for="(item, key) in currentStockTrader" :key="key">
        <!-- <component :is="currentCardComponent" :item="{key, ...item}"></component> -->
        <StockTraderInput :item="{key, ...item}" />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import StockTraderInput from "@/components/StockTraderInput";

import { mapGetters } from "vuex";
export default {
  components: { StockTraderInput },
  computed: {
    currentStockTrader() {
      return this.$store.getters[this.$route.name];
    }
  }
};
</script>