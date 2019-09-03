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

        <div class="form-input">
          <input type="text" name="answer-text" v-model="answers.texts[0]" />
          <input type="radio" name="answer-correct" value="0" v-model="answers.correct" />
        </div>
        <div class="form-input">
          <input type="text" name="answer-text" v-model="answers.texts[1]" />
          <input type="radio" name="answer-correct" value="1" v-model="answers.correct" />
        </div>
        <div class="form-input">
          <input type="text" name="answer-text" v-model="answers.texts[2]" />
          <input type="radio" name="answer-correct" value="2" v-model="answers.correct" />
        </div>
        <div class="form-input">
          <input type="text" name="answer-text" v-model="answers.texts[3]" />
          <input type="radio" name="answer-correct" value="3" v-model="answers.correct" />
        </div>
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
    {{$data}}
    <br />
  </div>
</template>

<script>
import errors from "@/util/errors";
export default {
  data() {
    return {
      text: "",
      answers: { correct: null, texts: [] },
      final: null,
      messages: []
    };
  },
  methods: {
    enviar() {
      this.messages = [];
      if (this.text == "") {
        this.messages.push(errors.questionTextEmpty);
      } else if (this.answers.correct == null) {
        this.messages.push(errors.notCorrectAnswerSelected);
      } else {
        if (this.validarRespostas()) {
          this.final = { text: this.text, answers: this.montarRespostas() };
          this.persistir();
        } else {
          this.messages.push(errors.fildsEmptyOrWithRepetition);
        }
      }
    },
    montarRespostas() {
      let answers = [];
      for (let i in this.answers.texts) {
        answers.push({
          text: this.answers.texts[i],
          correct: i == this.answers.correct
        });
      }
      return answers;
    },
    persistir() {
      this.$http
        .post("questoes.json", this.final)
        .then(res => {
          console.log(res);
          this.resetForm();
        })
        .catch(err => console.error(err));
    },
    validarRespostas(array = this.answers.texts) {
      if (array.length != 4) return false;
      let temp = array.filter((item, index) => array.indexOf(item) == index);
      return temp.length == array.length;
    },
    resetForm() {
      this.answers.texts = [];
      this.answers.correct = null;
      this.text = [];
      this.final = null;
      this.messages = [];
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