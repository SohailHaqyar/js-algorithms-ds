// Given an array  = [ 2, 4, 2, 3, 1 , 5 , 4]
// It should return 2

// Given an array = [ 2, 3, 1, 5, 1, 9, 2, 4];
// it should return 1;

// Given an array = [2,3,5,65,6];
// it should return undefined;

// function findFirstRecurringChar(arr) {
//   const chars = {}
//   for (let i = 0; i < arr.length; i++) {
//     if (chars[arr[i]] !== undefined) {
//       return arr[i]
//     } else {
//       chars[arr[i]] = 1
//     }
//   }
// } // Time Complexity --> O(n) --> Space Complexity O(n)

// DUAL LOOP VERSION --> Doesn't Work!
function findFirstRecurringChar(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i]
      }
    }
  }

  return undefined
} // O(n**2)

console.log(findFirstRecurringChar([3, 4, 4, 2, 1, 1, 2, 3, 3]))
console.log(findFirstRecurringChar([3, 4, 1, 2, 3]))
// console.log(findFirstRecurringChar([2, 3, 1, 5, 1, 9, 2, 4]))
// console.log(findFirstRecurringChar([2, 4, 2, 3, 1, 5, 4]))
