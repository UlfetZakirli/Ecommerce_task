import axios from "axios";
import {
  baseURL_CATEGORIES,
  baseURL_PRODUCTS,
} from "@/data/utils/environments";

export const axiosProduct = axios.create({
  baseURL: baseURL_PRODUCTS,
});

export const axiosCategory = axios.create({
  baseURL: baseURL_CATEGORIES,
});

