export const makeArray = (length: number) => new Array(length).fill(null)


export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min)

  //min ~ max 범위에서 무작위 정수 반환
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min
