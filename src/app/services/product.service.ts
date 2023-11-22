import { endpoints } from "@/data/utils/endpoints";
import { axiosProduct } from "@/app/lib/axios.config";

export const getProductsService = async (query: string) => {
  const res = await axiosProduct.get(endpoints.products(query));
  return res.data;
};

export const getProductService = async (id: number) => {
  const res = await axiosProduct.get(endpoints.product(id));
  return res.data;
};

export const addProductService = async (product: any) => {
  const res = await axiosProduct.post(endpoints.products(), product);
  return res.data;
};

export const deleteProductService = async (id: number) => {
  const res = await axiosProduct.delete(endpoints.product(id));
  return res.data;
};

export const updateProductService = async (product: any) => {
  const res = await axiosProduct.patch(
    endpoints.product(product.productId),
    product
  );
  return res.data;
};
