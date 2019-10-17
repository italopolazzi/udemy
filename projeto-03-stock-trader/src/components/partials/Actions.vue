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
    <div class="funds">
      <span class="chip">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/components/Dropdown";
export default {
  components: { Dropdown },
  methods: {
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
