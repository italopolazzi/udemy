<template>
  <div id="app">
    <div class="usuario">
      <usuario-lista :usuarios="usuarios" @usuarioSelecionado="usuario = $event" />
      <usuario-detalhe :usuario="usuario" />
    </div>
    <div class="controles">
      <button type="reset" @click="usuario = null">Limpar</button>
    </div>
  </div>
</template>

<script>
import UsuarioLista from "./components/UsuarioLista.vue";
import UsuarioDetalhe from "./components/UsuarioDetalhe.vue";

export default {
  name: "app",
  components: { UsuarioLista, UsuarioDetalhe },
  data() {
    return {
      usuario: undefined,
      usuarios: [
        { id: 1, nome: "Ana", idade: 31 },
        { id: 2, nome: "Carlos", idade: 22 },
        { id: 3, nome: "Daniel", idade: 40 },
        { id: 4, nome: "Ema", idade: 17 },
        { id: 5, nome: "Lia", idade: 28 }
      ]
    };
  }
};
</script>

<style>
:root {
  --main-color: #2c3e50;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-color);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  font-size: 2rem;
}

#app div {
  margin: 20px;
}

.usuario {
  display: flex;
  flex-flow: row wrap;
}

.controles button {
  background: transparent;
	color: var(--main-color);
  border: 0.25rem solid currentColor;
}
</style>
