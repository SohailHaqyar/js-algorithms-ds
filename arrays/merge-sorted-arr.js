// const merge = (arr1, arr2) => {
//   return [...arr1, ...arr2].sort()
// }

function merge(arr1, arr2) {
  const mergedArr = []

  let arr1Item = arr1[0] // 1
  let arr2Item = arr2[0] // 8

  let i = 1 // why 1? we're starting with 0th;
  let j = 1
  // check input;

  // check for empty array input;
  if (arr1.length === 0) return arr2
  if (arr2.length === 0) return arr1

  while (arr1Item || arr2Item) {
    console.log(arr1Item, arr2Item)
    // puts the smaller of the items in the merged array.
    // updates the arr1item to the next index
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArr.push(arr1Item)
      arr1Item = arr1[i + 1]
      i++
    } else {
      // the else saves our ass here.
      mergedArr.push(arr2Item)
      arr2Item = arr2[j + 1]
      j++
    }

    console.log("merged array: ", mergedArr)
    // now let's move on to the next item;
  }

  return mergedArr
}

console.log(merge([1, 32], [8, 22, 56, 80]))
