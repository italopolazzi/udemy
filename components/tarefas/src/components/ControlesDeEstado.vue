<template>
  <div id="controles-de-estado">
    <button v-for="(botao, index) in botoes" :key="index" @click="$emit('filtroDeEstadoSelecionado', index)">{{botao.nome}}</button>
  </div>
</template>

<script>
export default {
  props: {
    botoes: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
</style>