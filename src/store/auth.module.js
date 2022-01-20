import AuthService from "@/core/services/auth.service";
import OpenseaService from "@/core/services/opensea.service";
import abiJSON from '@/core/config/abi';
import { contractAddress } from "../core/config";

export const auth = {
    namespaced: true,
    state: {
        user: {},
    },
    actions: {
        login({ commit, rootState }, walletAddress) {
            if (walletAddress) {
                rootState.contract = new rootState.web3.eth.Contract(
                    abiJSON,
                    rootState.web3.utils.toChecksumAddress(contractAddress),
                    {
                        from: walletAddress,
                    }
                );

                return AuthService.connectWallet(walletAddress).then(
                    user => {
                        commit('loginSuccess', user);
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
        getWalletAddress: state => {
            return state.user && state.user.walletAddress ? state.user.walletAddress : ''
        },
        getUser: state => {
            return state.user ? state.user : {}
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.user = user;
            OpenseaService.retrieveAssetsByWallet(user.walletAddress).then(
                assets => {
                    state.user.assets = assets;
                    localStorage.setItem('user', JSON.stringify(state.user));
                },
                error => {
                    console.log('error=======', error);
                }
            )
        },
        loginFailure(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
    }
}
