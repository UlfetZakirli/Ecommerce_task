import Header from '@/ui/containers/Header/index'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../containers/Footer'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Suspense fallback={
                <div className="min-h-screen">
                    <h1>Loading...</h1>
                </div>
            }>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
}

export default MainLayout