<template>
  <Toolbar>
    <h1 slot="title">{{$route.name}}</h1>
    <Menu slot="menu" />
    <Actions slot="actions">
      <div class="funds">{{funds}}</div>
    </Actions>
  </Toolbar>
</template>

<script>
import Toolbar from "@/components/partials/Toolbar";
import Menu from "@/components/Menu";
import Actions from "@/components/Actions";
import { mapGetters } from "vuex";
export default {
  components: { Toolbar, Menu, Actions },
  computed: {
    ...mapGetters(["funds"])
  }
};
</script>