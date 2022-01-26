import http from "../utils/http-common";

class AuthService {
    connectWallet(walletAddress) {
        return http.post("users/connect-wallet", { address: walletAddress }).then(res => {
            return res.data;
        })
    }
}

export default new AuthService();
