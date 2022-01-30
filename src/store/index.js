import { createStore } from 'vuex'
import { auth } from './auth.module'
import { market } from './market.module';
import { app } from './app.module';
import Web3 from "web3/dist/web3.min.js"

export default createStore({
    state: {
        web3: new Web3(Web3.givenProvider),
        contract: null,
        allNfts: {}
    },
    mutations: {},
    actions: {},
    modules: {
        auth,
        market,
        app
    }
})