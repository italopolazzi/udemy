<template>
  <div id="actions">
    <span class="funds sr">
      <slot />
    </span>
    <button id="button1" class="sr" @click="endDay()">Finalizar dia</button>
    <button id="button2" class="sr" @click="expand()">Expandir</button>
  </div>
</template>

<script>
export default {
  methods: {
    endDay() {
      this.$store.dispatch("endDay");
    },
    expand() {
      alert("expand");
    }
  }
};
</script>


<style lang="stylus" scoped>
button, .funds {
  padding: 0.75rem 1.25rem;
  background: rgba(255, 255, 255, 0.4);
  margin-right: 1rem;
  color: white;
}
</style>