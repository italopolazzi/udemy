<template>
  <div class="'global-messages"></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "global-messages",
  computed: {
    ...mapGetters(["global_messages"])
  },
  watch: {
    global_messages(a, b) {
      const c = a.concat(b);
      const d = c.filter((v, i) => c.indexOf(v) === i);

      d.forEach(message => {
        this.$bvToast.toast(message, {
          title: message.title || "Mensagem",
          autoHideDelay: 4000,
          variant: message.variant,
          appendToast: false
        });
        this.$store.state.global.messages.shift();
      });
    }
  }
};
</script>

<style>
</style>