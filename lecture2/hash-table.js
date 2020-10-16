class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    if (!key || !value) return undefined;

    const address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    if (!key) return undefined;

    const address = this._hash(key);

    if (!this.data[address]) {
      return undefined;
    } else {
      for (let element of this.data[address]) {
        if (element[0] === key) {
          return element[1];
        }
      }
      return undefined;
    }
  }
}

const myHashTable = new HashTable(4);
console.log(myHashTable.set("grapes", 19.99));
console.log(myHashTable.set("apples", 8.99));
console.log(myHashTable.set("pens", 4.99));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apples"));
console.log(myHashTable.get("bananas"));
console.log(myHashTable.get("pens"));
console.log(myHashTable.get("pen"));
