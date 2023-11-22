import { useQuery } from "@tanstack/react-query"
import category_repository from '@/app/repositories/implementaiton/category_repository';
import { ERevalidateTags } from "@/data/enums/revalidate_tags.enum";


export const useCategories = () => {
    return useQuery({
        queryKey: [ERevalidateTags.CATEGORIES],
        queryFn: () => category_repository.getCategories()
    })
}