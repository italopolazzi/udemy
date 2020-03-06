<template>
  <Drawer>
    <h1 slot="title">{{$route.name}}</h1>
    <MainNavigation slot="menu" />
    <Actions slot="actions" />
  </Drawer>
</template>

<script>
import Drawer from "@/components/Drawer";
import MainNavigation from "@/components/MainNavigation";
import Actions from "@/components/Actions";

export default {
  components: { Drawer, MainNavigation, Actions }
};
</script>