import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { ERevalidateTags } from '@/data/enums/revalidate_tags.enum'
import product_repository from "@/app/repositories/implementaiton/product_repository"
import { toast } from 'react-toastify'

export const useProducts = (query: string = '') => {
    return useQuery({
        queryKey: [ERevalidateTags.PRODUCTS, query],
        queryFn: () => {
            console.log('fetching');
            return product_repository.getProducts(query)
        },
        placeholderData: keepPreviousData,

    })
}

export const useProduct = (id: number) => {
    return useQuery({
        queryKey: [ERevalidateTags.PRODUCT],
        queryFn: () => product_repository.getProduct(id),
    })
}

export const useAddProduct = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (product: any) => product_repository.addProduct(product),
        onError: (_error, _variables, context) => {
            // queryClient.setQueryData([ERevalidateTags.PRODUCTS])
            toast.error("Unable to add product!")

        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}

export const useDeleteProduct = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => product_repository.deleteProduct(id),
        onError: (_error) => {
            toast.error("Unable to delete product!")
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}

export const useEditProduct = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (product: any) => product_repository.updateProduct(product),
        onError: (_error) => {
            toast.error('Unable to update product!')
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}