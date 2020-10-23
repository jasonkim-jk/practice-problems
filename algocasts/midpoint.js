// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint1(list) {
  let first = list.getFirst();
  let last = list.getLast();

  while (first && last) {
    if (first.next && first.next.next) {
      first = first.next;
      list.removeFirst();
    }
    list.removeLast();
    last = list.getLast();
  }

  return first;
}

function midpoint(list) {
  let oneStep = list.getFirst();
  let twoStep = oneStep;

  while (twoStep.next && twoStep.next.next) {
    twoStep = twoStep.next.next;
    oneStep = oneStep.next;
  }

  return oneStep;
}

module.exports = midpoint;
