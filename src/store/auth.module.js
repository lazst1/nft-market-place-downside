import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
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
        async login({ commit, rootState }, walletAddress) {
            if (walletAddress) {
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
                        // collect nfts from user wallet
                        MoralisService.getMyNFTs(user.walletAddress, 20, 0).then(async nftData => {
                            const collectedNFTs = await JSON.parse(JSON.stringify(nftData));
                            const nfts = collectedNFTs.result.map(async nft => {
                                const tokenContract = new rootState.web3.eth.Contract(
                                    erc721ABI,
                                    rootState.web3.utils.toChecksumAddress(nft.token_address),
                                );

                                const approvedAddress = await tokenContract.methods.getApproved(nft.token_id).call({
                                    from: walletAddress, gas: 210000
                                }).then(res => res);

                                nft.approved = approvedAddress === marketAddress ? true : false;

                                return nft;
                            });
                            collectedNFTs.result = await Promise.all(nfts).then(res => res);

                            rootState.collectedNFTs = collectedNFTs;
                        });
                        // fetch active orders on sale in the martketplace. 
                        marketService.getSaleOrders(user.id).then(orders => {
                            rootState.orders = orders;
                        });
                        // fetch order logs ( notification on top bar )
                        marketService.getOrderLogs().then(res => {
                            rootState.orderLogs = res.items;
                        });
                        // fetch orders that are created by the user.
                        marketService.getMyActiveOrders(walletAddress, 1, 10).then(async orders => {
                            rootState.myActiveOrders = orders;
                            const ordersWithNfts = orders.items.map(async order => {
                                const nft = await moralisService.getNft(order.tokenAddress, order.tokenId).then(res => res);
                                order.nft = nft;
                                return order;
                            });
                            
                            await Promise.all(ordersWithNfts).then(res => res);
                            rootState.myActiveNFTs = orders;
                        })
                        // fetch orders that been sold but under downside protection.
                        marketService.getMyOrdersUnderDownsideProtection(walletAddress, 1, 10).then(async orders => {
                            rootState.myActiveOrders = orders;
                            const nfts = orders.items.map(order => {
                                return moralisService.getNft(order.tokenAddress, order.tokenId).then(res => res);
                            });
                            
                            rootState.myActiveNFTs = await Promise.all(nfts).then(res => res);
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
