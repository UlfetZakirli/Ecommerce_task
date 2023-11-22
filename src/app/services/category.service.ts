import { endpoints } from "@/data/utils/endpoints";
import { axiosCategory } from "@/app/lib/axios.config";
import { CategoryDTO } from "@/data/dto/category.dto";
import { categoryMigration } from "@/data/migration/category.migration";

export const getCategoriesService = async () => {
  const res = await axiosCategory.get<CategoryDTO[]>(endpoints.categories());
  return res.data.map(categoryMigration);
};
