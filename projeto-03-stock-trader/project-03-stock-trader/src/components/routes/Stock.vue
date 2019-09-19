<template>
  <section id="portfolio">
    <h1>{{$route.name}}</h1>
    <Container class="row">
      <Flex v-for="(item, key) in stock" :key="key" class="xs12 sm6 md4">
        <Card>
          <h3 slot="card-title">Card {{key}}</h3>
          <div>
            <BuyInput :item="{key, ...item}"></BuyInput>
          </div>
        </Card>
      </Flex>
    </Container>
  </section>
</template>

<script>
import Toolbar from "@/components/components/Toolbar";
import Container from "@/components/components/Container";
import Flex from "@/components/components/Flex";
import Card from "@/components/components/Card";
import BuyInput from "@/components/partials/BuyInput";

import { mapGetters } from "vuex";
export default {
  components: { Container, Flex, Card, Toolbar, BuyInput },
  computed: {
    ...mapGetters(["stock"])
  }
};
</script>