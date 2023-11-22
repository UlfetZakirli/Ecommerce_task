import { useQuery, useMutation, useQueryClient, keepPreviousData } from '@tanstack/react-query'
import { ERevalidateTags } from '@/data/enums/revalidate_tags.enum'
import product_repository from "@/app/repositories/implementaiton/product_repository"
import { toast } from 'react-toastify'
import i18n from '../lib/i18next.config'
import { ProductModel } from '@/data/model/product.model'
import { ProductDSO } from '@/data/dso/product.dso'

export const useProducts = (query: string = '') => {
    return useQuery({
        queryKey: [ERevalidateTags.PRODUCTS, query],
        queryFn: () => {
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
        mutationFn: (product: ProductDSO) => product_repository.addProduct(product),
        onMutate: async (product: ProductDSO) => {
            await queryClient.cancelQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
            const prevProducts = queryClient.getQueryData([ERevalidateTags.PRODUCTS])
            queryClient.setQueryData([ERevalidateTags.PRODUCTS], (oldProducts: ProductModel[]) => {
                return oldProducts ? [{ ...product, id: 100 }, ...oldProducts] : [{ ...product, id: 100 }]
            })
            console.log({ prevProducts });
            return { prevProducts }
        },
        onError: (_error, _variables, context) => {
            console.log(_error);
            toast.error(i18n.t('add_error'))
            queryClient.setQueryData([ERevalidateTags.PRODUCTS], context?.prevProducts)
        },
        onSuccess: () => {
            toast.success(i18n.t('add_success'))
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}

export const useDeleteProduct = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (id: number) => product_repository.deleteProduct(id),
        onMutate: async (id: number) => {
            await queryClient.cancelQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
            const prevProducts = queryClient.getQueryData([ERevalidateTags.PRODUCTS])
            queryClient.setQueryData([ERevalidateTags.PRODUCTS], (oldProducts: ProductDSO[]) => {
                return oldProducts && oldProducts.filter(p => p.id !== id)
            })
            return { prevProducts }
        },
        onError: (_error, _varibales, context) => {
            queryClient.setQueryData([ERevalidateTags.PRODUCTS], context?.prevProducts)
            toast.error(i18n.t('delete_error'))
            console.log(_error);
        },
        onSuccess: () => {
            toast.success(i18n.t('delete_success'))
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}

export const useEditProduct = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (product: ProductDSO) => product_repository.updateProduct(product),
        onMutate: async (product: ProductDSO) => {
            await queryClient.cancelQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
            const prevProducts = queryClient.getQueryData([ERevalidateTags.PRODUCTS])
            queryClient.setQueryData([ERevalidateTags.PRODUCTS], (oldProducts: ProductDSO[]) => {
                return oldProducts && [{ id: 100, ...product }, ...oldProducts]
            })
            return { prevProducts }
        },
        onError: (_error, _variable, context) => {
            toast.error(i18n.t('edit_error'))
            queryClient.setQueryData([ERevalidateTags.PRODUCTS], context?.prevProducts)
            console.log(_error);
        },
        onSuccess: () => {
            toast.success(i18n.t('edit_success'))
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [ERevalidateTags.PRODUCTS] })
        }
    })
}