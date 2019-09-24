<template>
  <v-card tile flat hover>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="primary">
        <v-img v-if="project.img.src" :src="project.img.src" :alt="project.img.alt"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="overline mb-4">{{project.name}}</div>
        <v-list-item-title class="headline mb-1">{{project.name}}</v-list-item-title>
        <v-list-item-subtitle class="grey--text subtitle-1">{{project.name}}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>{{project.description}}</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-chip
        class="mr-2"
        x-small
        label
        outlined
        v-for="tag in project.tags"
        :key="tag"
        @click="filterByTag(tag)"
      >{{tag}}</v-chip>
    </v-card-actions>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="seeThisProject" text tile>Detalhes</v-btn>
      <v-btn :href="project.link" target="_blank" text tile>Visitar</v-btn>
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
  },
  methods: {
    seeThisProject() {
      this.$store.commit("SET_PROJECT", this.project);
      this.$router.push({ path: "details", append: true });
    },
    filterByTag(tag) {
      this.$store.commit("ADD_TAG_TO_FILTER", tag);
    }
  }
};
</script>