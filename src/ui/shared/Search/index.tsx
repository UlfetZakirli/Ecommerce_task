
const Search = ({ searchValue, setSearchValue }) => {
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
            <select className="select select-bordered join-item">
                <option hidden>Filter</option>
                <option>Category</option>
                <option>Price</option>
                <option>Description</option>
            </select>
            <div className="indicator">
                <span className="indicator-item badge badge-secondary">new</span>
                <button className="btn join-item">Search</button>
            </div>
        </div>
    )
}

export default Search