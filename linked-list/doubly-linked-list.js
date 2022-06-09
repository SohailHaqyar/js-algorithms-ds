class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null
    }

    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
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

    const follower = leader.next

    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode

    this.length++

    return this
  }

  decapitate() {
    this.head = this.head.next
    this.length--
    return this
  }

  pop() {
    const mercy = this.traverseToIndex(this.length - 2)
    mercy.next = null
    this.tail = mercy
    this.length--
    return this
  }

  remove(index) {
    if (index <= 0) return this.decapitate()
    if (index >= this.length - 1) return this.pop()
    const leader = this.traverseToIndex(index - 1)
    const current = leader.next
    const holder = current.next
    leader.next = holder
    holder.prev = leader
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
    let arr = []
    let pre = this.head
    while (pre.next !== null) {
      arr.push(pre.value)
      pre = pre.next
    }
    console.log(arr)
  }
}

const doublyLinkedList = new DoublyLinkedList(10)
doublyLinkedList.append(2)
doublyLinkedList.append(8)
// doublyLinkedList.prepend(1)
// doublyLinkedList.append(3)
// doublyLinkedList.append(8)
// doublyLinkedList.insert(1, 1821)
doublyLinkedList.remove(2)

// doublyLinkedList.pop()
console.log(doublyLinkedList)
