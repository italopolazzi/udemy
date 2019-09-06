import Vue from 'vue'
import App from './App.vue'

// -------------------------------
// STYLES
// -------------------------------
import './styles/main.styl'

// -------------------------------
// PLUGINS
// -------------------------------
// ROUTER
import router from '@/router/index'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')