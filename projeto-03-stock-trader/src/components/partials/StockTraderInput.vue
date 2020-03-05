<template>
  <div class="sell-input">
   <div class="funds">{{funds}}</div>
    <br />
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
      @click="config.methods.name"
    >{{button.text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    config: {
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
          ? { text: this.config.texts.invalid, disabled: true }
          : this.quantity > this.item.quantity
          ? { text: this.config.texts.unavaliable, disabled: true }
          : { text: this.config.texts.valid, disabled: false };
      return {
        ...config
      };
    },
    price() {
      return this.$store.getters.price_ref(this.item.key);
    }
  },
  created() {    
    this[this.config.methods.name] = () => {
      this.$store.dispatch(this.config.methods.dispatch, {
        item: this.item,
        quantity: this.quantity
      });
    };
  }
};
</script>

