import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import erc721ABI from '@/core/config/erc721';
import { marketAddress } from "../core/config";
import marketService from "../core/services/market.service";

export const market = {
    namespaced: true,
    state: {
    },
    actions: {
        getSaleOrders({ commit, rootState }) {
            marketService.getSaleOrders().then(orders => {
                rootState.orders = orders;
            })
        },
        async approve({ commit, rootState }, data) {
            const tokenContract = new rootState.web3.eth.Contract(
                erc721ABI,
                rootState.web3.utils.toChecksumAddress(data.contractAddress),
            );

            tokenContract.methods.approve(marketAddress, data.tokenId).send({
                from: rootState.user.walletAddress, gas: 210000
            });
        },
        async createOrder({ commit, rootState }, data) {
            console.log(data)
            // rootState.marketContract.methods.createOrder(
            //     data.tokenAddress,
            //     data.tokenId,
            //     rootState.web3.utils.toWei(data.nftPrice, 'ether'),
            //     data.downsideRate,
            //     data.downsidePeriod,
            //     false,
            //     data.downsidePeriod
            // ).send({ from: rootState.user.walletAddress, gas: 250000 });
        },
        async buyFixedPayOrder({ commit, rootState }, data) {
            rootState.marketContract.methods.buyFixedPayOrder(
                data.orderId
            ).send({ from: rootState.user.walletAddress, gas: 623478, value: parseInt(data.tokenPrice), gasPrice: 0 });
        },
    },
    getters: {
    },
    mutations: {
    }
}
