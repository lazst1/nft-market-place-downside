import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { marketAddress } from "@/core/config";
import authService from "@/core/services/auth.service";

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

                        return user;
                    },
                    error => {
                        commit('loginFailure');
                        rootState.user = null;
                        return error;
                    }
                )
            } else {
                rootState.user = {};
                commit('loginFailure');
                return false;
            }
        },
        saveProfile({ commit, rootState }, data) {
            authService.saveProfile(rootState.user.id, data).then(res => {
                rootState.user = res;
            });
        },
    },
    getters: {
        walletAdderss: (state, getters, rootState) => {
            return rootState.user && rootState.user.walletAddress ? rootState.user.walletAddress : ''
        },
        userId: (state, getters, rootState) => {
            return rootState.user && rootState.user.id ? rootState.user.id : ''
        },
        user: (state, getters, rootState) => {
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
