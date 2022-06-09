class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }

    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode

    this.length++
    return this
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const holdingPointer = leader.next
    leader.next = newNode
    newNode.next = holdingPointer
    this.length++
    return this
  }

  pop() {
    this.head = this.head.next
    this.length--
    return this
  }

  remove(index) {
    if (index <= 0) return this.pop()
    if (index > this.length) index = this.length - 1
    const leader = this.traverseToIndex(index - 1)
    const current = leader.next
    leader.next = current.next
    this.length--
    return this
  }

  traverseToIndex(index) {
    let currentNode = this.head
    let counter = 0
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  log() {
    let pre = this.head
    let chain = `${pre.value}`

    while (pre.next !== null) {
      pre = pre.next
      chain = chain + ` ---> ${pre.value}`
    }

    console.log(chain)
    // return chain
  }

  reverse() {
    if (!this.head.next) {
      return this.head
    }

    let first = this.head // 1
    this.tail = this.head
    let second = first.next // 2

    while (second) {
      let third = second.next // 3
      second.next = first // 2 --> 1
      first = second
      second = third
    }

    this.head.next = null
    this.head = first

    return this.log()
  }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(5)
myLinkedList.append(18)
console.log(myLinkedList.reverse())
