import http from "../utils/http-opensea";

class OpenseaService {
    retrieveAssetsByWallet(walletAddress) {
        return http.get(`assets?order_direction=desc&offset=0&limit=20&owner=${walletAddress}`).then(res => {
            return res.data.assets;
        })
    }
    
    retrieveAsset(assetContractAddress, tokenId) {
        return http.get(`asset/${assetContractAddress}/${tokenId}`).then(res => {
            return res.data;
        })
    }
}

export default new OpenseaService();