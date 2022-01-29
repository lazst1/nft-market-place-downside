import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { contractAddress } from "../core/config";

const initialUser = {
    address: '',
    nftData: {
        page: 0,
        page_size: 0,
        result: []
    },
    token: '',
    userId: '',
    userType: 'USER'
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
            return state.user && state.user.address ? state.user.address : ''
        },
        getUser: state => {
            return state.user
        }
    },
    mutations: {
        async loginSuccess(state, user) {
            state.user = user;
            MoralisService.getMyNFTs(user.address, 20, 0).then(nftData => {
                if(nftData.result.length > 0) {
                    nftData.result.map((nft, index) => {
                        MoralisService.getTokenIdMetadata(nft.token_address, nft.token_id).then(data => {
                            nftData.result[index] = data;
                        })
                    });
                }
                state.user.nftData = nftData;
                console.log('--------state-------', JSON.parse(JSON.stringify(state)));
            })
            // const nfts = await Moralis.Web3API.account.getMyNFTs({chain: 'eth', address: '0xc68b91d2e26eb8bc457fc125e86cac1d8e8a9d5f', limit: 20, offset: 570});
            // console.log('--------nfts-------', nfts);
            // const data = await Moralis.Web3API.token.getTokenIdMetadata({chain: 'eth', address: '0x2953399124f0cbb46d2cbacd8a89cf0599974963', token_id: '47535130025658187595672106157508864801694351437970999618307420083085742440449'});
            // console.log('--------data-------', data);
            localStorage.setItem('isLoggedIn', true);
        },
        loginFailure(state) {
            state.user = null;
            localStorage.removeItem('isLoggedIn');
        },
    }
}
