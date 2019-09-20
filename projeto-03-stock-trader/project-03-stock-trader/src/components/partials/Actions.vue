<template>
  <div id="actions">
    <span class="funds sr">
      <slot />
    </span>
    <button id="button1" class="sr" @click="endDay()">Finalizar dia</button>
    <button id="button2" class="sr" @click="loadAll()">Carregar</button>
    <button id="button2" class="sr" @click="saveAll()">Salvar</button>
  </div>
</template>

<script>
export default {
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