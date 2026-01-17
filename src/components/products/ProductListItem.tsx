import { Products } from '@/api/products'
import { formatNumber } from '@/utiles'

type ProductListItemProps = {
  product: Products
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <article
      key={product.index}
      className="border-ccbs-gray-200 overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-md"
    >
      <div
        className={`relative h-60 w-full bg-[url(${product.image})] bg-gray-200 bg-cover sm:h-50`}
      >
        {product.current > 50 && (
          <span className="absolute top-2 right-2 rounded-full bg-red-600 px-2 py-0.5 text-sm font-semibold text-white">
            인기
          </span>
        )}
      </div>

      <div className="flex flex-col justify-between gap-2 p-4">
        <div>
          <h2 className="text-ccbs-gray-800 font-semibold">{product.name}</h2>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-ccbs-gray-800 text-lg font-bold">
            {formatNumber(product.price)}
          </span>
          <button className="bg-ccbs-green rounded-sm px-2 py-1.5 text-sm font-medium text-white hover:bg-[#74baaa]">
            주문하기
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductListItem
