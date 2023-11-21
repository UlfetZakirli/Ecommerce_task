import { useProducts } from "@/app/api/productApi"
import ProductContext from "@/app/context/products/ProductContext"
import { ITEM_PER_PAGE } from "@/data/utils/constants"
import { useContext } from "react"
import { useTranslation } from "react-i18next"

const Pagination = () => {
    const { t } = useTranslation()
    const { data: products, isLoading, isError, error } = useProducts('')
    const { page, setPage } = useContext(ProductContext)

    if (isLoading) return 'Loading...'
    if (isError) return `Error: ${error.message}`

    const pageCount = Math.ceil(products?.length / ITEM_PER_PAGE)
    const pages = Array.from(Array(pageCount).keys()).map(page => ++page)
    console.log(page);


    return (
        <div className="join">
            <button
                onClick={() => setPage((prevPage: number) => prevPage - 1)}
                className="join-item btn btn-outline"
                disabled={page === 1}
            >
                {t('prev_btn')}
            </button>
            {
                pages.map((p) => (
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`join-item btn btn-outline ${p === page && 'bg-gray-800 text-white'}`}
                    >
                        {p}
                    </button>
                ))
            }
            <button
                onClick={() => setPage((prevPage: number) => prevPage + 1)}
                className="join-item btn btn-outline"
                disabled={page === pageCount}
            >
                {t('next_btn')}
            </button>
        </div >
    )
}

export default Pagination