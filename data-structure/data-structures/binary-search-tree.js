class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // make a new node to save the input value
    const newNode = new Node(value);

    //check if there is a root, if not, assign the new node to be the root and return
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // save the root value to start at the root
    let current = this.root;

    while (true) {
      // check the value is same with current, if so, return undefined
      if (current.value === value) return undefined;
      // check the input value is less than or greater than the current value
      if (value < current.value) {
        // if there is no left value, that is the position of the value and return
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        // if not, save the left value to be the current to loop again
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          // if there is no right value, that is the position of the value and return
          current.right = newNode;
          return this;
        }
        // if not, save the right value to be the current to loop again
        current = current.right;
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(18);
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(37);
tree.insert(28);
console.log(tree);
