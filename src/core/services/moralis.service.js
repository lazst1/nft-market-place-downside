import Moralis from "moralis";
import { moralisChain, marketAddress } from "../config";
import http from "../utils/http-moralis";

class MoralisService {
    getMyNFTs(address, limit, offset) {
        return http.get(`${address}/nft?chain=${moralisChain}&format=decimal`);
    }
    getNft(token_address, token_id) {
        return http.get(`nft/${token_address}/${token_id}?chain=${moralisChain}&format=decimal`);
    }
    getBalance(address) {
        return http.get(`${address}/balance?chain=${moralisChain}`);
    }
    nftTransfers(token_address, token_id) {
        return http.get(`nft/${token_address}/${token_id}/transfers?chain=${moralisChain}&format=decimal`);
    }
}

export default new MoralisService
