import { queryBuilder } from "../utils";
import http from "../utils/http-opensea";

class OpenseaService {
    retrieveAssets(data) {
        return http.get(`/assets?${queryBuilder(data)}`);
    }
    retrieveCollections(data) {
        return http.get(`/collections?${queryBuilder(data)}`)
    }
}

export default new OpenseaService
