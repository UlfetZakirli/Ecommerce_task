import AppRoutes from '@/app/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Toast from '@/ui/shared/Toast'
import { ProductProvider } from './app/context/products/ProductContext'

const App = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ProductProvider>
        <div className="h-full w-full">
          <AppRoutes />
          <Toast />
        </div>
      </ProductProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App