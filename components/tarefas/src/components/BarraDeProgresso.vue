<template>
  <div id="barra-de-progresso" :style="widthProgresso">
    <span id="porcentagem">{{porcentagem}}%</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porcentagem: 30
    };
  },
  computed: {
    widthProgresso() {
      return {
        "--width-progresso": `${this.porcentagem}%`
      };
    }
  }
};
</script>

<style>

#barra-de-progresso {
  width: 100%;
  height: var(--bar-size);
  background: var(--opacity-light-color);
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