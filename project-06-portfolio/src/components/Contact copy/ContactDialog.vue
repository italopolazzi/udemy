<template>
  <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on }">
      <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      <slot name="buttons" />
    </template>
    <slot />
  </v-dialog>
</template>

<script>
import ContactForm from "./ContactForm";
export default {
  components: { ContactForm }
};
</script>

<style>
</style>