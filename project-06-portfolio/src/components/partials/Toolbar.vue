<template>
  <v-app-bar app extended :prominent="false" flat>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">{{fname}}</span>
      <span class="font-weight-bold">{{lname}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <div slot="extension">
      <v-tooltip v-for="{name, path, icon} in links" :key="name" bottom :disabled="showTitles">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text :to="path" :icon="!showTitles" class="mr-2">
            <span class="mr-2" v-if="showTitles">{{name}}</span>
            <v-icon>mdi-{{icon}}</v-icon>
          </v-btn>
        </template>
        {{name}}
      </v-tooltip>
    </div>
    <div slot="img">
      <v-img :src="wallpaper" aspect-ratio="1"></v-img>
    </div>
  </v-app-bar>
</template>

<script>
import wallpaper from "@/assets/wallpaper.jpg";
import { mapGetters } from "vuex";
import global from "@/data/global";
export default {
  name: "toolbar",
  data() {
    return {
      links: [...global.routes.toolbar],
      wallpaper
    };
  },
  computed: {
    ...mapGetters(["user"]),
    fname() {
      return this.user.fname;
    },
    lname() {
      return this.user.lname;
    },
    showTitles() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
  }
};
</script>

<style>
</style>