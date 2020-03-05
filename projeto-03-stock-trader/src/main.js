import Vue from 'vue'
import App from './App.vue'

// -------------------------------
// STYLES
// -------------------------------
import './styles/reset.styl'
import './styles/main.styl'

// -------------------------------
// PLUGINS
// -------------------------------
// ROUTER
import router from '@/router/index'
// AXIOS
import '@/plugins/index'
// -------------------------------
// STORE
import store from '@/store/index'
// -------------------------------
// FILTERS
import '@/filters/index'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')