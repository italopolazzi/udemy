<template>
  <div class="drawer">
    <div v-responsive.xs.sm.md>
      <div class="drawer-activator">
        <b-button @click="toggleDrawer" class="bg-success text-dark mb-5">
          <fa-icon icon="bars" />
        </b-button>
      </div>
      <transition name="slideLeft" mode="out-in" appear>
        <template v-if="drawer_is_open ">
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

    <div v-responsive.lg.xl>
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
    </div>
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
      return this.drawer_is_open ? "arrow-left" : "arrow-right";
    }
  },
  methods: {
    toggleDrawer() {
      this.drawer_is_open = !this.drawer_is_open;
    }
  }
};
</script>