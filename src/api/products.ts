import URL from '@/const/urls.const'
import http from './axios'

export const PRODUCTS_ENDPOINTS = {
  PRODUCTS: '/',
} as const

export interface Products {
  index: number
  name: string
  price: string
  current: number
  limit: number
  image: string | null
}

const getProductList = async () => {
  const response = await http.get<BaseResponse<Products[]>>(
    PRODUCTS_ENDPOINTS.PRODUCTS
  )
  return response.data.content
}

const serverFetchProductList = async () => {
  const res = await fetch(URL.baseUrl, {
    cache: 'force-cache',
  })
  const data: BaseResponse<Products[]> = await res.json()

  return data.content
}

export { getProductList, serverFetchProductList }
