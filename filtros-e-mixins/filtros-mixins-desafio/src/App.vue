<template>
  <div id="app">
    <h1>Filtros & Mixins (Desafio)</h1>
    <section class="exercicio">
      <h2>Exercício 1</h2>
      <p>Construir um filtro local que troca espaços por vírgula</p>

      <div class="resposta">
        <span>Frase original:</span>
        <p>{{frase}}</p>
        <span>Frase modificada:</span>
        <p>{{ frase | filtro_espacoViraVirgula }}</p>
      </div>
    </section>

    <section class="exercicio">
      <h2>Exercício 2</h2>
      <p>
        Filtro global que conta o tamanho de cada palavra e adiciona o valor na string final
        "Pedro é legal" => "Pedro (5) é (1) legal (5)"
      </p>
      <div class="resposta">
        <span>Frase original:</span>
        <p>{{frase}}</p>
        <span>Frase modificada:</span>
        <p>{{ frase | filtro_tamanhoDaPalavra }}</p>
      </div>
    </section>

    <section class="exercicio">
      <h2>Exercício 3</h2>
      <p>Implementar os exercicios 1 e 2 com propriedade computada</p>
      <div class="resposta">
        <span>Exercício 1 com frase computada:</span>
        <p>{{frase_computada_espacoViraVirgula_local}}</p>
        <span>Exercício 2 com frase computada:</span>
        <p>{{frase_computada_tamanhoDaPalavra_local}}</p>
      </div>
    </section>

    <section class="exercicio">
      <h2>Exercício 4</h2>
      <p>Compartilhe a propriedade computada via mixin</p>
      <div class="resposta">
        <span>Frase computada via mixin:</span>
        <p>{{frase_computada_espacoViraVirgula_global}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import mixinGlobal from "./mixinGlobal";

export default {
  mixins: [mixinGlobal],
  data() {
    return {
      frase: "Para certas coisas, temos que ser surdos, cegos e mudos."
    };
  },
  computed: {
    frase_computada_espacoViraVirgula_local() {
      return this.frase.replace(/ /g, ",");
    },
    frase_computada_tamanhoDaPalavra_local() {
      return this.frase
        .split(/ /)
        .map(palavra => `${palavra} (${palavra.length})`)
        .join(" ");
    }
  },
  filters: {
    filtro_espacoViraVirgula(string) {
      return string.replace(/ /g, ",");
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
  font-size: 1rem;
}
span {
  font-weight: bolder;
}
.exercicio {
  max-width: 50vw;
}
.exercicio,
.resposta {
  padding: 1rem;
  background: lightsteelblue;
  border: 0.1rem solid currentColor;
  margin: 1rem auto 0;
  border-radius: 0.25rem;
  position: relative;
}
.resposta::before {
  content: "Resposta: ";
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 0.5rem;
}
</style>
