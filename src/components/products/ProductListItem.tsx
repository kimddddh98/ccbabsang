import { Products } from '@/api/products'
import { formatNumber } from '@/utiles'
import Image from 'next/image'

type ProductListItemProps = {
  product: Products
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  const isSoldOut = product.limit === 0
  return (
    <article
      key={product.index}
      className={`border-ccbs-gray-200 overflow-hidden rounded-xl border bg-white shadow-sm transition ${isSoldOut ? 'pointer-events-none opacity-70' : 'hover:-translate-y-2 hover:shadow-md'} `}
    >
      <div
        className={`relative flex h-60 w-full items-center justify-center bg-gray-200 bg-cover sm:h-50`}
      >
        {product.image && (
          <Image alt={`${product.name} 이미지`} fill src={product.name} />
        )}
        {!isSoldOut && product.current > 50 && (
          <span className="absolute top-2 right-2 rounded-full bg-red-600 px-2 py-0.5 text-sm font-semibold text-white">
            인기
          </span>
        )}
        {isSoldOut && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <span className="font-semibold text-white">품절</span>
          </div>
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

          <button
            disabled={isSoldOut}
            className={`rounded-sm px-2 py-1.5 text-sm font-medium ${
              isSoldOut
                ? 'bg-gray-300 text-gray-500'
                : 'bg-ccbs-green text-white hover:bg-[#74baaa]'
            }`}
          >
            {isSoldOut ? '품절' : '주문하기'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductListItem
