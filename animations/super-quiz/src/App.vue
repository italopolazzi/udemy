<template>
  <div id="app">
    <h1>Super Quiz</h1>
    <transition name="flip" mode="out-in" appear>
      <component
        :is="component"
        :questao="questao"
        :resposta_do_jogador="resposta_do_jogador"
        @respondeu="respondeu($event)"
        class="componente"
      ></component>
    </transition>
    <transition name="slide" mode="out-in">
      <button
        tabindex="1"
        accesskey="r"
        v-if="resposta_do_jogador!=null"
        @click="reiniciar"
      >Reiniciar</button>
    </transition>
  </div>
</template>

<script>
import Question from "./components/Question";
import Result from "./components/Result";

import questoes from "./util/questions";

export default {
  components: { Question, Result },
  methods: {
    reiniciar() {
      this.resposta_do_jogador = null;
      this.gerarQuestao();
      this.component = Question;
    },
    respondeu(indice) {
      this.resposta_do_jogador = indice;
      this.component = Result;
    },
    gerarQuestao() {
      const indice = parseInt(Math.random() * questoes.length);
      this.questao = questoes[indice];
    }
  },
  data() {
    return {
      component: Question,
      resposta_do_jogador: null,
      questao: null
    };
  },
  created() {
    this.gerarQuestao();
  }
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1,
#app h3 {
  font-weight: 200;
}
#app h1 {
  font-size: 4rem;
}
#app h3 {
  font-size: 2rem;
}

button {
  border: none;
  margin-top: 1rem;
  font-size: 1.5em;
  cursor: pointer;
  position: absolute;
  bottom: 100px;
}

button,
.componente {
  background: white;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem -0.5rem rgba(0, 0, 0, 0.4);
}
.componente {
  min-width: 50vw;
  overflow: hidden;
}

@keyframes flip-out {
  from {
    transform: rotateX(0);
  }
  to {
    transform: rotateX(90deg);
  }
}
@keyframes flip-in {
  from {
    transform: rotateX(90deg);
  }
  to {
    transform: rotateX(0);
  }
}

.flip-enter-active {
  animation: flip-in 0.2s ease;
}
.flip-leave-active {
  animation: flip-out 0.2s ease;
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(10rem);
  }
}
@keyframes slide-in {
  from {
    transform: translateY(10rem);
  }
  to {
    transform: translateY(0);
  }
}
.slide-enter-active {
  animation: slide-in 0.4s ease;
}

.slide-leave-active {
  animation: slide-out 0.4s ease;
}
</style>
