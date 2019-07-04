var partition = function(array, left, right, pivotIndex) {
  var temp
  var pivot = array[pivotIndex]
  while (left <= right) {
    while (array[left] < pivot) left++
    while (array[right] > pivot) right--
    if (left <= right) {
      temp = array[left]
      array[left] = array[right]
      array[right] = temp
      left++
      right--
    }
  }
  temp = array[left]
  array[left] = array[pivotIndex]
  array[pivotIndex] = temp
  return left
}

var quickSort = function(array, left, right) {
  if (!left) left = 0
  if (!right) right = array.length - 1
  var pivotIndex = right
  pivotIndex = partition(array, left, right - 1, pivotIndex)
  if (left < pivotIndex - 1) quickSort(array, left, pivotIndex - 1)
  if (pivotIndex + 1 < right) quickSort(array, pivotIndex + 1, right)
  return array
}

var result = quickSort([
  4,
  1,
  7,
  6,
  3,
  8,
  2,
  5,
  9,
  6,
  2,
  6,
  643,
  25,
  4,
  2,
  6234,
  643,
  623,
  6,
  3546,
  547,
  2,
  7,
  54,
  78,
  6,
  86547,
  37,
  54,
  2,
  6,
  3162,
  43,
  978,
  234645,
  2,
  6,
  45,
  7,
  4,
  57,
  2,
  7,
  2475,
  42,
  257,
  5
])

console.log(result)
