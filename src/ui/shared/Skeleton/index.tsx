
const Skeleton = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="skeleton h-56 w-full"></figure>
                <div className="card-body">
                    <h2 className="card-title skeleton h-6 w-1/3"></h2>
                    <p className="skeleton w-full h-6"></p>
                    <div className="card-actions justify-end relative">
                        <button className="skeleton h-8 w-10 absolute left-0 right-0 top-2"></button>
                        <button className="skeleton h-12 w-16"></button>
                        <button className="skeleton h-12 w-20"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skeleton
