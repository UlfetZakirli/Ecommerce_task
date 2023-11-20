import axios from "axios";
import { baseURL } from "@/data/utils/environments";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
