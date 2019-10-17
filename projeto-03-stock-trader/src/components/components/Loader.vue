<template>
  <div class="loader">
    <div class="img-container">
      <slot name="image" />
    </div>
    <slot name="text" />
  </div>
</template>

<style scoped lang="stylus">
$flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  @extend $flex-center;
  height: 100vh;
  width: 100vw;
  position: relative;
  flex-flow: column nowrap;
}

.img-container {
  @extend $flex-center;
  height: auto;
  flex: 0 1 auto;
  position: relative;
}
</style>