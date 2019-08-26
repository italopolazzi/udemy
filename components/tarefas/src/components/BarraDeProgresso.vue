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
:root {
  --opacity: 0.1;
}
#barra-de-progresso {
  width: 100%;
  height: 4rem;
  background: rgba(255, 255, 255, var(--opacity));
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