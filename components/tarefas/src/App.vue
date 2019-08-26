<template>
	<div id="app">
		<h1>Tarefas</h1>

		<BarraDeProgresso />
		<NovaTarefa />
		<ListaDeTarefas />

	</div>
</template>

<script>
import BarraDeProgresso from '@/components/BarraDeProgresso.vue'
import NovaTarefa from '@/components/NovaTarefa.vue'
import ListaDeTarefas from '@/components/ListaDeTarefas.vue'

export default {
	components: {
		BarraDeProgresso,
NovaTarefa,
ListaDeTarefas
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
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
