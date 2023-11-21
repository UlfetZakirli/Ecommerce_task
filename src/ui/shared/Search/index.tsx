import { useContext } from "react";
import { TSearch } from "./TSearch";
import ProductContext from "@/app/context/products/ProductContext";

const Search = ({ searchValue, setSearchValue }: TSearch) => {
    const { sorted, setSorted } = useContext(ProductContext)

    const handleSortProduct = (selectValue: string) => {
        console.log(selectValue);
        setSorted({ ...sorted, sortBy: selectValue.toLowerCase() })
    }
    const handleOrderProduct = (searchValue: string) => {
        console.log(searchValue);
        setSorted({ ...sorted, order: searchValue.toLowerCase() })

    }

    return (
        <div className="join my-10 mx-6">
            <div>
                <div>
                    <input
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="input input-bordered join-item"
                        placeholder="Search"
                    />
                </div>
            </div>
            <select className="select select-bordered join-item" onChange={(e) => handleSortProduct(e.target.value)}>
                <option hidden>Sort by</option>
                <option value={''}>Default</option>
                <option>Price</option>
                <option>Category</option>
                <option>Description</option>
            </select>
            <select className="select select-bordered join-item" onChange={(e) => handleOrderProduct(e.target.value)}>
                <option hidden>Order by</option>
                <option>Asc</option>
                <option>Desc</option>
            </select>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">new</span>
                <button className="btn join-item">Search</button>
            </div>
        </div >
    )
}

export default Search