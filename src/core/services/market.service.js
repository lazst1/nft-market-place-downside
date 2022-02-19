import http from "../utils/http-common";
import { TokenType } from '../config';
import axios from "axios";

class MatketService {
    getOrders(page = 1, limit = 10) {
        return http.get(`orders?page=${page}&limit=${limit}`).then(res => res.data);
    }

    getSaleOrders(userId = '', page = 1, limit = 10) {
        return http.get(`orders/sale?page=${page}&limit=${limit}&userId=${userId}`).then(res => res.data);
    }

    getOrder(id) {
        return http.get(`orders/${id}`).then(res => res.data);
    }

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
}

export default new MatketService();
