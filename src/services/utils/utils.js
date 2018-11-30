
export function inRange(value, low, high) {
  return low <= value && value <= high
}

export function mean(arr) {
  return arr.reduce( ( p, c ) => p + c, 0 ) / arr.length
}
