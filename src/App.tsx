import React from 'react'
import AppRoutes from '@/app/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Toast from '@/ui/shared/Toast'

const App = () => {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="h-full w-full">
        <AppRoutes />
        <Toast />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App