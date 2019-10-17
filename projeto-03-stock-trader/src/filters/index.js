import Vue from 'vue'

Vue.filter('money', (v) => `$${v}`)