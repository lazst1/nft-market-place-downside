import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_APP_MORALIS_REST_API,
  headers: {
    "Content-type": "application/json",
    "X-CMC_PRO_API_KEY": import.meta.env.VITE_COINMARKETCAP_API_KEY
  }
});
