import Browse from '@/views/browse/Browse.vue'
import Activity from '@/views/activity/Activity.vue'
import BuyOrder from '@/views/order/buy/BuyOrder.vue'
import CancelOrder from '@/views/order/cancel/CancelOrder.vue'
import Create from '@/views/asset/create/Create.vue'
import Profile from '@/views/profile/Profile.vue'
import ProfileSetting from '@/views/profile/ProfileSetting.vue'
import Asset from '@/views/asset/sell/Asset.vue'

export default [
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
    }
]
