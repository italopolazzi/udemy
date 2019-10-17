<template>
  <v-carousel
    cycle
    interval="10000"
    :height="height"
    :style="slide_styles"
    continuous
    hide-delimiter-background
    hide-delimiters
    :show-arrows="false"
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(color, i) in colors" :key="color">
      <!-- <v-img
        :src="contact_notebook"
        :gradient="gradient"
        position="10rem -12rem"
        height="100vh"
      -->
      <v-img :src="contact_notebook" position="right calc(-100px)" >
        <v-container fluid class="pa-0">
          <v-layout
            :align-center="$vuetify.breakpoint.mdAndUp"
            :align-end="$vuetify.breakpoint.smAndDown"
            justify-start
            class="pa-2"
            :style="layout_styles"
          >
            <v-flex class="cv-banner" xs12 sm6>
              <v-card light>
                <v-card-title>
                  <div class="display-3">Lorem ipsum dolor sit amet voluptates officiis molestias!</div>
                </v-card-title>
                <v-card-text
                  class="black--text body-1"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odit fuga quod! Aliquid voluptatum consectetur vero. Eaque tempora accusantium temporibus placeat. Quis, qui fuga? Cumque corrupti vero beatae provident saepe.</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>

                  <v-btn @click="handleScroll" color="#FDFE00">Ver o currículo</v-btn>
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
import contact_notebook from "@/assets/contact_notebook.svg";
export default {
  name: "cv-banner",
  data() {
    return {
      colors: ["primary"],
      contact_notebook

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
        height: `calc(${this.height} - ${total})`,
        marginTop: total
      };
    },
    height() {
      return this.$vuetify.breakpoint.smAndDown ? "150vh" : "100vh";
    },
    gradient() {
      const direction = this.$vuetify.breakpoint.smAndDown
        ? "to top"
        : "to top right";
      const color1 = "rgba(255,255,255,.5)";
      const color2 = "transparent";
      return `${direction}, ${color1}, ${color2}`;
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