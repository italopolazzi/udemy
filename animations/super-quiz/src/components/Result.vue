<template>
  <div id="resultado" :class="{correto,errado}">
    <h3>{{resultado.text}}</h3>

  </div>
</template>

<script>
export default {
  props: {
    questao: { type: Object, required: true },
    resposta_do_jogador: { type: Number, required: true }
  },
  computed: {
    resultado() {
      const resposta = this.questao.answers[this.resposta_do_jogador];
      if (resposta.correct) {
        this.correto = true;
        return { text: "Você acertou! :)" };
      } else {
        this.errado = true;
        return { text: "Você errou! :(" };
      }
    }
  },
  data() {
    return {
      correto: false,
      errado: false
    };
  }
};
</script>

<style>
.correto {
  background: greenyellow !important;
}
.errado {
  background: crimson !important;
}
</style>