<template>
  <div id="app">
    <h1 class="dark">Tarefas</h1>

    <BarraDeProgresso :tarefas="tarefas" />
    <NovaTarefa @novaTarefaAdicionada="adicionarNovaTarefa" />
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
      tarefas: [
        { legenda: "Lavar o carro", status: true },
        { legenda: "Limpar a casa", status: false },
        { legenda: "Concluir o curso", status: false },
        { legenda: "Ir no centro", status: false }
      ]
    };
  },
  methods: {
    adicionarNovaTarefa(valor) {
      this.tarefas.push({ legenda: valor, status: false });
    }
	},
	watch:{
		tarefas(n, o){
			console.log(n, o);
			

		}
	}
};
</script>