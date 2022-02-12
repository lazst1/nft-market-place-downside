import http from "../utils/http-coinmarketcap";

class CoinMatketCapService {
    exchangeToUSD() {
        console.log('=========')
        http.get('https://api.coinmarketcap.com/v2/ticker/1027/?convert=USD').then(res => {
            console.log(res)
        })
    }
}

export default new CoinMatketCapService();
