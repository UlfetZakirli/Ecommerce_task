import { useProduct } from 'src/app/api/productApi'
import Shoes from '../../../../data/assets/img/photo-1606107557195-0e29a4b5b4aa.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { ProductModel } from 'src/data/model/product.model'

const ProductDetailPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { data: product, isLoading, isError, error } = useProduct(Number(productId))

  if (isLoading) return 'Loading product'
  if (isError) return `Error: ${error}`

  const { description, isNew, price, category } = product
  return (
    <>
      <button onClick={() => navigate('/products')} className="btn btn-link">Back to Product List</button>
      <div className='my-3 flex justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={Shoes} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {category}!
              {isNew && <div className="badge badge-secondary">NEW</div>}
            </h2>
            <p>{description}</p>
            <p className="stat-value fo text-base">${price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success">Edit</button>
              <button className="btn bg-red-600 text-white">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage