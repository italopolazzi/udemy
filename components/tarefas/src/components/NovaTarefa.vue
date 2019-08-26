<template>
  <div id="nova-tarefa">
    <input
      type="text"
      id="entrada"
      ref="entrada"
      class="super-round"
      v-model="nova_tarefa"
      placeholder="Legenda da nova tarefa"
    />
    <button id="adicionar" class="super-round" @click="emitirNovaTarefa">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nova_tarefa: "Teste"
    };
  },
  methods: {
    emitirNovaTarefa() {
      let valor = this.nova_tarefa || this.$refs.entrada.value;
      if (valor != "") {
        this.$emit("novaTarefaAdicionada", valor);
      }
    }
  }
};
</script>

<style>
#entrada,
#adicionar {
  height: var(--bar-size);
  border: none;
  margin-top: var(--default-margin);
  outline: none;
}
#entrada {
  padding: var(--default-padding-input);
  padding-right: var(--space-correction);
  background: var(--theme-opacity-color);
}
#adicionar {
  width: var(--bar-size);
  border-radius: var(--bar-size);
  margin-left: calc(var(--space-correction) * -1);
}
</style>