<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-container>
            <v-layout row v-for="(row, row_i) in keys" :key="row_i">
              <v-flex xs3 pa-1 v-for="(btn, btn_i) in row" :key="btn_i">
                <Button :btn="btn" />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from "./Button";
export default {
  components: { Button },
  data() {
    return {
      keys: [
        [
          {
            key: "open_parenthesis",
            symbol: "(",
            style: "grey lighten-1",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "(")
          },
          {
            key: "close_parenthesis",
            symbol: ")",
            style: "grey lighten-1",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", ")")
          },
          {
            key: "percentage_operator",
            symbol: "%",
            style: "grey lighten-1",
            handler: () => this.$store.commit("RESOLVE_EXPRESSION", "%")
          },
          {
            key: "all_clear",
            symbol: "AC",
            style: "error darken-2",
            handler: () => this.$store.commit("CLEAR_ALL")
          }
        ],
        [
          {
            key: "number_7",
            symbol: "7",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "7")
          },
          {
            key: "number_8",
            symbol: "8",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "8")
          },
          {
            key: "number_9",
            symbol: "9",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "9")
          },
          {
            key: "division_operator",
            symbol: "/",
            style: "grey lighten-1",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "/")
          }
        ],
        [
          {
            key: "number_4",
            symbol: "4",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "4")
          },
          {
            key: "number_5",
            symbol: "5",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "5")
          },
          {
            key: "number_6",
            symbol: "6",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "6")
          },
          {
            key: "multiple_operator",
            symbol: "*",
            style: "grey lighten-1",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "*")
          }
        ],
        [
          {
            key: "number_1",
            symbol: "1",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "1")
          },
          {
            key: "number_2",
            symbol: "2",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "2")
          },
          {
            key: "number_3",
            symbol: "3",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "3")
          },
          {
            key: "subtract_operator",
            symbol: "-",
            style: "grey lighten-1",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "-")
          }
        ],
        [
          {
            key: "number_0",
            symbol: "0",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "0")
          },
          {
            key: "dot_symbol",
            symbol: ".",
            style: "grey lighten-3",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", ".")
          },
          {
            key: "equal_symbol",
            symbol: "=",
            style: "primary darken-2",
            handler: () => {
              this.$store.commit("RESOLVE_EXPRESSION");
            }
          },
          {
            key: "addition_operator",
            symbol: "+",
            style: "grey lighten-1",
            handler: () => this.$store.commit("ADD_IN_EXPRESSION", "+")
          }
        ]
      ]
    };
  }
};
</script>
