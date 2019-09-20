<template>
  <div id="app">
    <GlobalMessages />
    <template v-if="is_loading">
      <BubbleLoader />
    </template>
    <template v-else>
      <LeftDrawer />
      <router-view />
    </template>
  </div>
</template>

<script>
import GlobalMessages from "@/components/partials/GlobalMessages";
import LeftDrawer from "@/components/partials/LeftDrawer";
import BubbleLoader from "@/components/partials/BubbleLoader";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    GlobalMessages,
    LeftDrawer,
    BubbleLoader
  },
  created() {
    this.$store.dispatch("loadAll", this);
  },
  computed: {
    ...mapGetters(["is_loading"])
  }
};
</script>
