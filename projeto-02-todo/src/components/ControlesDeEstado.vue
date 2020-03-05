<template>
  <div id="controles-de-estado">
    <button
      v-for="({nome, icon}, key) in botoes"
      :key="key"
      :title="nome"
      @click="$emit('filtroDeEstadoSelecionado', key)"
    >
      <i class="material-icons">{{icon}}</i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    botoes: {
      type: Object,
      required: true
    }
  }
};
</script>


<style>
#controles-de-estado{
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
#controles-de-estado button {
  height: var(--bar-size);
  width: var(--bar-size);
  border-radius: 50%;
  border: none;
  margin: var(--default-margin);
  background: var(--theme-opacity-color);
  color: var(--color-dark);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>