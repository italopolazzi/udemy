<template>
  <div class="sell-input">
    {{price | money}}
    <br />
    <input type="number" min="1" :max="item.quantity" v-model.number="quantity" />
    <button
      class="sr-tr sr-br"
      :class="{'invalid': button.disabled}"
      :disabled="button.disabled"
      @click="sell"
    >{{button.text}}</button>

    <!-- <p>quantity: {{quantity}}</p>
    <p>item: {{item}}</p>
    <p>button: {{button}}</p>-->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 1
    };
  },
  computed: {
    button() {
      const config =
        this.quantity < 1
          ? { text: "Inválido", disabled: true }
          : this.quantity > this.item.quantity
          ? { text: "Indisponível", disabled: true }
          : { text: "Vender", disabled: false };
      return {
        ...config
      };
    },
    price() {
      return this.$store.getters.price_ref(this.item.key);
    }
  },
  methods: {
    sell() {
      this.$store.dispatch("sellItem", {
        item: this.item,
        quantity: this.quantity
      });
    }
  }
};
</script>

<style scoped lang="stylus">
button, input {
  padding: 0.75rem 1.25rem;
  border: none;
  color: white;
  background: rgba(255, 255, 255, 0.4);
  font-size: 1rem;
  font-weight: bold;
}

.invalid {
  background: red;
}
</style>