<template>
  <!-- <v-btn
    :class="btn.style"
    class="font-weight-bold title"
    depressed
    x-large
    block
    @click="btn.handler"
    v-press="btn"
  >{{btn.symbol}}</v-btn> -->
  <v-btn
    :class="btn.style"
    class="font-weight-bold title"
    depressed
    x-large
    block
    @click="btn.handler"
  >{{btn.symbol}}</v-btn>
</template>

<script>
export default {
  props: {
    btn: {
      type: Object,
      required: true
    }
  },
  // directives: {
  //   press: {
  //     bind: (el, binding) => {
  //       const { handler, symbol } = binding.value;
  //       addEventListener("keydown", e => {
  //         if (e.key === symbol) {
  //           handler();
  //         }
  //       });
  //     }
  //   }
  // }
};
</script>
