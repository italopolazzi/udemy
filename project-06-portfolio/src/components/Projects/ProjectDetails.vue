<template>
  <v-container fluid>
    <v-layout wrap row fill-height>
      <v-flex xs12>
        <!-- not loaded PROJECT -->
        <template v-if="loading">
          <v-flex xs12 pa-2>
            <v-row>
              <v-col>
                <v-progress-linear indeterminate></v-progress-linear>
              </v-col>
            </v-row>
            <v-row>
              <v-col>Carregando...</v-col>
            </v-row>
          </v-flex>
        </template>

        <!-- loaded PROJECT -->
        <template v-else>
          <v-card tile flat>
            <v-card-text>
              <v-card flat>
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4">freeCodeCamp</div>
                    <v-list-item-title>
                      <div class="display-2">Survey Form</div>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <div class="display-1">Responsive Web Design Projects</div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-card-text class="text-justify">
                  <v-img :src="img.src"></v-img>
                </v-card-text>
                <v-card-text>
                  <v-btn large color="accent">
                    <v-icon left>mdi-eye</v-icon>Live demo
                  </v-btn>
                </v-card-text>
              </v-card>

              <v-card flat>
                <v-card-title>
                  <div class="display-1">Motivação</div>
                </v-card-title>
                <v-card-text class="text-justify" v-html="motivation"></v-card-text>
              </v-card>

              <v-card flat>
                <v-card-title>
                  <div class="display-1">User Story</div>
                </v-card-title>
                <v-card-text class="text-left">
                  <v-list dense expand>
                    <v-list-item v-for="(item, i) in user_story" :key="i">
                      <v-list-item-action>
                        <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                      </v-list-item-action>
                      <v-list-item-content v-html="item"></v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>

              <v-card flat>
                <v-card-title>
                  <div class="display-1">A ideia</div>
                </v-card-title>
                <v-card-text class="text-justify">
                  <!-- <TextColumns :config="{mdAndUp: 3, mdAndDown: 1}"> -->
                  <p v-html="idea"></p>
                  <!-- </TextColumns> -->
                </v-card-text>
              </v-card>
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12 md4>
                    <v-divider role="presentation" class="primary"></v-divider>
                    <v-card flat>
                      <v-card-title>
                        <div class="display-1">Características principais</div>
                      </v-card-title>
                      <v-card-text class="text-left">
                        <v-list dense expand>
                          <v-list-item v-for="(item, i) in main_features" :key="i">
                            <v-list-item-action>
                              <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                            </v-list-item-action>
                            <v-list-item-content v-html="item"></v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 md4>
                    <v-divider role="presentation" class="secondary"></v-divider>
                    <v-card flat>
                      <v-card-title>
                        <div class="display-1">Principais aprendizados</div>
                      </v-card-title>
                      <v-card-text class="text-left">
                        <v-list dense expand>
                          <v-list-item v-for="(item, i) in main_learnings" :key="i">
                            <v-list-item-action>
                              <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                            </v-list-item-action>
                            <v-list-item-content v-html="item"></v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex xs12 md4>
                    <v-divider role="presentation" class="primary"></v-divider>
                    <v-card flat>
                      <v-card-title>
                        <div class="display-1">Dificuldades</div>
                      </v-card-title>
                      <v-card-text class="text-left">
                        <v-list dense expand>
                          <v-list-item v-for="(item, i) in difficulties" :key="i">
                            <v-list-item-action>
                              <v-list-item-action-text>#{{i+1}}</v-list-item-action-text>
                            </v-list-item-action>
                            <v-list-item-content v-html="item"></v-list-item-content>
                          </v-list-item>
                        </v-list>
                      </v-card-text>
                    </v-card>
                  </v-flex>

                  <v-flex xs12>
                    <v-divider role="presentation" class="secondary"></v-divider>
                    <v-card flat>
                      <v-card-title>
                        <div class="display-1">Tecnologias utilizadas</div>
                      </v-card-title>
                      <v-card-text>
                        <v-chip-group active-class="primary--text">
                          <v-chip v-for="(item, i) in technologies" :key="i" v-html="item"></v-chip>
                        </v-chip-group>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import image from "@/assets/projects/fcc_survey_form.png";

export default {
  name: "project_details",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      img: {
        src: image,
        alt: ""
      }
    };
  },
  computed: {
    ...mapGetters(["project", "loading"]),
    motivation() {
      return this.project.others.motivation;
    },
    user_story() {
      return this.project.user_story;
    },
    idea() {
      return this.project.others.idea;
    },
    technologies() {
      return this.project.technologies;
    },
    main_features() {
      return this.project.main_features;
    },
    main_learnings() {
      return this.project.main_learnings;
    },
    difficulties() {
      return this.project.difficulties;
    }
  },
  created() {
    this.$store.dispatch("loadProjectDetails", this.id);
  }
};
</script>


<style lang="stylus" >
.v-list-item__content > code {
  flex: 0 1 auto !important;
}
</style>