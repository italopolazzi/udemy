<template>
  <div class="stock-trader-input">
    <b-card>
      <b-card-text>
        {{item}}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'stock-trader-input',
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

