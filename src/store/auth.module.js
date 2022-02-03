import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { marketAddress } from "../core/config";

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

export const auth = {
    namespaced: true,
    state: {
        user: initialUser,
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
                MoralisService.getAllNFTs(20, 0).then(nftData => {
                    rootState.allNfts = JSON.parse(JSON.stringify(nftData));
                })
                return AuthService.connectWallet(walletAddress).then(
                    user => {
                        rootState.user = user;
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
            return state.user && state.user.address ? state.user.address : ''
        },
        getUser: state => {
            return state.user
        }
    },
    mutations: {
        async loginSuccess(state, user) {
            state.user = user;
            MoralisService.getMyNFTs(user.address, 40, 0).then(nftData => {
                state.user.nftData = JSON.parse(JSON.stringify(nftData));
            })
            localStorage.setItem('isLoggedIn', true);
        },
        loginFailure(state) {
            state.user = null;
            localStorage.removeItem('isLoggedIn');
        },
    }
}
