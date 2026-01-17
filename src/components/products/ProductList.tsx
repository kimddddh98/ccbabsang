'use client'

import useProductListQuery from '@/hooks/queries/useProductListQuery'
import ProductListItem from './ProductListItem'
import ProductSkeleton from './ProductSkeleton'

const ProductList = () => {
  const { data, isPending } = useProductListQuery()
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {isPending
        ? Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
            <ProductSkeleton key={i} />
          ))
        : data?.map((product) => (
            <ProductListItem key={product.index} product={product} />
          ))}
    </section>
  )
}

export default ProductList
