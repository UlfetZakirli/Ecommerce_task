import ProductCard from '../../components/ProductCard'
import { useDeleteProduct, useProducts } from '../../../app/api/productApi'
import Search from 'src/ui/shared/Search'
import { useState } from 'react'
import { toast } from 'react-toastify'

const ProductList = () => {
    const [searchValue, setSearchValue] = useState<string>("")
    const { data: products, isLoading, isError, error } = useProducts(searchValue)
    const deleteProduct = useDeleteProduct()

    if (isLoading) return 'Loading products...'
    if (isError) return `Error: ${error}`

    const deleteHandler = (id: number) => {
        deleteProduct.mutate(id)
        toast('🚀 Product deleted successfully!')
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
        </>
    )
}

export default ProductList
