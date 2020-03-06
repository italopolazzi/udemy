<template>
  <div id="actions">
    <div class="buttons">
      <b-button class="sr flat" @click="endDay()">Finalizar dia</b-button>
      <b-dropdown>
        <b-dropdown-item slot="activator" class="sr flat">Abrir</b-dropdown-item>
        <b-dropdown-item class="sr flat" @click="loadAll()">Carregar</b-dropdown-item>
        <b-dropdown-item class="sr flat" @click="saveAll()">Salvar</b-dropdown-item>
      </b-dropdown>
    </div>

    <transition name="funds" mode="out-in" appear>
      <span class="chip funds" :key="funds">{{funds}}</span>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["funds"])
  },
  methods: {
    funds_key: 0,
    endDay() {
      this.$store.dispatch("endDay");
    },
    loadAll() {
      this.$store.dispatch("loadAll", this);
    },
    saveAll() {
      this.$store.dispatch("saveAll", this);
    }
  }
};
</script>
