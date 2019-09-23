<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-card>
          <v-container>
            <v-layout row v-for="(row, row_i) in keys" :key="row_i">
              <v-flex xs3 pa-1 v-for="(col, col_i) in row" :key="col_i">
                <v-btn
                  :class="col.style"
                  class="font-weight-bold title"
                  depressed
                  x-large
                  block
                  @click="col.handler"
                >{{col.symbol}}</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      keys: [
        [
          {
            key: "open_parenthesis",
            symbol: "(",
            style: "grey lighten-1",
            handler: () => console.log("(")
          },
          {
            key: "close_parenthesis",
            symbol: ")",
            style: "grey lighten-1",
            handler: () => console.log(")")
          },
          {
            key: "percentage_operator",
            symbol: "%",
            style: "grey lighten-1",
            handler: () => console.log("%")
          },
          {
            key: "all_clear",
            symbol: "AC",
            style: "error darken-2",
            handler: () => console.log("AC")
          }
        ],
        [
          {
            key: "number_7",
            symbol: "7",
            style: "grey lighten-3",
            handler: () => console.log("7")
          },
          {
            key: "number_8",
            symbol: "8",
            style: "grey lighten-3",
            handler: () => console.log("8")
          },
          {
            key: "number_9",
            symbol: "9",
            style: "grey lighten-3",
            handler: () => console.log("9")
          },
          {
            key: "division_operator",
            symbol: "/",
            style: "grey lighten-1",
            handler: () => console.log("/")
          }
        ],
        [
          {
            key: "number_4",
            symbol: "4",
            style: "grey lighten-3",
            handler: () => console.log("4")
          },
          {
            key: "number_5",
            symbol: "5",
            style: "grey lighten-3",
            handler: () => console.log("5")
          },
          {
            key: "number_6",
            symbol: "6",
            style: "grey lighten-3",
            handler: () => console.log("6")
          },
          {
            key: "multiple_operator",
            symbol: "*",
            style: "grey lighten-1",
            handler: () => console.log("*")
          }
        ],
        [
          {
            key: "number_1",
            symbol: "1",
            style: "grey lighten-3",
            handler: () => console.log("1")
          },
          {
            key: "number_2",
            symbol: "2",
            style: "grey lighten-3",
            handler: () => console.log("2")
          },
          {
            key: "number_3",
            symbol: "3",
            style: "grey lighten-3",
            handler: () => console.log("3")
          },
          {
            key: "subtract_operator",
            symbol: "-",
            style: "grey lighten-1",
            handler: () => console.log("-")
          }
        ],
        [
          {
            key: "number_0",
            symbol: "0",
            style: "grey lighten-3",
            handler: () => console.log("0")
          },
          {
            key: "dot_symbol",
            symbol: ".",
            style: "grey lighten-3",
            handler: () => console.log(".")
          },
          {
            key: "equal_symbol",
            symbol: "=",
            style: "primary darken-2",
            handler: () => console.log("=")
          },
          {
            key: "addition_operator",
            symbol: "+",
            style: "grey lighten-1",
            handler: () => console.log("+")
          }
        ]
      ]
    };
  }
};
</script>
