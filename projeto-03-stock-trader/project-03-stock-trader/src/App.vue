<template>
  <div id="app">
    <TopToolbar />
    <router-view />
  </div>
</template>

<script>
import TopToolbar from "@/components/partials/TopToolbar";

export default {
  name: "app",
  components: {
    TopToolbar
  }
};
</script>

<style lang="stylus"></style>
