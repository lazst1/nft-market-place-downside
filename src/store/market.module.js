import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { marketAddress } from "../core/config";

export const market = {
    namespaced: true,
    state: {
    },
    actions: {
        async createOrder({ commit, rootState }, data) {
            console.log(data)
            rootState.marketContract.methods.createOrder(
                data.assetContractAddress,
                parseInt(data.tokenId),
                250000,
                5000,
                8640000,
                false,
                8640000
            ).send({ from: rootState.user.address, gas: 210000 });
        },
        async buyOrder({ commit, rootState }, data) {
            console.log(data)
            rootState.marketContract.methods.createOrder(
                data.assetContractAddress,
                data.tokenId,
                25000,
                5000,
                8640000,
                false,
                8640000
            ).send({ from: rootState.user.address, gas: 30000 });
        },
    },
    getters: {
    },
    mutations: {
    }
}
