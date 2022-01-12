import http from "../utils/http-common";

class AuthService {
    connectWallet(walletAddress) {
        return http.post("user/connectWallet", { walletAddress }).then(res => {
            return res.data.result;
        })
    }
}

export default new AuthService();