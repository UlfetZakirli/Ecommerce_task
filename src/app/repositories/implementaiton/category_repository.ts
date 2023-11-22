import { ICategoryRepository } from "@/app/repositories/abstraction/i_category_repository";
import { getCategoriesService } from "@/app/services/category.service";
import { CategoryModel } from "@/data/model/category.mode";

class CategoryRepository implements ICategoryRepository {
  getCategories(): Promise<CategoryModel[]> {
    return getCategoriesService();
  }
}

export default new CategoryRepository()