import { useRoutes, RouteObject } from 'react-router-dom'
import MainLayout from '@/ui/layout/MainLayout'
import HomePage from '@/ui/pages/home/HomePage'
import AddProduct from '@/ui/containers/AddProduct'
import EditProduct from '@/ui/containers/EditProduct'
import NotFound from '@/ui/pages/common/NotFound'
import ProductList from '@/ui/containers/ProductList'
import ProductDetailPage from '@/ui/pages/products/details/ProductDetailPage'



const AppRoutes = () => {
    const routesConfig: RouteObject[] = [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/products/*',
                    children: [
                        {
                            index: true,
                            element: <ProductList />
                        },
                        {
                            path: ':productId',
                            element: <ProductDetailPage />
                        }
                    ]
                },
                {
                    path: '/addProduct',
                    element: <AddProduct />
                },
                {
                    path: '/editProduct/:productId',
                    element: <EditProduct />
                }
            ]
        },
        {
            path: '*',
            element: <NotFound />
        }
    ]
    const routes = useRoutes(routesConfig)
    return routes
}


export default AppRoutes