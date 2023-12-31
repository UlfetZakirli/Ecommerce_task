import { ProductDSO } from '@/data/dso/product.dso'
import ProductForm from '../ProductForm'
import { useAddProduct } from '@/app/api/productApi'

const AddProduct = () => {
    const addProduct = useAddProduct()
    const handleAddProduct = (product: ProductDSO) => {
        addProduct.mutate(product)
    }
    return (
        <div>
            <h2 className="text-center font-semibold leading-7 mt-4 text-gray-900">Add Product</h2>
            <ProductForm handleProduct={handleAddProduct} product={{}} />
        </div>
    )
}

export default AddProduct