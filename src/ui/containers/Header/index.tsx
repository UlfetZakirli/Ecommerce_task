import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to={'/'}>Logo</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/addProduct'}>Add Product</Link></li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header