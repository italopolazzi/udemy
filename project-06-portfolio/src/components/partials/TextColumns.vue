<template>
  <div class="text-columns" :class="textColumns">
    <slot />
  </div>
</template>

<script>
export default {
  name: "text-columns",
  props: {
    config: {
      default: 2
    }
  },
  computed: {
    textColumns() {
      const class_name = count => `tc-${parseInt(count)}`;
      if (typeof this.config === "number") {
        const key = class_name(this.config);
        return { [key]: true };
      } else {
        const t = this;
        const reduced = Object.keys(this.config).reduce((acc, key) => {
          acc[class_name(this.config[key])] = t.$vuetify.breakpoint[key];
          return acc;
        }, {});
        return reduced;
      }
    }
  }
};
</script>

<style>
</style>