<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="display-4 font-weight-thin">Home</div>
      </v-flex>
      <v-flex xs12 md8>
        <v-card flat tile class="cv-me">
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
          <v-divider></v-divider>

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
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card flat tile class="cv-professional">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                <div class="overline"># Professional</div>
                <div class="title">Federal Police</div>
                <div class="subtitle">(2017-2018)</div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-text>
            <p
              class="body-1"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum amet id quasi provident aut, neque rem architecto nobis exercitationem debitis nihil expedita ab, dolore consectetur molestias perspiciatis quae obcaecati fugiat?</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card flat tile class="cv-skills">
          <v-card-text>Skills</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md8>
        <v-card flat tile class="cv-education">
          <v-card-text>Education</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md8>
        <v-card flat tile class="cv-personal-info">
          <v-card-text>PersonalInfo</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 md4>
        <v-card flat tile class="cv-experience">
          <v-card-text>Experience</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {}
};
</script>
