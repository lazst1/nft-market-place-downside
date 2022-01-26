import AuthService from "@/core/services/auth.service";
import Moralis from 'moralis'
import MoralisService from "../core/services/moralis.service";
import Web3 from "web3/dist/web3.min.js"
import abiJSON from '@/core/config/abi';
import { contractAddress } from "../core/config";

// code example of creating a sync event from cloud code
// let options = {
//     "chainId": "0x1",
//     "address": "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
//     "topic": "PairCreated(address, address, address, uint)",
//     "abi":   {
//       "anonymous": false,
//       "inputs": [
//         { "indexed": true, "internalType": "address", "name": "token0", "type": "address" },
//         { "indexed": true, "internalType": "address", "name": "token1", "type": "address" },
//         { "indexed": false, "internalType": "address", "name": "pair", "type": "address" },
//         { "indexed": false, "internalType": "uint256", "name": "", "type": "uint256" }
//       ],
//       "name": "PairCreated",
//       "type": "event"
//     },
//     "tableName": "UniPairCreated",
//     "sync_historical": false
// }

// Moralis.Cloud.run("watchContractEvent", options, {useMasterKey:true});

export const market = {
    namespaced: true,
    state: {},
    actions: {
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
