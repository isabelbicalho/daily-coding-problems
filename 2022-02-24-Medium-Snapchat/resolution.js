const a1 = {value: 15};
const a2 = {value: 5};
const a3 = {value: 20};
const a4 = {value: 10};
const a5 = {value: 35};
const a6 = {value: 40};
const a7 = {value: 25};

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;
a5.next = a6;
a6.next = a7;
a7.next = null;

a1.rand = a3;
a2.rand = a7;
a3.rand = a2;
a4.rand = a5;
a5.rand = a6;
a6.rand = a1;
a7.rand = a4;

const input = {head: a1};


/*
  Resolution:

  1st step: copy values from list and create pointer source -> tagret on each element from source list

  2nd step: use these pointers to copy the random pointers, as now we know the full list

  3rd step: delete temporary pointers source -> target on each element from source list

  Example:
          ____________________
    _____/_       ___  ___    \ (rand)
   /    /  v     /   v/   v    v
  15 > 5 > 20 > 10 > 35 > 40 > 25 > null
  ^    ^___/    ^_________/____/  (> next)
   \_____________________/

  1st step:

  a1  a2   a3   a4   a5   a6   a7
          ____________________
    _____/_       ___  ___    \
   /    /  v     /   v/   v    v
  15 > 5 > 20 > 10 > 35 > 40 > 25 > null
  ^    ^___/    ^_________/____/
   \_____________________/
   |   |    |    |    |    |    | (tempCopy)
   |   |    |    |    |    |    |
   v   v    v    v    v    v    v
  15 > 5 > 20 > 10 > 35 > 40 > 25 > null
  b1  b2   b3   b4   b5   b6   b7

  2nd step:

  b1.rand) a1.tempCopy.rand = a1.rand.tempCopy
  b2.rand) a2.tempCopy.rand = a2.rand.tempCopy
  b3.rand) a3.tempCopy.rand = a3.rand.tempCopy
  b4.rand) a4.tempCopy.rand = a4.rand.tempCopy
  b5.rand) a5.tempCopy.rand = a5.rand.tempCopy
  b6.rand) a6.tempCopy.rand = a6.rand.tempCopy
  b7.rand) a7.tempCopy.rand = a7.rand.tempCopy
  
  3rd step:
  
  a1  a2   a3   a4   a5   a6   a7
          ____________________
    _____/_       ___  ___    \
   /    /  v     /   v/   v    v
  15 > 5 > 20 > 10 > 35 > 40 > 25 > null
  ^    ^___/    ^_________/____/
   \_____________________/


          ____________________
    _____/_       ___  ___    \
   /    /  v     /   v/   v    v
  15 > 5 > 20 > 10 > 35 > 40 > 25 > null
  ^    ^___/    ^_________/____/
   \_____________________/

  b1  b2   b3   b4   b5   b6   b7

  Complexity: O(3N) = O(N)
*/

const run = (input) => {
  const result = {head: null};

  let sourceNode = input.head;
  let currentResult;

  // Copy values, next and create pointer to the copied list
  if (sourceNode != null) {
    currentResult = {value: sourceNode.value, next: null, rand: null};
    sourceNode.tempCopy = currentResult;
    result.head = currentResult;
    while (sourceNode != null) {
      sourceNode.tempCopy = currentResult;
      if (sourceNode.next)
        currentResult.next = {value: sourceNode.next.value, next: null, rand: null};
      currentResult = currentResult.next;
      sourceNode = sourceNode.next;
    }
  }

  // Copy random pointers
  sourceNode = input.head;
  if (sourceNode != null) {
    sourceNode.tempCopy.rand = sourceNode.rand.tempCopy;
    while (sourceNode != null) {
      sourceNode.tempCopy.rand = sourceNode.rand.tempCopy;
      sourceNode = sourceNode.next;
    }
  }

  // Delete temp pointers
  sourceNode = input.head;
  if (sourceNode != null) {
    delete sourceNode['tempCopy'];
    while (sourceNode != null) {
      if (sourceNode.tempCopy) { // Have already deleted on head
        delete sourceNode['tempCopy'];
      }
      sourceNode = sourceNode.next;
    }
  }

  return result;
}

console.log(run(input)); 

/*
  Debugging output:

---- Result rands:

debug> exec result.head
{ value: 15,
  next: Object,
  rand: Object }
debug> exec result.head.rand
{ value: 20,
  next: Object,
  rand: Object }
debug> exec result.head.rand.rand
{ value: 5,
  next: Object,
  rand: Object }
debug> exec result.head.rand.rand.rand
{ value: 25,
  next: null,
  rand: Object }
debug> exec result.head.rand.rand.rand.rand
{ value: 10,
  next: Object,
  rand: Object }
debug> exec result.head.rand.rand.rand.rand.rand
{ value: 35,
  next: Object,
  rand: Object }
debug> exec result.head.rand.rand.rand.rand.rand.rand
{ value: 40,
  next: Object,
  rand: Object }
debug> exec result.head.rand.rand.rand.rand.rand.rand.rand
{ value: 15,
  next: Object,
  rand: Object }

---- Result nexts:

debug> exec result.head
{ value: 15,
  next: Object,
  rand: Object }
debug> exec result.head.next
{ value: 5,
  next: Object,
  rand: Object }
debug> exec result.head.next.next
{ value: 20,
  next: Object,
  rand: Object }
debug> exec result.head.next.next.next
{ value: 10,
  next: Object,
  rand: Object }
debug> exec result.head.next.next.next.next
{ value: 35,
  next: Object,
  rand: Object }
debug> exec result.head.next.next.next.next.next
{ value: 40,
  next: Object,
  rand: Object }
debug> exec result.head.next.next.next.next.next.next
{ value: 25,
  next: null,
  rand: Object }

---- Input rands:

debug> exec input.head
{ value: 15,
  next: Object,
  rand: Object }
debug> exec input.head.rand
{ value: 20,
  next: Object,
  rand: Object }
debug> exec input.head.rand.rand
{ value: 5,
  next: Object,
  rand: Object }
debug> exec input.head.rand.rand.rand
{ value: 25,
  next: null,
  rand: Object }
debug> exec input.head.rand.rand.rand.rand
{ value: 10,
  next: Object,
  rand: Object }
debug> exec input.head.rand.rand.rand.rand.rand
{ value: 35,
  next: Object,
  rand: Object }
debug> exec input.head.rand.rand.rand.rand.rand.rand
{ value: 40,
  next: Object,
  rand: Object }
debug> exec input.head.rand.rand.rand.rand.rand.rand.rand
{ value: 15,
  next: Object,
  rand: Object }

---- Input nexts:

debug> exec input.head
{ value: 15,
  next: Object,
  rand: Object }
debug> exec input.head.next
{ value: 5,
  next: Object,
  rand: Object }
debug> exec input.head.next.next
{ value: 20,
  next: Object,
  rand: Object }
debug> exec input.head.next.next.next
{ value: 10,
  next: Object,
  rand: Object }
debug> exec input.head.next.next.next.next
{ value: 35,
  next: Object,
  rand: Object }
debug> exec input.head.next.next.next.next.next
{ value: 40,
  next: Object,
  rand: Object }
debug> exec input.head.next.next.next.next.next.next
{ value: 25,
  next: null,
  rand: Object }
*/
