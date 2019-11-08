<template>
  <div class="drawer">
    <div class="drawer-activator">
      <button @click="toggleDrawer">{{ drawer_activator_button_icon }}</button>
    </div>
    <transition name="slide" mode="out-in" appear>
      <template v-if="drawer_is_open">
        <div class="drawer-content">
          <div class="drawer-title">
            <slot name="title" />
          </div>
          <div class="drawer-menu">
            <slot name="menu" />
          </div>
          <div class="drawer-actions">
            <slot name="actions" />
          </div>
        </div>
      </template>
    </transition>
  </div>
</template>

<script>
export default {
  name: "drawer",
  data() {
    return {
      drawer_is_open: false
    };
  },
  computed: {
    drawer_activator_button_icon() {
      return this.drawer_is_open ? "mdi-close" : "mdi-menu";
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer_is_open = !this.drawer_is_open;
    }
  }
};
</script>