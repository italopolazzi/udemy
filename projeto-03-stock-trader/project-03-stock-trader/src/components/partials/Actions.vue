<template>
  <div id="actions">
    <button id="button1" @click="endDay()">Finalizar dia</button>
    <button id="button2" @click="expand()">Expandir</button>
  </div>
</template>

<script>
export default {
  methods: {
    endDay() {
      alert("endDay");
    },
    expand() {
      alert("expand");
    }
  }
};
</script>