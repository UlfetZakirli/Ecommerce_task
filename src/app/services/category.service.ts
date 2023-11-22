import { endpoints } from "@/data/utils/endpoints";
import { axiosCategory } from "@/app/lib/axios.config";

export const getCategoriesService = async () => {
  const res = await axiosCategory.get(endpoints.categories());
  return res.data;
};
