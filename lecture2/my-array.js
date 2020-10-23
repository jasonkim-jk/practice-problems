class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;

    return this.length;
  }

  pop() {
    const data = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return data;
  }

  delete(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    const item = this.data[index];

    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;

    return item;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("there");
newArray.push("you");
newArray.push("!");
console.log(newArray);
newArray.pop();
console.log(newArray);
newArray.delete(1);
console.log(newArray);
