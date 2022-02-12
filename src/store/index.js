import { createStore } from 'vuex'
import { auth } from './auth.module'
import { market } from './market.module';
import { app } from './app.module';
import Web3 from "web3/dist/web3.min.js"

const initialUser = {
    address: '',
    nftData: {
        page: 0,
        page_size: 0,
        result: []
    },
    token: '',
    userId: '',
    userType: 'USER',
    allNfts: {}
}

const initialOrders = {
    orders: [],
    meta: {
        currentPage: 1,
        itemCount: 0,
        itemsPerPage: 10,
        totalItems: 0,
        totalPages: 0
    }
}

export default createStore({
    state: {
        web3: new Web3(Web3.givenProvider),
        marketContract: null,
        allNfts: {},
        user: initialUser,
        orders: initialOrders
    },
    mutations: {},
    actions: {},
    modules: {
        auth,
        market,
        app
    }
})
