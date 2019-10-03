<template>
  <v-card flat tile class="cv-personal-info" height="100%">
    <v-list-item three-line>
      <v-list-item-avatar size="100">
        <v-img :src="'https://avatars2.githubusercontent.com/u/20938880?s=460&v=4'"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          <div class="overline mb-4"># Computer Scientist</div>
          <div class="display-2 font-weight-thin">Ítalo Polazzi</div>
          <div class="title">Web Developer \\ Graphic Designer</div>
        </v-list-item-title>
        <v-list-item-subtitle>
          <div class="subtitle-1">Belo Horizonte, Brazil</div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider role="presentation"></v-divider>

    <v-card-text>
      <div class="overline mb-4"># Sobre mim</div>
      <div class="title">Algo aqui</div>
      <p
        class="body-1"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolore consequatur asperiores voluptatum? Itaque eveniet animi odio dolorum ipsam ex a. Maxime unde officia ducimus, ab facilis eveniet officiis voluptates.</p>
      <div class="title">Algo aqui</div>
      <p
        class="body-1"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolore consequatur asperiores voluptatum? Itaque eveniet animi odio dolorum ipsam ex a. Maxime unde officia ducimus, ab facilis eveniet officiis voluptates.</p>
    </v-card-text>

    <v-card-actions>
      <!-- <v-spacer></v-spacer> -->
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
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "cv-personal-info"
};
</script>

<style>
</style>