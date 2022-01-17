export const isNan = (num: number | string | typeof NaN) =>
  isNaN(Number(num)) ? 0 : num
