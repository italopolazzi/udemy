<template functional>
  <v-card tile flat hover>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" v-if="props.project.img.src">
        <v-img :src="props.project.img.src" :alt="props.project.img.alt"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline mb-4">{{props.project.name}}</div>
        <v-list-item-title class="headline mb-1">{{props.project.name}}</v-list-item-title>
        <v-list-item-subtitle class="grey--text subtitle-1">{{props.project.name}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>{{props.project.description}}</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :href="props.project.link" target="_blank" text tile>Abrir</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "project",
  props: {
    project: {
      type: Object,
      required: true
    }
  }
};
</script>