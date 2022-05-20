/*
  Resolution:

  Important information: number of mice and holes are the same, "N".
  We might be able to run both arrays with the same iteration.
  We can order/shift the arrays to fit each mouse to its nearest hole.

  Example:

    Mice:   [7, 9]
    Holes:  [5, 0]

    Visualization:

                       v-------|
             v-------------|   |
    Mice:   | | | | | | | |7| |9|
    Holes:  |0| | | | |5| | | | |

    Ordered

    Mice:   [7, 9]
    Holes:  [0, 5]

  Just return the greatest distance, which means the farest mouse's distance to its related hole.

  Time Complexity: O(N) (1 loop) + 2 * O(NlogN) (for sorting) = O(N)
  Space Complexity: No extra space needed = O(1)
*/

const run = (input) => {

  if (input[0] == null || input[1] == null || input[0].length != input[1].length)
    return null;

  const mice = input[0].sort((a,b) => a-b);
  const holes = input[1].sort((a,b) => a-b);
  let i;
  let distance = 0, maxDistance = 0;

  for (i = 0; i < mice.length; i++) {
    distance = Math.abs(mice[i] - holes[i]);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }

  return maxDistance;
}

const assert = (input, expected) => {
  result = run(input)
  console.log('Input:')
  console.log('Mice: ', input[0])
  console.log('Holes: ', input[1])
  console.log('Result: ', result)
  if (expected == result) {
    console.log('ok')
  } else {
    console.log('Error: Expected ', expected)
  }
}

const test = () => {
  var input;
  var result;
  var expected;
  console.log('====================')
  input = [[1, 4, 9, 15], [10, -5, 0, 16]]
  expected = 6
  assert(input, expected)
  console.log('====================')
  input = [[7, 9], [0, 5]]
  expected = 7
  assert(input, expected)
  console.log('====================')
  input = [[7, 9, 6], [0, 5]]
  expected = null
  assert(input, expected)
  console.log('====================')
  input = [[7, 9], null]
  expected = null
  assert(input, expected)
  console.log('====================')
  input = [[-10, -79, -79, 67, 93, -85, -28, -94], [-2, 9, 69, 25, -31, 23, 50, 78 ]]
  expected = 102
  assert(input, expected)
  console.log('====================')
  input = [[4, -4, 2], [4, 0, 5]]
  expected = 4
  assert(input, expected)
  console.log('====================')
}

test();
