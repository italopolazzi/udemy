<template>
  <div id="user">
    <!-- <h2>Painel do usuário</h2> -->
    <div class="score">Pontuação: {{pontos}}</div>
    <transition name="flip" mode="out-in" appear>
      <div v-if="questao == null" class="carregando">Carregando...</div>
      <component
        v-else
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
        id="reiniciar"
      >Reiniciar</button>
    </transition>
    <div class="game-mode">
      <button
        tabindex="1"
        accesskey="a"
        @click="random = !random"
      >Modo atual: {{ random ? 'Aleatório' : 'Sequencial' }}</button>
      <button tabindex="1" accesskey="n" @click="outraQuestao">Outra</button>
    </div>
  </div>
</template>

<script>
import Question from "./Question";
import Result from "./Result";

import questoes_para_enviar from "@/util/questions";

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
      if (this.questao.answers[indice].correct) this.pontos++;
      this.component = Result;
    },
    gerarQuestao() {
      let indice;
      if (this.random) {
        /**
         * todo: retirar do array um número aleatório e marcar como jogado
         * sempre que trazer questões novas estas estarão com o bool = false
         * assim o jogador poderá jogar com ela
         */
        indice = parseInt(Math.random() * this.questoes.length);
      } else {
        this.indice++;
        indice = this.indice;
      }

      this.questao = this.pegarQuestaoERemover(indice);
    },
    pegarQuestaoERemover(indice) {
      const temp = this.questoes[indice];
      this.questoes.splice(indice, 1);
      return temp;
    },
    outraQuestao() {
      this.gerarQuestao();
    }
  },
  data() {
    return {
      component: Question,
      resposta_do_jogador: null,
      questao: null,
      indice: -1,
      random: false,
      questoes: [],
      pontos: 0
    };
  },
  created() {
    this.$http.get("questoes.json").then(res => {
      this.questoes = res.data;
      this.gerarQuestao();
    });
  }
};
</script>

<style>
#user {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
button#reiniciar {
  position: absolute;
  bottom: 0;
  margin-top: 1rem;
}
</style>
