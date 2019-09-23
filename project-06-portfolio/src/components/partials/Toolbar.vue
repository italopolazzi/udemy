<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">Ítalo</span>
      <span class="font-weight-bold">Polazzi</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="link.path" v-for="link in links" :key="link.name">
      <span class="mr-2">{{link.name}}</span>
      <v-icon>mdi-{{link.icon}}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import global from "@/data/global";
export default {
  name: "toolbar",
  data() {
    return {
      links: [...global.routes.toolbar]
    };
  }
};
</script>

<style>
</style>