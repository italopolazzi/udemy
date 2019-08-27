<template>
  <div id="app">
    <NovaTarefa @novaTarefaAdicionada="adicionarNovaTarefa" />

    <h1 class="dark">Tarefas</h1>

    <BarraDeProgresso :tarefas="tarefas" />
    <ListaDeTarefas :tarefas="tarefas" />
  </div>
</template>

<script>
import BarraDeProgresso from "@/components/BarraDeProgresso.vue";
import NovaTarefa from "@/components/NovaTarefa.vue";
import ListaDeTarefas from "@/components/ListaDeTarefas.vue";

export default {
  components: {
    BarraDeProgresso,
    NovaTarefa,
    ListaDeTarefas
  },
  data() {
    return {
      tarefas: []
    };
  },
  methods: {
    adicionarNovaTarefa(valor) {
      this.tarefas.push({ legenda: valor, status: false });
    }
  },
  watch: {
    tarefas: {
      deep: true,
      handler() {
        const string = JSON.stringify(this.tarefas);
        localStorage.setItem("tarefas", string);
      }
    }
  },
  created() {
    this.tarefas = JSON.parse(localStorage.getItem("tarefas") || []);
  }
};
</script>

