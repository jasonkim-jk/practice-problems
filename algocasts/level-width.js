// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// make an variable to store picked nodes of the given tree
// make an variable to store a counter which indicates the number of each level's element
// push the root node and divider node named "L" to the queue array
// while loop when the queue array is longer than 1
// pick the first element of the queue array
// if the element is equal to "L",
// push "0" element to the counter array
// push the divider element to the quere array
// if not
// increase the value of the last element of the count array by 1
// check if the node has children elements
// if so, push the divider node and children element to the queue array
// return the counter array

function levelWidth(root) {
  const queue = [];
  const counter = [];

  queue.push(root);
  queue.push("L");
  counter.push(0);

  while (queue.length > 1) {
    const node = queue.shift();
    if (node === "L") {
      counter.push(0);
      queue.push("L");
    } else {
      counter[counter.length - 1]++;

      if (node.children.length) {
        queue.push(...node.children);
      }
    }
  }

  return counter;
}

module.exports = levelWidth;
