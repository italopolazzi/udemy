<template>
  <Drawer class="right">
    <h1 slot="title">{{$route.name}}</h1>
    <Menu slot="menu" />
    <Actions slot="actions">{{funds | money}}</Actions>
  </Drawer>
</template>

<script>
import Drawer from "@/components/components/Drawer";
import Menu from "@/components/partials/Menu";
import Actions from "@/components/partials/Actions";
import { mapGetters } from "vuex";
export default {
  components: { Drawer, Menu, Actions },
  computed: {
    ...mapGetters(["funds"])
  }
};
</script>