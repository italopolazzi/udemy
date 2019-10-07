<template>
  <v-card flat tile class="cv-profissional-experience">
    <v-divider role="presentation"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          <div class="overline"># Professional</div>
          <div class="display-2 font-weight-thin">Experience</div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-list tile>
        <!-- ITEM -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <div class="title">Federal Police</div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="subtitle">Nov/2017 - Nov/2018</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <!-- ITEM -->
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              <div class="title">Talkiddy Startup</div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="subtitle">Nov/2016 - Nov/2017</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "cv-profissional-experience"
};
</script>

<style>
</style>