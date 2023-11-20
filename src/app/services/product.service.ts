import { endpoints } from "../../data/utils/endpoints";
import axiosInstance from "../lib/axios.config";

export const getProductsService = async (query: string) => {
  const res = await axiosInstance.get(endpoints.products(query));
  return res.data;
};

export const getProductService = async (id: number) => {
  const res = await axiosInstance.get(endpoints.product(id));
  return res.data;
};

export const addProductService = async (product: any) => {
  const res = await axiosInstance.post(endpoints.products(), product);
  return res.data;
};

export const deleteProductService = async (id: number) => {
  const res = await axiosInstance.delete(endpoints.product(id));
  return res.data;
};

export const updateProductService = async (product: any) => {
  console.log("service", product);
  const res = await axiosInstance.patch(
    endpoints.product(product.productId),
    product
  );
  return res.data;
};
