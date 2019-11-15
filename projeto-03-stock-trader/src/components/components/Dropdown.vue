<template>
  <div class="dropdown">
    <button
      slot="activator"
      class="sr flat"
      @click="swicthActive"
      @keydown="swicthActive"
    >{{dropdown_message}}</button>
    <transition name="slide" mode="out-in" appear>
    <template v-if="is_active">
      <div class="dropdown-content">
        <!-- <slot name="activator"></slot> -->
        <button class @click="loadAll()">Carregar</button>
        <button class @click="saveAll()">Salvar</button>
      </div>
    </template>
    </transition>
  </div>
</template>

// class="sr flat"

<script>
export default {
  data() {
    return {
      comp: "",
      is_active: false
    };
  },
  computed: {
    dropdown_message() {
      return this.is_active ? "Fechar" : "Abrir";
    }
  },
  methods: {
    swicthActive() {
      this.is_active = !this.is_active;
    }
  }
};
</script>
