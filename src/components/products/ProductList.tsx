'use client'

import useProductListQuery from '@/hooks/queries/useProductListQuery'
import ProductListItem from './ProductListItem'
import ProductSkeleton from './ProductSkeleton'
import { useMemo } from 'react'

const ProductList = () => {
  const { data, isPending } = useProductListQuery()

  const product = useMemo(() => {
    if (!data) return []

    return data?.sort((a, b) => {
      if (a.limit === 0 && b.limit !== 0) return 1
      if (a.limit !== 0 && b.limit === 0) return -1
      return a.index - b.index
    })
  }, [data])

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {isPending
        ? Array.from({ length: 8 }, (_, i) => i + 1).map((i) => (
            <ProductSkeleton key={i} />
          ))
        : product.map((product) => (
            <ProductListItem key={product.index} product={product} />
          ))}
    </section>
  )
}

export default ProductList
