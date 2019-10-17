<template>
  <nav class="menu">
    <router-link class="router-link" :to="{name: 'home'}" exact>Home</router-link>
    <router-link class="router-link" :to="{name: 'portfolio'}" exact>Portfolio</router-link>
    <router-link class="router-link" :to="{name: 'stock'}" exact>Stock</router-link>
  </nav>
</template>

<script>
export default {};
</script>