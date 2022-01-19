import axios from "axios";
import { baseURL } from "../config";

export default axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json"
  }
});
