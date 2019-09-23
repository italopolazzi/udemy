<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">{{fname}}</span>
      <span class="font-weight-bold">{{lname}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text :to="link.path" v-for="link in links" :key="link.name">
      <span class="mr-2">{{link.name}}</span>
      <v-icon>mdi-{{link.icon}}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex";
import global from "@/data/global";
export default {
  name: "toolbar",
  data() {
    return {
      links: [...global.routes.toolbar]
    };
  },
  computed: {
    ...mapGetters(["user"]),
    fname() {
      return this.user.fname;
    },
    lname() {
      return this.user.lname;
    }
  }
};
</script>

<style>
</style>