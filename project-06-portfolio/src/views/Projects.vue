<template>
  <div class="projects">
    <h1>This is an projects page</h1>
    <v-container fluid>
      <v-layout wrap row fill-height>
        <v-flex v-for="project in projects" :key="name" xs12 md6 lg4 pa-2>
          <Project :project="project" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Project from "@/components/partials/Project";
import wallpaper from "@/assets/wallpaper.jpg";
import { mapGetters } from "vuex";
export default {
  name: "projects",
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


