import Vue from 'vue'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '*', redirect: '/' },
        {
            path: '/',
            name: 'home',
            component: () =>
                import ('@/views/Home')
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: () =>
                import ('@/views/StockTrader')
        },
        {
            path: '/stock',
            name: 'stock',
            component: () =>
                import ('@/views/StockTrader')
        },
    ]
})

export default router