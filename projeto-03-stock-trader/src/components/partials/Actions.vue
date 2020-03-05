<template>
  <div id="actions">
    <div class="buttons">
      <button class="sr flat" @click="endDay()">Finalizar dia</button>
      <Dropdown>
        <button slot="activator" class="sr flat">Abrir</button>
        <button class="sr flat" @click="loadAll()">Carregar</button>
        <button class="sr flat" @click="saveAll()">Salvar</button>
      </Dropdown>
    </div>

    <transition name="funds" mode="out-in" appear>
      <span class="chip funds" :key="funds">{{funds}}</span>
    </transition>
  </div>
</template>

<script>
import Dropdown from "@/components/components/Dropdown";
import { mapGetters } from "vuex";
export default {
  components: { Dropdown },
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
