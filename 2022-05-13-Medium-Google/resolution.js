/*
  Resolution:

  For the lower interval, we must get the greatest lower.
  For the higher interval, we must get the lowest higher.  
  This way we guarantee that all the other intervals in the middle are also covered.

  Complexity: O(N)
*/

const input = [[0, 3], [2, 6], [3, 4], [6, 9]]

const run = (input) => {

  if (input == null || !Array.isArray(input) || input.length == 0 || !Array.isArray(input[0])) {
    return null;
  }
  var minMax = input[0][1];
  var maxMin = input[0][0];
  var i;

  for (i = 1; i < input.length; i++) {
    if (!Array.isArray(input[i]))
      return null;
    var currMin = input[i][0];
    var currMax = input[i][1];
    
    if (currMin > maxMin) {
      maxMin = currMin;
    }
    if (currMax < minMax) {
      minMax = currMax;
    }
  }

  return [minMax, maxMin];
}

const assert = (input, expected) => {
  result = run(input)
  console.log('Input: ', input)
  console.log('Result: ', result)
  if ((expected == null && result == null) || (result[0] == expected[0] && result[1] == expected[1])) {
    console.log('ok')
  } else {
    console.log('error')
  }
}

const test = () => {
  var input;
  var result;
  var expected;
  console.log('====================')
  input = [[0, 3], [2, 6], [3, 4], [6, 9]]
  expected = [3, 6]
  assert(input, expected)
  console.log('====================')
  input = [[1, 4], [4, 5], [7, 9], [9, 12]]
  expected = [4, 9]
  assert(input, expected)
  console.log('====================')
  input = null
  expected = null
  assert(input, expected)
  console.log('====================')
  input = [[-1, 1], [40, 55]]
  expected = [1, 40]
  assert(input, expected)
  console.log('====================')
  input = [[-1, 1], [-1, 10], [3, 4]]
  expected = [1, 3]
  assert(input, expected)
  console.log('====================')
  input = [[20, 20], [10, 15]]
  expected = [15, 20]
  assert(input, expected)
  console.log('====================')
  input = []
  expected = null
  assert(input, expected)
  console.log('====================')
}

test();
