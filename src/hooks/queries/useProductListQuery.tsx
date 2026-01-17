import { getProductList } from '@/api/products'
import { productsKey } from '@/const/query-key/productsKey'
import { useQuery } from '@tanstack/react-query'

const useProductListQuery = () => {
  return useQuery({
    queryFn: getProductList,
    queryKey: productsKey.productList(),
  })
}
export default useProductListQuery
