<template>
  <div id="app">
    <h1>Diretivas (Desafio)</h1>
    <hr />
    <!-- Exercício -->
    <!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <div id="objeto" v-quando>Alô alô graças a Deus</div>
    <div id="objeto" v-quando:click="'2'">Alô alô graças a Deus</div>
  </div>
</template>

<script>
export default {
  directives: {
    quando: {
      bind(el, binding, vnode) {
        // ARGUMENTOS
        switch (binding.arg) {
          case "click":
            el.addEventListener("click", () => {
              console.log("Elemento clicado.");
            });
            break;
          default:
            console.log("Nenhum argumento passado para a diretiva.");
            break;
        }
        // VALORES
        switch (binding.value) {
          case "1":
          case "2":
            console.log(`Elemento ${binding.value} recebendo binding.`);
            break;
          default:
            console.log("Nenhum valor passado para a diretiva.");
            break;
        }
      }
    }
  },
  methods: {
    acao(acao) {
      console.log(`Ação executada: ${acao}`);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

button {
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}
</style>
