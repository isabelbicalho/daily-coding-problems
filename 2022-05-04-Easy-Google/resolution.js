/*
  Resolution:

  While accessing the list, record the previous node to not lose its refference for the ne4xt swap.
  Save the head refference in a separated case.
  Use a counter to check every 2 nodes for swap.

  Note: on every swap, the next node is already the swapped one, that's why there is no need to node = node.next in this case.
 
  1) temp = node.next
  prev -> node -> next -> nextnext
                   ^
                   |
                  temp

  2) node.next = node.next.next
  prev -> node -> nextnext
            
          temp -> nextnext

  3) temp.next = node
  prev -> node -> nextnext
           ^ 
     temp -'

  4) prev.next = temp
  prev -> temp -> node -> nextnext


  Complexity: O(N)

  Input ---------
  {
    "head": {
      "value": 1,
      "next": {
        "value": 2,
        "next": {
          "value": 3,
          "next": {
            "value": 4,
            "next": {
              "value": 5,
              "next": {
                "value": 6,
                "next": null
              }
            }
          }
        }
      }
    }
  }
  Output ---------
  {
    "head": {
      "value": 2,
      "next": {
        "value": 1,
        "next": {
          "value": 4,
          "next": {
            "value": 3,
            "next": {
              "value": 6,
              "next": {
                "value": 5,
                "next": null
              }
            }
          }
        }
      }
    }
  }
*/

const a1 = {value: 1}
const a2 = {value: 2}
const a3 = {value: 3}
const a4 = {value: 4}
const a5 = {value: 5}
const a6 = {value: 6}

a1.next = a2
a2.next = a3
a3.next = a4
a4.next = a5
a5.next = a6
a6.next = null

const input = {
  head: a1
}

const run = (input) => {

  var node = input.head;
  var prev = null;

  var pairCount = 0;

  while (node.next != null) {
    // Odd nodes
    if (pairCount%2 != 0){
      debugger
      prev = node;
      node = node.next;
      pairCount += 1;
      continue;
    }
    
    // Save the head refference
    if (node == input.head) {
      temp = node.next;
      node.next = node.next.next;
      temp.next = node;
      input.head = temp;
      prev = temp;
      pairCount += 1;
    } else { 
      // Even nodes
      temp = node.next;
      node.next = node.next.next;
      temp.next = node;
      prev.next = temp;
      pairCount += 1;
    }
  }
  return input;
}

console.log('Input ---------')
console.log(JSON.stringify(input,null,2))
console.log('Output ---------')
console.log(JSON.stringify(run(input),null,2)); 
