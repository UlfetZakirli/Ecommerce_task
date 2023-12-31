import { useProduct } from '@/app/api/productApi'
import Shoes from '@/data/assets/img/photo-1606107557195-0e29a4b5b4aa.jpg'
import Bag from '@/data/assets/img/photo-1622560480654-d96214fdc887.avif'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProductDetailPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const { data: product, isLoading, isError, error } = useProduct(Number(id))

  if (isLoading) return 'Loading product'
  if (isError) return `Error: ${error}`

  const { description, isNew, price, category } = product
  return (
    <>
      <button onClick={() => navigate('/products')} className="btn btn-link">{t('back_to_list')}</button>
      <div className='my-3 flex justify-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className='h-56'><img src={isNew ? Shoes : Bag} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {category}!
              {isNew && <div className="badge badge-secondary">{t('new')}</div>}
            </h2>
            <p>{description}</p>
            <p className="stat-value fo text-base">${price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailPage