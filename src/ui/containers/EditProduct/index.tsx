import ProductForm from '../ProductForm'
import { useEditProduct, useProduct } from '@/app/api/productApi'
import { ProductDSO } from '@/data/dso/product.dso'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
    const { id } = useParams()
    const { data: product, isLoading, error, isError, isFetching } = useProduct(Number(id))
    const editProduct = useEditProduct()

    if (isFetching) return 'Fetching data...'
    if (isLoading) return 'Loading...'
    if (isError) return `Error: ${error.message}`

    const editHandler = (product: ProductDSO) => {
        editProduct.mutate({ id, ...product })
    }

    return (
        <div>
            <h2 className="text-center font-semibold leading-7 mt-4 text-gray-900">Edit Product</h2>
            <ProductForm product={product} handleProduct={editHandler} />
        </div>
    )
}

export default EditProduct