<template>
  <section id="home">
    <Container class="row">
      <Flex class="xs12 sm6 md4">
        <Card>
          <!-- <div> -->
          <span slot="card-title">Total funds</span>
          <div class="funds">{{$store.state.funds}}</div>
          <!-- </div> -->
        </Card>
      </Flex>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/partials/Container";
import Flex from "@/components/partials/Flex";
import Card from "@/components/partials/Card";

export default {
  components: { Card, Flex, Container }
};
</script>