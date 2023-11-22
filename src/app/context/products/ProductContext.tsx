import { createContext, useState } from 'react'
import { ContextPropsType, ProductContextType, SortedType } from './ProductContextType'

const ProductContext = createContext<ProductContextType | null>(null)

export const ProductProvider = ({ children }: ContextPropsType) => {
    const [page, setPage] = useState<number>(1)
    const [sorted, setSorted] = useState<SortedType>({
        sortBy: "",
        order: "",
    })

    const providerValue = {
        page,
        sorted,
        setSorted,
        setPage
    }

    return (
        <ProductContext.Provider value={providerValue}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext