<template>
  <div class="sell-input">
    <div class="header">
      <div class="title">{{item.key}}</div>
      <div class="price">
        <transition name="funds" mode="out-in" appear>
          <div class="chip round funds" :key="price">{{price}}</div>
        </transition>
      </div>
    </div>
    <div class="actions">
      <input
        class="sr-tl sr-bl raised"
        type="number"
        min="1"
        :max="item.quantity"
        v-model.number="quantity"
      />
      <button
        class="sr-tr sr-br raised"
        :class="{'error': button.disabled}"
        :disabled="button.disabled"
        @click="sell"
      >{{button.text}}</button>
    </div>
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