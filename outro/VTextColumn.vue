<template>
  <div class="v-text-column">
    <v-row>
      <v-btn @click="obk = !obk">Alternar</v-btn>
    </v-row>
    <div v-if="obk">
      <slot v-if="false" />
      <component :is="componentData"></component>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "v-text-column",
  data() {
    return {
      obk: true
    };
  },
  computed: {
    componentData() {
      return Vue.component("custom-text-column", {
        template: `<div v-tc="1" v-tc:xsAndUp="1" v-tc:mdAndUp="3">${this.$slots.default[0].data}</div>`
      });
    }
  },
  methods: {
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
      bind(el, binding, vnode) {
        vnode.context.handleObjectUpdate(el, binding, vnode);
      },
      update(el, binding, vnode) {
        vnode.context.handleObjectUpdate(el, binding, vnode);
      }
    }
  },
  beforeCreate() {
    const attrs = this.$attrs;
    console.log(this.$slots);
  }
};
</script>

<style>
</style>