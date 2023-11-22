import ProductCard from "@/ui/components/ProductCard";
import { useDeleteProduct, useProducts } from "@/app/api/productApi";
import Search from "@/ui/shared/Search";
import { useContext, useState } from "react";
import { ITEM_PER_PAGE } from "@/data/utils/constants";
import Pagination from "@/ui/components/Pagination";
import ProductContext from "@/app/context/products/ProductContext";
import { useDebounce } from "@/app/hooks/useDebounce";

const ProductList = () => {
    const [searchValue, setSearchValue] = useState<string>("");
    const { page, sorted } = useContext(ProductContext);
    const debouncedValue = useDebounce<string>(searchValue, 500)
    const {
        data: products,
        isLoading,
        isError,
        error,
    } = useProducts(
        `?q=${debouncedValue}&_page=${page}&_limit=${ITEM_PER_PAGE}&_sort=${sorted.sortBy}&_order=${sorted.order}`,
    );


    const deleteProduct = useDeleteProduct();

    if (isLoading) return "Loading products...";
    if (isError) return `Error: ${error}`;
  


    const deleteHandler = (id: number) => {
        deleteProduct.mutate(id);
    };

    return (
        <>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="flex gap-3 justify-center my-4 flex-wrap">
                {products?.map(({ id, description, price, category, isNew }) => (
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
                <Pagination />
            </div>
        </>
    );
};

export default ProductList;
