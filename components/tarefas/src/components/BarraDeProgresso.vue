<template>
  <div class="barra-container">
    <div id="barra-de-progresso" :style="widthProgresso">
      <span id="porcentagem">{{porcentagem}}%</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tarefas"],
  computed: {
    porcentagem() {
      const total_de_concluidas = this.tarefas.filter(v => v.status).length;
      const total_de_tarefas = this.tarefas.length;
      const resultado = (total_de_concluidas / total_de_tarefas) * 100;
      return resultado.toFixed(2);
    },
    widthProgresso() {
      return {
        "--width-progresso": `${this.porcentagem}%`
      };
    }
  }
};
</script>

<style>
.barra-container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
#barra-de-progresso {
  width: 100%;
  height: var(--bar-size);
  background: var(--theme-opacity-color);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  position: relative;
}
#barra-de-progresso:before {
  content: "";
  z-index: 0;
  width: var(--width-progresso);
  height: 100%;
  position: absolute;
  align-self: flex-start;
  background: greenyellow;
}
#porcentagem {
  position: absolute;
  color: black;
}
</style>