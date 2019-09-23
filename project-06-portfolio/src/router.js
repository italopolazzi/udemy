import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

import global from './data/global'

export default new Router({
    routes: [...global.routes.toolbar]
})