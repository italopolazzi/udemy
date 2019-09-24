<template>
  <v-container fluid>
    <v-layout wrap row fill-height>
      <v-flex xs12>
        <v-card tile flat v-if="project">
          <v-img
            class="white--text"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-list-item>
              <v-list-item-content>
                <span class="overline mb-4">Project Details</span>
                <v-list-item-title class="headline mb-1">{{project.name}}</v-list-item-title>
                <v-list-item-subtitle class="grey--text subtitle-1">{{project.description}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-img>
          <v-card-text>{{project.description}}</v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-text>Nenhum projeto selecionado</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="{name: 'projects'}" text tile>Voltar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "project-details",
  computed: {
    ...mapGetters(["project"])
  }
};
</script>
