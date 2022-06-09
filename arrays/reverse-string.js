let mine = 0
let other = 0
function otherReverse(str) {
  const t1 = performance.now()
  const reversed = str.split("").reverse().join("")
  const t2 = performance.now()
  mine = t2 - t1
  return reversed
}

function reverse(str) {
  // check if str is valid;

  let t1 = performance.now()
  const backwards = []

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i])
  }
  let reversed = backwards.join("")
  let t2 = performance.now()
  other = t2 - t1
  return reversed
}

const strings = new Array(1000000).fill("str").join("")

otherReverse(strings)
reverse(strings)

console.log(`mine took ${mine} ms`)
console.log(`other took ${other} ms`)
