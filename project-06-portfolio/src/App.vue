<template>
  <v-app>
    <Toolbar />

    <v-content>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "@/components/partials/Toolbar";
import global from "@/data/global";

export default {
  name: "App",
  components: { Toolbar },
  data: () => ({
    //
  })
};
</script>
