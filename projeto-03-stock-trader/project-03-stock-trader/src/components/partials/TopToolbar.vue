<template>
  <Toolbar>
    <h1 slot="title">{{$route.name}}</h1>
    <Menu slot="menu" />
    <Actions slot="actions">
      {{funds | money}} 
    </Actions>
  </Toolbar>
</template>

<script>
import Toolbar from "@/components/components/Toolbar";
import Menu from "@/components/partials/Menu";
import Actions from "@/components/partials/Actions";
import { mapGetters } from "vuex";
export default {
  components: { Toolbar, Menu, Actions },
  computed: {
    ...mapGetters(["funds"])
  }
};
</script>