<template>
  <div class="drawer">
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