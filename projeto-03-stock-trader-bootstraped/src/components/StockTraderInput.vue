<template>
  <div class="stock-trader-input">
    <b-card :title="item.key" :sub-title="price | money" class="ma-2">
      <b-card-text>
        <b-form-input v-model="quantity" type="number" />
      </b-card-text>
      <b-button
        size="lg"
        @click="buttonAction"
        :variant="button.variant"
        :disabled="button.disabled"
        v-text="button.label"
      />
    </b-card>
  </div>
</template>

<script>
export default {
  name: "stock-trader-input",
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
          ? {
              label: this.item.button.labels.invalid,
              disabled: true,
              variant: "danger"
            }
          : this.quantity > this.item.quantity
          ? {
              label: this.item.button.labels.unavaliable,
              disabled: true,
              variant: ""
            }
          : {
              label: this.item.button.labels.valid,
              disabled: false,
              variant: "success"
            };
      return config;
    },
    price() {
      return this.$store.getters.price_ref(this.item.key);
    }
  },
  created() {
    this.buttonAction = () => {
      this.$store.dispatch(this.item.method_name, {
        item: this.item,
        quantity: this.quantity
      });
    };
  }
};
</script>

