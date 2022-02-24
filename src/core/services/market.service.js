import http from "../utils/http-common";
import { DEFAULT_USER_ID, TokenType } from '../config';
import axios from "axios";

class MatketService {
    getOrders(page = 1, limit = 10) {
        return http.get(`orders?page=${page}&limit=${limit}`).then(res => res.data);
    }

    getSaleOrders(userId = DEFAULT_USER_ID, page = 1, limit = 10) {
        return http.get(`orders/sale?page=${page}&limit=${limit}&userId=${userId}`).then(res => res.data);
    }

    getOrder(id) {
        return http.get(`orders/${id}`).then(res => res.data);
    }
    
    // ledger
    soldItems(page = 1, limit = 20) {
        return http.get(`orders/sold?page=${page}&limit=${limit}`).then(res => res.data);
    }

    canceledItems(page = 1, limit = 20) {
        return http.get(`orders/canceled?page=${page}&limit=${limit}`).then(res => res.data);
    }

    listedItems(page = 1, limit = 20) {
        return http.get(`orders/active?page=${page}&limit=${limit}`).then(res => res.data);
    }

    // vote
    vote(tokenAddress, tokenId, userId) {
        return http.post(`votes`, {tokenAddress, tokenId, userId}).then(res => res.data);
    }

    cancelVote(tokenAddress, tokenId, userId) {
        return http.delete(`votes?tokenAddress=${tokenAddress}&tokenId=${tokenId}&userId=${userId}`).then(res => res.data)
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
        return http.post('tokens-hashtags', {hashtagNames, tokenAddress, tokenId, tokenName}).then(res => res.data);
    }

    getHashtagNames() {
        return http.get('hashtags').then(res => res.data)
    }
}

export default new MatketService();
