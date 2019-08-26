<template>
  <div id="app">
    <span>
      <button
        v-for="(item, key) in items"
        :key="key"
        :class="low(key)"
        @click="componente = key"
      >Carregar Componente {{key}}</button>
    </span>

    <component :is="componente">
      <span slot="conteudo">{{items[componente].conteudo}}</span>
      <span slot="nome">{{componente}}</span>
    </component>
  </div>
</template>

<script>
import Vermelho from "./components/Vermelho.vue";
import Verde from "./components/Verde.vue";
import Azul from "./components/Azul.vue";

export default {
  name: "app",
  components: { Vermelho, Verde, Azul },
  methods: {
    low: v => v.toLowerCase()
  },
  data() {
    return {
      componente: "Vermelho",
      items: {
        Vermelho: { conteudo: "Conteúdo do componente" },
        Verde: { conteudo: "Conteúdo do componente" },
        Azul: { conteudo: "Conteúdo do componente" }
      }
    };
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
}

button {
  padding: 10px;
  color: #fff;
  font-size: 1.3rem;
}

.caixa {
  color: #fff;
  font-size: 1.8rem;
  padding: 25px;
  margin: 10px 0px;
}

.vermelho {
  border: 2px solid red;
  background-color: #f54235;
}

.verde {
  border: 2px solid green;
  background-color: #49b057;
}

.azul {
  border: 2px solid blue;
  background-color: #2594f0;
}
</style>
