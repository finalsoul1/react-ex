const arr1 = [5, 4, 3, 2, 1]
const arr2 = [1, 2, 3, 4, 5]
const arr3 = [1, 2, 3, 4, 5]

const a = 5
const b = 5

console.log(arr1 == arr2)
console.log(arr2 == arr3)

if(arr1.sort() === arr2.sort()) {
  console.log(맞음);
}