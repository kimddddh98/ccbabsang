export const productsKey = {
  base: ['products'] as const,
  productList: () => [...productsKey.base, 'productList'] as const,
} as const
