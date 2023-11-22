import { endpoints } from "@/data/utils/endpoints";
import { axiosProduct } from "@/app/lib/axios.config";
import { ProductDTO } from "@/data/dto/product.dto";
import { productMigration } from "@/data/migration/product.migration";

export const getProductsService = async (query: string) => {
  const res = await axiosProduct.get<ProductDTO[]>(endpoints.products(query));
  return res.data.map(productMigration);
};

export const getProductService = async (id: number) => {
  const res = await axiosProduct.get<ProductDTO>(endpoints.product(id));
  return productMigration(res.data);
};

export const addProductService = async (product: ProductDTO) => {
  const res = await axiosProduct.post(endpoints.products(), product);
  return res.data;
};

export const deleteProductService = async (id: number) => {
  const res = await axiosProduct.delete(endpoints.product(id));
  return res.data;
};

export const updateProductService = async (product: ProductDTO) => {
  const res = await axiosProduct.patch(endpoints.product(product.id), product);
  return res.data;
};
