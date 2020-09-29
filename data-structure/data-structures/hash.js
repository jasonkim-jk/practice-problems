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

  get(key) {
    // hashes the key
    const index = this._hash(key);
    let result;
    // check if there is any data in the index of hash table
    if (this.keyMap[index]) {
      // if so, retrieves the key-value pair in the keyMap
      this.keyMap[index].forEach(element => {
        if(element[0] === key) {
          result = element[1];
        }
      })
    }
    // if not, return undefined
    return result;
  }

  print() {
    return this.keyMap;
  }
}

const hashTable = new HashTable(17);
hashTable.set("maroon", "#800000");
hashTable.set("yellow", "#FFFF00");
hashTable.set("olive", "#808000");
hashTable.set("salmon", "#FA8072");
hashTable.set("lightcoral", "#F08080");
hashTable.set("mediumvioletred", "#C71585");
hashTable.set("plum", "#DDA0DD");
console.log(hashTable.print());
console.log(hashTable.get("maroon"));
console.log(hashTable.get("yellow"));
console.log(hashTable.get("balck"));
