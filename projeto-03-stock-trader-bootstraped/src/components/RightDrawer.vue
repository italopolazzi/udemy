<template>
  <Drawer class="right">
    <h1 slot="title">{{$route.name}}</h1>
    <Menu slot="menu" />
    <Actions slot="actions" />
  </Drawer>
</template>

<script>
import Drawer from "@/components/partials/Drawer";
import Menu from "@/components/Menu";
import Actions from "@/components/Actions";

export default {
  components: { Drawer, Menu, Actions }
};
</script>