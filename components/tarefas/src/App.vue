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
      tarefas: [
        { legenda: "Criar componentes", status: true },
        { legenda: "Inserção com enter", status: true },
        { legenda: "Progresso e mensagens", status: true },
        { legenda: "Estilização", status: true },
        { legenda: "Salvar itens off", status: false },
        { legenda: "Inverter ordem", status: false },
        { legenda: "Separar categorias", status: false },
        { legenda: "Adicionar datas", status: false },
        { legenda: "Acessibilidade", status: false },
        { legenda: "Enviar", status: false }
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