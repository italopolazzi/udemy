<template>
  <b-card class="stock-trader-input" :border-variant="button.variant">
    <b-card-text class="h4">
      <div class="d-flex justify-content-between align-items-start">
        <div class="d-flex flex-column justify-content-center">
          <div class="lead text-muted">{{item.key}}</div>
          <div class="h1">{{item.name}}</div>
        </div>
        <div class="badge badge-pill badge-warning">{{price | money}}</div>
      </div>
    </b-card-text>

    <b-card-text>
      <label :for="item.key" class="lead">Quantity</label>
      <b-form-spinbutton :id="item.key" min="1" :max="item.quantity" v-model="quantity" />
    </b-card-text>

    <b-card-text>
      <div class="d-flex justify-content-between align-items-end">
        <div>
          <b-button
            @click="buttonAction"
            :variant="button.variant"
            :disabled="button.disabled"
            v-text="button.label"
            size="lg"
          />
        </div>
        <div class="d-flex h4 border-warning flex-row">
          <div class="badge badge-pill badge-light pr-4">Total</div>
          <div class="badge badge-pill badge-dark ml-n3">
            <div>{{total | money}}</div>
          </div>
        </div>
      </div>
    </b-card-text>
  </b-card>
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
    total() {
      return this.quantity * this.price;
    },
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

