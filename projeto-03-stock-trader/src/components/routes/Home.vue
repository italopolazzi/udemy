<template>
  <section id="home">
    <Container class="row">
      <Flex class="xs12 sm6 md4">
        <Card>
          <!-- <div> -->
          Total funds:
          {{$store.state.funds | money }}
          <!-- </div> -->
        </Card>
      </Flex>
    </Container>
  </section>
</template>

<script>
import Container from "@/components/components/Container";
import Flex from "@/components/components/Flex";
import Card from "@/components/components/Card";

export default {
  components: { Card, Flex, Container }
};
</script>

<style>
</style>