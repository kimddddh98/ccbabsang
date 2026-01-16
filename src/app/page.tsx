const products = Array.from({ length: 8 }).map((_, i) => ({
  index: i + 1,
  name: `음식명`,
  price: 9999,
  current: 11,
  limit: 11,
  image: '/image-test.png',
}))

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold text-gray-900">밀키트</h1>
            <p className="text-xl text-gray-500">
              오늘 뭐 먹을지 고민된다면 여기서 골라보세요
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.index}
              className="border-ccbs-gray-200 overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-md"
            >
              <div
                className={`relative h-60 w-full bg-[url(${product.image})] bg-cover sm:h-50`}
              >
                {product.current > 0 && (
                  <span className="absolute top-2 right-2 rounded-full bg-red-600 px-2 py-0.5 text-sm font-semibold text-white">
                    인기
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-between gap-2 p-4">
                <div>
                  <h2 className="text-ccbs-gray-800 font-semibold">
                    {product.name}
                  </h2>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-ccbs-gray-800 text-lg font-bold">
                    {product.price.toLocaleString()}원
                  </span>
                  <button className="bg-ccbs-green rounded-sm px-2 py-1.5 text-sm font-medium text-white hover:bg-[#53c0a7]">
                    주문하기
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
