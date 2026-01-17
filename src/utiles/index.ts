const formatNumber = (value: string) => {
  const [num] = value.split('원')

  return new Intl.NumberFormat('ko').format(Number(num)) + '원'
}

export { formatNumber }
