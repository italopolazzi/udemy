<template>
  <v-app>
    <Toolbar />

    <v-content>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </v-content>

    <v-footer>
      <v-spacer></v-spacer>
      <div class="overline my-5">&copy; Ítalo Polazzi - 2019</div>
      <v-spacer></v-spacer>
    </v-footer>
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
