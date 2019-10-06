<template>
  <v-app>
    <Toolbar />

    <v-content>
      <transition-group name="slide" mode="out-in">
        <v-snackbar
          v-model="global_messages.length"
          v-for="({text, color, type, timeout},i) in global_messages"
          :color="color"
          :timeout="timeout"
          :key="i"
        >{{text}}</v-snackbar>
      </transition-group>
      <transition name="slide" mode="out-in">
        <router-view />
      </transition>
    </v-content>

    <v-footer>
      <v-spacer></v-spacer>
      <div class="overline my-5">&copy; Ítalo Polazzi — {{new Date().getFullYear()}}</div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
import Toolbar from "@/components/partials/Toolbar";
import global from "@/data/global";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Toolbar },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(["global_messages"])
  }
};
</script>
