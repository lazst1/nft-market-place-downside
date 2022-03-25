import Moralis from "moralis";
import { mainChain, marketAddress } from "../config";
import http from "../utils/http-moralis";

class MoralisService {
    getMyNFTs(address, limit, offset) {
        return http.get(`${address}/nft?chain=${mainChain}&format=decimal`);
    }
    getNft(token_address, token_id) {
        return http.get(`nft/${token_address}/${token_id}?chain=${mainChain}&format=decimal`);
    }
    getBalance(address) {
        return http.get(`${address}/balance?chain=${mainChain}`);
    }
    nftTransfers(token_address, token_id) {
        return http.get(`nft/${token_address}/${token_id}/transfers?chain=${mainChain}&format=decimal`);
    }
}

export default new MoralisService
