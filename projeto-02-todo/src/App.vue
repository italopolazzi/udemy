<template>
  <div id="app">
    <NovaTarefa @novaTarefaAdicionada="adicionarNovaTarefa" />

    <h1 class="dark">Tarefas</h1>

    <BarraDeProgresso :tarefas="tarefas" />
    <ControlesDeEstado :botoes="botoes" @filtroDeEstadoSelecionado="filtrarPorEstado" />
    <ListaDeTarefas
      :tarefas="tarefas_filtradas"
      @inverterStatus="inverterStatus"
      @deletarTarefa="deletarTarefa"
    />
  </div>
</template>

<script>
import BarraDeProgresso from "@/components/BarraDeProgresso.vue";
import ControlesDeEstado from "@/components/ControlesDeEstado.vue";
import NovaTarefa from "@/components/NovaTarefa.vue";
import ListaDeTarefas from "@/components/ListaDeTarefas.vue";

const uniq_id = () => `id-${new Date().getTime()}`;
const filtrarTarefas = (tarefas, filtro) => {
  return Object.keys(tarefas).reduce((acc, key) => {
    const item = tarefas[key];
    if (filtro(item)) acc[key] = item;
    return acc;
  }, {});
};

export default {
  components: {
    BarraDeProgresso,
    ControlesDeEstado,
    NovaTarefa,
    ListaDeTarefas
  },
  data() {
    return {
      control_key: 0,
      tarefas: {},
      tarefas_filtradas: {},
      filtro_selecionado: "todos",
      botoes: {
        todos: { nome: "Todos", icon: "home", filtro: item => item },
        concluidos: {
          nome: "Concluídos",
          icon: "done",
          filtro: item => item.status
        },
        nao_concluidos: {
          nome: "Não concluídos",
          icon: "block",
          filtro: item => !item.status
        }
      }
    };
  },
  methods: {
    adicionarNovaTarefa(valor) {
      this.$set(this.tarefas, uniq_id(), { legenda: valor, status: false });
      this.contabilizarAcao();
    },
    filtrarPorEstado(key) {
      this.filtro_selecionado = key;
    },
    contabilizarAcao() {
      this.control_key++;
    },
    inverterStatus(id) {
      this.tarefas[id].status = !this.tarefas[id].status;
      this.contabilizarAcao();
    },
    deletarTarefa(id) {
      this.$delete(this.tarefas, id);
      this.contabilizarAcao();
    }
  },
  watch: {
    filtro_selecionado(new_value, old_value) {
      this.tarefas_filtradas = filtrarTarefas(
        this.tarefas,
        this.botoes[new_value].filtro
      );
    },
    control_key: {
      deep: true,
      handler(val) {
        this.tarefas_filtradas = filtrarTarefas(
          this.tarefas,
          this.botoes[this.filtro_selecionado].filtro
        );
        const string = JSON.stringify(this.tarefas);
        localStorage.setItem("tarefas", string);
      }
    }
  },
  created() {
    this.tarefas = JSON.parse(localStorage.getItem("tarefas") || []);
    this.contabilizarAcao();
  }
};
</script>

