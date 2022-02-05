import Moralis from "moralis";
import { moralisChain, tokenAddress, marketAddress } from "../config";

class MoralisService {
    async getAllNFTs(limit, offset) {
        return await Moralis.Web3API.account.getNFTs({chain: moralisChain, address: marketAddress, limit: limit, offset: offset});
    }
    async getMyNFTs(address, limit, offset) {
        // return await Moralis.Web3API.account.getNFTs({chain: 'eth', address: '0x90d28f301440cc137a187f138fa045e7f7ec1aae', limit: 20, offset: 0});
        return await Moralis.Web3API.account.getNFTs({chain: moralisChain, address: address, limit: limit, offset: offset});
    }
    async getTokenIdMetadata(token_address, token_id) {
        // return await Moralis.Web3API.token.getTokenIdMetadata({chain: 'eth', address: token_address, token_id: token_id});
        return await Moralis.Web3API.token.getTokenIdMetadata({chain: moralisChain, address: token_address, token_id: token_id});
    }
}

export default new MoralisService
