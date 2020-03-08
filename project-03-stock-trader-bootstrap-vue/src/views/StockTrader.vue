<template>
  <section :id="$route.name">
    <b-container>
      <b-row no-gutters>
        <b-col cols="12" lg="4"  v-for="(item, key) in currentStockTrader" :key="key">
          <!-- <component :is="currentCardComponent" :item="{key, ...item}"></component> -->
          <StockTraderInput class="m-2" :item="{key, ...item, ...config}" />
        </b-col>
      </b-row>
    </b-container>
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
    },
    config() {
      const config = {
        portfolio: {
          button: {
            labels: {
              invalid: "Invalid",
              unavaliable: "Unavalaible",
              valid: "Sell"
            }
          },
          method_name: "sellItem"
        },
        stock: {
          button: {
            labels: {
              invalid: "Invalid",
              unavaliable: "Unavalaible",
              valid: "Buy"
            }
          },
          method_name: "buyItem"
        }
      };
      return config[this.$route.name];
    }
  }
};
</script>