<template>
  <div class="projects">
    <h1>This is an projects page</h1>
    <v-container fluid>
      <v-layout wrap row fill-height>
        <v-flex v-for="{name, description, tags, link} in projects" :key="name" xs12 md6 lg4 pa-2>
          <v-card tile flat hover>
            <v-card-title>{{name}}</v-card-title>
            <v-card-text>{{description}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="link" target="_blank" text tile>Abrir</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "projects",
  computed: {
    ...mapGetters(["projects"])
  }
};
</script>


