const ProductSkeleton = () => {
  return (
    <article className="border-ccbs-gray-200 overflow-hidden rounded-xl border bg-white shadow-sm">
      <div className="relative h-60 w-full animate-pulse bg-gray-200 sm:h-50">
        <div className="absolute top-2 right-2 h-5 w-10 rounded-full bg-gray-300" />
      </div>

      <div className="flex flex-col justify-between gap-3 p-4">
        <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

        <div className="flex items-center justify-between">
          <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
          <div className="h-8 w-16 animate-pulse rounded bg-gray-300" />
        </div>
      </div>
    </article>
  )
}
export default ProductSkeleton
