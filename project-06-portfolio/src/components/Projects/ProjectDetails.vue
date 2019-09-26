<template>
  <v-container fluid>
    <v-layout wrap row fill-height>
      <v-flex xs12>
        <v-card tile flat>
          <v-card-text>
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
                      <TextColumns class="text-justify" :config="{ mdAndUp: 4, mdAndDown: 2 }" >
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

          </v-card-text>
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
