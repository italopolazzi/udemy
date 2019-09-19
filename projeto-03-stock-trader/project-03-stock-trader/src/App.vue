<template>
  <div id="app">
    <template v-if="is_loading">
      <BubbleLoader />
    </template>
    <template v-else>
      <div class="global_messages" v-if="global_messages.length">
        <ul>
          <li v-for="(message, index) in global_messages" :key="index">{{index}}-{{message.text}}</li>
        </ul>
      </div>
      <TopToolbar />

      <router-view />
    </template>
  </div>
</template>

<script>
import TopToolbar from "@/components/partials/TopToolbar";
import BubbleLoader from "@/components/partials/BubbleLoader";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    TopToolbar,
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

<style lang="stylus">
.global_messages {
  position: absolute;
  right: 1rem;
  top: 1rem;
  background: red;
  padding: 1rem;
}
</style>
