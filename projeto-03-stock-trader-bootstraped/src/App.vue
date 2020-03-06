<template>
  <div id="app">
    <GlobalMessages />
    <b-container class="fill-viewport">
      <b-row>
        <b-col cols="12" lg="3">
          <SideDrawer />
        </b-col>
        <b-col cols="12" lg="9">
          <template v-if="is_loading">
            <b-spinner label="loading" />
          </template>
          <template v-else>
            <Transition name="fadeDown" mode="out-in" appear>
              <router-view :key="$route.name" />
            </Transition>
          </template>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GlobalMessages from "@/components/GlobalMessages";
import SideDrawer from "@/components/SideDrawer";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    GlobalMessages,
    SideDrawer
  },
  created() {
    this.$store.dispatch("loadAll", this);
  },
  computed: {
    ...mapGetters(["is_loading"])
  }
};
</script>