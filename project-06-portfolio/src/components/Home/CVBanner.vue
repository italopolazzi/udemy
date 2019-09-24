<template>
  <v-flex class="xs12">
    <v-flex class="xs12">
      <v-carousel
        cycle
        interval="10000"
        height="200"
        continuous
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex class="cv-banner" xs8 offset-xs4 lg6 offset-lg6 pa-5>
      <v-banner single-line>
        <template #actions>
          <!-- 
              TODO
              :to="{name: 'projects'}" //not working
          -->
          <template v-if="$vuetify.breakpoint.lgAndUp">
            <v-btn color="primary" :to="'/projects'" text>
              <v-icon left>mdi-developer-board</v-icon>Projects
            </v-btn>
          </template>
          <template v-else>
            <v-btn color="primary" :to="'/projects'" icon>
              <v-icon>mdi-developer-board</v-icon>
            </v-btn>
          </template>
        </template>
        Visite o portfolio
      </v-banner>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  name: "cv-banner",
  data() {
    return {
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  }
};
</script>

<style>
</style>