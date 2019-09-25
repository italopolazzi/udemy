<template>
  <div class="v-text-column">
    <v-row>
      <v-btn @click="obk = !obk">Alternar</v-btn>
    </v-row>
    <div v-tc="1" v-tc:xsAndUp="1" v-tc:mdAndUp="3" v-if="obk">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "v-text-column",
  data() {
    return {
      obk: true,
      objectKey: true
    };
  },
  methods: {
    // handleResize() {
    //   this.objectKey = !this.objectKey;
    // },
    handleObjectUpdate(el, binding, vnode) {
      const { value, arg } = binding;
      const breakpoint = vnode.context.$vuetify.breakpoint;

      if (!arg || breakpoint[arg]) {
        if (value instanceof Object) {
          const { count, rule, gap, width } = value;
          el.style.columnCount = count;
          el.style.columnRule = rule;
          el.style.columnGap = gap;
          el.style.columnWidth = width;
        } else {
          el.style.columnCount = value;
        }
      }
    }
  },
  directives: {
    tc: {
      // inserted(el, binding, vnode) {
      //   if (binding.arg) {
      //     window.addEventListener("resize", vnode.context.handleResize);
      //   }
      // },
      bind(el, binding, vnode) {
        vnode.context.handleObjectUpdate(el, binding, vnode);
      },
      update(el, binding, vnode) {
        vnode.context.handleObjectUpdate(el, binding, vnode);
      },
      // unbind(el, binding, vnode) {
      //   window.removeEventListener("resize", vnode.context.handleResize);
      // }
    }
  }
};
</script>

<style>
</style>