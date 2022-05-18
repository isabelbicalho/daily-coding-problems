/*
  Resolution:

  Record the list values in 2 strings: normal and backward, then check if the strings are equal.

  Complexity: O(N)
*/

const a1 = {value: 1}
const a2 = {value: 3}
const a3 = {value: 4}
const a4 = {value: 3}
const a5 = {value: 1}

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
a5.next = null

a1.prev = null
a2.prev = a1
a3.prev = a2
a4.prev = a3
a5.prev = a4

const inputTrue = {
  head: a1
}

b1 = {value: 1}
b2 = {value: 4}

b1.next = b2
b2.next = null

b1.prev = null
b2.prev = b1

const inputFalse = {
  head: b1
}

const run = (input) => {

  var node = input.head;
  var values = ''
  var backward = ''
  while (node != null) {
    values += node.value
    backward = node.value + backward
    node = node.next
  }
  debugger
  return values == backward
}

console.log('Input True 1 3 4 3 1');
console.log(run(inputTrue)); 
console.log('Input 1 4');
console.log(run(inputFalse)); 
