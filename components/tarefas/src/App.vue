<template>
  <div id="app">
    <h1>Tarefas</h1>

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

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to bottom, #e1eec3, #f05053);
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
