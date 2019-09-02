<template>
  <div id="questao">
    <h3>{{questao.text}}</h3>
    <div class="respostas">
      <div class="resposta-container" v-for="({text, correct}, i) in respostas" :key="i">
        <div
          class="resposta"
          tabindex="1"
          :accesskey="i+1"
          @click="responder(i)"
          @keydown.space.enter="responder(i)"
        >
          <div class="numero">{{i+1}}</div>
          <div class="texto">{{text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questao: { type: Object, required: true }
  },
  computed: {
    respostas() {
      return this.questao.answers;
    }
  },
  methods: {
    responder(indice) {
      this.$emit("respondeu", indice);
    }
  }
};
</script>

<style>
#questao {
  padding: 1rem;
}
.resposta-container,
.respostas {
  display: flex;
  flex-flow: row wrap;
}
.respostas {
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
}
.resposta-container {
  flex: 0 1 50%;
  padding: 0.5rem;
}
.resposta {
  background: #f09819;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
.resposta:hover,
.resposta:focus-within {
  background: #ff512f;
}
.numero {
  width: 2rem;
  height: 2rem;
  margin: 1rem;
  border: 0.2rem solid currentColor;
  border-radius: 50%;
}
</style>