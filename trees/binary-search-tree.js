class Node {
  constructor(value) {
    this.left = null
    this.right = null
    this.value = value
  }
}

class BinarySearchTree {
  constructor(value) {
    this.root = {
      value: value,
      left: null,
      right: null
    }
    this.length = 1
  }

  insert(value) {
    const newNode = new Node(value)
    // if the left is not null
    // if the right is not null, cause if it is, we just add it to either
    let tmp = this.root.value > value ? this.root.left : this.root.right
    if (!tmp) {
      if (this.root.value > value) {
        this.root.left = newNode
        this.length++
        return
      } else {
        this.root.right = newNode
        this.length++
        return
      }
    }

    if (tmp.value < value) {
      console.log(tmp)
      if (tmp.right === null) {
        tmp.right = newNode
      }
    }
    // return this.log()
  }

  lookup() {}
  log() {
    let rights = []
    let lefts = []

    let tmpRight = this.root.right
    let tmpLeft = this.root.left
    while (tmpRight !== null) {
      rights.push(tmpRight.value)
      tmpRight = tmpRight.right
    }
    while (tmpLeft !== null) {
      lefts.push(tmpLeft.value)
      tmpLeft = tmpLeft.left
    }
    console.log("ROOT: ", this.root.value)
    console.log("RIGHT: ", rights)
    console.log("Left: ", lefts)
  }
}

const myBst = new BinarySearchTree(5)

myBst.insert(21)
myBst.insert(2)
myBst.insert(23)
myBst.insert(25)

console.log(myBst)
// myBst.insert(23)
// myBst.insert(15)
// myBst.insert(2)

// const bst = {
//   value: 5,
//   left: {
//     value: 2,
//     left: null,
//     right: null
//   },
//   right: {
//     value: 21,
//     left: {
//       value: 15,
//       left: null,
//       right: null
//     },
//     right: {
//       value: 23,
//       left: null,
//       right: null
//     }
//   }
// }

// console.log(bst)
// // get all right
// let tmp = bst.left
// let lefts = []
// while (tmp !== null) {
//   lefts.push(tmp.value)
//   tmp = tmp.left
// }
// console.log(lefts)
