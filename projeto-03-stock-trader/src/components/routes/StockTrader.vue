<template>
  <section :id="$route.name">
    <Container class="row">
      <Transition-Group name="slide" mode="out-in">
        <Flex v-for="(item, key) in currentStockTrader" :key="key" class="xs12 sm6 md4">
          <Card>
            <h3 slot="card-title">Card {{key}}</h3>
            <div>
              <component :is="currentCardComponent" :item="{key, ...item}"></component>
            </div>
          </Card>
        </Flex>
      </Transition-Group>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/components/Container";
import Flex from "@/components/components/Flex";
import Card from "@/components/components/Card";
import BuyInput from "@/components/partials/BuyInput";
import SellInput from "@/components/partials/SellInput";

import { mapGetters } from "vuex";
export default {
  components: { Container, Flex, Card, BuyInput },
  computed: {
    currentStockTrader() {
      return this.$store.getters[this.$route.name];
    },
    currentCardComponent() {
      const routesCards = {
        stock: BuyInput,
        portfolio: SellInput
      };
      return routesCards[this.$route.name];
    }
  }
};


</script>