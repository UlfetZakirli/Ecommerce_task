import { ProductDSO } from "@/data/dso/product.dso";
import { ProductModel } from "@/data/model/product.model";

export interface IProductRepository {
  getProducts(query: string): Promise<ProductModel[]>;
  getProduct(id: number): Promise<ProductModel>;
  addProduct(product: ProductDSO): Promise<any>;
  deleteProduct(id: number): Promise<any>;
}
