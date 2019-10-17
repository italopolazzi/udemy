<template>
  <div class="global-messages" v-if="global_messages.length">
    <ul>
      <li v-for="(message, index) in global_messages" :key="index">{{index}}-{{message.text}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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

<style>
</style>