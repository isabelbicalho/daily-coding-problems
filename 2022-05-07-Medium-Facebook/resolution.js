/*
  Resolution:

  n = 5
  k = 3

      0   1   2
  0 [ 2 | 1 | 3 ]
  1 [ 1 | 2 | 1 ]
  2 [ 3 | 1 | 2 ]
  3 [ 2 | 2 | 2 ]
  4 [ 1 | 3 | 1 ]

  Condition:
  
  for i,j in k, i+1,j+-1, i-1,j+-1

  if n = 1 => res = min(k)
  z(i,j) = min(z(prevI,)) / j <> prevJ + current M(i,j)

  Complexity: O(N)
*/

const input = [[2,1,3],[1,2,1],[3,1,2],[2,2,2],[1,3,1]]

const run = (input) => {

  const getMin = (options, except) => {
    min = options[0]
    var i;
    for (i = 1; i < options.length; i++)
      if (i != except && options[i] < min)
        min = options[i]
    return min;
  }

  if (!input)
    return 0

  var N = input.length;
  var K = input[0].length;

  // Initialize Z with zeros
  var z = new Array(N)
  for(i = 0; i < N; i++) {
    z[i] = new Array(K).fill(0)
  }

  // Initialize first line of z as the base case
  for (j = 0; j < K; j++) {
    z[0][j] = input[0][j]
  }

  // Apply the z formula all over the matrix => acc value for current house = current + cheapest available previous
  for (i = 1; i < N; i++) {
    for (j = 0; j < K; j++) {
      prev = z[i-1]
      z[i][j] = getMin(prev, j) + input[i][j];
    }
  }

  // Get the last cheapest option (result of all N buildings)
  result = getMin(z[N-1],-1)
  return result;
}

console.log(run(input)); 
