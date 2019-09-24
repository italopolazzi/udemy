<template>
  <v-card flat tile class="cv-educational-background">
    <v-divider></v-divider>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline"># Educational</div>
        <v-list-item-title>
          <div class="display-2 font-weight-thin">Background</div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-list tile>
        <v-list-item @click=" ">
          <v-list-item-content>
            <v-list-item-title>
              <div class="title">Centro Universitário de Belo Horizonte</div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="subtitle">Abr/2015 - Dez/2018</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click=" ">
          <v-list-item-content>
            <v-list-item-title>
              <div class="title">E. E. Francisco Menezes Filho</div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="subtitle">Jan/2012 - Dez/2014</div>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "cv-educational-background"
};
</script>

<style>
</style>