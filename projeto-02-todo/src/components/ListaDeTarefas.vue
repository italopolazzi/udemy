<template>
  <div v-if="ha_tarefas" id="lista-de-tarefas">
    <ul>
      <li
        tabindex="1"
        class="tarefa"
        :class="statusDeConclusao(tarefa.status)"
        v-for="(tarefa, id) in tarefas"
        @click="inverterStatus(id)"
        :key="id"
      >
        {{tarefa.legenda}}
        <i @click.stop="deletarTarefa(id)" class="excluir material-icons">delete</i>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Você está em dia :)</h2>
  </div>
</template>

<script>
export default {
  props: ["tarefas"],
  computed: {
    ha_tarefas() {
      return Object.keys(this.tarefas).length > 0;
    }
  },
  methods: {
    statusDeConclusao: v => (v ? "concluida" : "nao-concluida"),
    inverterStatus(id) {
      this.$emit("inverterStatus", id);
    },
    deletarTarefa(id) {
      this.$emit("deletarTarefa", id);
    }
  }
};
</script>

<style>
#lista-de-tarefas {
  width: 100%;
  margin: 0;
}
#lista-de-tarefas ul {
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-flow: row wrap;
  list-style: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}

.tarefa {
  min-width: var(--bar-size);
  /* max-height: var(--bar-size); */
  background: var(--color-negative);
  color: var(--color-light);
  margin: var(--default-margin);
  padding: var(--default-padding);
  position: relative;
  cursor: pointer;
  max-width: 10rem;
  flex: 0 1 auto;
  word-break: break-all;
}

.concluida {
  text-decoration: line-through;
  background: var(--color-positive);
  color: var(--color-dark);
}

.excluir {
  display: none;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: calc(0% - 1rem);
  left: calc(100% - 1rem);
  background: var(--color-light);
  color: var(--color-dark);
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  border-radius: 1rem;
}

.tarefa:hover .excluir,
.tarefa:focus .excluir {
  display: flex;
}
</style>