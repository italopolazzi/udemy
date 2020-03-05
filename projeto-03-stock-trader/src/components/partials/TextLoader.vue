<template>
  <p slot="text">{{text_mod}}</p>
</template>

<script>
export default {
  props: {
    text: {
      default: "Loading",
      type: String
    }
  },
  data() {
    return {
      text_mod: "",
      times: 0
    };
  },
  created() {
    setInterval(() => {
      this.text_mod = this.text + ".".repeat(this.times);
      this.times++;
    }, 1000);
  },
  watch: {
    times() {
      if (this.times > 3) {
        this.times = 0;
      }
    }
  }
};
</script>

<style>
</style>