<template>
  <v-container>
    <v-layout text-right>
      <v-flex xs12>
        <v-card class="pa-5 display-3 font-weight-bold">{{result}}</v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["result"])
  }
};
</script>
