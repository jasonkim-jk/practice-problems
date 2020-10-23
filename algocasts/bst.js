// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // check if the input data is less than this.data and there is this.left
  //    call insert method again
  // if the input data is less than this.data
  //    make a new node and assign it to the this.left
  // check if the input data is greater than this.data and there is this.right
  //    call insert method again
  // if the input data is greater than this.data
  //    make a new node and assign it to the this.right
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains1(data) {
    if (data === this.data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }

  contains(data) {
    let currentNode = this;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left || null;
      } else if (data > currentNode.data) {
        currentNode = currentNode.right || null;
      }
    }

    return null;
  }
}

module.exports = Node;
