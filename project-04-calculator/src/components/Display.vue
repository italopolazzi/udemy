<template>
  <v-container>
    <v-layout column text-right>
      <v-flex xs12>
        <v-card class="pa-5 display-3 font-weight-bold">{{result}}</v-card>
      </v-flex>
      <v-flex xs12>
        <v-sheet class="pa-5 title">{{expression}}</v-sheet>
        <v-sheet class="pa-5" v-if="errors.length">
          <v-list>
            <v-list-tile class="error--text" v-for="(error, index) in errors" :key="index">{{error.message}}</v-list-tile>
          </v-list>
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["result", "expression", "errors"])
  }
};
</script>
