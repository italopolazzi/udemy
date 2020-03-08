<template>
  <div class="actions">
    <div class="h4">Actions</div>
    <b-row no-gutters>
      <b-col cols="4" v-for="(action, action_index) in actions" :key="action_index">
        <b-button squared class="w-100" variant="light" @click="action.method">
          <!-- <template #default=""> -->
          <div class="d-flex flex-column justify-content-center">
            <span>
              <fa-icon :icon="action.icon" />
            </span>
            <span>{{action.name}}</span>
          </div>
        </b-button>
      </b-col>
    </b-row>

    <div class="h4 mt-4">Income from shares</div>
    <b-row>
      <b-col>
        <b-table class="bg-dark text-light" :items="items" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "actions",
  computed: {
    ...mapGetters(["funds", "stock_funds"]),
    items() {
      const { funds, stock_funds } = this;
      return [{ funds, stock_funds }];
    }
  },
  data() {
    return {
      actions: [
        {
          name: "End day",
          icon: "hourglass-end",
          method: () => this.endDay()
        },
        {
          name: "Load all",
          icon: "cloud-download-alt",
          method: () => this.loadAll()
        },
        {
          name: "Save all",
          icon: "save",
          method: () => this.saveAll()
        }
      ]
    };
  },
  methods: {
    endDay() {
      this.$store.dispatch("endDay");
    },
    loadAll() {
      this.$store.dispatch("loadAll", this);
    },
    saveAll() {
      this.$store.dispatch("saveAll", this);
    }
  }
};
</script>