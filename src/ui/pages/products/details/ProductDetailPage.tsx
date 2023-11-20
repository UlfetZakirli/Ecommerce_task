import { useProduct } from '@/app/api/productApi'
import Shoes from '@/data/assets/img/photo-1606107557195-0e29a4b5b4aa.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProductDetailPage = () => {
  const { t } = useTranslation()
  const { productId } = useParams()
  const navigate = useNavigate()
  const { data: product, isLoading, isError, error } = useProduct(Number(productId))

  if (isLoading) return 'Loading product'
  if (isError) return `Error: ${error}`

  const { description, isNew, price, category } = product
  return (
    <>
      <button onClick={() => navigate('/products')} className="btn btn-link">{t('back_to_list')}</button>
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
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage