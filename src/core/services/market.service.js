import http from "../utils/http-common";
import { defaultPagination, DEFAULT_USER_ID, TokenType } from '../config';
import axios from "axios";

class MatketService {
    getOrders(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders?page=${page}&limit=${limit}`).then(res => res.data);
    }

    getSaleOrders(walletAddress, page = defaultPagination.page, limit = 40) {
        return http.get(`orders/sale?page=${page}&limit=${limit}&walletAddress=${walletAddress}`).then(res => res.data);
    }

    getOrder(id) {
        return http.get(`orders/${id}`).then(res => res.data);
    }

    // ledger
    soldItems(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/sold?page=${page}&limit=${limit}`).then(res => res.data);
    }

    canceledItems(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/canceled?page=${page}&limit=${limit}`).then(res => res.data);
    }

    listedItems(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/active?page=${page}&limit=${limit}`).then(res => res.data);
    }

    // recent order logs
    getOrderLogs(page = defaultPagination.page, limit = defaultPagination.limit) {
        return http.get(`orders/log?page=${page}&limit=${limit}`).then(res => res.data);
    }

    // vote
    vote(tokenAddress, tokenId, userId) {
        return http.post(`tokens/vote`, { tokenAddress, tokenId, userId }).then(res => res.data);
    }

    cancelVote(tokenAddress, tokenId, userId) {
        return http.delete(`tokens/vote?tokenAddress=${tokenAddress}&tokenId=${tokenId}&userId=${userId}`).then(res => res.data)
    }

    getTokenInfo(tokenAddress, tokenId) {
        return http.get(`tokens/info?tokenAddress=${tokenAddress}&tokenId=${tokenId}`).then(res => res.data)
    }

    getUSDFromToken(token, amount) {
        if (token === TokenType.BNB) {
            return axios.get('https://api.binance.com/api/v3/avgPrice?symbol=BNBUSDT').then(res => res.data);
        } else {
            console.log('MarketService getUSDFromToken: Not implemented yet.')
            return amount;
        }
    }

    createHashTags(hashtagNames, tokenAddress, tokenId, tokenName) {
        return http.post('tokens-hashtags', { hashtagNames, tokenAddress, tokenId, tokenName }).then(res => res.data);
    }

    getHashtagNames() {
        return http.get('hashtags').then(res => res.data)
    }

    // fetch orders related to the connected user.
    getMyOrders(userId) {
        return http.get(`orders/mine?userId=${userId}`).then(res => res.data);
    }

    hideToken(tokenAddress, tokenId, userId) {
        return http.post(`tokens/hide`, { tokenAddress, tokenId, userId }).then(res => res.data);
    }

    unhideToken(tokenAddress, tokenId, userId) {
        return http.delete(`tokens/unhide?tokenAddress=${tokenAddress}&tokenId=${tokenId}&userId=${userId}`).then(res => res.data)
    }

}

export default new MatketService();
