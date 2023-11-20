import ProductForm from '../ProductForm'
import { useAddProduct } from '@/app/api/productApi'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'

const AddProduct = () => {
    const { t } = useTranslation()
    const addProduct = useAddProduct()
    const handleAddProduct = (product: any) => {
        addProduct.mutate(product)
        toast.success(t('add_success'))
    }
    return (
        <div>
            <h2 className="text-center font-semibold leading-7 mt-4 text-gray-900">Add Product</h2>
            <ProductForm handleProduct={handleAddProduct} product={{}} />
        </div>
    )
}

export default AddProduct