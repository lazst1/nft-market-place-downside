import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { marketAddress } from "@/core/config";
import marketService from "@/core/services/market.service";

export const auth = {
    namespaced: true,
    state: {
        isLoggedIn: false
    },
    actions: {
        login({ commit, rootState }, walletAddress) {
            if (walletAddress) {
                rootState.marketContract = new rootState.web3.eth.Contract(
                    abiJSON,
                    rootState.web3.utils.toChecksumAddress(marketAddress),
                    {
                        from: walletAddress,
                    }
                );
                marketService.getSaleOrders().then(orders => {
                    rootState.orders = orders;
                })
                return AuthService.connectWallet(walletAddress).then(
                    user => {
                        rootState.user = user;
                        commit('loginSuccess', user);
                        MoralisService.getMyNFTs(user.walletAddress, 40, 0).then(nftData => {
                            rootState.user.nftData = JSON.parse(JSON.stringify(nftData));
                        })
                        return Promise.resolve(user);
                    },
                    error => {
                        commit('loginFailure');
                        return Promise.reject(error);
                    }
                )
            } else {
                commit('loginFailure');
            }
        },
    },
    getters: {
        getWalletAddress: (state, getters, rootState) => {
            return rootState.user && rootState.user.walletAddress ? rootState.user.walletAddress : ''
        },
        getUserId: (state, getters, rootState) => {
            return rootState.user && rootState.user.id ? rootState.user.id : ''
        },
        getUser: (state, getters, rootState) => {
            return rootState.user
        }
    },
    mutations: {
        async loginSuccess(state, user) {
            localStorage.setItem('isLoggedIn', true);
        },
        loginFailure(state) {
            localStorage.removeItem('isLoggedIn');
        },
    }
}
