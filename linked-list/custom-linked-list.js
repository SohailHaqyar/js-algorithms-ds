// 10 --> 5 --> 28
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
    } // this is an address < 0x021 >

    this.tail = this.head // now tail also points to < 0x021 >
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value) // new address here < 0x210 >
    this.tail.next = newNode // this changes the address <0x021> so now the head also changed // now both the tail.next aka head.next & the tail are referencing the same address in memory <0x210>
    this.tail = newNode // this overwrites the the tail. this should no longer be connected to the head right? . <0x210>
    this.length++
    return this
  }

  prepend(value) {
    const newNode = new Node(value) // new address here < 0x210 >
    newNode.next = this.head // the next is pointing to <0x021>
    this.head = newNode // 0x021 --> 0x210; which has as value the new node;

    this.length++
    return this
  }

  // 1st Mistake --> I needed to delegate the traversal to another function for clarity;
  // Mistook the previousNode for the currentOne

  // insert(index, value) {
  //   // let's start by logging every element in the list;
  //   let list = this.head
  //   let counter = 0
  //   while (counter <= index) {
  //     // guard clause;
  //     // if index === counter; insert the data;
  //     if (counter === index) {
  //       let newNode = new Node(value)
  //       let previousNode = list
  //       let nextNode = list.next
  //       newNode.next = nextNode
  //       previousNode = newNode
  //       return this
  //     }

  //     // looping mechanism
  //     list = list.next
  //     counter++
  //     // looping mechanism
  //   }
  // }

  insert(index, value) {
    // checking params.
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
    // make head.next the head;
    this.head = this.head.next
    this.length--
    return this
  }

  remove(index) {
    // check params
    if (index <= 0) return this.pop()
    if (index > this.length) index = this.length - 1
    const leader = this.traverseToIndex(index - 1) //1
    const current = leader.next //2
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

  myTraverseToIndex(index) {
    // Deliberate Practice here

    let pre = this.head // bad naming here;
    let counter = 0
    while (counter <= index) {
      // wrong while loop
      if (counter === index) return pre // break clause unnecessary if correct while loop
      pre = pre.next
      counter++
    }
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

const myLinkedList = new LinkedList(10)
myLinkedList.append(2)
myLinkedList.prepend(1)
myLinkedList.append(3)
myLinkedList.append(8)
myLinkedList.insert(2, 1821)
myLinkedList.log()
console.log("---------")
myLinkedList.remove(800)
myLinkedList.log()
