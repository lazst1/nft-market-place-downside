import { createStore } from 'vuex'
import { auth } from './auth.module'
import { market } from './market.module';
import { contractAddress } from "../core/config";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';

export default createStore({
    state: {
        web3: new Web3(Web3.givenProvider),
        contract: null,
    },
    mutations: {},
    actions: {},
    modules: {
        auth,
        market
    }
})