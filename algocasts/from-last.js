// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast1(list, n) {
  while (n > 0) {
    list.removeLast();
    n--;
  }

  return list.getLast();
}

function fromLast(list, n) {
  let oneStep = list.head;
  let nStep = oneStep;

  while (n > 0) {
    nStep = nStep.next;
    n--;
  }

  while (nStep.next) {
    oneStep = oneStep.next;
    nStep = nStep.next;
  }

  return oneStep;
}

module.exports = fromLast;
