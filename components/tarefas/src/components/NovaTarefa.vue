<template>
  <div id="nova-tarefa">
    <input type="text" id="entrada" class="super-round" />
    <button id="adicionar" class="super-round">+</button>
  </div>
</template>

<script>
export default {};
</script>

<style>


#entrada,
#adicionar {
  height: var(--bar-size);
  border: none;
  margin-top: var(--default-margin);
  outline: none;
}
#entrada {
  padding: var(--default-padding-input);
  padding-right: var(--space-correction);
  background: var(--theme-opacity-color);
}
#adicionar {
  width: var(--bar-size);
  border-radius: var(--bar-size);
  margin-left: calc(var(--space-correction) * -1);
}
</style>