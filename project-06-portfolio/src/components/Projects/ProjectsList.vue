<template>
  <div class="projects-list">
    <h2>Projects List</h2>
    <v-container fluid>
      <v-layout wrap row fill-height>
        <v-flex v-for="project in projects" :key="project.name" xs12 md6 lg4 pa-2>
          <Project :project="project" />
        </v-flex>
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
    ...mapGetters(["projects"])
  }
};
</script>


