/*
  Resolution:

  compute A (every value from the left)
  compute B (every value from the right)

  comptue A operation B

  Complexity: O(N)
*/

const input = {
  value: '*',
  left: {
    value: '+',
    left: {
      value: 3,
      left: null,
      right: null
    },
    right: {
      value: 2,
      left: null,
      right: null
    }
  },
  right: {
    value: '+',
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  }
}

const run = (input) => {

  const selectOperation = (node, value1, value2) => {
    if (node.value == '*') {
      return value1 * value2;
    }
    if (node.value == '/') {
      return value1 / value2;
    }
    if (node.value == '+') {
      return value1 + value2;
    }
    if (node.value == '-') {
      return value1 - value2;
    }
    return node.value;
  }

  const compute = (node) => {

    if (node == null) {
      return 0;
    }

    if (node.left == null && node.right == null) {
      return node.value;
    }

    var value1 = compute(node.left);
    var value2 = compute(node.right);

    return selectOperation(node, value1, value2);
  }

  var result = 0;
  result = compute(input) 

  return result;
}

console.log(run(input)); 
