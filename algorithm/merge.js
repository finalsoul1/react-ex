var mergeSort = function(array) {
  if (array.length < 2) return array
  var pivot = Math.floor(array.length / 2)
  var left = array.slice(0, pivot)
  var right = array.slice(pivot, array.length)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  var result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}

console.log(
  mergeSort([
    5,
    4,
    1,
    6,
    8,
    4,
    2,
    5,
    4,
    5,
    4,
    7,
    73,
    54722,
    754,
    6,
    8,
    347,
    34,
    634,
    634,
    63,
    7,
    457,
    457,
    3473,
    43,
    5,
    347,
    457,
    457,
    545475
  ])
)
console.log([5, 4, 1, 6, 8, 4, 2, 5])
