<template>
  <div class="main-navigation">
    <b-nav class="w-100" fill>
      <b-nav-item
        class="text-capitalize"
        v-for="(route, route_index) in routes"
        :key="route_index"
        :to="{name: route.name}"
        :active="$route.name === route.name"
        link-classes="text-success"
      >
        <!-- <template #default=""> -->
        <div class="d-flex flex-column justify-content-center">
          <span>
            <fa-icon :icon="route.icon" />
          </span>
          <span>{{route.name}}</span>
        </div>

        <!-- </template> -->
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "main-navigation",
  data() {
    return {
      routes: [
        {
          name: "home",
          icon: "home"
        },
        {
          name: "portfolio",
          icon: "wallet"
        },
        {
          name: "stock",
          icon: "store"
        },
        {
          name: "charts",
          icon: "chart-line"
        }
      ]
    };
  }
};
</script>