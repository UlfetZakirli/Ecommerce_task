import { useTranslation } from 'react-i18next'
import Shoes from '@/data/assets/img/photo-1606107557195-0e29a4b5b4aa.jpg'
import Bag from '@/data/assets/img/photo-1622560480654-d96214fdc887.avif'
import { type ProductCardType } from './ProductTypeCard'
import DoubleChevronSVG from '@svg/double_chevron_right.svg?react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({ id, description, price, category, isNew, deleteHandler }: ProductCardType) => {
    const navigate = useNavigate()
    const { t } = useTranslation()

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className='h-56'><img src={isNew ? Shoes : Bag} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {category}!
                        {isNew && <div className="badge badge-secondary">NEW</div>}
                    </h2>
                    <p>{`${description.slice(0, 70)}`}</p>
                    <p className="stat-value fo text-base">${price}</p>
                    <div className="card-actions justify-end relative">
                        <DoubleChevronSVG className='absolute left-0 right-0 top-2 cursor-pointer' onClick={() => navigate(`/products/${id}`)} />
                        <button onClick={() => navigate(`/editProduct/${id}`)} className="btn btn-success">{t('edit_action')}</button>
                        <button onClick={() => deleteHandler(id)} className="btn text-white bg-red-700 hover:bg-red-800">{t('delete_action')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard