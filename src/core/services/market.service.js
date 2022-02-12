import http from "../utils/http-common";

class MatketService {
    getOrders(page = 1, limit = 10) {
        return http.get(`orders?page=${page}&limit=${limit}`).then(res => res.data);
    }

    getSaleOrders(page = 1, limit = 10) {
        return http.get(`orders/sale?page=${page}&limit=${limit}`).then(res => res.data);
    }

    getOrder(id) {
        return http.get(`orders/${id}`).then(res => res.data)
    }
}

export default new MatketService();
