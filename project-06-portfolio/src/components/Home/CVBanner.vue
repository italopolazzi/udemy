<template>
  <v-carousel
    cycle
    interval="10000"
    height="100vh"
    :style="slide_styles"
    continuous
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <v-img :src="contact">
        <v-container fluid class="pa-0">
          <v-layout align-center justify-start class="pa-2" :style="layout_styles">
            <v-flex class="cv-banner" xs12 sm6 md4>
              <v-card color="primary">
                <v-card-title>
                  <div class="display-1">Lorem ipsum dolor sit amet voluptates officiis molestias!</div>
                </v-card-title>
                <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit fuga quod! Aliquid voluptatum consectetur vero. Eaque tempora accusantium temporibus placeat. Quis, qui fuga? Cumque corrupti vero beatae provident saepe.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="handleScroll">
                    <v-icon class="left">mdi-arrow-down</v-icon>Ver currículo
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import contact from "@/assets/contact.jpg";
export default {
  name: "cv-banner",
  data() {
    return {
      colors: ["primary"],
      contact

      // colors: ["primary", "secondary", "yellow darken-2", "red", "orange"]
    };
  },
  computed: {
    toolbar_size() {
      return this.$vuetify.application.top;
    },
    slide_styles() {
      const total = `${-this.toolbar_size}px`;
      return {
        top: total,
        marginBottom: total
      };
    },
    layout_styles() {
      const total = `${this.toolbar_size}px`;
      return {
        height: `calc(100vh - ${total})`,
        marginTop: total
      };
    }
  },
  methods: {
    handleScroll() {
      document.querySelector("#curriculum").scrollIntoView();
    }
  },
  mounted() {
    console.log(this.$vuetify);
  }
};
</script>

<style lang="stylus">
html {
  scroll-behavior: smooth;
}
</style>