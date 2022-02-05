import http from "../utils/http-common";

class MatketService {
    getOrders() {
        return http.get("orders").then(res => {
            return res.data;
        })
    }

    getOrder(id) {
        return http.get(`orders/${id}`).then(res => {
            return Promise.resolve(res.data);
        })
    }
}

export default new MatketService();
