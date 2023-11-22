import { CategoryModel } from "@/data/model/category.mode";

export interface ICategoryRepository {
  getCategories(): Promise<CategoryModel[]>;
}
