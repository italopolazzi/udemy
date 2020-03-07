<template>
  <section id="home">
    <b-jumbotron>
      <template v-slot:header>
        <fa-icon icon="cash-register" class="mr-4" />StockTrader
      </template>

      <template v-slot:lead>
        This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
        featured content or information.
      </template>

      <hr class="my-4" />

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus fuga culpa error omnis, nostrum obcaecati sint odio ratione quos reiciendis amet rerum sequi voluptas doloremque quisquam nisi aspernatur ea sed!</p>

      <b-button class="mr-4" size="lg"  variant="primary" :to="{name: 'stock'}">Comprar</b-button>
      <b-button class="mr-4" size="lg"  variant="success" :to="{name: 'portfolio'}">Vender</b-button>
    </b-jumbotron>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>