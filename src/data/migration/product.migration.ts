import { ProductModel } from "@/data/model/product.model";
import { ProductDTO } from "@/data/dto/product.dto";
import { migrator } from "@/app/utils/migrator";
import { productSchema } from "@/data/schemas/dtoValidations/productSchema";

export const productMigration = (dto: ProductDTO): ProductModel => {
  return migrator(dto, productSchema, (data) => ({
    id: data.id,
    description: data.description,
    price: data.price,
    isNew: data.isNew,
    category: data.category,
  }));
};
