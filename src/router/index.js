import { createRouter, createWebHistory, } from 'vue-router'
import Landing from '@/views/landing/Landing.vue'
import Home from '@/views/home/Home.vue'
import Browse from '@/views/browse/Browse.vue'
import Activity from '@/views/Activity.vue'
import Detail from '@/views/detail/Detail.vue'
import Login from '@/views/Login.vue'
import Create from '@/views/Create.vue'
import Profile from '@/views/profile/Profile.vue'
import Asset from '@/views/asset/Asset.vue'

const routes = [
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
        path: '/detail/:orderId',
        name: 'detail',
        component: Detail
    },
    {
        meta: {
            title: 'Asset'
        },
        path: '/asset/:assetContractAddress/:tokenId',
        name: 'asset',
        component: Asset
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
        meta: {
            title: 'Create'
        },
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        meta: {
            title: 'Profile'
        },
        path: '/profile',
        name: 'profile',
        component: Profile
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { top: 0 }
    }
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/', '/login', '/register', '/home'];
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
