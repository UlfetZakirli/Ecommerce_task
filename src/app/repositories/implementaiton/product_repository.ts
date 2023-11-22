import { ProductModel } from "@/data/model/product.model";
import {
  addProductService,
  deleteProductService,
  getProductService,
  getProductsService,
  updateProductService,
} from "@/app/services/product.service";
import { IProductRepository } from "@/app/repositories/abstraction/i_product_repository";
import { ProductDSO } from "@/data/dso/product.dso";

class ProductRepository implements IProductRepository {
  getProducts(query: string): Promise<ProductModel[]> {
    return getProductsService(query);
  }
  getProduct(id: number): Promise<ProductModel> {
    return getProductService(id);
  }
  addProduct(product: ProductDSO): Promise<unknown> {
    return addProductService(product);
  }
  deleteProduct(id: number): Promise<unknown> {
    return deleteProductService(id);
  }
  updateProduct(product: ProductDSO): Promise<unknown> {
    return updateProductService(product);
  }
}

export default new ProductRepository();
