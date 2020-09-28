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
    let stopCondition = false;

    while (current && !stopCondition) {
      // check the value is same with current, if so, return undefined
      if (current.value === value) return undefined;
      // check the input value is less than or greater than the current value
      if (value < current.value) {
        // if there is no left value, that is the position of the value and return
        if (current.left === null) {
          current.left = newNode;
          stopCondition = true;
        }
        // if not, save the left value to be the current to loop again
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          // if there is no right value, that is the position of the value and return
          current.right = newNode;
          stopCondition = true;
        }
        // if not, save the right value to be the current to loop again
        current = current.right;
      }
    }
    return this;
  }

  find(value) {
    // check if there is a root, if not, return false
    if (!this.root) return false;

    // save the value of the root as a current, check if it is same with the input value
    let current = this.root;

    // if it is not same, check if the value is greater than or less than the saved value
    while (current) {
      if (current.value === value) return true;
      // if it is less, check if there is a left node,
      if (value < current.value) {
        if (current.left) {
          // if so, save the value as the current
          current = current.left;
        } else {
          // if not, return false to stop searching
          return false;
        }
      } else {
        // if it is greater, check if there is a right node,
        if (current.right) {
          // if so, save the value as the current
          current = current.right;
        } else {
          // if not, return false to stop searching
          return false;
        }
      }
    }
  }

  BFS() {
    // declare a new array to save the tree data and visited nodes
    const queue = [];
    const result = [];

    // save the value of the root node to the queue
    queue.push(this.root);

    // loop as long as there is anything in the queue
    while (queue.length) {
      // dequeue a node from the queue and push the value of the node into the result array
      const currentNode = queue.shift();
      result.push(currentNode.value);
      // if there is a left on the node dequeued, add it to the queue
      if (currentNode.left) queue.push(currentNode.left);
      // if there is a right on the node dequeued, add it to the queue
      if (currentNode.right) queue.push(currentNode.right);
    }

    // return the result array
    return result;
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
console.log(tree.find(10));
console.log(tree.find(0));
console.log(tree.find(4));
console.log(tree.find(3));
console.log(tree.find(-43));
console.log(tree.find(37));
console.log(tree.find(50));
console.log(tree.find(18));
console.log(tree.find(28));
console.log(tree.BFS());
