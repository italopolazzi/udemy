<template>
  <v-flex class="xs12">
    <v-flex class="xs12">
      <v-carousel
        cycle
        interval="10000"
        height="100vh"
        class="mt-n3"
        :style="slide_styles"
        continuous
        hide-delimiter-background
        hide-delimiters
        :show-arrows="false"
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <!-- <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet> -->
          <v-img :src="'https://66.media.tumblr.com/8367a8d8b354e4992f109bef4b7ab602/tumblr_p3n8maJxJD1ulfp4fo3_1280.jpg'"></v-img>
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
      colors: ["primary"]
      // colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  },
  computed: {
    slide_styles() {
      return {
        top: this.$vuetify.application.top * -1 + "px"
      };
    }
  }
};
</script>