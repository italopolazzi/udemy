<template>
  <div id="home">
    <Card>
      <div>
        Total funds:
        {{$store.state.funds | money }}
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "@/components/components/Card";

export default {
  components: { Card }
};
</script>

<style>
</style>