import axios from "axios";
import { openseaURL } from "../config";

export default axios.create({
  baseURL: openseaURL,
  headers: {
    "Accept": "application/json"
  }
});
