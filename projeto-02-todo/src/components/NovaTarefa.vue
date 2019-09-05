<template>
  <div id="nova-tarefa">
    <input
      type="text"
      id="entrada"
      ref="entrada"
      class="super-round"
      v-model="nova_tarefa"
      placeholder="Legenda da nova tarefa"
      @keydown.enter="emitirNovaTarefa"
    />
    <button id="adicionar" class="super-round" @click="emitirNovaTarefa">
      <i class="material-icons">add</i>
    </button>
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
      let valor = this.nova_tarefa;
      if (valor != "") {
        this.$emit("novaTarefaAdicionada", valor);
        this.nova_tarefa = "";
      }
    }
  }
};
</script>

<style>
#nova-tarefa {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
#entrada,
#adicionar {
  border: none;
  margin-top: var(--default-margin);
  outline: none;
}
#entrada {
  min-width: 50%;
  height: calc(var(--bar-size) * 2);
  padding: var(--default-padding-input);
  padding-right: var(--space-correction);
  background: var(--theme-opacity-color);
  color: var(--color-dark);
  /* box-shadow: 0 0 6rem -1rem var(--color-negative); */
}
#entrada::placeholder {
  color: var(--color-dark);
}
#adicionar {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  height: calc(var(--bar-size) * 2);
  width: calc(var(--bar-size) * 2);
  margin-left: calc(var(--space-correction) * -1);
}
</style>