<template>
  <div id="user">
    <!-- <h2>Painel do usuário</h2> -->
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
      this.component = Result;
    },
    gerarQuestao() {
      const indice = parseInt(Math.random() * this.questoes.length);
      this.questao = this.questoes[indice];
    }
  },
  data() {
    return {
      component: Question,
      resposta_do_jogador: null,
      questao: null,
      questoes: []
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
