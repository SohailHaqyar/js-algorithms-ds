const nemo = ["nemo"]

const largeArr = new Array(10000000).fill("other")

function findNemo(arr) {
  let t0 = performance.now()

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("NEMO FOUND")
    }
  }

  let t1 = performance.now()

  console.log(`Finding nemo took: ${t1 - t0} milliseconds`)
}

findNemo(largeArr.concat(nemo))
