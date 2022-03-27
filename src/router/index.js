import { createRouter, createWebHistory, } from 'vue-router'
import _private from './routes/private'
import _public from './routes/public'
import { publicPages } from '@/core/config'

const routes = [
    ..._private,
    ..._public
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

router.beforeEach((to, from, next) => {
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('isLoggedIn');
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router
