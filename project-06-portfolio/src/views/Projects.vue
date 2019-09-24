<template>
  <div class="projects">
    <transition name="slide-y" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "projects"
};
</script>


