import AuthService from "@/core/services/auth.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';

export const auth = {
    namespaced: true,
    state: {
        user: {},
        web3: new Web3(Web3.givenProvider),
        abi: null
    },
    actions: {
        login({ commit }, walletAddress) {
            if (walletAddress) {
                commit('setAbi', walletAddress);
    
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
            console.log(state)
            return state.user && state.user.walletAddress ? state.user.walletAddress : ''
        }
    },
    mutations: {
        setAbi(state, walletAddress) {
            state.abi = new state.web3.eth.Contract(
                abiJSON,
                state.web3.utils.toChecksumAddress(state.contractAddress),
                {
                    from: walletAddress,
                }
            );
        },
        loginSuccess(state, user) {
            state.user = user;
        },
        loginFailure(state) {
            state.user = null;
        },
    }
}
