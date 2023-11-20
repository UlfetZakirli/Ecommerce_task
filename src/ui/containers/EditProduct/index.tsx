import ProductForm from '../ProductForm'
import { useEditProduct, useProduct } from '@/app/api/productApi'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const EditProduct = () => {
    const { t } = useTranslation()
    const { productId } = useParams()
    const { data: product, isLoading, error, isError, isFetching } = useProduct(Number(productId))
    const editProduct = useEditProduct()

    if (isFetching) return 'Fetching data...'
    if (isLoading) return 'Loading...'
    if (isError) return `Error: ${error.message}`

    const editHandler = (product: any) => {
        editProduct.mutate({ productId, ...product })
        toast.success(t('edit_success'))
    }

    return (
        <div>
            <h2 className="text-center font-semibold leading-7 mt-4 text-gray-900">Edit Product</h2>
            <ProductForm product={product} handleProduct={editHandler} />
        </div>
    )
}

export default EditProduct