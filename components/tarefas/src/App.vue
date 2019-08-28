<template>
  <div id="app">
    <NovaTarefa @novaTarefaAdicionada="adicionarNovaTarefa" />

    <h1 class="dark">Tarefas</h1>

    <BarraDeProgresso :tarefas="tarefas" />
    <ControlesDeEstado :botoes="botoes" @filtroDeEstadoSelecionado="filtrarPorEstado" />
    <ListaDeTarefas :tarefas="tarefas_filtradas" />
  </div>
</template>

<script>
import BarraDeProgresso from "@/components/BarraDeProgresso.vue";
import ControlesDeEstado from "@/components/ControlesDeEstado.vue";
import NovaTarefa from "@/components/NovaTarefa.vue";
import ListaDeTarefas from "@/components/ListaDeTarefas.vue";

export default {
  components: {
    BarraDeProgresso,
    ControlesDeEstado,
    NovaTarefa,
    ListaDeTarefas
  },
  computed: {
    tarefas_filtradas() {
      const filtro = this.botoes[this.filtro_selecionado].filtro;
      return this.tarefas.filter(filtro);
    }
  },
  data() {
    return {
      tarefas: [],
      filtro_selecionado: 0,
      botoes: [
        { nome: "Todos", icon: "home", filtro: item => item },
        { nome: "Concluídos", icon: "done", filtro: item => item.status },
        { nome: "Não concluídos", icon: "block", filtro: item => !item.status }
      ]
    };
  },
  methods: {
    adicionarNovaTarefa(valor) {
      this.tarefas.push({ legenda: valor, status: false });
    },
    filtrarPorEstado(index) {
      this.filtro_selecionado = index;
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

