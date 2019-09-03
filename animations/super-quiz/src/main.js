import Vue from 'vue'
import App from './App.vue'

// STYLES
import './styles/main.css'

// PLUGINS
import './plugins/axios'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')