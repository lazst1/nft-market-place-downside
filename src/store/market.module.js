import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import moralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import erc721ABI from '@/core/config/erc721';
import { defaultPagination, marketAddress, TokenType } from "../core/config";
import marketService from "../core/services/market.service";

export const market = {
    namespaced: true,
    state: {
    },
    actions: {
        // approve the NFT to our marketplace
        approve({ commit, rootState }, data) {
            const tokenContract = new rootState.web3.eth.Contract(
                erc721ABI,
                rootState.web3.utils.toChecksumAddress(data.contractAddress),
            );

            tokenContract.methods.approve(marketAddress, data.tokenId).send({
                from: rootState.user.walletAddress, gas: 210000
            });
        },
        // seller do cancel unsold order
        cancelOrderBySeller({ commit, rootState }, orderId) {
            rootState.marketContract.methods.cancelOrder(
                orderId
            ).send({ from: rootState.user.walletAddress, gas: 250000 });
        },
        // buyer do cancel an downside protection order
        cancelOrderByBuyer({ commit, rootState }, orderId) {
            rootState.marketContract.methods.claimDownsideProtectionAmount(
                orderId
            ).send({ from: rootState.user.walletAddress, gas: 250000 });
        },
    },
    getters: {
    },
    mutations: {
    }
}
