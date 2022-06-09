class Stack {
  constructor() {
    this.data = []
  }

  push(value) {
    this.data.push(value)
  }

  pop() {
    this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
}
