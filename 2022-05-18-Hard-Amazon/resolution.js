/*
  Resolution:

  This is a Bipartite Graph problem, which means: return if a graph can have its vertices separated into 2 groups.
  It is also said that a Bipartite Graph can be colored with 2 different colors, alternating the colors every vertice.

  Example of a bipartite graph:

    students = {
        0: [3],
        1: [2],
        2: [1, 4],
        3: [0, 4, 5],
        4: [2, 3],
        5: [3]
    }

    R: red
    W: white

            4R       5R
          /    \   /
        2W      3W
          \        \
            1R       0R

    Red set:   [0, 1, 4, 5]
    White set: [2, 3]

  Example of a not bipartite graph

    students = {
        0: [3],
        1: [2],
        2: [1, 3, 4],
        3: [0, 2, 4, 5],
        4: [2, 3],
        5: [3]
    }

    R: red
    W: white

            4R       5R
          /    \   /
        2W ____ 3W
          \        \
            1R       0R

    The 2-3 edge can't have the same color! The colors must be alternating.

  Simple algorithm:
    1) Get the first vertice, verify if it's colored and if it's not, color it with any color
    2) For each vertice's neighbors, verify if it's colored and if it's not, color them with the opposite color.
       If it's colored, verify if its color is different from the source vertice's color.
    3) Repat until cover all the vertices. If the neighbor's color is the same as hte source's color, it's not a bipartite graph.

  Corner cases:
    No students
    Everybody likes everybody
    Number of students < 2

  Time Complexity:  O(V*E), Loop over every vertice and its neighbors
  Space Complexity: O(V), for the colors array as auxiliar space
*/

const run = (input) => {

  if (input == null || Object.keys(input).length < 2) {
    return false;
  }

  const colors = new Array(Object.keys(input).length).fill(0);
  let i, result = [[], []];
  let vertice, neighbors;

  // 3) Repat until cover all the vertices. If the neighbor's color is the same as hte source's color, it's not a bipartite graph.
  for ([vertice, neighbors] of Object.entries(input)) {
    vertice = parseInt(vertice);

    // 1) Get the first vertice, verify if it's colored and if it's not, color it with any color
    if (!colors[vertice]) {
      colors[vertice] = 1;
    }

    // 2) For each vertice's neighbors, verify if it's colored and if it's not, color them with the opposite color.
    //    If it's colored, verify if its color is different from the source vertice's color.
    for (i = 0; i < neighbors.length; i++) {

      let neighbor = neighbors[i]
      if (!colors[neighbor]) {
        colors[neighbor] = colors[vertice] * (-1)       // Opposite color
      } else if (colors[neighbor] == colors[vertice]) { // Vertice and neighbor with same color
        return false;
      }
    }
  }

  // Build result
  for (i = 0; i < colors.length; i++) {
    if (colors[i] == 1)
      result[0].push(i);
    else
      result[1].push(i); 
  }
  if (result[1].length == 0) { // Corner case, everybody likes everybody
    result[1] = result[0].splice(0, result[0].length/2);
  }
  return result;
}

// ---------------- Testing

const assert = (input, expected) => {
  result = run(input)
  console.log('Input: ', input)
  console.log('Result: ', result)
  if (JSON.stringify(expected) == JSON.stringify(result)) {
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
  input = {
      0: [3],
      1: [2],
      2: [1, 4],
      3: [0, 4, 5],
      4: [2, 3],
      5: [3]
  }
  expected = [[0, 1, 4, 5], [2, 3]]
  assert(input, expected)
  console.log('====================')
  input = {
      0: [3],
      1: [2],
      2: [1, 3, 4],
      3: [0, 2, 4, 5],
      4: [2, 3],
      5: [3]
  }
  expected = false;
  assert(input, expected)
  console.log('====================')
  input = {}
  expected = false;
  assert(input, expected)
  console.log('====================')
  input = null
  expected = false;
  assert(input, expected)
  console.log('====================')
  input = {
    0: [],
    1: [],
    2: [],
    3: []
  }
  expected = [[2, 3], [0, 1]];
  assert(input, expected)
  console.log('====================')
  input = {
      0: [1, 5],
      1: [0, 2],
      2: [1, 3],
      3: [2, 4],
      4: [3, 5],
      5: [4, 0]
  }
  expected = [[0, 2, 4], [1, 3, 5]];
  assert(input, expected)
  console.log('====================')
  input = {
      0: [1, 5],
      1: [0, 2],
      2: [1, 3],
      3: [2, 4],
      4: [3, 5],
      5: [4, 0],
      6: []
  }
  expected = [[0, 2, 4, 6], [1, 3, 5]];
  assert(input, expected)
  console.log('====================')
  input = {
      0: [1, 5],
      1: [0, 2],
      2: [1, 3],
      3: [2, 4],
      4: [3, 0],
  }
  expected = false;
  assert(input, expected)
  console.log('====================')
}

test();
