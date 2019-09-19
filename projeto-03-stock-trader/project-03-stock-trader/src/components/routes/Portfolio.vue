<template>
  <section id="portfolio">
    <h1>{{$route.name}}</h1>
    {{portfolio}}
    <Container>
      <Flex v-for="(item, key) in portfolio" :key="key" class="xs4">
        <Card>
          <Toolbar slot="card-title">
            <h3 slot="title">Card {{key}}</h3>
          </Toolbar>
          <div>
            <SellInput :item="{key, ...item}"></SellInput>
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
import SellInput from "@/components/partials/SellInput";

import { mapGetters } from "vuex";
export default {
  components: { Container, Flex, Card, Toolbar, SellInput },
  computed: {
    ...mapGetters(["portfolio"])
  }
};
</script>