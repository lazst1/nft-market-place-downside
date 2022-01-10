import { createRouter, createWebHistory,  } from 'vue-router'
import Home from '@/views/Home.vue'
import Browse from '@/views/Browse.vue'
import Activity from '@/views/Activity.vue'
import Detail from '@/views/Detail.vue'
import Login from '@/views/Login.vue'

const routes = [
    {
        meta: {
            title: 'Dashboard'
        },
        path: '/',
        name: 'home',
        component: Home
    },
    {
        meta: {
            title: 'Browse'
        },
        path: '/browse',
        name: 'browse',
        component: Browse
    },
    {
        meta: {
            title: 'Activity'
        },
        path: '/activity',
        name: 'activity',
        component: Activity
    },
    {
        meta: {
            title: 'Detail'
        },
        path: '/detail',
        name: 'detail',
        component: Detail
    },
    {
        meta: {
            title: 'Login'
        },
        path: '/login',
        name: 'login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      return savedPosition || { top: 0 }
    }
})

export default router
