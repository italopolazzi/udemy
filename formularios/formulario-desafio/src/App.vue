<template>
  <div id="app">
    <h1>Formulário Desafio</h1>
    <div class="conteudo">
      <form v-if="!enviou" class="painel">
        <div class="cabecalho">Formulário</div>
        <!-- INPUT nome_completo -->
        <NomeCompleto v-model="usuario.nome_completo" />
        <!-- INPUT email -->
        <Rotulo nome="E-mail">
          <input type="email" name="email" v-model="usuario.email" />
        </Rotulo>
        <!-- INPUT senha -->
        <Rotulo nome="Senha">
          <input type="password" name="senha" v-model="usuario.senha" />
        </Rotulo>
        <!-- INPUT armazenar_dados -->
        <Rotulo nome="Armazenar dados?">
          <input type="checkbox" name="armazenar_dados" v-model="usuario.armazenar_dados" />
        </Rotulo>
        <!-- INPUT enviar -->
        <input type="submit" value="Enviar" @click.prevent="enviar" />

        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->
      </form>
      <div v-else class="painel">
        <div class="cabecalho">Resultado</div>
        <!-- INPUT nome_completo -->
        <Rotulo nome="Nome completo">
          <p>{{usuario.nome_completo}}</p>
        </Rotulo>
        <!-- INPUT email -->
        <Rotulo nome="E-mail">
          <p>{{usuario.email}}</p>
        </Rotulo>
        <!-- INPUT senha -->
        <Rotulo nome="Senha">
          <p>{{usuario.senha}}</p>
        </Rotulo>
        <!-- INPUT armazenar_dados -->
        <Rotulo nome="Armazenar dados?">
          <p>{{usuario.armazenar_dados}}</p>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import NomeCompleto from "./components/NomeCompleto.vue";
import Rotulo from "./components/Rotulo.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      usuario: {
        nome_completo: "",
        email: "",
        senha: "",
        armazenar_dados: false
      },
      enviou: false
    };
  },
  methods: {
    enviar() {
      this.enviou = true;
    }
  }
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.painel label {
  align-self: flex-start;
  margin-top: 1rem;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
