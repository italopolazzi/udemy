<template>
  <v-app-bar
    app
    elevation="1"
    dense
    v-scroll="{c1: 'white', c2: 'transparent', limit: $vuetify.application.top}"
  >
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">{{fname}}</span>
      <span class="font-weight-bold">{{lname}}</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-tooltip v-for="{name, path, icon} in links" :key="name" bottom :disabled="showTitles">
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text :to="path" :icon="!showTitles" class="mr-2">
            <span class="mr-2" v-if="showTitles">{{name}}</span>
            <v-icon>mdi-{{icon}}</v-icon>
          </v-btn>
        </template>
        {{name}}
      </v-tooltip>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn target="blank" :href="'/projects'" icon>
        <v-icon>mdi-github-face</v-icon>
      </v-btn>
      <v-btn target="blank" :href="'/projects'" icon>
        <v-icon>mdi-facebook-box</v-icon>
      </v-btn>
      <v-btn target="blank" :href="'/projects'" icon>
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
    </v-toolbar-items>

  </v-app-bar>
</template>

<script>
import logo from "@/assets/logo.svg";
import wallpaper from "@/assets/wallpaper.jpg";
import { mapGetters } from "vuex";
import global from "@/data/global";
export default {
  name: "toolbar",
  directives: {
    scroll: {
      inserted(el, binding, vnode) {
        window.addEventListener(
          "scroll",
          vnode.context.changeBackground.bind(null, el, binding)
        );
      },
      unbind(el, binding, vnode) {
        window.removeEventListener("scroll", vnode.context.changeBackground);
      }
    }
  },
  data() {
    return {
      links: [...global.routes.toolbar],
      wallpaper,
      logo
    };
  },
  methods: {
    changeBackground(el, binding) {
      el.style.background = window.scrollY > binding.value.limit
        ? binding.value.c1
        : binding.value.c2;
    }
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