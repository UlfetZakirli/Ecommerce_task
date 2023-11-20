import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ERevalidateTags } from '../../data/enums/revalidate_tags.enum'
import product_repository from '../repositories/implementaiton/product_repository'

export const useProducts = (query: string = '') => {
    return useQuery({
        queryKey: [ERevalidateTags.PRODUCTS],
        queryFn: () => product_repository.getProducts(query)
    })
}

export const useProduct = (id: number) => {
    return useQuery({
        queryKey: [ERevalidateTags.PRODUCT],
        queryFn: () => product_repository.getProduct(id)
    })
}

export const useAddProduct = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (product: any) => product_repository.addProduct(product),
        onError: (_error, _variables, context) => {
            // queryClient.setQueryData([ERevalidateTags.PRODUCTS])
            console.log(_error);
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
            console.log(_error);
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
            console.log(_error);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}