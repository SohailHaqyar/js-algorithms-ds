class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    return this.first.value
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.length === 0) {
      this.first = newNode
      this.last = newNode
      this.length++
      return
    }

    this.last.next = newNode // currentLast.next = newNode
    this.last = newNode // LOOK AT ME: LOOK AT ME; I AM THE LAST NOW!!!!
    this.length++
    return this
  }

  dequeue() {
    if (!this.first) {
      return null
    }
    this.first = this.first.next

    if (this.first === this.last) {
      this.last = null
    }
    this.length--
    return this
  }
}

const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)

// Stacks --> First in Last out
// Queues --> First in First Out
