import http from "../utils/http-common";
import { cryptocompareApiKey, defaultPagination, TokenType } from '../config';
import axios from "axios";

class MatketService {
    getOrder(id) {
        return http.get(`orders/${id}`);
    }
    getSaleOrders(walletAddress) {
        return http.get(`orders/sale?walletAddress=${walletAddress}`);
    }

    // ledger
    soldItems(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/sold?page=${page}&limit=${limit}`);
    }

    canceledItems(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/canceled?page=${page}&limit=${limit}`);
    }

    listedItems(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/active?page=${page}&limit=${limit}`);
    }

    // recent order logs
    getOrderLogs(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/log?page=${page}&limit=${limit}`);
    }

    // vote
    vote(tokenAddress, tokenId, userId) {
        return http.post(`tokens/vote`, { tokenAddress, tokenId, userId });
    }

    cancelVote(tokenAddress, tokenId, userId) {
        return http.delete(`tokens/vote?tokenAddress=${tokenAddress}&tokenId=${tokenId}&userId=${userId}`)
    }

    getTokenInfo(tokenAddress, tokenId) {
        return http.get(`tokens/info?tokenAddress=${tokenAddress}&tokenId=${tokenId}`);
    }

    getUSDFromToken(token) {
        if (token === TokenType.BNB) {
            return axios.get(`https://min-api.cryptocompare.com/data/price?fsym=BNB&tsyms=USD&api_key=${cryptocompareApiKey}`);
        } else {
            console.log('MarketService getUSDFromToken: Not implemented yet.')
            return amount;
        }
    }

    createHashTags(hashtagNames, tokenAddress, tokenId, tokenName) {
        return http.post('tokens/hashtags', { hashtagNames, tokenAddress, tokenId, tokenName });
    }

    getHashtagNames() {
        return http.get('hashtags');
    }

    // fetch orders related to the connected user.
    getMyOrders(userId) {
        return http.get(`orders/mine?userId=${userId}`);
    }

    hideToken(tokenAddress, tokenId, userId) {
        return http.post(`tokens/hide`, { tokenAddress, tokenId, userId });
    }

    unhideToken(tokenAddress, tokenId, userId) {
        return http.delete(`tokens/unhide?tokenAddress=${tokenAddress}&tokenId=${tokenId}&userId=${userId}`);
    }

    getNFTsFromWallet(walletAddress) {
        return http.get(`tokens/wallet?address=${walletAddress}`);
    }

    getOpenseaAssetsFromCollection(data) {
        return http.get(`tokens/opensea/assets?slug=${data.collection}&cursor=${data.cursor}`);
    }

    getAsset(tokenAddress, tokenId) {
        return http.get(`tokens/opensea/asset?tokenAddress=${tokenAddress}&tokenId=${tokenId}`);
    }
}

export default new MatketService();
