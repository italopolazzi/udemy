import Vue from 'vue'
import App from './App.vue'
// ROUTER
import router from './router'
// STORE
import store from './store'
// STYLES
import '@/styles/main.styl'
import vuetify from './plugins/vuetify';
// POLYFILL
import '@babel/polyfill'


Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')