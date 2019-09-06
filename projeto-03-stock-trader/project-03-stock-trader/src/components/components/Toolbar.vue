<template>
  <div class="toolbar">
    <slot name="title" />
    <slot name="menu" />
    <slot name="actions" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.toolbar
  display flex
  width 100%
  background rgba(0,0,0,.4)
  height 4rem
  align-items center
  justify-content space-around
  padding 0 1rem
  box-sizing border-box

</style>