import Moralis from 'moralis'
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { marketAddress } from "@/core/config";
import marketService from "../core/services/market.service";
import authService from "../core/services/auth.service";
import erc721ABI from '@/core/config/erc721';
import moralisService from '../core/services/moralis.service';

export const auth = {
    namespaced: true,
    state: {
        isLoggedIn: false
    },
    actions: {
        async login({ commit, dispatch, rootState }, walletAddress) {
            if (walletAddress) {
                walletAddress = walletAddress.toLowerCase();
                rootState.marketContract = new rootState.web3.eth.Contract(
                    abiJSON,
                    rootState.web3.utils.toChecksumAddress(marketAddress),
                    {
                        from: walletAddress,
                    }
                );
                return authService.connectWallet(walletAddress).then(
                    user => {
                        rootState.user = user;
                        commit('loginSuccess', user);
                        dispatch('market/collectNftsFromWallet', { walletAddress }, { root: true });
                        dispatch('market/getSaleOrders', walletAddress, { root: true });
                        dispatch('market/orderLogs', null, { root: true });
                        dispatch('market/myActiveOrders', { walletAddress }, { root: true });
                        dispatch('market/myOrdersUnderDownsideProtection', walletAddress, { root: true });
                        dispatch('market/myFavoriteOrders', user.id, { root: true });

                        return user;
                    },
                    error => {
                        commit('loginFailure');
                        rootState.user = null;
                        return Promise.reject(error);
                    }
                )
            } else {
                rootState.user = null;
                commit('loginFailure');
            }
        },
        saveProfile({ commit, rootState }, data) {
            authService.saveProfile(rootState.user.id, data).then(res => {
                rootState.user = res;
            });
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
        async loginSuccess() {
            localStorage.setItem('isLoggedIn', true);
        },
        loginFailure() {
            localStorage.removeItem('isLoggedIn');
        },
    }
}
