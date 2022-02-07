import Moralis from "moralis";
import { moralisChain, tokenAddress, marketAddress } from "../config";
import http from "../utils/http-moralis";

class MoralisService {
    getAllNFTs(limit, offset) {
        return Moralis.Web3API.account.getNFTs({chain: moralisChain, address: marketAddress, limit: limit, offset: offset});
    }
    getMyNFTs(address, limit, offset) {
        // return Moralis.Web3API.account.getNFTs({chain: 'eth', address: '0x90d28f301440cc137a187f138fa045e7f7ec1aae', limit: 20, offset: 0});
        return Moralis.Web3API.account.getNFTs({chain: moralisChain, address: address, limit: limit, offset: offset});
    }
    getTokenIdMetadata(token_address, token_id) {
        // return Moralis.Web3API.token.getTokenIdMetadata({chain: 'eth', address: token_address, token_id: token_id});
        return Moralis.Web3API.token.getTokenIdMetadata({chain: moralisChain, address: token_address, token_id: token_id});
    }
    getNft(token_address, token_id) {
        return http.get(`nft/${token_address}/${token_id}?chain=${moralisChain}&format=decimal`).then(res => res.data);
    }
}

export default new MoralisService
