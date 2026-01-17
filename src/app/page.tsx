import { serverFetchProductList } from '@/api/products'
import ProductList from '@/components/products/ProductList'
import { productsKey } from '@/const/query-key/productsKey'
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query'

export default function Home() {
  const queryClient = new QueryClient()
  queryClient.prefetchQuery({
    queryFn: serverFetchProductList,
    queryKey: productsKey.productList(),
  })
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900">척척 밀키트</h1>
            <p className="text-xl text-gray-500">
              오늘 뭐 먹을지 고민된다면 여기서 골라보세요
            </p>
          </div>
        </section>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductList />
        </HydrationBoundary>
      </main>
    </div>
  )
}
