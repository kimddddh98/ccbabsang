export {}

declare global {
  interface BaseResponse<T> {
    content: T
    status: number
  }
}
