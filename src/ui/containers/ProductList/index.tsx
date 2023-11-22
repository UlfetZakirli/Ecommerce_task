import ProductCard from '@/ui/components/ProductCard'
import { useDeleteProduct, useProducts } from '@/app/api/productApi'
import Search from '@/ui/shared/Search'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { ITEM_PER_PAGE } from '@/data/utils/constants'
import Pagination from '@/ui/components/Pagination'
import ProductContext from '@/app/context/products/ProductContext'


const ProductList = () => {
    const { t } = useTranslation()
    const [searchValue, setSearchValue] = useState<string>("")
    const { page, sorted } = useContext(ProductContext)
    const { data: products, isLoading, isError, error, isFetching, } = useProducts(`?q=${searchValue}&_page=${page}&_limit=${ITEM_PER_PAGE}&_sort=${sorted.sortBy}&_order=${sorted.order}`)
    const deleteProduct = useDeleteProduct()

    if (isLoading) return 'Loading products...'
    if (isError) return `Error: ${error}`
    if (isFetching) {
        console.log('Fetching');
    }

    const deleteHandler = (id: number) => {
        deleteProduct.mutate(id)
        toast(t('delete_success'))
    }


    return (
        <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className='flex gap-3 justify-center my-4 flex-wrap'>
                {
                    products?.map(({ id, description, price, category, isNew }) => (
                        <ProductCard
                            key={id}
                            id={id}
                            description={description}
                            price={price}
                            category={category}
                            isNew={isNew}
                            deleteHandler={deleteHandler}
                        />
                    ))
                }
            </div>
            <div className="text-center my-10">
                <Pagination />
            </div>
        </>
    )
}

export default ProductList
