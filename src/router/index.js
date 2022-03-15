import { createRouter, createWebHistory, } from 'vue-router'
import Landing from '@/views/landing/Landing.vue'
import Home from '@/views/home/Home.vue'
import Login from '@/views/login/Login.vue'
import Browse from '@/views/browse/Browse.vue'
import Activity from '@/views/activity/Activity.vue'
import BuyOrder from '@/views/order/buy/BuyOrder.vue'
import CancelOrder from '@/views/order/cancel/CancelOrder.vue'
import Create from '@/views/asset/create/Create.vue'
import Profile from '@/views/profile/Profile.vue'
import ProfileSetting from '@/views/profile/ProfileSetting.vue'
import Asset from '@/views/asset/sell/Asset.vue'
import NotFound from '@/views/404/NotFound.vue'

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
            title: 'BuyOrder'
        },
        path: '/order/buy/:orderId',
        name: 'buyOrder',
        component: BuyOrder
    },
    {
        meta: {
            title: 'CancelOrder'
        },
        path: '/order/cancel/:orderId',
        name: 'cancelOrder',
        component: CancelOrder
    },
    {
        meta: {
            title: 'Asset'
        },
        path: '/asset/:tokenAddress/:tokenId',
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
        component: Profile,
        children: [
        ]
    },
    {
        meta: {
            title: 'ProfileSetting'
        },
        path: '/profile-setting',
        name: 'profile_setting',
        component: ProfileSetting
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
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
