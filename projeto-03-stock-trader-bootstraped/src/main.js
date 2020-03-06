import Vue from 'vue'
import App from './App.vue'

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
// GLOBAL COMPONENTS 
import '@/components/global/index'

Vue.config.productionTip = false


new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')