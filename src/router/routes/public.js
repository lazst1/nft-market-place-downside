import Landing from '@/views/landing/Landing.vue'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import NotFound from '@/views/error/404/NotFound.vue'

export default [
    {
        meta: {
            title: 'Landing'
        },
        path: '/',
        name: 'landing',
        component: Landing
    },
    {
        meta: {
            title: 'Home'
        },
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        meta: {
            title: 'Login'
        },
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
]
