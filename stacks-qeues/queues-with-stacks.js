class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    return this.top
  }

  push(value) {
    if (this.length === 0) {
      const newNode = new Node(value)
      this.top = newNode
      this.bottom = newNode
      this.length++
      return
    }
    const newNode = new Node(value)
    const currentTop = this.top
    this.top = newNode
    this.top.next = currentTop
    this.length++
    return
  }

  pop() {
    if (!this.top) {
      return null
    }
    if (this.top === this.bottom) {
      this.bottom === null
    }
    this.top = this.top.next
    this.length--
  }
}

class QueueWithStack {
  constructor() {
    this.first = new Stack()
    this.last = new Stack()
    this.length = 0
  }

  enqueue(value) {
    if (this.length === 0) {
      this.first.push(value)
      this.last.push(value)
      this.length++
      return
    }
    this.first.push(value)
  }
  dequeue() {
    if (!this.first.top) {
      return null
    }
    this.first.pop()
  }
  peek() {
    return this.first.bottom
  }
}

const myQueue = new QueueWithStack()
console.log(myQueue)
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)

console.log(myQueue)
console.log(myQueue.peek())
