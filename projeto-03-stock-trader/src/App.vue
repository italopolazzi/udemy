<template>
  <div id="app">
    <GlobalMessages />
    <Transition name="fade" mode="out-in" appear>
      <div v-if="is_loading" key="loader">
        <BubbleLoader />
      </div>
      <div class="main-content" v-else key="content">
        <RightDrawer />
        <div class="router-view">
          <router-view />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script>
import GlobalMessages from "@/components/partials/GlobalMessages";
import RightDrawer from "@/components/partials/RightDrawer";
import BubbleLoader from "@/components/partials/BubbleLoader";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    GlobalMessages,
    RightDrawer,
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