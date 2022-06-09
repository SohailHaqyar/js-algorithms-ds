let user = {
  name: "Kylie",
  age: 42,
  magic: true,
  scream: function () {
    console.log("AAAAAAAAAAAAAHHHHHH")
  }
}

// user.age // O(1)
// user.spell = "abra kadabra" // O(1)
// user.scream() // O(1)

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size)
//   }

//   _hash(key) {
//     console.log(
//       `--- Hashing Key: ${key} | Length ${this.data.length} ---`
//     )
//     let hash = 0
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length
//     }

//     return hash
//   }

//   set(key, value) {
//     const bucket = [this._hash(key), value]
//     console.log("My Bucket: ", bucket)
//     this.data.splice(this._hash(key), 1, bucket)
//   }

//   get(key) {
//     const hashedKey = this._hash(key)
//     console.log(`--- Hashed Key: ${hashedKey} ---`)
//     const data = this.data.find((bucket) => {
//       if (bucket) {
//         console.log(`Stored Hash: ${bucket[0]}`)
//         console.log(bucket[0] === hashedKey)
//         return bucket[0] === hashedKey
//       }
//     })

//     console.log("data", data)
//     return data
//   }

//   log() {
//     console.log(this.data)
//   }
// }

// const myHashTable = new HashTable(50)
// myHashTable.set("grapes", "Zey Aghe Delecious")
// myHashTable.get("grapes")
// --------------------------------------------------

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  _flat() {
    // this is depth 1;
    let flatenned = []

    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]) continue
      if (this.data[i].length > 1) {
        for (let j = 0; j < this.data[i].length; j++) {
          flatenned.push(this.data[i][j])
        }
      } else {
        flatenned.push(this.data[i][0])
      }
    }

    return flatenned
  }

  set(key, value) {
    const address = this._hash(key) // we hash the key to generate a random address for it in the memory.
    if (!this.data[address]) this.data[address] = [] // initialize it first
    this.data[address].push([key, value])
  }

  get(key) {
    const address = this._hash(key)
    if (!this.data[address]) return undefined
    return this.data[address].find((bucket) => bucket[0] === key)[1]
  }

  keys() {
    // flatten the array first
    return this._flat(this.data.flat).map((b) => b[0])
  }

  entries() {
    return this._flat(this.data).map((b) => b[1])
  }

  log() {
    console.log(this.data)
  }
}

const myHashTable = new HashTable(50)
myHashTable.set("grapes", 200)
myHashTable.set("dopes", 300)
myHashTable.set("ropes", 300)
myHashTable.set("popes", 400)
console.log(myHashTable.get("grapes"))
console.log(myHashTable.keys())
console.log(myHashTable.entries())
console.log(myHashTable.log())
console.log(myHashTable._flat())
