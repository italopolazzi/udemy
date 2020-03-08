<template>
  <div class="bg-dark text-light p-4">
    <Drawer>
      <div slot="title" class="d-flex flex-column h4">
        <div class="h1">Stock Trader</div>
        <!-- <div class="text-capitalize h4">{{$route.name}}</div> -->
        <div class="badge badge-primary">{{$route.name}}</div>
      </div>
      <MainNavigation slot="menu" class="mt-4" />
      <Actions slot="actions" class="mt-4"  />
    </Drawer>
  </div>
</template>

<script>
import Drawer from "@/components/Drawer";
import MainNavigation from "@/components/MainNavigation";
import Actions from "@/components/Actions";

export default {
  components: { Drawer, MainNavigation, Actions }
};
</script>