import { createStore } from 'vuex'
import { auth } from './auth.module'
import { market } from './market.module';
import { moralis } from './moralis.module';
import { app } from './app.module';
import Web3 from "web3/dist/web3.min.js"

const initialUser = {
    address: '',
    token: '',
    userId: '',
    userType: 'USER',
}

const initialCollectedNFTs = {
    page: 0,
    page_size: 0,
    status: "",
    total: 0,
    result: []
};

const initialOrders = {
    items: [],
    meta: {
        currentPage: 0,
        itemCount: 0,
        itemsPerPage: 20,
        totalItems: 0,
        totalPages: 0
    }
}

const defaultOrders = {
    data: [],
    loading: true
}

const initialMyOrders = {
    onSale: defaultOrders,
    downside: {
        all: defaultOrders,
        bought: defaultOrders,
        sold: defaultOrders
    },
    favorite: defaultOrders,
    hidden: defaultOrders,
}

export default createStore({
    state: {
        web3: new Web3(Web3.givenProvider),
        marketContract: null,
        user: initialUser,
        orders: initialOrders,
        orderLogs: [],
        bnbPrice: 0
    },
    mutations: {},
    actions: {},
    modules: {
        auth,
        market,
        app,
        moralis
    }
})
