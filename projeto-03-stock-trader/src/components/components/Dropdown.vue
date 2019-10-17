<template>
  <div class="dropdown">
    <div class="activator" @click="swicthActive" @keydown="swicthActive">
      <slot name="activator"></slot>
    </div>
    <Transition name="fade" mode="out-in">
      <div class="content" v-if="isActive">
        <slot></slot>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    swicthActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style>
.dropdown {
  position: relative;
}
.content {
  position: absolute;
  top: 0;
}
</style>