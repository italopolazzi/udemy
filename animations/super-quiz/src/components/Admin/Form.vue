<template>
  <div id="form">
    <h2>Formulário de criar questões</h2>

    <div class="card">
      <div class="card-header"></div>
      <div class="card-content">
        <label class="form-input" for="text">
          <span>Text</span>
          <input type="text" name="text" v-model.trim.lazy="text" />
        </label>

        <label class="form-input" for="answer">
          <span>Answer</span>
          <input type="text" name="answer" v-model.trim.lazy="answer" />
        </label>
      </div>

      <div class="card-controls">
        <!-- <button id="clear">Limpar</button> -->
        <button id="send" @click="enviar">Enviar</button>
      </div>

      <div v-if="messages" class="card-messages">
        <ul>
          <li v-for="(message, i) in messages" :key="i">{{message}}</li>
        </ul>
      </div>
    </div>
    <hr />
    <br />
    {{text}}
    <br />
    {{answer}}
    <br />
    {{final}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "COmo?",
      answer: "a; b; c; d",
      final: null,
      messages: []
    };
  },
  methods: {
    embaralhar(array) {
      return array.sort((a, b) => Math.floor(Math.random() * 10));
    },
    enviar() {
      this.messages = [];
      const answers = this.answer.split(";");
      if (this.text == "") {
        this.messages.push("A pergunta não deve ficar vazia");
      } else if (answers.length != 4) {
        this.messages.push("Você deve criar 4 possiveis respostas");
      } else {
        // A primeira resposta será marcada como a verdadeira
        let isFirst = true;
        let temp = [];
        answers.forEach(answer => {
          temp.push({ text: answer, correct: isFirst });
          isFirst = false;
        });

        this.final = { text: this.text, answers: this.embaralhar(temp) };
      }
    }
  }
};
</script>

<style>
.form-input,
.card-content {
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
.form-input {
  width: 100%;
}
.form-input input {
  width: 100%;
}
.card-controls {
  margin-top: 1rem;
}
button#clear {
  margin-right: 1rem;
}
</style>