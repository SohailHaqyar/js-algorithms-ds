class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    this.shiftItem(index)
  }

  shiftItem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    delete this.data[this.length - 1]
    this.length--
  }
}

const arr = new MyArray()
arr.push("a")
arr.push("b")
arr.push("c")
arr.push("d")
arr.push("e")

arr.delete(3)

console.log(arr)
