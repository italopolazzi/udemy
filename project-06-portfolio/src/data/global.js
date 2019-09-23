import freeCodeCamp from './projects/freeCodeCamp'
import udemy from './projects/udemy'

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
                path: '/projects',
                name: 'projects',
                icon: 'developer-board',
                component: () =>
                    import ( /* webpackChunkName: "projects" */ '@/views/Projects.vue')
            },

            {
                path: '/contact',
                name: 'contact',
                icon: 'at',
                component: () =>
                    import ( /* webpackChunkName: "contact" */ '@/views/Contact')
            },
            {
                path: '/about',
                name: 'about',
                icon: 'information',
                component: () =>
                    import ( /* webpackChunkName: "about" */ '@/views/About.vue')
            }
        ]
    },
    projects: [...freeCodeCamp, ...udemy]
}