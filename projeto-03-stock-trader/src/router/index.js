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
                import ('@/components/components/routes/Home')
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: () =>
                import ('@/components/components/routes/StockTrader')
        },
        {
            path: '/stock',
            name: 'stock',
            component: () =>
                import ('@/components/components/routes/StockTrader')
        },
    ]
})

export default router