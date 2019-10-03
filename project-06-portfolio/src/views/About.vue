<template>
  <div class="about">
    <v-container fluid>
      <v-layout fill-height align-center justify-center>
        <v-flex xs12 md6>
          <AboutTheSite />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AboutTheSite from "@/components/About/AboutTheSite";
export default {
  name: "about",
  components: { AboutTheSite }
};
</script>