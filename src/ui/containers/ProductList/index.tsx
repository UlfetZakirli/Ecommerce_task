import ProductCard from "@/ui/components/ProductCard";
import { useDeleteProduct, useProducts } from "@/app/api/productApi";
import Search from "@/ui/shared/Search";
import { useContext, useMemo, useState } from "react";
import { ITEM_PER_PAGE } from "@/data/utils/constants";
import Pagination from "@/ui/components/Pagination";
import ProductContext from "@/app/context/products/ProductContext";
import { useDebounce } from "@/app/hooks/useDebounce";
import { ERquestState } from "@/data/enums/request_state.enum";
import Skeleton from "@/ui/shared/Skeleton";

const ProductList = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const { page, sorted } = useContext(ProductContext);
    const debouncedValue = useDebounce<string>(searchValue, 500)
    const {
        data: products,
        isLoading,
    } = useProducts(
        `?q=${debouncedValue}&_page=${page}&_limit=${ITEM_PER_PAGE}&_sort=${sorted.sortBy}&_order=${sorted.order}`,
    );
    const deleteProduct = useDeleteProduct();

    const deleteHandler = (id: number) => {
        deleteProduct.mutate(id);
    };

    const requestState = useMemo(() => {
        if (isLoading) return ERquestState.LOADING
        if (products?.length) return ERquestState.SUCCESS
        if (products?.length) return ERquestState.EMPTY
    }, [isLoading, products])

    return (
        <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="flex gap-3 justify-center my-4 flex-wrap">
                {
                    requestState === ERquestState.LOADING && Array.from(Array(3).keys()).map(i => (
                        <Skeleton key={i} />
                    ))
                }
                {
                    requestState === ERquestState.EMPTY && <div>No Products yet!</div>
                }
                {
                }
                {requestState === ERquestState.SUCCESS && products?.map(({ id, description, price, category, isNew }) => (
                    <ProductCard
                        key={id}
                        id={id}
                        description={description}
                        price={price}
                        category={category}
                        isNew={isNew}
                        deleteHandler={deleteHandler}
                    />
                ))}
            </div>
            <div className="text-center my-10">
                <Pagination debouncedValue={debouncedValue} />
            </div>
        </>
    );
};

export default ProductList;
