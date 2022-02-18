import http from "../utils/http-common";

class AuthService {
    connectWallet(walletAddress) {
        return http.post("users/connect-wallet", { walletAddress }).then(res => res.data);
    }

    saveProfile(id, data) {
        return http.patch(`users/${id}`, data).then(res => res.data);
    }
}

export default new AuthService();
