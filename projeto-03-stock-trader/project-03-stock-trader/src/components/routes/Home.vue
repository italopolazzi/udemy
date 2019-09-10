<template>
  <div id="home">
    <div class="card">
      <div class="card-title"></div>
      <div class="card-media"></div>
      <div class="card-content"></div>
      <div class="card-controls">
        <div class="total-funds">
          Total funds:
          {{$store.state.funds | money }}
        </div>
      </div>
    </div>
    <span></span>
  </div>
</template>

<script>
</script>

<style>
</style>