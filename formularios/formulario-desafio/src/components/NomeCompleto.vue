<template>
  <div id="nome-completo">
    <Rotulo nome="nome">
      <input type="text" name="nome" v-model="nome" />
    </Rotulo>
    <Rotulo nome="sobrenome">
      <input type="text" name="sobrenome" v-model="sobrenome" />
    </Rotulo>
  </div>
</template>

<script>
import Rotulo from "./Rotulo";

export default {
  components: { Rotulo },
  data() {
    return {
      nome: "",
      sobrenome: ""
    };
  },
  computed: {
    nome_completo() {
      return `${this.nome} ${this.sobrenome}`;
    }
  },
  watch: {
    nome_completo() {
      this.$emit("input", this.nome_completo);
    }
  }
};
</script>