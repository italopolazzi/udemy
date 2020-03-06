<template>
  <div class="main-navigation">
    <b-nav vertical pills class="w-100">
      <b-nav-item
        class="text-capitalize"
        v-for="(route, route_index) in routes"
        :key="route_index"
        :to="{name: route}"
        :active="$route.name === route"
      >{{route}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "main-navigation",
  data() {
    return {
      routes: ["home", "portfolio", "stock"]
    };
  }
};
</script>