<template>
  <div id="app">
    <div class="global_messages" v-if="global_messages.length">
      <ul>
        <li v-for="(message, index) in global_messages" :key="index">{{index}}-{{message.text}}</li>
      </ul>
    </div>
    <TopToolbar />
    <router-view />
  </div>
</template>

<script>
import TopToolbar from "@/components/partials/TopToolbar";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    TopToolbar
  },
  computed: {
    ...mapGetters(["global_messages"])
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
