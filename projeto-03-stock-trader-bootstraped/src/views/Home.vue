<template>
  <section id="home">
    <b-card title="Total funds">
      <b-card-text>
        <div class="funds">{{$store.state.funds}}</div>
      </b-card-text>
    </b-card>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>