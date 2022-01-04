import { createRouter, createWebHistory,  } from 'vue-router'
import Home from '@/views/Home.vue'
import Activity from '@/views/Activity.vue'
import Detail from '@/views/Detail.vue'

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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
      return savedPosition || { top: 0 }
    }
})

export default router
