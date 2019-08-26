<template>
  <div class="usuario-detalhe">
    <h2 v-if="!usuario">Usuário não selecionado!</h2>
    <div v-else>
      <h2>ID: {{ usuario.id }}</h2>
      <h2>Nome: {{ usuario.nome }}</h2>
      <h2>Idade: {{ usuario.idade }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    usuario: {
      type: Object,
    //   required: false,
      default: { id: 6, nome: "Anabelle", idade: 22 }
    }
  }
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
