import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import filtroGlobal from './filtroGlobal'

Vue.filter('filtro_tamanhoDaPalavra', filtroGlobal)

new Vue({
    render: h => h(App),
}).$mount('#app')