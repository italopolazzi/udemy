<template>
  <v-container fluid>
    <v-layout wrap row fill-height>
      <v-flex xs12>
        <v-card tile flat v-if="project">
          <v-img
            min-height="200"
            max-height="400"
            :contain="false"
            :src="'https://66.media.tumblr.com/8367a8d8b354e4992f109bef4b7ab602/tumblr_p3n8maJxJD1ulfp4fo3_1280.jpg'"
            gradient="to top, rgba(0,0,0,.4), transparent"
          >
            <!-- <v-circular-progress #placeholder></v-circular-progress> -->
            <!-- <div class="fill-height bottom-gradient"></div> -->
            <v-card-title class="fill-height align-end bottom-gradient">
              <v-list-item class="white--text">
                <v-list-item-content>
                  <span class="overline mb-4 white--text"># Project Details</span>
                  <v-list-item-title class="display-2 mb-1 white--text">{{project.name}}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-title>
          </v-img>

          <v-card-text>
            <div class="overline mb-4"># Description</div>
            {{project.description}}
            <!-- SHEET project-details-grid-3-with-center-img -->
            <v-sheet class="project-details-grid-3-with-center-img">
              <v-row class="nowrap">
                <v-col md="12">
                  <div
                    class="display-2 font-weight-bold"
                  >Dignissimos eaque corrupti fugiat culpa numquam</div>
                </v-col>
                <v-col md="4" class="pa-12">
                  <div
                    class="display-2 font-weight-thin mb-12"
                  >Porro molestias asperiores quia eum quibusdam rem!</div>
                  <div
                    class="body-2 mb-4"
                  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!</div>
                </v-col>
                <v-col md="4">
                  <v-img
                    :contain="false"
                    :src="'https://66.media.tumblr.com/2838b2455078becc4af057284fcfbe9e/tumblr_p3n8maJxJD1ulfp4fo1_500.jpg'"
                  ></v-img>
                  <div
                    class="caption mt-2"
                  >Suscipit quisquam laudantium, veritatis assumenda eaque sed, nemo architecto repellat. Ducimus quas accusamus minima fugiat est quisquam.</div>
                </v-col>
                <v-col md="4" class="pa-12">
                  <div
                    class="display-2 font-weight-thin mb-12"
                  >Ipsum dolor sit amet consectetur adipisicing elit</div>
                  <div
                    class="body-2 mb-4"
                  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!</div>
                </v-col>
              </v-row>
            </v-sheet>
            <!-- SHEET project-details-grid-3-with-left-img -->
            <v-sheet class="project-details-grid-3-with-left-img">
              <v-row class="nowrap">
                <v-col md="12">
                  <div
                    class="display-2 font-weight-bold"
                  >Dignissimos eaque corrupti fugiat culpa numquam</div>
                </v-col>
                <v-col md="4">
                  <v-img
                    :contain="false"
                    :src="'https://66.media.tumblr.com/2838b2455078becc4af057284fcfbe9e/tumblr_p3n8maJxJD1ulfp4fo1_500.jpg'"
                  ></v-img>
                  <div
                    class="caption mt-2"
                  >Suscipit quisquam laudantium, veritatis assumenda eaque sed, nemo architecto repellat. Ducimus quas accusamus minima fugiat est quisquam.</div>
                </v-col>
                <v-col md="8" class="pa-12">
                  <v-row class="nowrap">
                    <v-col class="text-justify" :class="textColumns">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
            <!-- SHEET project-details-grid-3-with-right-img -->
            <v-sheet class="project-details-grid-3-with-right-img">
              <v-row class="nowrap">
                <v-col md="12">
                  <div
                    class="display-2 font-weight-bold"
                  >Dignissimos eaque corrupti fugiat culpa numquam</div>
                </v-col>
                <v-col md="8" class="pa-12">
                  <v-row class="nowrap">
                    <v-col>
                      <TextColumns class="text-justify" :config="3" >
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      </TextColumns>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col md="4">
                  <v-img
                    :contain="false"
                    :src="'https://66.media.tumblr.com/2838b2455078becc4af057284fcfbe9e/tumblr_p3n8maJxJD1ulfp4fo1_500.jpg'"
                  ></v-img>
                  <div
                    class="caption mt-2"
                  >Suscipit quisquam laudantium, veritatis assumenda eaque sed, nemo architecto repellat. Ducimus quas accusamus minima fugiat est quisquam.</div>
                </v-col>
              </v-row>
            </v-sheet>
            <!-- SHEET project-details-grid-3-with-2-imgs -->
            <v-sheet class="project-details-grid-3-with-2-imgs">
              <v-row class="nowrap">
                <v-col md="12">
                  <div
                    class="display-2 font-weight-bold"
                  >Dignissimos eaque corrupti fugiat culpa numquam</div>
                </v-col>
                <v-col md="4">
                  <v-img
                    :contain="false"
                    :src="'https://66.media.tumblr.com/2838b2455078becc4af057284fcfbe9e/tumblr_p3n8maJxJD1ulfp4fo1_500.jpg'"
                  ></v-img>
                  <div
                    class="caption mt-2"
                  >Suscipit quisquam laudantium, veritatis assumenda eaque sed, nemo architecto repellat. Ducimus quas accusamus minima fugiat est quisquam.</div>
                </v-col>
                <v-col md="4" class="pa-12">
                  <v-row class="nowrap">
                    <v-col class="text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                    </v-col>
                  </v-row>
                </v-col>
                <v-col md="4">
                  <v-img
                    :contain="false"
                    :src="'https://66.media.tumblr.com/2838b2455078becc4af057284fcfbe9e/tumblr_p3n8maJxJD1ulfp4fo1_500.jpg'"
                  ></v-img>
                  <div
                    class="caption mt-2"
                  >Suscipit quisquam laudantium, veritatis assumenda eaque sed, nemo architecto repellat. Ducimus quas accusamus minima fugiat est quisquam.</div>
                </v-col>
              </v-row>
            </v-sheet>
            <!-- SHEET project-details-only-text -->
            <v-sheet class="project-details-only-text">
              <v-row class="nowrap">
                <v-col
                  class="display-2 font-weight-bold"
                >Dignissimos eaque corrupti fugiat culpa numquam</v-col>
              </v-row>

              <v-row>
                <v-col class="text-justify">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                </v-col>
              </v-row>
            </v-sheet>
            <!-- SHEET project-details-only-text-with-top-image -->
            <v-sheet class="project-details-only-text-with-top-image">
              <v-row class="nowrap">
                <v-col md="12">
                  <div
                    class="display-2 font-weight-bold"
                  >Dignissimos eaque corrupti fugiat culpa numquam</div>
                </v-col>
                <v-col md="12">
                  <v-img
                    :contain="false"
                    :src="'https://66.media.tumblr.com/2838b2455078becc4af057284fcfbe9e/tumblr_p3n8maJxJD1ulfp4fo1_500.jpg'"
                  ></v-img>
                  <div
                    class="caption mt-2"
                  >Suscipit quisquam laudantium, veritatis assumenda eaque sed, nemo architecto repellat. Ducimus quas accusamus minima fugiat est quisquam.</div>
                </v-col>
                <v-col md="12">
                  <v-row class="nowrap">
                    <v-col class="text-justify">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eaque corrupti fugiat culpa numquam nostrum modi omnis. Assumenda qui, repudiandae dolor, ullam velit porro molestias asperiores quia eum quibusdam rem!
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-sheet>
          </v-card-text>
        </v-card>
        <v-card v-else>
          <v-card-text>Nenhum projeto selecionado</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn :to="{path: '/projects'}" text tile>Voltar</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TextColumns from "@/components/partials/TextColumns";
import { mapGetters } from "vuex";
export default {
  name: "project-details",
  components: {
    TextColumns
  },
  computed: {
    ...mapGetters(["project"])
  }
};
</script>
