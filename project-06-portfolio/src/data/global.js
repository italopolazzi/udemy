export default {
    routes: {
        toolbar: [{
                path: '/',
                name: 'home',
                icon: 'home',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '@/views/Home.vue')
            },
            {
                path: '/about',
                name: 'about',
                icon: 'developer-board',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '@/views/About.vue')
            },
            {
                path: '/projects',
                name: 'projects',
                icon: 'at',
                component: () =>
                    import ( /* webpackChunkName: "projects" */ '@/views/Projects.vue')
            },
            {
                path: '/contact',
                name: 'contact',
                icon: 'information',
                component: () =>
                    import ( /* webpackChunkName: "contact" */ '@/views/Contact')
            }
        ]
    }
}