<template>
  <ul id="lista-de-tarefas">
    <li
      class="tarefa"
      :class="statusDeConclusao(status)"
      v-for="({status, legenda}, index) in tarefas"
      @click="inverterStatus(index)"
      :key="index"
    >{{legenda}}</li>
  </ul>
</template>

<script>
export default {
  methods: {
    statusDeConclusao: v => (v ? "concluida" : "nao-concluida"),
    inverterStatus(index) {
      this.tarefas[index].status = !this.tarefas[index].status;
    }
  },
  data() {
    return {
      tarefas: [
        { legenda: "Lavar o carro", status: true },
        { legenda: "Limpar a casa", status: false },
        { legenda: "Concluir o curso", status: false },
        { legenda: "Ir no centro", status: false }
      ]
    };
  }
};
</script>

<style>
#lista-de-tarefas {
  display: flex;
  list-style: none;
}

.tarefa {
  min-width: var(--bar-size);
  max-height: var(--bar-size);
  background: crimson;
  margin: var(--default-margin);
  padding: var(--default-padding);
  cursor: pointer;
}

.concluida {
  text-decoration: line-through;
  background: green;
}
</style>