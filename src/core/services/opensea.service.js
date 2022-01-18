import http from "../utils/http-opensea";

class OpenseaService {
    retrieveAssets(walletAddress) {
        return http.get(`assets?order_direction=desc&offset=0&limit=20&owner=${walletAddress}`).then(res => {
            return res.data.assets;
        })
    }
}

export default new OpenseaService();