<template>
  <div class="projects-list">
    <v-container fluid>
      <v-layout wrap row fill-height>
        <!-- not loaded PROJECTS -->
        <template v-if="loading">
          <v-flex xs12 pa-2>
            <v-row>
              <v-col>
                <v-progress-linear></v-progress-linear>
              </v-col>
            </v-row>
            <v-row>
              <v-col>Carregando...</v-col>
            </v-row>
          </v-flex>
        </template>
        <!-- loaded PROJECTS -->
        <template v-else>
          <v-flex v-for="project in projects" :key="project.name" xs12 md6 lg4 pa-2>
            <Project :project="project" />
          </v-flex>
        </template>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Project from "./Project";
import wallpaper from "@/assets/wallpaper.jpg";
import { mapGetters } from "vuex";
export default {
  name: "projects-list",
  components: { Project },
  data() {
    return {
      wallpaper
    };
  },
  computed: {
    ...mapGetters(["projects", "loading"])
  },
  created() {
    this.$store.dispatch("getProjects");
  }
};
</script>


