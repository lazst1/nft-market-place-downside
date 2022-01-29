import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { contractAddress } from "../core/config";

export const market = {
    namespaced: true,
    state: {},
    actions: {
        async getAllNFTs({commit, state}, data) {
            MoralisService.getAllNFTs(20, 0).then(data => {
                console.log('data=====', data)
            })
        },
        async createOrder({ commit, rootState }, data) {
            // rootState.contract.methods.createOrder(_tokenAddress, _nftTokenId, 0.1, 5000, 36000, false, 360000).send();
            const web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            console.log(data)
            const NameContract = new web3.eth.Contract(abiJSON, contractAddress);
            NameContract.methods.createOrder(
                data.assetContractAddress,
                data.tokenId,
                25000000,
                '5000',
                '36000',
                false,
                '3600'
            ).send({ from: '0xB29265736dcc20867F6b3c0f5aa8E5A64942b816', gas: '42000' });
        },
    },
    getters: {
    },
    mutations: {
    }
}
