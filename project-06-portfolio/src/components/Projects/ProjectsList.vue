<template>
  <div class="projects-list">
    <h2>Projects List</h2>
    <v-container fluid>
      <v-layout wrap row fill-height>
        <v-flex xs12 pa-2>
          <v-flex xs12 md3>
            <div class="headline">Filters</div>
            <v-select
              append-icon="mdi-filter"
              :items="all_tags"
              multiple
              chips
              small-chips
              single-line
              dense
              outlined
              full-width
              counter
              clearable
              hide-selected
              rounded
              persistent-hint
              hint="Selecione para filtrar projetos por tags"
              v-model="filtering_by_tags"
            ></v-select>
          </v-flex>
        </v-flex>
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
    ...mapGetters(["projects", "all_tags"]),
    filtering_by_tags: {
      get() {
        return this.$store.getters.filtering_by_tags;
      },
      set(v) {
        this.$store.commit("SET_TAGS_TO_FILTER", v);
      }
    }
  }
};
</script>


