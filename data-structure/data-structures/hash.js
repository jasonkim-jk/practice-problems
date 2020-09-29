class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    // hashes the key
    const index = this._hash(key);
    // check if there exists anything, if not, make an empty array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // stores the key-value pair in the hash table array via seprate chaining
    this.keyMap[index].push([key, value]);
  }

  print() {
    return this.keyMap;
  }
}

const hashTable = new HashTable();
hashTable.set("hello", "world");
hashTable.set("hi", "everyone");
console.log(hashTable.print())
