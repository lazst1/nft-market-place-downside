import http from "../utils/http-common";

class MatketService {
    getOrders() {
        return http.get("orders").then(res =>  res.data);
    }

    getOrder(id) {
        return http.get(`orders/${id}`).then(res => res.data)
    }
}

export default new MatketService();
