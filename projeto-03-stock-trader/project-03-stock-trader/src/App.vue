<template>
  <div id="app">
    <template v-if="is_loading">
      <BubbleLoader />
    </template>
    <template v-else>
      <!-- <div class="global-messages" v-if="global_messages.length">
        <ul>
          <li v-for="(message, index) in global_messages" :key="index">{{index}}-{{message.text}}</li>
        </ul>
      </div> -->
      <LeftDrawer />

      <router-view />
    </template>
  </div>
</template>

<script>
import LeftDrawer from "@/components/partials/LeftDrawer";
import BubbleLoader from "@/components/partials/BubbleLoader";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    LeftDrawer,
    BubbleLoader
  },
  created() {
    this.$store.dispatch("loadAll", this);
  },
  computed: {
    ...mapGetters(["global_messages", "is_loading"])
  },
  watch: {
    global_messages() {
      setTimeout(() => {
        this.$store.state.global.messages.shift();
      }, 5000);
    }
  }
};
</script>
