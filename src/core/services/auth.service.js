import http from "../utils/http-common";

class AuthService {
    connectWallet(walletAddress) {
        return http.post("user/connectWallet", { walletAddress }).then(res => {
            console.log(res)
        })
    }
}

export default new AuthService();